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

  function ensureAIAdvisorWidget() {
    if (!document.getElementById("ai-advisor-style")) {
      const style = document.createElement("style");
      style.id = "ai-advisor-style";
      style.textContent = `
        .ai-advisor-wrap{position:fixed;right:24px;bottom:96px;z-index:901;display:flex;flex-direction:column;align-items:flex-end;gap:12px}
        .ai-advisor-card{width:min(380px,calc(100vw - 32px));background:#071827;border:1px solid rgba(106,159,204,.36);border-radius:14px;box-shadow:0 22px 60px rgba(4,12,22,.46);overflow:hidden;animation:waSlide .2s ease;color:#fff}
        .ai-advisor-head{padding:15px 16px;background:linear-gradient(135deg,#0D1B2A,#1F5C9E);display:flex;align-items:flex-start;justify-content:space-between;gap:14px}
        .ai-advisor-profile{display:flex;align-items:center;gap:12px;min-width:0}
        .ai-advisor-photo{width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.72);box-shadow:0 6px 18px rgba(0,0,0,.22);flex:0 0 auto}
        .ai-advisor-kicker{font-family:var(--font-mono,monospace);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#9FD1FF;margin-bottom:5px}
        .ai-advisor-title{font-size:16px;line-height:1.25;font-weight:800;color:#fff}
        .ai-advisor-sub{margin-top:4px;font-size:12px;line-height:1.45;color:rgba(255,255,255,.78)}
        .ai-advisor-close{color:rgba(255,255,255,.82);font-size:22px;background:none;border:none;cursor:pointer;padding:0;line-height:1}
        .ai-advisor-body{padding:16px;background:linear-gradient(180deg,#0B2034,#071827)}
        .ai-advisor-note{border-left:3px solid #C8922A;padding:9px 11px;background:rgba(200,146,42,.10);color:#DDEBFA;font-size:13px;line-height:1.55;margin-bottom:12px}
        .ai-advisor-trust{display:grid;gap:7px;margin-bottom:12px}
        .ai-advisor-trust span{display:flex;align-items:flex-start;gap:8px;font-size:12px;line-height:1.45;color:rgba(221,235,250,.82)}
        .ai-advisor-trust span::before{content:"";width:6px;height:6px;border-radius:50%;background:#6A9FCC;flex:0 0 auto;margin-top:6px}
        .ai-advisor-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
        .ai-advisor-chip{border:1px solid rgba(106,159,204,.28);background:rgba(31,92,158,.22);color:#BBD9F4;border-radius:8px;padding:9px 10px;font-size:12px;font-weight:700;line-height:1.25;cursor:pointer;text-align:left;transition:all .18s ease;font-family:var(--font-sans,Arial,sans-serif)}
        .ai-advisor-chip:hover{background:rgba(74,140,200,.30);border-color:rgba(106,159,204,.52);color:#fff}
        .ai-advisor-input{box-sizing:border-box;width:100%;min-height:76px;resize:vertical;border:1px solid rgba(143,168,192,.35);border-radius:10px;background:rgba(255,255,255,.06);color:#fff;padding:10px 12px;font-size:13px;line-height:1.5;font-family:var(--font-sans,Arial,sans-serif);outline:none}
        .ai-advisor-input::placeholder{color:rgba(221,235,250,.58)}
        .ai-advisor-input:focus{border-color:#6A9FCC;box-shadow:0 0 0 3px rgba(74,140,200,.16)}
        .ai-advisor-actions{display:flex;gap:8px;margin-top:10px}
        .ai-advisor-primary,.ai-advisor-secondary{flex:1;border-radius:9px;padding:10px 12px;font-size:13px;font-weight:800;cursor:pointer;font-family:var(--font-sans,Arial,sans-serif)}
        .ai-advisor-primary{border:1px solid #C8922A;background:#C8922A;color:#071827}
        .ai-advisor-secondary{border:1px solid rgba(106,159,204,.36);background:transparent;color:#BBD9F4}
        .ai-advisor-guard{margin-top:10px;font-size:11px;line-height:1.45;color:rgba(221,235,250,.56)}
        .ai-advisor-btn{min-width:244px;height:50px;border-radius:999px;border:1px solid rgba(159,209,255,.28);background:linear-gradient(135deg,#10263D,#1F5C9E);color:#fff;box-shadow:0 10px 30px rgba(13,27,42,.38);cursor:pointer;display:flex;align-items:center;gap:10px;justify-content:center;padding:0 18px;font-size:13px;font-weight:800;letter-spacing:.01em;font-family:var(--font-sans,Arial,sans-serif);transition:transform .2s,box-shadow .2s}
        .ai-advisor-btn:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(31,92,158,.42)}
        .ai-advisor-btn-photo{width:28px;height:28px;border-radius:50%;object-fit:cover;border:1px solid rgba(255,255,255,.72);flex:0 0 auto}
        .ai-advisor-dot{width:8px;height:8px;border-radius:50%;background:#46D77A;box-shadow:0 0 0 4px rgba(70,215,122,.13);flex-shrink:0}
        @media(max-width:640px){.ai-advisor-wrap{right:16px;bottom:88px}.ai-advisor-btn{min-width:56px;width:56px;height:56px;padding:0;border-radius:50%}.ai-advisor-btn-photo{width:36px;height:36px}.ai-advisor-label{display:none}.ai-advisor-grid{grid-template-columns:1fr}.ai-advisor-actions{flex-direction:column}}
      `;
      document.head.appendChild(style);
    }

    if (document.getElementById("ai-advisor-wrap")) return;
    document.body.insertAdjacentHTML("beforeend", `
      <div class="ai-advisor-wrap" id="ai-advisor-wrap">
        <div class="ai-advisor-card" id="ai-advisor-card" style="display:none">
          <div class="ai-advisor-head">
            <div class="ai-advisor-profile">
              <img src="assets/team/sunny-yiyi-global-sales-director.jpg" alt="Sunny - YIYI Mesh Belt Global Sales Director" class="ai-advisor-photo" loading="lazy" decoding="async">
              <div>
                <div class="ai-advisor-kicker">24H GLOBAL PROJECT SUPPORT</div>
                <div class="ai-advisor-title">Sunny - YIYI Mesh Belt</div>
                <div class="ai-advisor-sub">Global Sales Director · Industrial Metal Conveyor Belt Projects · OEM &amp; Distributor Support</div>
              </div>
            </div>
            <button class="ai-advisor-close" onclick="closeAIAdvisor()" aria-label="Close Sunny project support">&times;</button>
          </div>
          <div class="ai-advisor-body">
            <div class="ai-advisor-note">Start in any language. Project messages are reviewed by sales and engineering support before quotation or technical confirmation.</div>
            <div class="ai-advisor-trust">
              <span>For industrial metal conveyor belt projects, OEM equipment builders, distributors, and replacement belt support.</span>
              <span>Send drawings, old belt photos, equipment model, belt width, pitch, material, and sprocket details.</span>
            </div>
            <div class="ai-advisor-grid">
              <button class="ai-advisor-chip" onclick="startAIAdvisor('Spiral freezer belt drawing review')">Spiral freezer belt review</button>
              <button class="ai-advisor-chip" onclick="startAIAdvisor('Replacement belt without original drawing')">Replacement belt matching</button>
              <button class="ai-advisor-chip" onclick="startAIAdvisor('Self-stacking belt project')">Self-stacking belt project</button>
              <button class="ai-advisor-chip" onclick="startAIAdvisor('Distributor or OEM supplier evaluation')">OEM / distributor evaluation</button>
            </div>
            <textarea class="ai-advisor-input" id="ai-advisor-msg" placeholder="Example: We need a spiral freezer belt for chicken IQF line. Width, pitch, drum diameter, old belt photos, and sprocket details can be shared."></textarea>
            <div class="ai-advisor-actions">
              <button class="ai-advisor-primary" onclick="submitAIAdvisor()">Send Project Details</button>
              <button class="ai-advisor-secondary" onclick="sendAIAdvisorToWA()">Send to WhatsApp</button>
            </div>
            <div class="ai-advisor-guard">Pricing, delivery time, and certificate details are confirmed after engineering review.</div>
          </div>
        </div>
        <button class="ai-advisor-btn" onclick="toggleAIAdvisor()" title="Talk to Sunny - Global Sales Director">
          <img src="assets/team/sunny-yiyi-global-sales-director.jpg" alt="" class="ai-advisor-btn-photo" loading="lazy" decoding="async">
          <span class="ai-advisor-label">Ask Sunny About Your Belt Project</span>
        </button>
      </div>
    `);
  }

  ensureAIAdvisorWidget();

  const nav = first([".yiyi-nav", ".site-nav"]);
  const mobileMenu = first(["#mob-menu", ".mob-menu", ".mobm"]);
  const mobileToggle = first(["#mob-toggle", ".mob-toggle", ".mobt"]);
  const waChat = first(["#wa-chat", ".wa-chat"]);
  const waInput = first(["#wa-msg", ".wa-input", ".wa-in"]);
  const aiAdvisorCard = first(["#ai-advisor-card"]);
  const aiAdvisorInput = first(["#ai-advisor-msg"]);

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
    window.open(`https://wa.me/8613451773742?text=${text}`, "_blank", "noopener");
  }

  function sendWA(message) {
    openWA(message);
  }

  function sendWAInput() {
    const value = waInput ? waInput.value.trim() : "";
    openWA(value || "Hello, I would like to discuss my conveyor belt project.");
  }

  function closeAIAdvisor() {
    if (aiAdvisorCard) aiAdvisorCard.style.display = "none";
  }

  function toggleAIAdvisor() {
    if (!aiAdvisorCard) return;
    aiAdvisorCard.style.display = aiAdvisorCard.style.display === "block" ? "none" : "block";
    if (aiAdvisorCard.style.display === "block" && aiAdvisorInput) aiAdvisorInput.focus();
  }

  function startAIAdvisor(topic) {
    if (!aiAdvisorInput) return;
    const template = topic
      ? `${topic}: Please help us confirm belt type, application, drawings/photos, key dimensions, sprocket matching, and urgency.`
      : "Please help us confirm belt type, application, drawings/photos, key dimensions, sprocket matching, and urgency.";
    aiAdvisorInput.value = template;
    aiAdvisorInput.focus();
  }

  function getAIAdvisorMessage() {
    const value = aiAdvisorInput ? aiAdvisorInput.value.trim() : "";
    return value || "I would like to start a project review with Sunny from YIYI Mesh Belt for a metal conveyor belt project.";
  }

  function submitAIAdvisor() {
    const message = getAIAdvisorMessage();
    try {
      window.localStorage.setItem("yiyiSunnySalesDraft", message);
    } catch (error) {
      // Local storage can be blocked by browser privacy settings; the URL still carries the intent.
    }
    const params = new URLSearchParams({
      intent: "sunny-global-sales",
      source: "floating-sunny-sales",
      message,
    });
    window.location.href = `contact.html?${params.toString()}`;
  }

  function sendAIAdvisorToWA() {
    const message = `Sunny - YIYI Mesh Belt project review: ${getAIAdvisorMessage()}`;
    openWA(message);
  }

  function setLang(button, lang) {
    const container = button ? button.closest(".tb-langs, .tblangs") : null;
    if (container) {
      all("button", container).forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
    }
    const currentPath = window.location.pathname || "/";
    const cleanPath = currentPath.replace(/^\/(de|ja|ko|pt|es|it|ru)(?=\/)/, "");
    if (!lang || lang === "en") {
      window.location.href = cleanPath || "/";
      return;
    }
    window.location.href = `/${lang}${cleanPath === "/" ? "/" : cleanPath}`;
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
    return;
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
          <div class="footer-inquiry-kicker">Project Support</div>
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
  window.closeAIAdvisor = closeAIAdvisor;
  window.toggleAIAdvisor = toggleAIAdvisor;
  window.startAIAdvisor = startAIAdvisor;
  window.submitAIAdvisor = submitAIAdvisor;
  window.sendAIAdvisorToWA = sendAIAdvisorToWA;
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
  setNavScrolled();
  window.addEventListener("scroll", setNavScrolled, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) closeMobileMenu();
  });
})();
