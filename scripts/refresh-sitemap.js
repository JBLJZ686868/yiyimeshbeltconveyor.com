const fs = require("fs");
const path = require("path");

const publicDir = path.resolve(__dirname, "..", "public");
const siteUrl = "https://www.yiyimeshbelt.com";
const pages = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "assets") continue;
      walk(fullPath);
      continue;
    }
    if (!entry.name.toLowerCase().endsWith(".html")) continue;
    const rel = path.relative(publicDir, fullPath).replace(/\\/g, "/");
    if (rel.startsWith("homepage-")) continue;
    if (rel === "404.html") continue;
    pages.push(rel);
  }
}

walk(publicDir);

const urls = pages
  .sort((a, b) => a.localeCompare(b))
  .map((rel) => {
    const loc = rel === "index.html" ? `${siteUrl}/` : `${siteUrl}/${rel}`;
    const priority = rel === "index.html" ? "1.0" : rel === "blog.html" || rel === "knowledge-center.html" ? "0.8" : rel.startsWith("blog/") ? "0.7" : "0.6";
    return `  <url><loc>${loc}</loc><priority>${priority}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);
console.log(JSON.stringify({ pages: pages.length, sitemap: "public/sitemap.xml" }, null, 2));
