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
  setNavScrolled();
  window.addEventListener("scroll", setNavScrolled, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) closeMobileMenu();
  });
})();
