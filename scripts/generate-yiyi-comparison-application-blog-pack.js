const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const blogDir = path.join(publicDir, "blog");
const assetDir = path.join(publicDir, "assets", "blog");
const today = "2026-06-17";

fs.mkdirSync(blogDir, { recursive: true });
fs.mkdirSync(assetDir, { recursive: true });

const internalLinks = [
  ["Spiral Freezer Belt", "../spiral-freezer-belt.html"],
  ["Self-Stacking Belt", "../self-stacking-belt.html"],
  ["Eye Link Belt", "../eye-link-belt.html"],
  ["Flat Wire Belt", "../flat-wire-belt.html"],
  ["Chain Driven Belt", "../chain-driven-belt.html"],
  ["Balanced Weave Belt", "../balanced-weave-belt.html"],
  ["Drive Sprockets", "../drive-sprockets.html"],
  ["Metal Conveyor Belt Products", "../products.html"],
  ["Engineering & OEM Support", "../engineering-oem.html"],
  ["Ask For A Quick Quote", "../contact.html?intent=quote&source=blog"],
];

const topics = [
  {
    cluster: "Comparison / Belt Selection",
    title: "Spiral Freezer Belt vs Self-Stacking Belt: What Is the Difference?",
    slug: "spiral-freezer-belt-vs-self-stacking-belt-difference",
    intent: "Compare two spiral freezer belt systems before OEM or replacement purchase.",
    answer: "A spiral freezer belt is selected mainly for spiral tower movement, turning stability, and low-temperature conveying. A self-stacking belt is selected when the belt itself forms stacked tiers and must carry load through its side structure. The right choice depends on freezer design, load, pitch, turning radius, and drive matching.",
    primary: "Spiral Freezer Belt",
    secondary: "Self-Stacking Belt",
    table: [
      ["Main use", "Spiral tower conveying and IQF freezing lines"],
      ["Key check", "Turning radius, edge support, pitch, drive engagement"],
      ["Self-stacking focus", "Side plate height, stack stability, product clearance"],
      ["Buyer risk", "Wrong edge structure can create collapse, rubbing, or unstable running"],
      ["Best RFQ data", "Drawing, old belt photos, tower path, load, temperature, drive details"],
    ],
  },
  {
    cluster: "Comparison / Food Processing",
    title: "Flat Wire Belt vs Eye Link Belt: Which One Should You Choose?",
    slug: "flat-wire-belt-vs-eye-link-belt",
    intent: "Help food processing and industrial buyers choose between open flat wire and heavy-duty eye link structures.",
    answer: "Choose a flat wire belt when you need open area, drainage, airflow, and moderate product support. Choose an eye link belt when you need stronger load capacity, smooth support, or heavy-duty conveying. The decision should be based on product size, load, cleaning method, sprocket design, and line speed.",
    primary: "Flat Wire Belt",
    secondary: "Eye Link Belt",
    table: [
      ["Flat wire advantage", "Open area, drainage, airflow, lightweight structure"],
      ["Eye link advantage", "Heavy load support, stable pitch, strong rod structure"],
      ["Food use", "Washing, cooling, drying, baking, processing lines"],
      ["Buyer risk", "Too much open area may not support small products"],
      ["Best RFQ data", "Product size, weight, temperature, washing method, sprocket details"],
    ],
  },
  {
    cluster: "Comparison / Drive System",
    title: "Chain Driven Belt vs Balanced Weave Belt Comparison",
    slug: "chain-driven-belt-vs-balanced-weave-belt",
    intent: "Compare positive-drive chain belts with flexible woven belts for industrial and thermal lines.",
    answer: "A chain driven belt is better when positive engagement, heavy load, and accurate tracking are required. A balanced weave belt is better for flexible conveying, airflow, heat transfer, and continuous processing. The best choice depends on load, temperature, product support, drive method, and maintenance expectations.",
    primary: "Chain Driven Belt",
    secondary: "Balanced Weave Belt",
    table: [
      ["Chain driven focus", "Positive sprocket engagement and strong edge control"],
      ["Balanced weave focus", "Flexible woven surface for airflow and heat transfer"],
      ["Typical industries", "Industrial systems, ovens, dryers, heat treatment"],
      ["Buyer risk", "Wrong drive method can cause jumping, wear, or tracking problems"],
      ["Best RFQ data", "Chain pitch, sprocket drawing, load, temperature, belt width"],
    ],
  },
  {
    cluster: "Comparison / Material",
    title: "Stainless Steel 304 vs 316 vs 310S Conveyor Belts",
    slug: "stainless-steel-304-vs-316-vs-310s-conveyor-belts",
    intent: "Help buyers choose stainless steel material for food, washing, corrosion, and heat applications.",
    answer: "304 stainless steel is the common choice for many food conveyor belts. 316 is used when corrosion resistance is more important, especially seafood, washing, or chemical cleaning. 310S is used for high-temperature applications. Material selection must also consider belt structure, wire diameter, load, and cleaning environment.",
    primary: "Metal Conveyor Belt",
    secondary: "Material Selection",
    table: [
      ["304", "General food processing and standard stainless belt applications"],
      ["316", "Better corrosion resistance for seafood, washing, and aggressive cleaning"],
      ["310S", "High-temperature operation such as ovens and heat treatment"],
      ["Buyer risk", "Choosing material alone without load and structure review"],
      ["Best RFQ data", "Temperature, chemical exposure, food type, load, cleaning method"],
    ],
  },
  {
    cluster: "Comparison / Edge Design",
    title: "Welded Edge vs Chain Edge Conveyor Belt: Which Is Better?",
    slug: "welded-edge-vs-chain-edge-conveyor-belt",
    intent: "Guide buyers comparing welded edge belts and chain edge belts for tracking and drive control.",
    answer: "A welded edge belt is useful when the belt needs a clean, compact edge and stable structure. A chain edge belt is better when positive drive, heavy load, or stronger edge guidance is required. The better choice depends on load, line length, sprocket engagement, side clearance, and maintenance plan.",
    primary: "Welded Edge Belt",
    secondary: "Chain Edge Belt",
    table: [
      ["Welded edge", "Compact edge, clean structure, good for many food and thermal lines"],
      ["Chain edge", "Positive drive, stronger guidance, useful for heavier systems"],
      ["Key check", "Side clearance, pitch, sprocket engagement, edge wear"],
      ["Buyer risk", "Edge mismatch can create tracking and drive wear problems"],
      ["Best RFQ data", "Edge photos, sprocket specs, line load, belt path, speed"],
    ],
  },
  {
    cluster: "Application / Food Processing",
    title: "Conveyor Belts for Food Processing Industry Explained",
    slug: "conveyor-belts-for-food-processing-industry",
    intent: "Explain food processing belt selection for OEMs, factories, and replacement buyers.",
    answer: "Food processing conveyor belts should be selected by product size, cleaning method, drainage, temperature, load, material grade, and drive matching. Stainless steel mesh belts are often used when buyers need open area, cleanability, heat resistance, and repeatable replacement supply.",
    primary: "Food Processing Conveyor Belt",
    secondary: "Metal Conveyor Belt",
    table: [
      ["Selection focus", "Food contact, cleanability, drainage, load, temperature"],
      ["Common belts", "Flat wire, eye link, balanced weave, chain driven, spiral freezer"],
      ["Quality checks", "Surface condition, pitch, edge, welds, material proof"],
      ["Buyer risk", "Only choosing by product photo without application details"],
      ["Best RFQ data", "Food type, product weight, cleaning process, drawings, photos"],
    ],
  },
  {
    cluster: "Application / IQF Freezing",
    title: "Conveyor Belts for IQF Freezing Systems",
    slug: "conveyor-belts-for-iqf-freezing-systems",
    intent: "Target IQF freezing lines, spiral towers, and frozen food equipment buyers.",
    answer: "IQF freezing belts must support low-temperature operation, stable tracking, cleanability, and correct turning or drive engagement. Spiral freezer belts and self-stacking belts are common choices, but the correct design depends on tower structure, product load, airflow, belt pitch, and edge geometry.",
    primary: "Spiral Freezer Belt",
    secondary: "Self-Stacking Belt",
    table: [
      ["Application", "IQF, spiral freezer, freezing tunnel, cold chain conveying"],
      ["Critical factor", "Low-temperature strength and stable turning path"],
      ["Common belts", "Spiral freezer belt, self-stacking belt, flat wire belt"],
      ["Buyer risk", "Wrong edge or pitch causes unstable running or collapse"],
      ["Best RFQ data", "Tower drawing, belt width, pitch, load, temperature, drive details"],
    ],
  },
  {
    cluster: "Application / Bakery",
    title: "Conveyor Belts for Baking and Oven Lines",
    slug: "conveyor-belts-for-baking-and-oven-lines",
    intent: "Target bakery, oven, biscuit, cooling, and thermal process belt buyers.",
    answer: "Baking and oven line conveyor belts should be selected by temperature, product support, airflow, belt flatness, expansion behavior, and cleaning needs. Flat wire, balanced weave, compound weave, and chain driven belts are common options depending on heat, load, and product size.",
    primary: "Baking Conveyor Belt",
    secondary: "Oven Belt",
    table: [
      ["Application", "Tunnel ovens, biscuit lines, cooling conveyors, thermal systems"],
      ["Critical factor", "Heat resistance, airflow, flatness, dimensional stability"],
      ["Common belts", "Flat wire, balanced weave, chain driven, compound weave"],
      ["Buyer risk", "Thermal expansion and poor support can deform the belt"],
      ["Best RFQ data", "Temperature range, product weight, oven length, drive method"],
    ],
  },
  {
    cluster: "Application / Washing",
    title: "Conveyor Belts for Washing and Cleaning Lines",
    slug: "conveyor-belts-for-washing-and-cleaning-lines",
    intent: "Target washing, can washing, vegetable washing, and cleaning conveyor projects.",
    answer: "Washing line conveyor belts need open area, drainage, corrosion resistance, stable product support, and easy cleaning. Flat wire belts, eye link belts, and open-link structures are common choices. Material and edge design should be confirmed against water, chemicals, load, and sprocket matching.",
    primary: "Washing Conveyor Belt",
    secondary: "Flat Wire Belt",
    table: [
      ["Application", "Can washing, container washing, food washing, cleaning conveyors"],
      ["Critical factor", "Drainage, corrosion resistance, product support"],
      ["Common belts", "Flat wire, eye link, open link, chain driven"],
      ["Buyer risk", "Wrong material or open area creates corrosion or product falling"],
      ["Best RFQ data", "Cleaning liquid, product size, speed, load, material requirement"],
    ],
  },
  {
    cluster: "Application / Automation",
    title: "Conveyor Belt Solutions for Industrial Automation Systems",
    slug: "conveyor-belt-solutions-for-industrial-automation-systems",
    intent: "Target OEM machinery builders and automation integrators.",
    answer: "Industrial automation conveyor belts should be selected by load, repeatability, drive control, line speed, product support, and maintenance access. OEM projects need early drawing review, sprocket matching, sample confirmation, and stable repeat production more than a one-time belt quotation.",
    primary: "Industrial Conveyor Belt",
    secondary: "OEM Belt Solution",
    table: [
      ["Application", "OEM equipment, production lines, automated conveying systems"],
      ["Critical factor", "Repeatability, drive matching, and maintenance stability"],
      ["Common belts", "Chain driven, eye link, flat wire, sprockets, replacement parts"],
      ["Buyer risk", "Belt selected without confirming drive and load path"],
      ["Best RFQ data", "Machine drawing, speed, load, sprocket, shaft, installation limits"],
    ],
  },
  {
    cluster: "Application / Meat Processing",
    title: "Conveyor Belt Applications in Meat Processing Industry",
    slug: "conveyor-belt-applications-in-meat-processing-industry",
    intent: "Target meat processing buyers needing food-grade stainless belts and replacement support.",
    answer: "Meat processing conveyor belts need hygienic surfaces, corrosion resistance, easy cleaning, stable support, and reliable replacement matching. Eye link belts, flat wire belts, and balanced weave belts are often used depending on product size, washing frequency, load, and line design.",
    primary: "Meat Processing Conveyor Belt",
    secondary: "Food Grade Metal Belt",
    table: [
      ["Application", "Meat processing, prepared food, poultry, cooling, washing"],
      ["Critical factor", "Hygiene, drainage, cleaning, corrosion resistance"],
      ["Common belts", "Eye link, flat wire, balanced weave, chain driven"],
      ["Buyer risk", "Hard-to-clean structure or wrong material grade"],
      ["Best RFQ data", "Food type, cleaning method, load, temperature, belt sample"],
    ],
  },
  {
    cluster: "Application / Seafood Processing",
    title: "Conveyor Belt Applications in Seafood Processing Systems",
    slug: "conveyor-belt-applications-in-seafood-processing-systems",
    intent: "Target seafood plants, freezing lines, washing lines, and corrosion-sensitive applications.",
    answer: "Seafood processing conveyor belts usually need stronger corrosion resistance, drainage, cleanability, and low-temperature stability. 316 stainless steel may be considered when salt, moisture, or cleaning chemicals are severe. Belt structure must also match product size, washing intensity, and freezer or processing line design.",
    primary: "Seafood Processing Conveyor Belt",
    secondary: "316 Stainless Steel Belt",
    table: [
      ["Application", "Seafood washing, freezing, sorting, cooking, cooling"],
      ["Critical factor", "Corrosion resistance and hygienic cleanability"],
      ["Common belts", "Eye link, flat wire, spiral freezer, balanced weave"],
      ["Buyer risk", "Choosing 304 when cleaning or salt exposure requires stronger resistance"],
      ["Best RFQ data", "Salt exposure, cleaning chemicals, temperature, product size, load"],
    ],
  },
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function makeSvg(topic, index) {
  const file = `${topic.slug}-ai-visual-${index}.svg`;
  const full = path.join(assetDir, file);
  const label = index === 1 ? topic.primary : index === 2 ? topic.secondary : topic.cluster;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-labelledby="title desc">
  <title id="title">${esc(topic.title)} visual ${index}</title>
  <desc id="desc">Industrial conveyor belt engineering visual placeholder for ${esc(topic.title)}.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#0c1b2a"/>
      <stop offset="0.55" stop-color="#18395b"/>
      <stop offset="1" stop-color="#e8eef5"/>
    </linearGradient>
    <pattern id="mesh" width="58" height="58" patternUnits="userSpaceOnUse">
      <path d="M-10 30 H70 M30 -10 V70 M0 0 L58 58 M58 0 L0 58" fill="none" stroke="#dbe8f5" stroke-width="2" opacity=".32"/>
    </pattern>
  </defs>
  <rect width="1200" height="720" rx="36" fill="url(#bg)"/>
  <rect x="78" y="86" width="1044" height="548" rx="28" fill="url(#mesh)" opacity=".62"/>
  <rect x="92" y="104" width="1016" height="510" rx="24" fill="#071523" opacity=".44"/>
  <text x="120" y="156" fill="#68a8e8" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="5">${esc(topic.cluster.toUpperCase())}</text>
  <text x="120" y="252" fill="#ffffff" font-family="Arial, sans-serif" font-size="54" font-weight="800">${esc(label)}</text>
  <text x="120" y="322" fill="#d9e7f5" font-family="Arial, sans-serif" font-size="34" font-weight="700">${esc(topic.title).slice(0, 62)}</text>
  <text x="120" y="382" fill="#b8cce2" font-family="Arial, sans-serif" font-size="26">${esc(topic.intent).slice(0, 82)}</text>
  <g transform="translate(120 446)">
    <rect width="258" height="54" rx="27" fill="#2f67a8"/>
    <text x="28" y="36" fill="#fff" font-family="Arial, sans-serif" font-size="20" font-weight="700">YIYI MESH BELT</text>
    <rect x="290" width="228" height="54" rx="27" fill="#c99737"/>
    <text x="318" y="36" fill="#fff" font-family="Arial, sans-serif" font-size="20" font-weight="700">ENGINEERING QA</text>
  </g>
</svg>`;
  fs.writeFileSync(full, svg, "utf8");
  return `../assets/blog/${file}`;
}

function insight(topic, area) {
  return `My Insights: In ${area} projects, we usually do not judge the belt only from the product name. We first check the working condition, the drive method, and the failure risk. When a buyer sends clear photos, drawings, or old belt measurements, we can often find the real risk before production starts. This saves time for OEM teams, distributors, and factories that need stable repeat supply.`;
}

function articleHtml(topic) {
  const images = [1, 2, 3].map((n) => makeSvg(topic, n));
  const faq = [
    ["Can I choose the belt only by photo?", "Photos help, but reliable selection also needs pitch, width, material, load, temperature, and drive information."],
    ["Should I replace sprockets together with the belt?", "If sprocket wear, pitch mismatch, or jumping is visible, belt and sprocket matching should be reviewed together."],
    ["What should I send for a fast quotation?", "Send drawings, old belt photos, dimensions, application details, material request, load, speed, temperature, and drive details."],
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.answer,
    datePublished: today,
    dateModified: today,
    author: { "@type": "Organization", name: "YIYI Mesh Belt" },
    publisher: { "@type": "Organization", name: "YIYI Mesh Belt", url: "https://www.yiyimeshbelt.com" },
    mainEntityOfPage: `https://www.yiyimeshbelt.com/blog/${topic.slug}.html`,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const rows = topic.table.map(([p, d]) => `<tr><td>${esc(p)}</td><td>${esc(d)}</td></tr>`).join("\n");
  const links = internalLinks.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("\n");
  const isApplication = topic.cluster.startsWith("Application");
  const deepSections = isApplication
    ? [
        ["What makes this application different?", `${topic.primary} projects usually fail when the belt is selected as a generic part instead of a working component inside a real production line. Product size, cleaning process, temperature, load, drainage, and drive design all change the correct belt answer. A line that looks simple from the outside can still require careful belt matching because the belt must support product movement every day without creating hygiene, tracking, or maintenance problems. For overseas buyers, the safest selection starts with the application environment and then moves into belt structure, material, edge design, and inspection requirements.`],
        ["Which belt structures are usually considered?", `The common structures include spiral freezer belts, self-stacking belts, flat wire belts, eye link belts, balanced weave belts, and chain driven belts. Each structure solves a different problem. Some provide more open area. Some provide stronger load support. Some improve airflow or drainage. Some offer better positive drive. We compare these structures against the actual line instead of forcing one standard product. This is important when the buyer is an OEM equipment builder, because the belt becomes part of the machine reputation after delivery.`],
        ["What should be checked before production?", `Before production, we check confirmed dimensions, material grade, wire diameter, rod diameter, pitch, edge type, sprocket or drum matching, and final inspection method. If it is a replacement project, we also check old belt wear marks and any broken area. If it is a new project, we prefer drawings and machine layout. A good quotation should reduce uncertainty, not only give a price. ${insight(topic, "application and replacement")}`],
      ]
    : [
        ["What is the practical difference for buyers?", `${topic.primary} and ${topic.secondary} may both appear suitable at first, but the practical difference is how each structure behaves under load, drive engagement, cleaning, temperature, and long-term maintenance. Buyers should not choose only from a catalog photo. A belt that looks stronger may create unnecessary cost, while a belt that looks simple may not survive the actual line. The correct comparison starts from the working condition and then checks the belt geometry, material, edge, and drive details.`],
        ["How should an OEM or distributor make the decision?", `OEM builders and distributors should compare risk, not only price. The right belt is the one that supports stable running, repeat ordering, and clear replacement logic. If the line needs positive engagement, sprocket matching becomes critical. If the line needs airflow or drainage, open area matters. If the line runs in freezing or high heat, material and dimensional stability become more important. ${insight(topic, "comparison and decision")}`],
        ["What information prevents the wrong choice?", `The most useful information includes application photos, drawings, belt pitch, overall width, usable width, rod diameter, wire diameter, edge design, sprocket details, load, temperature, speed, and cleaning method. If the old belt failed, close-up photos of the failure point are very useful. Many buyer mistakes happen because the supplier receives only one photo and one size. That is not enough for a safe engineering decision when the belt must run inside a production line for months or years.`],
      ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(topic.title)} | YIYI Mesh Belt Blog</title>
  <meta name="description" content="${esc(topic.answer)}">
  <link rel="canonical" href="https://www.yiyimeshbelt.com/blog/${topic.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/site-foundation.css">
  <link rel="stylesheet" href="../assets/site-refinement.css">
  <link rel="stylesheet" href="../assets/blog-automation.css">
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
</head>
<body class="blog-body">
  <header class="blog-top">
    <a href="../index.html" class="blog-brand">YIYI MESH BELT</a>
    <nav id="yiyi-nav" aria-label="Blog article navigation">
      <a href="../index.html">Home</a>
      <a href="../products.html">Products</a>
      <a href="../spiral-freezer-belt.html">Spiral Freezer Belt</a>
      <a href="../self-stacking-belt.html">Self-Stacker Belt</a>
      <a href="../eye-link-belt.html">Eye Link Belt</a>
      <a href="../quality-control.html">Quality</a>
      <a href="../engineering-oem.html">OEM</a>
      <a href="../knowledge-center.html">Knowledge Center</a>
      <a href="../blog.html">Blog</a>
      <a href="../contact.html?intent=quote" class="blog-nav-cta">Ask For A Quick Quote</a>
    </nav>
  </header>
  <main>
    <article class="blog-article">
      <header class="blog-hero">
        <div class="blog-kicker">${esc(topic.cluster)}</div>
        <h1>${esc(topic.title)}</h1>
        <p>${esc(topic.intent)}</p>
        <div class="blog-meta"><span>${today}</span><span>OEM buyers, distributors, replacement teams</span><span>Factory-backed engineering content</span></div>
        <div class="blog-cta-row">
          <a class="blog-btn blog-btn-primary" href="../contact.html?intent=drawing&source=${topic.slug}">Send Your Belt Drawing</a>
          <a class="blog-btn" href="../products.html">View Metal Conveyor Belts</a>
        </div>
      </header>

      <section class="blog-section blog-answer-box">
        <h2>Direct Answer</h2>
        <p><strong>${esc(topic.answer)}</strong></p>
        <p>This article explains the decision from a practical engineering view so buyers can prepare a clearer RFQ and avoid mismatch before production.</p>
      </section>

      <div class="blog-visual-grid">
        ${images.map((img, i) => `<figure><img src="${img}" alt="${esc(topic.title)} engineering visual ${i + 1}" decoding="async" loading="lazy"><figcaption>${esc(topic.title)} - visual reference ${i + 1}</figcaption></figure>`).join("\n        ")}
      </div>

      ${deepSections.map(([h, p], i) => `<section class="blog-section">
        <h2>${esc(h)}</h2>
        <p>${esc(p)}</p>
        ${i === 1 ? `<aside class="blog-inline-cta"><div><strong>Need a practical engineering check?</strong><p>Send drawings, photos, or old belt measurements. YIYI will review belt structure before quotation.</p></div><a href="../contact.html?intent=drawing&source=${topic.slug}">Send Drawing</a></aside>` : ""}
      </section>`).join("\n\n")}

      <section class="blog-section">
        <h2>What specifications should be compared?</h2>
        <div class="blog-table-wrap">
          <table class="blog-spec-table">
            <thead><tr><th>Parameter</th><th>Engineering note</th></tr></thead>
            <tbody>
${rows}
            </tbody>
          </table>
        </div>
      </section>

      <section class="blog-section">
        <h2>What photos or drawings should buyers send?</h2>
        <ul class="blog-check-list">
          <li>Overall belt photo and close-up photo of the edge.</li>
          <li>Pitch, width, rod diameter, wire diameter, and edge structure measurement.</li>
          <li>Sprocket, drum, shaft, or drive engagement photos.</li>
          <li>Application photos showing product load, temperature, washing, or turning path.</li>
          <li>Failure point photos if the current belt is broken, deformed, stretched, or unstable.</li>
        </ul>
      </section>

      <section class="blog-section">
        <h2>Recommended internal links</h2>
        <div class="blog-link-grid">
${links}
        </div>
      </section>

      <section class="blog-section">
        <h2>FAQ</h2>
        ${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n        ")}
      </section>

      <section class="blog-section blog-answer-box">
        <h2>Conclusion</h2>
        <p>${esc(insight(topic, "final RFQ review"))}</p>
        <p>The best next step is simple: send your drawing, old belt photos, and working condition. We can confirm the belt family, material direction, key dimensions, and quotation path before production.</p>
        <div class="blog-cta-row">
          <a class="blog-btn blog-btn-primary" href="../contact.html?intent=quote&source=${topic.slug}">Ask For A Quick Quote</a>
          <a class="blog-btn" href="../engineering-oem.html">Get Engineering Support</a>
        </div>
      </section>
    </article>
  </main>
  <footer class="blog-footer">
    <div>
      <strong>YIYI MESH BELT</strong>
      <p>Automated metal conveyor belt manufacturer for OEMs, distributors, and replacement projects.</p>
    </div>
    <div>
      <a href="../contact.html?intent=drawing">Send Your Belt Drawing</a>
      <a href="../engineering-oem.html">Get Engineering Support</a>
      <a href="../products.html">All Products</a>
    </div>
  </footer>
  <script src="../assets/site-shell.js"></script>
</body>
</html>
`;
}

function cardHtml(topic) {
  return `        <a class="blog-card" href="blog/${topic.slug}.html">
          <div class="blog-card-photo-placeholder"><span>${esc(topic.cluster)}</span></div>
          <div>
            <span>${esc(topic.cluster)}</span>
            <h2>${esc(topic.title)}</h2>
            <p>${esc(topic.answer).slice(0, 190)}...</p>
            <strong>Read article -&gt;</strong>
          </div>
        </a>`;
}

for (const topic of topics) {
  fs.writeFileSync(path.join(blogDir, `${topic.slug}.html`), articleHtml(topic), "utf8");
}

const blogIndexPath = path.join(publicDir, "blog.html");
let indexHtml = fs.readFileSync(blogIndexPath, "utf8");
const startMarker = "        <!-- YIYI_COMPARISON_APPLICATION_BLOGS_START -->";
const endMarker = "        <!-- YIYI_COMPARISON_APPLICATION_BLOGS_END -->";
const block = `${startMarker}\n${topics.map(cardHtml).join("\n")}\n${endMarker}`;
const existing = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);
if (existing.test(indexHtml)) {
  indexHtml = indexHtml.replace(existing, block);
} else {
  indexHtml = indexHtml.replace(/\n\s*<aside class="blog-sidebar"[^>]*>/, (match) => `\n${block}${match}`);
}
fs.writeFileSync(blogIndexPath, indexHtml, "utf8");

console.log(`Generated ${topics.length} comparison/application blog articles.`);
for (const topic of topics) {
  console.log(`- public/blog/${topic.slug}.html`);
}
