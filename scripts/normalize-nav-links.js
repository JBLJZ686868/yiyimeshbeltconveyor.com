const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

const replacements = [
  [
    /<button class="nd-btn gold-btn">([\s\S]*?)Core Systems([\s\S]*?)<\/button>/g,
    '<a href="products.html#strategic" class="nd-btn gold-btn nd-link">$1Core Systems$2</a>'
  ],
  [
    /<button class="nd-btn">All Products([\s\S]*?)<\/button>/g,
    '<a href="products.html" class="nd-btn nd-link">All Products$1</a>'
  ],
  [
    /<button class="nd-btn">Industries([\s\S]*?)<\/button>/g,
    '<a href="industries.html" class="nd-btn nd-link">Industries$1</a>'
  ],
  [
    /<button class="nd-btn">Engineering &amp; OEM([\s\S]*?)<\/button>/g,
    '<a href="engineering-oem.html" class="nd-btn nd-link">Engineering &amp; OEM$1</a>'
  ],
  [
    /<button class="nd-btn">Manufacturing Assurance([\s\S]*?)<\/button>/g,
    '<a href="manufacturing.html" class="nd-btn nd-link">Manufacturing Assurance$1</a>'
  ],
  [
    /<button class="nd-btn">About YIYI([\s\S]*?)<\/button>/g,
    '<a href="about.html" class="nd-btn nd-link">About YIYI$1</a>'
  ],
  [
    /<button class="nd-btn">Knowledge Center([\s\S]*?)<\/button>/g,
    '<a href="knowledge-center.html" class="nd-btn nd-link">Knowledge Center$1</a>'
  ],
  [
    /<button class="nd-btn">Contact([\s\S]*?)<\/button>/g,
    '<a href="contact.html" class="nd-btn nd-link">Contact$1</a>'
  ],
  [
    /href="contact\.html" class="dl"><span class="dl-icon">&#128196;<\/span><span class="dl-label">Request a Quote<\/span><\/a>/g,
    'href="contact.html?intent=quote" class="dl"><span class="dl-icon">&#128196;</span><span class="dl-label">Request a Quote</span></a>'
  ],
  [
    /href="contact\.html" class="dl"><span class="dl-icon">&#128395;<\/span><span class="dl-label">Send Drawing<\/span><\/a>/g,
    'href="contact.html?intent=drawing" class="dl"><span class="dl-icon">&#128395;</span><span class="dl-label">Send Drawing</span></a>'
  ],
  [
    /href="contact\.html" class="dl"><span class="dl-icon">&#128172;<\/span><span class="dl-label">Talk to Engineer<\/span><\/a>/g,
    'href="contact.html?intent=engineering" class="dl"><span class="dl-icon">&#128172;</span><span class="dl-label">Talk to Engineer</span></a>'
  ],
  [
    /href="contact\.html" class="dl"><span class="dl-icon">&#127970;<\/span><span class="dl-label">Factory Visit<\/span><\/a>/g,
    'href="contact.html?intent=visit" class="dl"><span class="dl-icon">&#127970;</span><span class="dl-label">Factory Visit</span></a>'
  ],
  [
    /href="contact\.html" class="btn-nav-quote">Get a Quote/g,
    'href="contact.html?intent=quote" class="btn-nav-quote">Get a Quote'
  ],
  [
    /href="contact\.html" class="mob-cta">Get a Quote/g,
    'href="contact.html?intent=quote" class="mob-cta">Get a Quote'
  ],
  [
    /<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">Core Systems<\/div>\s*/g,
    '$&<a href="products.html#strategic" class="mob-link">Core Systems Overview</a>\n'
  ],
  [
    /<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">Industries<\/div>\s*/g,
    '$&<a href="industries.html" class="mob-link">Industries Overview</a>\n'
  ],
  [
    /<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">Manufacturing Assurance<\/div>\s*/g,
    '$&<a href="manufacturing.html" class="mob-link">Manufacturing Overview</a>\n'
  ],
  [
    /<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">Knowledge Center<\/div>\s*/g,
    '$&<a href="knowledge-center.html" class="mob-link">Knowledge Center Overview</a>\n'
  ]
];

function dedupeOverviewLinks(html) {
  return html
    .replace(/(<a href="products\.html#strategic" class="mob-link">Core Systems Overview<\/a>\s*){2,}/g, '$1')
    .replace(/(<a href="industries\.html" class="mob-link">Industries Overview<\/a>\s*){2,}/g, '$1')
    .replace(/(<a href="manufacturing\.html" class="mob-link">Manufacturing Overview<\/a>\s*){2,}/g, '$1')
    .replace(/(<a href="knowledge-center\.html" class="mob-link">Knowledge Center Overview<\/a>\s*){2,}/g, '$1');
}

function refineNavArchitecture(html) {
  html = html.replace(
    /<a href="spiral-freezer-belt\.html" class="core-dl">[\s\S]*?<a href="drive-sprockets\.html" class="core-dl">[\s\S]*?<\/a>/,
    `<a href="spiral-freezer-belt.html" class="core-dl"><span class="cdl-icon">&#10052;</span><div style="flex:1"><span class="cdl-name">Spiral Freezer Belt</span></div><span class="cdl-badge">STRATEGIC</span></a>
              <a href="self-stacking-belt.html" class="core-dl"><span class="cdl-icon">&#8635;</span><div style="flex:1"><span class="cdl-name">Self-Stacker Belt</span></div><span class="cdl-badge">STRATEGIC</span></a>
              <a href="eye-link-belt.html" class="core-dl"><span class="cdl-icon">&#128279;</span><div style="flex:1"><span class="cdl-name">Eye Link Belt</span></div><span class="cdl-badge">STRATEGIC</span></a>
              <a href="side-driven-belt.html" class="core-dl"><span class="cdl-icon">&#10145;</span><div style="flex:1"><span class="cdl-name">Side Driven Belt</span></div></a>
              <a href="flat-wire-belt.html" class="core-dl"><span class="cdl-icon">&#9646;</span><div style="flex:1"><span class="cdl-name">Flat Wire Honeycomb Conveyor Belt</span></div></a>
              <a href="drive-sprockets.html" class="core-dl"><span class="cdl-icon">&#9881;</span><div style="flex:1"><span class="cdl-name">Drive Sprockets</span><span class="cdl-sub">(System Matched)</span></div></a>`
  );

  html = html.replace(
    /<div class="nd">\s*<a href="(?:about|manufacturing)\.html" class="nd-btn nd-link">About YIYI[\s\S]*?(?=\s*<div class="nd">\s*<a href="knowledge-center\.html" class="nd-btn nd-link">Knowledge Center)/,
    `<div class="nd">
        <a href="about.html" class="nd-btn nd-link">About YIYI <svg class="nd-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="drop-panel" style="min-width:260px">
          <div class="drop-box">
            <div class="drop-blue-bar"></div>
            <div class="drop-body">
              <a href="about.html" class="dl"><span class="dl-icon">&#127970;</span><span class="dl-label">Company Overview</span></a>
              <a href="quality-control.html" class="dl"><span class="dl-icon">&#127942;</span><span class="dl-label">Certifications &amp; QA</span></a>
              <a href="manufacturing.html" class="dl"><span class="dl-icon">&#128161;</span><span class="dl-label">Patents &amp; Manufacturing Strength</span></a>
              <a href="exhibition.html" class="dl"><span class="dl-icon">&#127760;</span><span class="dl-label">Exhibitions &amp; Visits</span></a>
              <a href="global-delivery.html" class="dl"><span class="dl-icon">&#127758;</span><span class="dl-label">Global Delivery</span></a>
            </div>
          </div>
        </div>
      </div>`
  );

  html = html.replace(
    /<div class="mega-grid">[\s\S]*?<div class="mega-col">\s*<div style="font-family:var\(--font-mono\);font-size:11px;letter-spacing:\.14em;text-transform:uppercase;color:#C8922A;margin-bottom:12px">Product Index<\/div>[\s\S]*?<\/div>\s*<\/div>/,
    `<div class="mega-grid">
              <div class="mega-col">
                <div class="mega-head">Core Pages</div>
                <a href="spiral-freezer-belt.html" class="dl"><span class="dl-icon">&#10052;</span><span class="dl-label">Spiral Freezer Belt</span><span class="dl-badge">OEM</span></a>
                <a href="self-stacking-belt.html" class="dl"><span class="dl-icon">&#8635;</span><span class="dl-label">Self-Stacker Belt</span><span class="dl-badge">OEM</span></a>
                <a href="eye-link-belt.html" class="dl"><span class="dl-icon">&#128279;</span><span class="dl-label">Eye Link Belt</span><span class="dl-badge">Food</span></a>
                <a href="side-driven-belt.html" class="dl"><span class="dl-icon">&#10145;</span><span class="dl-label">Side-Driven Belt</span></a>
                <a href="drive-sprockets.html" class="dl"><span class="dl-icon">&#9881;</span><span class="dl-label">Drive Sprockets</span></a>
              </div>
              <div class="mega-col">
                <div class="mega-head">Food Processing</div>
                <a href="flat-wire-belt.html" class="dl"><span class="dl-icon">&#9646;</span><span class="dl-label">Flat Wire Honeycomb Conveyor Belt</span></a>
                <a href="biscuit-belt.html" class="dl"><span class="dl-icon">&#127850;</span><span class="dl-label">Biscuit Belt</span></a>
                <a href="balanced-weave-belt.html" class="dl"><span class="dl-icon">&#9878;</span><span class="dl-label">Balanced Weave Belt</span></a>
                <a href="plastic-modular-belt.html" class="dl"><span class="dl-icon">&#10035;</span><span class="dl-label">Plastic Modular Belt</span></a>
              </div>
              <div class="mega-col">
                <div class="mega-head">Heavy Duty &amp; Parts</div>
                <a href="compound-weave-belt.html" class="dl"><span class="dl-icon">&#12336;</span><span class="dl-label">Compound Weave Belt</span></a>
                <a href="chain-driven-belt.html" class="dl"><span class="dl-icon">&#9881;</span><span class="dl-label">Chain-Driven Belt</span></a>
                <a href="chain-plate-belt.html" class="dl"><span class="dl-icon">&#127959;</span><span class="dl-label">Chain Plate Belt</span></a>
                <a href="trapezoidal-mesh-belt.html" class="dl"><span class="dl-icon">&#9650;</span><span class="dl-label">Trapezoidal Mesh Belt</span></a>
                <a href="connecting-accessories.html" class="dl"><span class="dl-icon">&#128204;</span><span class="dl-label">Pins &amp; Connecting Rods</span></a>
                <a href="replacement-parts.html" class="dl"><span class="dl-icon">&#128297;</span><span class="dl-label">Replacement Parts</span></a>
              </div>
              <div class="mega-col">
                <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#C8922A;margin-bottom:12px">Need Help Choosing?</div>
                <p style="color:rgba(255,255,255,.9);font-size:16px;font-weight:700;line-height:1.35;flex:1">Start with the right path for your project: browse, send a drawing, or ask engineering to confirm the belt type.</p>
                <a href="products.html" style="color:#4A8CC8;font-size:14px;font-weight:600;margin-top:auto;display:block;padding-top:16px">Browse All Products &#8594;</a>
                <a href="contact.html?intent=drawing" style="color:#4A8CC8;font-size:14px;font-weight:600;display:block;padding-top:10px">Send Drawing &#8594;</a>
                <a href="engineering-oem.html?intent=engineering" style="color:#4A8CC8;font-size:14px;font-weight:600;display:block;padding-top:10px">Talk to Engineer &#8594;</a>
              </div>
            </div>`
  );

  html = html.replace(
    /<div class="mega-head">Technical Resources<\/div>[\s\S]*?<a href="engineering-oem\.html" class="dl"><span class="dl-icon">&#127991;<\/span><span class="dl-label">OEM Private Label<\/span><\/a>/,
    `<div class="mega-head">Technical Resources</div>
                <a href="engineering-oem.html" class="dl"><span class="dl-icon">&#128295;</span><span class="dl-label">Engineering &amp; OEM Overview</span></a>
                <a href="engineering-oem.html" class="dl"><span class="dl-icon">&#128395;</span><span class="dl-label">Drawing Review</span></a>
                <a href="replacement-review.html" class="dl"><span class="dl-icon">&#128260;</span><span class="dl-label">Replacement Projects</span></a>
                <a href="belt-matching.html" class="dl"><span class="dl-icon">&#128269;</span><span class="dl-label">Belt Matching Service</span></a>
                <a href="belt-selection-guide.html" class="dl"><span class="dl-icon">&#128203;</span><span class="dl-label">Belt Selection Guide</span></a>
                <a href="engineering-oem.html" class="dl"><span class="dl-icon">&#127991;</span><span class="dl-label">OEM Private Label</span></a>`
  );

  html = html.replace(
    /<div class="nd">\s*<a href="knowledge-center\.html" class="nd-btn nd-link">Knowledge Center[\s\S]*?(?=\s*<div class="nd">\s*<a href="contact\.html" class="nd-btn nd-link">Contact)/,
    `<div class="nd">
        <a href="knowledge-center.html" class="nd-btn nd-link">Knowledge Center <svg class="nd-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="drop-panel" style="min-width:240px">
          <div class="drop-box">
            <div class="drop-blue-bar"></div>
            <div class="drop-body">
              <a href="knowledge-center.html" class="dl"><span class="dl-icon">&#128218;</span><span class="dl-label">Knowledge Center Overview</span></a>
              <a href="belt-selection-guide.html" class="dl"><span class="dl-icon">&#128203;</span><span class="dl-label">Selection Guide</span></a>
              <a href="what-is-a-spiral-freezer-belt.html" class="dl"><span class="dl-icon">&#10052;</span><span class="dl-label">Spiral Engineering Basics</span></a>
              <a href="case-studies.html" class="dl"><span class="dl-icon">&#128202;</span><span class="dl-label">Case Studies</span></a>
              <a href="resources.html" class="dl"><span class="dl-icon">&#128229;</span><span class="dl-label">Downloads &amp; Resources</span></a>
            </div>
          </div>
        </div>
      </div>`
  );

  html = html.replace(
    /<a href="contact\.html" class="mob-link">Contact<\/a>\s*<a href="contact\.html\?intent=quote" class="mob-cta">Get a Quote/g,
    `<a href="contact.html" class="mob-link">Contact Overview</a>
      <a href="contact.html?intent=quote" class="mob-link">Request a Quote</a>
      <a href="contact.html?intent=drawing" class="mob-link">Send Drawing</a>
      <a href="contact.html?intent=engineering" class="mob-link">Talk to Engineer</a>
      <a href="contact.html?intent=visit" class="mob-link">Factory Visit</a>
      <a href="contact.html?intent=quote" class="mob-cta">Get a Quote`
  );

  html = html.replace(
    /<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">About YIYI<\/div>[\s\S]*?(?=<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">Knowledge Center<\/div>)/,
    `<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba(255,255,255,.07);margin-top:6px">About YIYI</div>
      <a href="about.html" class="mob-link">Company Overview</a>
      <a href="quality-control.html" class="mob-link">Certifications &amp; QA</a>
      <a href="manufacturing.html" class="mob-link">Patents &amp; Manufacturing Strength</a>
      <a href="exhibition.html" class="mob-link">Exhibitions &amp; Visits</a>
      <a href="global-delivery.html" class="mob-link">Global Delivery</a>

      `
  );

  html = html.replace(
    /<div style="font-family:var\(--font-mono\);font-size:10px;letter-spacing:\.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba\(255,255,255,\.07\);margin-top:6px">Knowledge Center<\/div>[\s\S]*?(?=<div style="border-top:1px solid rgba\(255,255,255,\.07\);margin-top:10px;padding-top:10px"><\/div>)/,
    `<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#C8922A;padding:14px 0 4px 0;border-top:1px solid rgba(255,255,255,.07);margin-top:6px">Knowledge Center</div>
      <a href="knowledge-center.html" class="mob-link">Knowledge Center Overview</a>
      <a href="belt-selection-guide.html" class="mob-link">Selection Guide</a>
      <a href="what-is-a-spiral-freezer-belt.html" class="mob-link">Spiral Engineering Basics</a>
      <a href="case-studies.html" class="mob-link">Case Studies</a>
      <a href="resources.html" class="mob-link">Downloads &amp; Resources</a>

      `
  );

  return html;
}

for (const entry of fs.readdirSync(publicDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
  const fullPath = path.join(publicDir, entry.name);
  const original = fs.readFileSync(fullPath, "utf8");
  let updated = original;

  for (const [pattern, replacement] of replacements) {
    updated = updated.replace(pattern, replacement);
  }

  updated = refineNavArchitecture(updated);
  updated = dedupeOverviewLinks(updated);

  if (updated !== original) {
    fs.writeFileSync(fullPath, updated, "utf8");
    console.log(`updated ${entry.name}`);
  }
}
