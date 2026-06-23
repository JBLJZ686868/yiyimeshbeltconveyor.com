(function () {
  function first(selectors) {
    for (const selector of selectors) {
      const node = document.querySelector(selector);
      if (node) return node;
    }
    return null;
  }

  function all(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  const nav = first([".yiyi-nav", ".site-nav"]);
  const mobileMenu = first(["#mob-menu", ".mob-menu", ".mobm"]);
  const mobileToggle = first(["#mob-toggle", ".mob-toggle", ".mobt"]);
  const waChat = first(["#wa-chat", ".wa-chat"]);
  const waInput = first(["#wa-msg", ".wa-input", ".wa-in"]);

  function setNavScrolled() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 16);
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (mobileToggle) mobileToggle.classList.remove("open");
  }

  function toggleMob() {
    if (!mobileMenu || !mobileToggle) return;
    mobileMenu.classList.toggle("open");
    mobileToggle.classList.toggle("open");
  }

  function closeWA() {
    if (waChat) waChat.style.display = "none";
  }

  function toggleWA() {
    if (!waChat) return;
    waChat.style.display = waChat.style.display === "block" ? "none" : "block";
  }

  function openWA(message) {
    const text = encodeURIComponent(message || "Hello, I would like to discuss my conveyor belt project.");
    window.open(`https://wa.me/8618653496136?text=${text}`, "_blank", "noopener");
  }

  function sendWA(message) {
    openWA(message);
  }

  function sendWAInput() {
    const value = waInput ? waInput.value.trim() : "";
    openWA(value || "Hello, I would like to discuss my conveyor belt project.");
  }

  function setLang(button, lang) {
    const container = button ? button.closest(".tb-langs, .tblangs") : null;
    if (container) {
      all("button", container).forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
    }
    window.alert(`Language switch placeholder: ${(lang || "en").toUpperCase()}`);
  }

  function toggleFaq(trigger) {
    if (!trigger) return;
    const item = trigger.closest(".faq-item");
    const answer = trigger.nextElementSibling;
    const open = item ? item.classList.contains("open") : false;
    if (item) item.classList.toggle("open", !open);
    if (answer) answer.style.display = open ? "none" : "block";
  }

  function detectIntent(text, href) {
    const haystack = `${text || ""} ${href || ""}`.toLowerCase();
    if (/replacement|match/.test(haystack)) return "replacement";
    if (/drawing|specification|spec\b/.test(haystack)) return "drawing";
    if (/engineer|engineering|oem/.test(haystack)) return "engineering";
    if (/sample/.test(haystack)) return "sample";
    if (/visit|factory/.test(haystack)) return "visit";
    if (/quote|enquiry|enquire|inquiry|contact/.test(haystack)) return "quote";
    return "quote";
  }

  function updateIntentLinks() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    all('a[href]').forEach((link) => {
      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("http") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("#")) return;

      const text = (link.textContent || "").trim();
      const [path, hash = ""] = rawHref.split("#");
      const [pathname, query = ""] = path.split("?");
      const target = pathname.toLowerCase();
      const params = new URLSearchParams(query);

      if (target.endsWith("contact.html")) {
        if (!params.has("intent")) params.set("intent", detectIntent(text, rawHref));
        if (!params.has("source")) params.set("source", current.replace(/\.html$/i, ""));
        const product = document.title.split("|")[0].trim();
        if (!params.has("product") && current !== "contact.html" && current !== "index.html" && product) {
          params.set("product", product);
        }
        link.setAttribute("href", `${pathname}?${params.toString()}${hash ? `#${hash}` : ""}`);
      }

      if (target.endsWith("engineering-oem.html") || target.endsWith("replacement-review.html") || target.endsWith("belt-matching.html")) {
        if (!params.has("source")) params.set("source", current.replace(/\.html$/i, ""));
        link.setAttribute("href", `${pathname}?${params.toString()}${hash ? `#${hash}` : ""}`);
      }
    });
  }

  function fillSelect(select, value) {
    if (!select || !value) return false;
    const normalized = value.toLowerCase();
    for (const option of Array.from(select.options || [])) {
      if ((option.textContent || "").trim().toLowerCase() === normalized || (option.value || "").trim().toLowerCase() === normalized) {
        select.value = option.value;
        return true;
      }
    }
    for (const option of Array.from(select.options || [])) {
      if ((option.textContent || "").toLowerCase().includes(normalized)) {
        select.value = option.value;
        return true;
      }
    }
    return false;
  }

  function hydrateContactForm() {
    if (!/contact\.html$/i.test(window.location.pathname)) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return;

    const intent = params.get("intent");
    const product = params.get("product");
    const source = params.get("source");

    const selects = all("select");
    const inquirySelect = selects.find((node) => /inquiry type/i.test(node.closest(".cf-field")?.textContent || ""));
    const productSelect = selects.find((node) => /product of interest/i.test(node.closest(".cf-field")?.textContent || ""));
    const textarea = first([".cf-textarea", "textarea"]);

    const intentMap = {
      quote: "Request a Quote",
      drawing: "Send Drawing for Review",
      engineering: "Technical Consultation",
      sample: "Sample Request",
      replacement: "Replacement Belt Project",
      visit: "Factory Visit"
    };

    if (inquirySelect && intentMap[intent]) fillSelect(inquirySelect, intentMap[intent]);
    if (productSelect && product) fillSelect(productSelect, product);

    if (textarea && !textarea.value) {
      const lines = [];
      if (source) lines.push(`Source page: ${source}`);
      if (product) lines.push(`Product / page context: ${product}`);
      if (intent) lines.push(`Request intent: ${intent}`);
      if (lines.length) textarea.value = `${lines.join("\n")}\n\nProject details: `;
    }
  }

  function relativeContactPath() {
    return window.location.pathname.includes("/blog/") ? "../contact.html" : "contact.html";
  }

  function pageSource() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    return current.replace(/\.html$/i, "") || "index";
  }

  function pageProductContext() {
    const source = pageSource();
    const productMap = {
      "spiral-freezer-belt": "Spiral Freezer Belt",
      "self-stacking-belt": "Self-Stacking Belt",
      "eye-link-belt": "Eye Link Belt",
      "flat-wire-belt": "Flat Wire / Honeycomb Conveyor Belt",
      "side-driven-belt": "Side-Driven Belt",
      "drive-sprockets": "Drive Sprockets",
      "chain-driven-belt": "Chain-Driven Belt",
      "balanced-weave-belt": "Balanced Weave Belt",
      "compound-weave-belt": "Compound Weave Belt",
      "chain-plate-belt": "Chain Plate Belt",
      "open-link-belt": "Open Link Belt",
      "trapezoidal-mesh-belt": "Trapezoidal Mesh Belt",
      "belt-matching": "Replacement Belt Matching",
      "replacement-review": "Replacement Belt Review",
      "engineering-oem": "Engineering / OEM Project"
    };
    if (productMap[source]) return productMap[source];
    const title = (document.title || "").split("|")[0].trim();
    if (!title || /home|contact|thank|privacy|404/i.test(pageSource())) return "";
    return title.replace(/\s+(Manufacturer|Supplier|Factory|for|Support).*$/i, "").trim();
  }

  function contactHref(intent) {
    const params = new URLSearchParams();
    params.set("intent", intent);
    params.set("source", pageSource());
    const product = pageProductContext();
    if (product) params.set("product", product);
    return `${relativeContactPath()}?${params.toString()}`;
  }

  function injectFooterInquiryStyles() {
    if (document.getElementById("footer-inquiry-enhancer-style")) return;
    const style = document.createElement("style");
    style.id = "footer-inquiry-enhancer-style";
    style.textContent = `
      .footer-inquiry-panel{margin:34px 0 0;padding:24px;border:1px solid rgba(255,255,255,.10);border-radius:8px;background:rgba(255,255,255,.035)}
      .footer-inquiry-head{display:flex;gap:18px;align-items:flex-end;justify-content:space-between;margin-bottom:18px}
      .footer-inquiry-kicker{font-family:var(--font-mono,ui-monospace,monospace);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#C8922A;margin-bottom:6px}
      .footer-inquiry-title{font-size:18px;line-height:1.25;font-weight:800;color:#fff;letter-spacing:0;margin:0}
      .footer-inquiry-copy{font-size:13px;line-height:1.75;color:#8FA8C0;max-width:560px;margin:0}
      .footer-inquiry-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
      .footer-inquiry-card{display:flex;flex-direction:column;gap:7px;min-height:118px;padding:16px;border-radius:7px;border:1px solid rgba(255,255,255,.10);background:rgba(13,27,46,.74);text-decoration:none;transition:border-color .18s,transform .18s,background .18s}
      .footer-inquiry-card:hover{transform:translateY(-2px);border-color:rgba(74,140,200,.55);background:rgba(17,40,66,.88)}
      .footer-inquiry-card.primary{background:#1F5C9E;border-color:#2A6DB5}
      .footer-inquiry-card.primary:hover{background:#2A6DB5}
      .footer-inquiry-label{font-size:14px;font-weight:800;color:#fff;line-height:1.25}
      .footer-inquiry-note{font-size:12px;line-height:1.55;color:rgba(255,255,255,.62)}
      .footer-inquiry-meta{margin-top:auto;font-family:var(--font-mono,ui-monospace,monospace);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.44)}
      .foot-btn-p,.foot-qbtn{font-size:13px!important;line-height:1.25!important}
      .foot-btn-o{font-size:13px!important;line-height:1.25!important}
      @media(max-width:820px){.footer-inquiry-head{display:block}.footer-inquiry-copy{margin-top:8px}.footer-inquiry-actions{grid-template-columns:1fr}.footer-inquiry-panel{padding:20px}}
    `;
    document.head.appendChild(style);
  }

  function enhanceFooterInquiry() {
    const footer = first([".yiyi-footer", ".footer", "footer"]);
    if (!footer || footer.querySelector(".footer-inquiry-panel")) return;
    injectFooterInquiryStyles();

    const source = pageSource();
    const product = pageProductContext();
    const productShort = product ? product.replace(/\s*\|.*$/g, "") : "your belt project";
    const panel = document.createElement("div");
    panel.className = "footer-inquiry-panel";
    panel.innerHTML = `
      <div class="footer-inquiry-head">
        <div>
          <div class="footer-inquiry-kicker">Engineering Inquiry Paths</div>
          <h2 class="footer-inquiry-title">Not ready to quote yet? Send the proof we need first.</h2>
        </div>
        <p class="footer-inquiry-copy">For ${productShort}, buyers can start with a drawing, an old belt photo, a sample detail, or a replacement problem. YIYI will route it to product matching, engineering review, or quotation.</p>
      </div>
      <div class="footer-inquiry-actions">
        <a class="footer-inquiry-card primary" href="${contactHref("drawing")}">
          <span class="footer-inquiry-label">Send Drawing</span>
          <span class="footer-inquiry-note">Upload drawing, dimensions, pitch, chain row count, material, and drive details for review.</span>
          <span class="footer-inquiry-meta">Best for OEM projects</span>
        </a>
        <a class="footer-inquiry-card" href="${contactHref("replacement")}">
          <span class="footer-inquiry-label">Replacement Review</span>
          <span class="footer-inquiry-note">Send old belt photos, sprocket details, drum diameter, wear points, or sample measurements.</span>
          <span class="footer-inquiry-meta">Reduce mismatch risk</span>
        </a>
        <a class="footer-inquiry-card" href="${contactHref("engineering")}">
          <span class="footer-inquiry-label">Talk to Engineer</span>
          <span class="footer-inquiry-note">Use this path if belt type, structure, material, or application risk is still uncertain.</span>
          <span class="footer-inquiry-meta">Low-pressure review</span>
        </a>
      </div>
    `;

    const bottom = footer.querySelector(".foot-bottom, .footer-bottom, .fbot");
    if (bottom && bottom.parentNode) bottom.parentNode.insertBefore(panel, bottom);
    else footer.appendChild(panel);

    all(".foot-btn-p, .foot-qbtn", footer).forEach((link) => {
      if (link.tagName !== "A") return;
      link.textContent = "Send Project Details \u2192";
      link.setAttribute("href", contactHref("quote"));
    });
    all(".foot-btn-o", footer).forEach((link) => {
      if (link.tagName !== "A") return;
      link.textContent = "Send Drawing / Old Belt Photo \u2192";
      link.setAttribute("href", contactHref("drawing"));
    });
  }

  window.toggleMob = toggleMob;
  window.toggleMobile = toggleMob;
  window.closeWA = closeWA;
  window.toggleWA = toggleWA;
  window.sendWA = sendWA;
  window.sendWAInput = sendWAInput;
  window.setLang = setLang;
  window.toggleFaq = toggleFaq;

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMob);
  }

  all(".faq-a").forEach((answer) => {
    if (!answer.style.display) answer.style.display = "none";
  });

  const current = window.location.pathname.split("/").pop() || "index.html";
  all('a[href]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return;
    if (href === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  updateIntentLinks();
  hydrateContactForm();
  enhanceFooterInquiry();
  setNavScrolled();
  window.addEventListener("scroll", setNavScrolled, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) closeMobileMenu();
  });
})();
