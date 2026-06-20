const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const sourceDir = path.join(root, "content_sources", "blog-automation");
const draftsDir = path.join(sourceDir, "drafts");
const reviewDir = path.join(sourceDir, "review");
const topicPath = path.join(sourceDir, "topics.json");
const approvedPath = path.join(sourceDir, "approved.json");
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

function loadTopics() {
  return JSON.parse(fs.readFileSync(topicPath, "utf8"));
}

function articleBody(topic) {
  return [
    `# ${topic.title}`,
    ``,
    `Meta description: ${topic.meta}`,
    ``,
    `Target buyer: ${topic.buyer}`,
    ``,
    `Primary CTA: Send Your Belt Drawing / Ask For A Quick Quote / Get Engineering Support`,
    ``,
    `## Quick Answer`,
    `This article is written for overseas industrial buyers who are comparing suppliers, confirming technical fit, or preparing a replacement or OEM inquiry. The goal is to help the buyer understand the real engineering question behind ${topic.cluster}, then move toward a useful drawing review or quotation request.`,
    ``,
    `## Buyer Problem`,
    `Most sourcing problems do not begin with price. They begin with uncertainty: whether the belt type is correct, whether the drive system will match, whether the material and process are suitable, and whether the supplier can repeat the same specification later. For YIYI Mesh Belt, the article should connect search intent to factory proof, engineering support, and practical inquiry steps.`,
    ``,
    `## Technical Explanation`,
    `A metal conveyor belt must be evaluated as part of a system. Buyers should check belt width, pitch, rod diameter, edge type, material grade, working temperature, load, line speed, cleaning requirements, and matching parts such as sprockets, drums, or connecting rods. A belt that looks similar in a product photo may behave differently once it runs under load or temperature change.`,
    ``,
    `## YIYI Manufacturing Proof`,
    `YIYI Mesh Belt supports buyer confidence through real manufacturing capability: in-house wire drawing, robotic welding, forming, assembly, inspection, and export-ready delivery. These details matter because they influence consistency, lead time, quality control, and repeat order reliability.`,
    ``,
    `## What Buyers Should Send`,
    `Send drawings when available. If drawings are not available, send old belt photos, conveyor photos, belt width, pitch, rod diameter, edge style, material requirement, operating temperature, product type, and any visible drive component photos. This helps YIYI review the project before production and reduce mismatch risk.`,
    ``,
    `## Internal Links To Use`,
    `- ../${topic.primaryProduct}`,
    ...topic.supportLinks.map(link => `- ../${link}`),
    ``,
    `## Image Plan`,
    ...topic.imagePrompts.map((prompt, index) => `- Image ${index + 1}: ${prompt}`),
    ``,
    `## CTA Blocks`,
    `- Mid-article CTA: Have drawings or photos ready? Send them now for engineering review.`,
    `- Final CTA: Ask For A Quick Quote after confirming belt type, dimensions, and matching parts.`,
    ``,
    `## Review Checklist`,
    `- No fake customer data.`,
    `- No unsupported certification claims.`,
    `- No copied competitor wording.`,
    `- Product page links are relevant.`,
    `- CTA is clear and buyer-facing.`,
    `- Images should be replaced with real or generated visuals before final publishing when possible.`
  ].join("\n");
}

function draftHtml(topic, markdown) {
  const paragraphs = markdown
    .split("\n")
    .map(line => {
      if (line.startsWith("# ")) return `<h1>${esc(line.slice(2))}</h1>`;
      if (line.startsWith("## ")) return `<h2>${esc(line.slice(3))}</h2>`;
      if (line.startsWith("- ")) return `<li>${esc(line.slice(2))}</li>`;
      if (!line.trim()) return "";
      return `<p>${esc(line)}</p>`;
    })
    .join("\n")
    .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
    .replace(/<\/ul>\s*<ul>/g, "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DRAFT REVIEW | ${esc(topic.title)}</title>
  <style>
    body{font-family:Arial,sans-serif;line-height:1.7;background:#f4f7fb;color:#1e2a3a;margin:0}
    main{max-width:920px;margin:0 auto;background:white;padding:48px}
    .status{display:inline-block;background:#c8922a;color:white;padding:6px 12px;border-radius:999px;font-weight:700}
    h1{font-size:42px;line-height:1.08} h2{margin-top:34px;color:#12365a}
    p,li{font-size:17px;color:#425165} ul{background:#f7fafc;border:1px solid #d8e2ed;border-radius:12px;padding:18px 28px}
    .approve{margin-top:40px;padding:24px;background:#0d1b2a;color:white;border-radius:16px}
    code{background:#eaf1f8;padding:2px 6px;border-radius:4px}
  </style>
</head>
<body>
<main>
  <span class="status">DRAFT - NOT PUBLISHED</span>
  ${paragraphs}
  <div class="approve">
    <h2 style="color:white;margin-top:0">How to approve this article</h2>
    <p style="color:#d9e7f4">Add this slug to <code>content_sources/blog-automation/approved.json</code>, then run <code>npm run blog:publish</code>.</p>
    <p style="color:#d9e7f4">Slug: <code>${esc(topic.slug)}</code></p>
  </div>
</main>
</body>
</html>`;
}

function generateDrafts() {
  ensureDir(draftsDir);
  ensureDir(reviewDir);
  const topics = loadTopics();
  const reviewRows = [];

  for (const topic of topics) {
    const markdown = articleBody(topic);
    const mdPath = path.join(draftsDir, `${topic.slug}.md`);
    const htmlPath = path.join(reviewDir, `${topic.slug}.html`);
    fs.writeFileSync(mdPath, markdown, "utf8");
    fs.writeFileSync(htmlPath, draftHtml(topic, markdown), "utf8");
    reviewRows.push(`<tr><td>${esc(topic.title)}</td><td>${esc(topic.intent)}</td><td>${esc(topic.buyer)}</td><td><code>${esc(topic.slug)}</code></td><td><a href="review/${topic.slug}.html">Open draft</a></td></tr>`);
  }

  const dashboard = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>YIYI Blog Review Dashboard</title><style>body{font-family:Arial,sans-serif;background:#f4f7fb;color:#1e2a3a;padding:40px}main{max-width:1100px;margin:auto;background:white;padding:34px;border-radius:18px}table{width:100%;border-collapse:collapse}td,th{border-bottom:1px solid #d8e2ed;padding:14px;text-align:left}a{color:#1f5c9e;font-weight:700}.note{background:#0d1b2a;color:white;padding:20px;border-radius:14px}</style></head><body><main><h1>YIYI Blog Review Dashboard</h1><p>This dashboard is for manual review. Drafts are not published until their slugs are added to approved.json and <code>npm run blog:publish</code> is executed.</p><table><thead><tr><th>Title</th><th>Intent</th><th>Buyer</th><th>Slug</th><th>Draft</th></tr></thead><tbody>${reviewRows.join("\n")}</tbody></table><div class="note"><h2>Publishing rule</h2><p>Only approved slugs are published to public/blog. This protects SEO quality and avoids accidental live pages.</p></div></main></body></html>`;
  fs.writeFileSync(path.join(sourceDir, "review-dashboard.html"), dashboard, "utf8");
  console.log(`Generated ${topics.length} review drafts.`);
  console.log("Review dashboard: content_sources/blog-automation/review-dashboard.html");
}

function writeApprovedBlogIndex(topics) {
  const cards = topics.map(topic => {
    const image = `assets/blog/${topic.slug}-ai-visual-1.svg`;
    return `<a class="blog-card" href="blog/${topic.slug}.html">
      <img src="${image}" alt="${esc(topic.title)}">
      <div>
        <span>${esc(topic.cluster)}</span>
        <h2>${esc(topic.title)}</h2>
        <p>${esc(topic.meta)}</p>
        <strong>Read article -></strong>
      </div>
    </a>`;
  }).join("\n");

  const emptyState = `<div class="blog-empty-state">
    <h2>Articles are under review</h2>
    <p>YIYI Mesh Belt uses a reviewed publishing workflow. New engineering articles are drafted first, then published after manual approval.</p>
    <a class="blog-btn blog-btn-primary" href="contact.html?intent=drawing&source=blog-empty">Send Your Belt Drawing</a>
  </div>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YIYI Mesh Belt Blog | Engineering Articles for Industrial Belt Buyers</title>
  <meta name="description" content="Reviewed B2B blog hub for metal conveyor belt selection, replacement, manufacturing assurance, quality control, and OEM engineering support.">
  <link rel="canonical" href="${siteUrl}/blog.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/site-foundation.css">
  <link rel="stylesheet" href="assets/site-refinement.css">
  <link rel="stylesheet" href="assets/blog-automation.css">
</head>
<body class="blog-body">
  <header class="blog-top">
    <a href="index.html" class="blog-brand">YIYI MESH BELT</a>
    <nav>
      <a href="products.html">Products</a>
      <a href="knowledge-center.html">Knowledge</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html?intent=quote" class="blog-nav-cta">Ask For A Quick Quote</a>
    </nav>
  </header>
  <main>
    <section class="blog-index-hero">
      <div class="blog-kicker">Reviewed SEO Publishing System</div>
      <h1>Engineering Blog for Metal Conveyor Belt Buyers</h1>
      <p>Factory-backed articles built for overseas OEM buyers, distributors, and replacement teams. Articles are reviewed before publishing to protect SEO quality and buyer trust.</p>
      <div class="blog-cta-row">
        <a class="blog-btn blog-btn-primary" href="contact.html?intent=drawing&source=blog-index">Send Your Belt Drawing</a>
        <a class="blog-btn" href="knowledge-center.html">Knowledge Center</a>
      </div>
    </section>
    <section class="blog-index-grid">
      ${cards || emptyState}
    </section>
  </main>
  <footer class="blog-footer">
    <div>
      <strong>YIYI MESH BELT</strong>
      <p>Automated metal conveyor belt manufacturer for OEMs, distributors, and replacement projects.</p>
    </div>
    <div>
      <a href="contact.html?intent=drawing">Send Your Belt Drawing</a>
      <a href="engineering-oem.html">Get Engineering Support</a>
      <a href="products.html">All Products</a>
    </div>
  </footer>
  <script src="assets/site-shell.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(publicDir, "blog.html"), html, "utf8");
}

function publishApproved() {
  const approved = JSON.parse(fs.readFileSync(approvedPath, "utf8")).approvedSlugs || [];
  if (!approved.length) {
    console.log("No approved slugs. Add slugs to content_sources/blog-automation/approved.json first.");
    return;
  }

  const autoPublisher = path.join(__dirname, "auto-blog-publisher.js");
  require(autoPublisher);

  const topics = loadTopics().filter(topic => approved.includes(topic.slug));
  const blogDir = path.join(publicDir, "blog");
  const generated = fs.readdirSync(blogDir).filter(file => file.endsWith(".html"));
  for (const file of generated) {
    const slug = file.replace(/\.html$/, "");
    if (!approved.includes(slug)) {
      fs.unlinkSync(path.join(blogDir, file));
    }
  }

  writeApprovedBlogIndex(topics);

  const urls = new Set(
    fs.readdirSync(publicDir)
      .filter(file => file.endsWith(".html"))
      .map(file => file === "index.html" ? `${siteUrl}/` : `${siteUrl}/${file}`)
  );
  topics.forEach(topic => urls.add(`${siteUrl}/blog/${topic.slug}.html`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Array.from(urls).sort().map(url => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
  console.log(`Published ${topics.length} approved articles.`);
}

const mode = process.argv[2] || "draft";
if (mode === "draft") generateDrafts();
else if (mode === "publish") publishApproved();
else {
  console.log("Usage: node scripts/review-blog-workflow.js draft|publish");
  process.exit(1);
}
