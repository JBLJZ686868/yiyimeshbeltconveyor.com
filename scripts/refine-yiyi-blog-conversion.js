const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const blogDir = path.join(publicDir, 'blog');

const supportBlock = `
      <section class="blog-final-tools" aria-label="RFQ preparation tools">
        <div>
          <div class="blog-kicker">RFQ TOOLKIT</div>
          <h2>Before You Ask for a Quote</h2>
          <p>Prepare a few practical details and the review becomes much faster: belt photos, drive-end photos, key dimensions, operating temperature, product load, and any old drawing or sample information.</p>
          <div class="blog-tool-grid">
            <a href="../contact.html?intent=drawing&source=blog-rfq-toolkit">Send Belt Drawing</a>
            <a href="../belt-matching.html">Belt Matching Service</a>
            <a href="../replacement-review.html">Replacement Review</a>
            <a href="../engineering-oem.html">Engineering & OEM Support</a>
          </div>
        </div>
      </section>

      <section class="blog-related-reading" aria-label="Related engineering reading">
        <div class="blog-kicker">RELATED ENGINEERING READING</div>
        <h2>Continue With the Most Useful Next Page</h2>
        <div class="blog-related-grid">
          <a href="../spiral-freezer-belt.html"><span>Product</span><strong>Spiral Freezer Belt</strong><small>For IQF systems, spiral towers, freezing and cooling lines.</small></a>
          <a href="../self-stacking-belt.html"><span>Product</span><strong>Self-Stacker Belt</strong><small>For compact spiral freezer and bakery cooling systems.</small></a>
          <a href="../eye-link-belt.html"><span>Product</span><strong>Eye Link Belt</strong><small>For heavy-duty food, washing, drying, and industrial conveying.</small></a>
          <a href="../quality-control.html"><span>Quality</span><strong>Verified Quality System</strong><small>See inspection logic before shipment and replacement review.</small></a>
        </div>
      </section>
`;

for (const file of fs.readdirSync(blogDir).filter((name) => name.endsWith('.html'))) {
  const full = path.join(blogDir, file);
  let html = fs.readFileSync(full, 'utf8');
  if (html.includes('blog-final-tools')) continue;
  html = html.replace(/\s+<\/article>/, `${supportBlock}\n    </article>`);
  fs.writeFileSync(full, html);
}

const cssPath = path.join(publicDir, 'assets', 'blog-automation.css');
let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes('.blog-final-tools')) {
  css += `
.blog-final-tools{margin:38px clamp(22px,5vw,58px);padding:28px;border:1px solid var(--blog-line);border-radius:22px;background:linear-gradient(135deg,#f8fbfe,#eef5fb);box-shadow:0 18px 50px rgba(21,43,68,.08)}
.blog-final-tools h2,.blog-related-reading h2{font-size:30px;line-height:1.15;margin:10px 0 12px;color:var(--blog-text)}
.blog-final-tools p{max-width:760px;color:#425165;margin:0 0 18px}
.blog-tool-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.blog-tool-grid a{display:flex;align-items:center;justify-content:center;min-height:54px;padding:12px 14px;border-radius:12px;background:white;border:1px solid var(--blog-line);color:#1F5C9E;text-decoration:none;font-weight:800;text-align:center}
.blog-related-reading{padding:34px clamp(22px,5vw,58px);border-top:1px solid #edf2f7}
.blog-related-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.blog-related-grid a{padding:18px;border-radius:18px;border:1px solid var(--blog-line);background:#fff;text-decoration:none;color:var(--blog-text);box-shadow:0 14px 42px rgba(21,43,68,.06)}
.blog-related-grid span{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--blog-gold);font-weight:800}
.blog-related-grid strong{display:block;margin:8px 0;color:#0D1B2A;font-size:18px;line-height:1.2}
.blog-related-grid small{display:block;color:#5B6B7F;line-height:1.5}
@media(max-width:900px){.blog-tool-grid,.blog-related-grid{grid-template-columns:1fr}}
`;
  fs.writeFileSync(cssPath, css);
}

const blogIndexPath = path.join(publicDir, 'blog.html');
let blogIndex = fs.readFileSync(blogIndexPath, 'utf8');
blogIndex = blogIndex
  .replace('<h2>Next Writing Queue</h2>', '<h2>Editorial Topic Clusters</h2>')
  .replace('Suggest a Topic ->', 'Request a Custom Topic ->');
fs.writeFileSync(blogIndexPath, blogIndex);

console.log('Refined blog article conversion blocks and blog sidebar labels.');
