const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

const includeTargets = [
  "about.html",
  "case-studies.html",
  "engineering-oem.html",
  "exhibition.html",
  "global-delivery.html",
  "industries.html",
  "knowledge-center.html",
  "manufacturing.html",
  "quality-control.html",
  "raw-material.html",
  "replacement-parts.html",
  "replacement-review.html",
  "resources.html",
  "spiral-freezer-belt.html",
  "self-stacking-belt.html",
  "side-driven-belt.html",
  "eye-link-belt.html",
  "flat-wire-belt.html",
  "balanced-weave-belt.html",
  "chain-driven-belt.html",
  "chain-plate-belt.html",
  "compound-weave-belt.html",
  "connecting-accessories.html",
  "plastic-modular-belt.html",
  "trapezoidal-mesh-belt.html",
  "biscuit-belt.html",
  "belt-selection-guide.html",
  "belt-matching.html",
  "what-is-a-spiral-freezer-belt.html",
  "what-causes-conveyor-belt-tracking-problems.html",
  "why-in-house-wire-drawing-matters.html",
  "oem-conveyor-belt-partner.html",
  "distributor-conveyor-belt-supply.html",
  "geo-united-states-metal-conveyor-belt-manufacturer.html",
  "geo-germany-conveyor-belt-oem-supplier.html",
  "geo-japan-precision-conveyor-belt-supply.html",
  "404.html",
  "thank-you.html",
  "privacy-policy.html",
  "privacy-policy-20260306.html"
];

function injectStyles(html) {
  if (html.includes("site-refinement.css")) return html;
  if (html.includes("</head>")) {
    return html.replace("</head>", '<link rel="stylesheet" href="assets/site-refinement.css"/>\n</head>');
  }
  return html;
}

function injectShellScript(html) {
  if (html.includes("site-shell.js")) return html;
  if (html.includes("</body>")) {
    return html.replace("</body>", '<script src="assets/site-shell.js"></script>\n</body>');
  }
  return html;
}

for (const fileName of includeTargets) {
  const fullPath = path.join(publicDir, fileName);
  if (!fs.existsSync(fullPath)) continue;
  const original = fs.readFileSync(fullPath, "utf8");
  let updated = injectStyles(original);
  updated = injectShellScript(updated);
  if (updated !== original) {
    fs.writeFileSync(fullPath, updated, "utf8");
    console.log(`updated ${fileName}`);
  }
}
