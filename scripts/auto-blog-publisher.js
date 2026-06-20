const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const blogDir = path.join(publicDir, "blog");
const assetDir = path.join(publicDir, "assets", "blog");
const sourceDir = path.join(root, "content_sources", "blog-automation");
const topicPath = path.join(sourceDir, "topics.json");
const siteUrl = "https://www.yiyimeshbelt.com";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function paragraphBank(topic) {
  return [
    `For international buyers, a ${topic.cluster.toLowerCase()} article should do more than define a product name. It should reduce uncertainty before the inquiry begins. The buyer wants to know whether the supplier understands operating conditions, replacement pressure, dimensional matching, food-contact requirements, and the practical information needed to make a reliable recommendation.`,
    `YIYI Mesh Belt approaches these questions from the position of a manufacturer, not a trading catalog. The useful answer is usually not "choose this belt" in isolation. The useful answer is to connect belt type, wire structure, edge design, sprocket or drum compatibility, material grade, process control, and delivery readiness into one decision path.`,
    `That is why engineering review matters. A belt that looks similar in a photograph can behave differently once it runs under load, temperature change, washdown, freezing, heating, or repeated start-stop cycles. A small difference in pitch, edge bar design, rod diameter, or drive engagement can become a large operating problem after installation.`,
    `The first task for the buyer is to separate visual similarity from engineering fit. A replacement project should begin with dimensions, photos, operating environment, and the function of the belt in the line. An OEM project should begin with drawings, expected load, line speed, temperature range, drum or sprocket information, and any hygiene or cleanability requirements.`,
    `For YIYI Mesh Belt, the strongest projects are the ones where this information is reviewed before production. The factory can then confirm whether the requested structure matches the real conveyor environment, whether matched drive components are needed, and whether the buyer should prepare a sample or drawing for further validation.`,
    `This is also where manufacturing capability becomes part of SEO content quality. Many websites describe products in generic terms. A more useful article explains how the production process supports the recommendation: in-house wire drawing, robotic welding, controlled forming, edge assembly, inspection, and export packing all affect whether a belt can be repeated reliably.`,
    `Buyers should also think about repeat supply. A single emergency replacement order may solve an immediate shutdown, but the long-term value comes from documenting the belt specification so that future orders can be produced without restarting the investigation from zero. This is especially important for distributors and OEM builders who need stable supply across many end users.`,
    `Quality control should not be treated as a final photograph before shipment. It begins with raw material control, drawing confirmation, process checks, dimensional review, weld or joint inspection, and practical verification where required. When these points are built into the project from the start, buyers have fewer surprises when the belt arrives.`,
    `The commercial path should be simple. If the buyer has drawings, they should send them first. If the buyer only has an old belt, clear photos and measurements are enough to start a review. If the buyer is developing a new line, the correct starting point is engineering support rather than a price-only request.`,
    `This article is written for procurement teams, OEM engineers, maintenance managers, and distributors who need a practical way to move from search research to a qualified inquiry. It is not a substitute for drawing review, but it should help the buyer ask better questions and avoid common sourcing mistakes.`
  ];
}

function sections(topic) {
  const productName = topic.cluster;
  return [
    {
      h2: `What buyers are really trying to solve`,
      body: [
        `Most searches around ${productName.toLowerCase()} are not purely educational. Behind the search is usually a line that needs to run, a quotation that must be confirmed, a drawing that must be checked, or a replacement belt that must arrive without creating another mismatch.`,
        `A good supplier page should therefore answer both the technical question and the buying question. The technical question is about structure, material, and application. The buying question is about risk: Will the belt fit? Will it run smoothly? Can it be repeated? Can the supplier support the next order?`
      ]
    },
    {
      h2: `Key information to prepare before asking for a quote`,
      body: [
        `The fastest way to receive a useful answer is to send project information with the inquiry. Useful information includes belt width, belt length, pitch, rod diameter, edge type, material grade, operating temperature, line speed, load, product type, and photos of the current conveyor or old belt.`,
        `For OEM projects, drawings are more important than general descriptions. For replacement projects, old belt photos, sprocket or drum photos, and a few critical measurements can reduce back-and-forth. If the buyer is not sure which measurement matters, the inquiry can still begin with photos and the application context.`
      ]
    },
    {
      h2: `How YIYI evaluates fit and repeatability`,
      body: [
        `YIYI Mesh Belt reviews the project from manufacturing fit, application fit, and repeat supply fit. Manufacturing fit asks whether the requested structure can be produced consistently. Application fit asks whether the belt design matches the operating environment. Repeat supply fit asks whether the specification is clear enough for future orders.`,
        `This three-part review is especially useful for distributors and OEM equipment builders because they are not only buying one belt. They are building a supply path that must remain stable when the next machine, replacement order, or end-user project appears.`
      ]
    },
    {
      h2: `Manufacturing proof that supports the recommendation`,
      body: [
        `A reliable recommendation should be backed by real production capability. YIYI's manufacturing story includes in-house wire drawing, robotic welding, forming and assembly processes, inspection steps, and export-ready packing. These are not decorative details. They affect quality consistency, lead time control, and repeat order reliability.`,
        `For buyers, this means the conversation can move beyond a product photo. It can include process control, material preparation, edge construction, matched components, and inspection evidence before shipment. That is the difference between a catalog supplier and a factory-backed belt partner.`
      ]
    },
    {
      h2: `Common mistakes to avoid`,
      body: [
        `The most common mistake is choosing by appearance alone. Many metal conveyor belts appear similar when viewed from a distance, but the drive method, edge design, pitch, material, and working environment can make them behave differently in the line.`,
        `Another mistake is waiting too long to collect replacement information. If a belt is close to failure, the buyer should collect photos, dimensions, and operating details before the shutdown becomes urgent. Early review gives the supplier more room to confirm structure and delivery options.`
      ]
    },
    {
      h2: `When to involve engineering support`,
      body: [
        `Engineering support is recommended when the belt runs in a spiral system, freezer, oven, washer, cooling line, high-load conveyor, or any application where drive matching and repeat stability matter. It is also recommended when the buyer is unsure whether sprockets, drums, or replacement parts should be ordered together with the belt.`,
        `The goal is not to make the inquiry more complicated. The goal is to prevent a simple quotation request from becoming an installation problem later. A few early questions can save time, freight cost, and production downtime.`
      ]
    }
  ];
}

function faq(topic) {
  return [
    {
      q: `What is the best first step for a ${topic.cluster.toLowerCase()} inquiry?`,
      a: `Send a drawing if available. If there is no drawing, send clear photos, belt dimensions, application details, and information about the drive or drum system.`
    },
    {
      q: "Can YIYI support OEM and replacement projects?",
      a: "Yes. The website is built around OEM builders, distributors, and replacement buyers who need drawing review, belt matching, quality confirmation, and repeat supply support."
    },
    {
      q: "Should I request price before sending technical information?",
      a: "A rough price may be possible, but an accurate quotation usually needs belt type, size, material, structure, and operating conditions. Technical information helps avoid mismatch risk."
    }
  ];
}

function makeSvg(topic, index, prompt) {
  const fileName = `${topic.slug}-ai-visual-${index}.svg`;
  const filePath = path.join(assetDir, fileName);
  const colors = ["#0D1B2A", "#163B63", "#1F5C9E", "#C8922A"];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-labelledby="t d">
  <title id="t">${esc(topic.title)} visual ${index}</title>
  <desc id="d">${esc(prompt)}</desc>
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${colors[index % colors.length]}"/>
      <stop offset="1" stop-color="#E8EEF6"/>
    </linearGradient>
    <pattern id="mesh" width="64" height="64" patternUnits="userSpaceOnUse" patternTransform="rotate(24)">
      <path d="M0 32h64M32 0v64" stroke="rgba(255,255,255,.32)" stroke-width="3"/>
      <path d="M0 0l64 64M64 0L0 64" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="1200" height="760" fill="url(#g)"/>
  <rect x="80" y="86" width="1040" height="588" rx="42" fill="rgba(13,27,42,.58)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
  <rect x="120" y="136" width="960" height="350" rx="28" fill="url(#mesh)" opacity=".9"/>
  <g fill="none" stroke="#fff" stroke-width="10" opacity=".72">
    <path d="M150 545c160-100 260 100 420 0s260 100 480 0"/>
    <path d="M150 592c160-100 260 100 420 0s260 100 480 0"/>
  </g>
  <text x="120" y="106" fill="#C8922A" font-family="IBM Plex Mono, Consolas, monospace" font-size="24" letter-spacing="7">${esc(topic.cluster.toUpperCase())}</text>
  <text x="120" y="560" fill="#fff" font-family="DM Sans, Arial, sans-serif" font-size="50" font-weight="800">${esc(topic.title).slice(0, 58)}</text>
  <text x="120" y="620" fill="#DCE9F6" font-family="DM Sans, Arial, sans-serif" font-size="25">AI visual placeholder - replace with generated image when API is connected</text>
  </svg>`;
  fs.writeFileSync(filePath, svg, "utf8");
  return `assets/blog/${fileName}`;
}

function articleHtml(topic, images) {
  const created = new Date().toISOString().slice(0, 10);
  const bodyParas = paragraphBank(topic);
  const sectionHtml = sections(topic).map((section, index) => {
    const img = images[index % images.length];
    return `<section class="blog-section">
      <h2>${esc(section.h2)}</h2>
      ${section.body.map(p => `<p>${esc(p)}</p>`).join("\n")}
      ${index === 1 ? inlineCta("drawing", "Have drawings or photos ready?", "Send them now and let YIYI review the belt type, dimensions, and matching requirements before quotation.") : ""}
      ${index === 3 ? `<figure><img src="../${img.src}" alt="${esc(img.alt)}"><figcaption>${esc(img.caption)}</figcaption></figure>` : ""}
    </section>`;
  }).join("\n");

  const faqJson = faq(topic).map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(topic.title)} | YIYI Mesh Belt Blog</title>
  <meta name="description" content="${esc(topic.meta)}">
  <link rel="canonical" href="${siteUrl}/blog/${topic.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/site-foundation.css">
  <link rel="stylesheet" href="../assets/site-refinement.css">
  <link rel="stylesheet" href="../assets/blog-automation.css">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.meta,
    datePublished: created,
    dateModified: created,
    author: { "@type": "Organization", name: "YIYI Mesh Belt" },
    publisher: { "@type": "Organization", name: "YIYI Mesh Belt", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${topic.slug}.html`
  })}</script>
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqJson})}</script>
</head>
<body class="blog-body">
  ${simpleHeader("../")}
  <main>
    <article class="blog-article">
      <header class="blog-hero">
        <div class="blog-kicker">YIYI Mesh Belt Blog / ${esc(topic.intent.toUpperCase())}</div>
        <h1>${esc(topic.title)}</h1>
        <p>${esc(topic.meta)}</p>
        <div class="blog-meta"><span>${created}</span><span>${esc(topic.buyer)}</span><span>Factory-backed engineering content</span></div>
        <div class="blog-cta-row">
          <a class="blog-btn blog-btn-primary" href="../contact.html?intent=drawing&source=${topic.slug}">Send Your Belt Drawing</a>
          <a class="blog-btn" href="../${topic.primaryProduct}">View Related Page</a>
        </div>
      </header>

      <div class="blog-visual-grid">
        ${images.slice(0, 3).map(img => `<figure><img src="../${img.src}" alt="${esc(img.alt)}"><figcaption>${esc(img.caption)}</figcaption></figure>`).join("\n")}
      </div>

      <section class="blog-section">
        <h2>Quick answer</h2>
        ${bodyParas.slice(0, 3).map(p => `<p>${esc(p)}</p>`).join("\n")}
      </section>

      ${sectionHtml}

      <section class="blog-section">
        <h2>Practical buyer checklist</h2>
        <ul class="blog-checklist">
          <li>Confirm belt type, width, length, pitch, rod diameter, and edge structure.</li>
          <li>Share application details such as product, temperature, washdown, load, speed, and duty cycle.</li>
          <li>Send photos of the old belt, drum, sprocket, or conveyor if drawings are not available.</li>
          <li>Ask whether matched drive components, replacement parts, or engineering review are recommended.</li>
          <li>Request quality confirmation points before shipment, especially for repeat supply.</li>
        </ul>
      </section>

      <section class="blog-section">
        <h2>How this connects to YIYI pages</h2>
        <div class="blog-link-grid">
          <a href="../${topic.primaryProduct}">Primary related page</a>
          ${topic.supportLinks.map(link => `<a href="../${link}">${esc(link.replace(".html", "").replace(/[?-].*$/, "").replace(/-/g, " "))}</a>`).join("\n")}
        </div>
      </section>

      <section class="blog-section">
        <h2>FAQ</h2>
        ${faq(topic).map(item => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("\n")}
      </section>

      ${inlineCta("quote", "Ready to turn this into a real inquiry?", "Send drawings, samples, or operating conditions. YIYI will review the belt structure and route your request to the right technical path.")}
    </article>
  </main>
  ${simpleFooter("../")}
  <script src="../assets/site-shell.js"></script>
</body>
</html>`;
}

function inlineCta(intent, title, text) {
  return `<aside class="blog-inline-cta">
    <div>
      <strong>${esc(title)}</strong>
      <p>${esc(text)}</p>
    </div>
    <a href="../contact.html?intent=${intent}">Ask For A Quick Quote</a>
  </aside>`;
}

function simpleHeader(prefix = "") {
  return `<header class="blog-top">
    <a href="${prefix}index.html" class="blog-brand">YIYI MESH BELT</a>
    <nav>
      <a href="${prefix}products.html">Products</a>
      <a href="${prefix}knowledge-center.html">Knowledge</a>
      <a href="${prefix}blog.html">Blog</a>
      <a href="${prefix}contact.html?intent=quote" class="blog-nav-cta">Ask For A Quick Quote</a>
    </nav>
  </header>`;
}

function simpleFooter(prefix = "") {
  return `<footer class="blog-footer">
    <div>
      <strong>YIYI MESH BELT</strong>
      <p>Automated metal conveyor belt manufacturer for OEMs, distributors, and replacement projects.</p>
    </div>
    <div>
      <a href="${prefix}contact.html?intent=drawing">Send Your Belt Drawing</a>
      <a href="${prefix}engineering-oem.html">Get Engineering Support</a>
      <a href="${prefix}products.html">All Products</a>
    </div>
  </footer>`;
}

function blogIndex(topics, manifest) {
  const cards = topics.map((topic) => {
    const item = manifest.articles.find(a => a.slug === topic.slug);
    return `<a class="blog-card" href="blog/${topic.slug}.html">
      <img src="${item.images[0].src}" alt="${esc(item.images[0].alt)}">
      <div>
        <span>${esc(topic.cluster)}</span>
        <h2>${esc(topic.title)}</h2>
        <p>${esc(topic.meta)}</p>
        <strong>Read article -></strong>
      </div>
    </a>`;
  }).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YIYI Mesh Belt Blog | Engineering Articles for Industrial Belt Buyers</title>
  <meta name="description" content="Daily-ready B2B blog hub for metal conveyor belt selection, replacement, manufacturing assurance, quality control, and OEM engineering support.">
  <link rel="canonical" href="${siteUrl}/blog.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/site-foundation.css">
  <link rel="stylesheet" href="assets/site-refinement.css">
  <link rel="stylesheet" href="assets/blog-automation.css">
</head>
<body class="blog-body">
  ${simpleHeader("")}
  <main>
    <section class="blog-index-hero">
      <div class="blog-kicker">Daily SEO Publishing System</div>
      <h1>Engineering Blog for Metal Conveyor Belt Buyers</h1>
      <p>Factory-backed articles built for overseas OEM buyers, distributors, and replacement teams. Each article links search intent to product pages, engineering review, and inquiry CTAs.</p>
      <div class="blog-cta-row">
        <a class="blog-btn blog-btn-primary" href="contact.html?intent=drawing&source=blog-index">Send Your Belt Drawing</a>
        <a class="blog-btn" href="knowledge-center.html">Knowledge Center</a>
      </div>
    </section>
    <section class="blog-index-grid">
      ${cards}
    </section>
  </main>
  ${simpleFooter("")}
  <script src="assets/site-shell.js"></script>
</body>
</html>`;
}

function css() {
  return `:root{--blog-navy:#0D1B2A;--blog-blue:#1F5C9E;--blog-gold:#C8922A;--blog-ice:#F3F7FB;--blog-text:#1E2A3A;--blog-muted:#5B6B7F;--blog-line:#D8E2ED}
.blog-body{margin:0;font-family:'DM Sans',system-ui,sans-serif;background:#f4f7fb;color:var(--blog-text);font-size:17px;line-height:1.75}
.blog-top{position:sticky;top:0;z-index:30;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px clamp(20px,5vw,72px);background:#0D1B2A;color:white;border-bottom:1px solid rgba(255,255,255,.1)}
.blog-brand{font-weight:800;letter-spacing:.06em;color:white;text-decoration:none}
.blog-top nav{display:flex;gap:18px;align-items:center;flex-wrap:wrap}
.blog-top a{color:rgba(255,255,255,.78);text-decoration:none;font-weight:700}
.blog-top a:hover{color:white}
.blog-nav-cta{background:#2f68aa;color:white!important;padding:10px 16px;border-radius:4px}
.blog-index-hero,.blog-hero{padding:76px clamp(22px,6vw,90px);background:linear-gradient(135deg,#0D1B2A,#173d63);color:white}
.blog-index-hero h1,.blog-hero h1{max-width:1050px;margin:12px 0 18px;font-size:clamp(42px,6vw,78px);line-height:1.05;color:white}
.blog-index-hero p,.blog-hero p{max-width:900px;color:#b7c8d9;font-size:20px}
.blog-kicker{font-family:'IBM Plex Mono',monospace;color:#69a7e8;letter-spacing:.18em;text-transform:uppercase;font-weight:700;font-size:13px}
.blog-meta{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}
.blog-meta span{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);padding:7px 12px;border-radius:999px;color:#d6e4f1;font-size:13px}
.blog-cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px}
.blog-btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 20px;border-radius:5px;border:1px solid rgba(255,255,255,.18);text-decoration:none;font-weight:800;color:inherit}
.blog-btn-primary{background:#2f68aa;color:white;border-color:#2f68aa}
.blog-index-grid{max-width:1240px;margin:0 auto;padding:54px 22px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.blog-card{display:flex;flex-direction:column;background:white;border:1px solid var(--blog-line);border-radius:20px;overflow:hidden;text-decoration:none;color:var(--blog-text);box-shadow:0 18px 60px rgba(21,43,68,.08)}
.blog-card img{width:100%;height:230px;object-fit:cover}
.blog-card div{padding:24px}
.blog-card span{font-family:'IBM Plex Mono',monospace;color:var(--blog-gold);letter-spacing:.12em;text-transform:uppercase;font-size:12px;font-weight:800}
.blog-card h2{font-size:25px;line-height:1.18;margin:12px 0;color:var(--blog-text)}
.blog-card p{color:var(--blog-muted);margin:0 0 16px}
.blog-card strong{color:#1F5C9E}
.blog-article{max-width:980px;margin:0 auto;background:white}
.blog-visual-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:28px 22px;background:#f4f7fb}
.blog-visual-grid figure,.blog-section figure{margin:0;background:white;border:1px solid var(--blog-line);border-radius:16px;overflow:hidden}
.blog-visual-grid img,.blog-section img{width:100%;height:auto;display:block}
figcaption{padding:12px 14px;color:var(--blog-muted);font-size:14px}
.blog-section{padding:36px clamp(22px,5vw,58px);border-bottom:1px solid #edf2f7}
.blog-section h2{font-size:34px;line-height:1.15;margin:0 0 18px;color:var(--blog-text)}
.blog-section p{color:#425165;margin:0 0 18px}
.blog-section details{border:1px solid var(--blog-line);border-radius:14px;padding:16px 18px;margin:12px 0;background:#f8fbfe}
.blog-section summary{font-weight:800;cursor:pointer}
.blog-checklist{padding-left:22px;color:#425165}
.blog-checklist li{margin:10px 0}
.blog-inline-cta{margin:28px 0;padding:24px;border-radius:18px;background:linear-gradient(135deg,#0D1B2A,#1f5c9e);color:white;display:flex;justify-content:space-between;gap:20px;align-items:center}
.blog-inline-cta p{color:#d9e7f4!important;margin:6px 0 0}
.blog-inline-cta a{background:#C8922A;color:white;text-decoration:none;font-weight:800;padding:12px 16px;border-radius:4px;white-space:nowrap}
.blog-link-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.blog-link-grid a{padding:14px 16px;border:1px solid var(--blog-line);border-radius:12px;color:#1F5C9E;text-decoration:none;font-weight:800;background:#f8fbfe;text-transform:capitalize}
.blog-footer{display:flex;justify-content:space-between;gap:30px;padding:36px clamp(20px,5vw,72px);background:#0D1B2A;color:white}
.blog-footer p{color:#9fb5c8;max-width:520px}
.blog-footer a{display:block;color:#9fc9f0;text-decoration:none;margin:6px 0;font-weight:700}
@media(max-width:900px){.blog-index-grid,.blog-visual-grid{grid-template-columns:1fr}.blog-inline-cta,.blog-footer,.blog-top{flex-direction:column;align-items:flex-start}.blog-link-grid{grid-template-columns:1fr}.blog-index-hero,.blog-hero{padding-top:48px}.blog-index-hero h1,.blog-hero h1{font-size:42px}}`;
}

function updateSitemap(topics) {
  const htmlFiles = fs.readdirSync(publicDir).filter(file => file.endsWith(".html"));
  const urls = new Set(htmlFiles.map(file => file === "index.html" ? `${siteUrl}/` : `${siteUrl}/${file}`));
  topics.forEach(topic => urls.add(`${siteUrl}/blog/${topic.slug}.html`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Array.from(urls).sort().map(url => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
  fs.writeFileSync(path.join(publicDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
}

function main() {
  ensureDir(blogDir);
  ensureDir(assetDir);
  ensureDir(sourceDir);

  const topics = JSON.parse(fs.readFileSync(topicPath, "utf8"));
  const manifest = { generatedAt: new Date().toISOString(), mode: process.env.OPENAI_API_KEY ? "api-ready" : "fallback-svg", articles: [] };

  topics.forEach(topic => {
    const images = topic.imagePrompts.map((prompt, index) => ({
      src: makeSvg(topic, index + 1, prompt),
      alt: `${topic.title} - visual ${index + 1}`,
      caption: prompt
    }));
    fs.writeFileSync(path.join(blogDir, `${topic.slug}.html`), articleHtml(topic, images), "utf8");
    manifest.articles.push({ slug: topic.slug, title: topic.title, images });
  });

  fs.writeFileSync(path.join(publicDir, "assets", "blog-automation.css"), css(), "utf8");
  fs.writeFileSync(path.join(publicDir, "blog.html"), blogIndex(topics, manifest), "utf8");
  fs.writeFileSync(path.join(sourceDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  updateSitemap(topics);

  console.log(`Generated ${topics.length} blog articles.`);
  console.log("Blog index: public/blog.html");
  console.log(`Mode: ${manifest.mode}`);
}

main();
