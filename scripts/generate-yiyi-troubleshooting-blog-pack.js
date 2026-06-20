const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const blogDir = path.join(publicDir, "blog");
const date = "2026-06-17";

const links = [
  ["Spiral Freezer Belt", "../spiral-freezer-belt.html"],
  ["Self-Stacker Belt", "../self-stacking-belt.html"],
  ["Eye Link Belt", "../eye-link-belt.html"],
  ["Flat Wire Belt", "../flat-wire-belt.html"],
  ["Chain Driven Belt", "../chain-driven-belt.html"],
  ["Drive Sprockets", "../drive-sprockets.html"],
  ["Belt Matching Service", "../belt-matching.html"],
  ["Send Drawing", "../contact.html?intent=drawing"],
];

const topics = [
  {
    title: "Why Does a Spiral Freezer Belt Collapse?",
    slug: "why-does-a-spiral-freezer-belt-collapse",
    category: "Troubleshooting / Spiral Freezer",
    product: "Spiral Freezer Belt",
    productUrl: "../spiral-freezer-belt.html",
    meta: "Troubleshooting guide explaining spiral freezer belt collapse causes, inspection photos, replacement checks, and engineering confirmation before RFQ.",
    answer: "A spiral freezer belt usually collapses because the belt edge, pitch, support rail, drum diameter, load, tension, or turning radius is not matched correctly. Collapse can also come from worn components, side rubbing, uneven loading, corrosion, or fatigue after long operation.",
    symptoms: ["Belt layer drops inside the spiral tower", "Edge plates deform or rub", "Product movement becomes unstable", "Noise increases near the turn", "Belt rods bend or pull out"],
    causes: ["Wrong edge structure or side plate height", "Overload or uneven product distribution", "Support rail wear or tower alignment issue", "Pitch mismatch with drive drum or sprocket", "Material fatigue or corrosion"],
    checks: [["Edge height", "Confirm side plate or edge link supports the stacking path."], ["Pitch", "Measure an unworn section and compare with the drive system."], ["Turning radius", "Check whether the belt is forced beyond its design limit."], ["Support rail", "Look for worn, broken, or uneven rail contact points."], ["Load", "Confirm product weight, distribution, and start-stop frequency."]],
    insight: "In replacement projects, we do not treat collapse as only a belt problem. We first ask for photos of the failed edge, tower path, drive area, and support rail. Many collapse cases show a system problem before they show a belt problem.",
    cta: "Send collapsed belt photos and tower dimensions for engineering review."
  },
  {
    title: "Why Does a Conveyor Belt Track to One Side?",
    slug: "why-does-a-conveyor-belt-track-to-one-side",
    category: "Troubleshooting / Tracking",
    product: "Metal Conveyor Belt",
    productUrl: "../products.html",
    meta: "Engineering guide to conveyor belt tracking problems, including alignment, sprocket matching, tension, edge wear, and replacement inspection photos.",
    answer: "A conveyor belt tracks to one side when the conveyor frame, rollers, sprockets, tension, belt edge, or loading is uneven. For metal conveyor belts, tracking problems often come from worn drive parts, misaligned shafts, uneven product loading, or a belt that was not matched to the system.",
    symptoms: ["Belt walks toward one side", "Edge rub marks appear", "Product transfer becomes uneven", "Sprocket engagement is noisy", "One side wears faster than the other"],
    causes: ["Conveyor frame or shaft misalignment", "Uneven tension left to right", "Worn sprocket or roller", "Uneven loading at the infeed", "Belt edge deformation"],
    checks: [["Shaft alignment", "Check whether drive and idle shafts are parallel."], ["Tension balance", "Compare left and right side tension."], ["Sprockets", "Inspect wear, spacing, and tooth engagement."], ["Belt edge", "Look for bending, burrs, or rubbing marks."], ["Loading point", "Confirm product falls into the center of the belt."]],
    insight: "When a buyer says the belt is tracking badly, we ask for a short video from the infeed, drive end, and return section. A video often shows whether the belt itself is moving wrong or whether the conveyor is pushing it sideways.",
    cta: "Send a short tracking video and drive-end photos."
  },
  {
    title: "Why Does a Chain Driven Belt Jump on Sprockets?",
    slug: "why-does-a-chain-driven-belt-jump-on-sprockets",
    category: "Troubleshooting / Sprockets",
    product: "Chain Driven Belt",
    productUrl: "../chain-driven-belt.html",
    meta: "Troubleshooting guide for chain driven belt jumping on sprockets, covering pitch mismatch, worn sprockets, tension, shaft alignment, and replacement checks.",
    answer: "A chain driven belt jumps on sprockets when the belt pitch, chain pitch, sprocket tooth profile, shaft alignment, or tension is wrong. Worn sprockets, uneven chain elongation, debris, and overload can also cause jumping during operation.",
    symptoms: ["Belt skips teeth during start-up", "Drive area makes impact noise", "Chain edge lifts from sprocket", "Belt moves unevenly", "Sprocket teeth show abnormal wear"],
    causes: ["Pitch mismatch between chain and sprocket", "Worn or damaged sprocket teeth", "Shaft misalignment", "Loose or uneven tension", "Load shock or material buildup"],
    checks: [["Chain pitch", "Measure several links, not only one point."], ["Sprocket profile", "Check tooth wear and root clearance."], ["Shaft parallelism", "Confirm drive and idle shafts are square."], ["Tension", "Avoid both over-tension and loose engagement."], ["Debris", "Clean product residue around sprocket pockets."]],
    insight: "We often recommend checking sprockets together with the belt. A new belt on badly worn sprockets can jump again quickly, which makes the replacement look wrong even when the belt was produced correctly.",
    cta: "Send sprocket photos with pitch and tooth count."
  },
  {
    title: "Why Do Eye Link Belts Break Under Heavy Load?",
    slug: "why-do-eye-link-belts-break-under-heavy-load",
    category: "Troubleshooting / Heavy Load",
    product: "Eye Link Belt",
    productUrl: "../eye-link-belt.html",
    meta: "Engineering troubleshooting guide for eye link belt breakage under heavy load, including rod size, link wire, sprockets, load shock, and inspection checklist.",
    answer: "Eye link belts break under heavy load when the rod diameter, link wire diameter, pitch, support, material, or drive matching is not suitable for the real operating load. Breakage can also come from shock loading, worn sprockets, corrosion, or repeated bending fatigue.",
    symptoms: ["Links open or crack", "Cross rods bend", "Edge pulls apart", "Belt breaks near the drive end", "Heavy product causes sagging"],
    causes: ["Load exceeds belt design", "Rod or wire diameter too small", "Shock load during start-stop operation", "Sprocket or support mismatch", "Corrosion or fatigue cracks"],
    checks: [["Load per meter", "Confirm product weight and distribution."], ["Rod diameter", "Check whether rods can support the span."], ["Wire diameter", "Confirm link strength for pulling load."], ["Support spacing", "Review rails, rollers, and unsupported span."], ["Drive engagement", "Inspect sprockets and edge drive points."]],
    insight: "In heavy-duty projects, we ask for both static load and operating behavior. A belt may hold product when stopped but fail under repeated start-stop shock. That difference matters in real equipment.",
    cta: "Send product load, speed, and broken-link photos."
  },
  {
    title: "Why Does a Flat Wire Belt Deform During Operation?",
    slug: "why-does-a-flat-wire-belt-deform-during-operation",
    category: "Troubleshooting / Flat Wire Belt",
    product: "Flat Wire Belt",
    productUrl: "../flat-wire-belt.html",
    meta: "Troubleshooting guide explaining flat wire belt deformation causes, including load, temperature, edge pull, support, opening size, and material selection.",
    answer: "A flat wire belt deforms when load, temperature, tension, support spacing, edge pull, or drive force exceeds the belt design. Deformation can also result from wrong wire thickness, wrong rod diameter, impact loading, or heat expansion not being considered.",
    symptoms: ["Belt surface becomes wavy", "Openings become uneven", "Edges curl or bend", "Product no longer sits flat", "Tracking becomes unstable"],
    causes: ["Overload or impact load", "Wire thickness too light", "High temperature expansion", "Poor support under the belt", "Uneven edge tension"],
    checks: [["Wire thickness", "Confirm flat wire size against load and span."], ["Rod diameter", "Check cross rod stiffness."], ["Temperature", "Review working and peak temperature."], ["Support spacing", "Reduce long unsupported spans if needed."], ["Edge condition", "Look for one-sided pull or rub marks."]],
    insight: "When we see flat wire deformation, we look at the pattern. Center sag points to load or support. Edge curling points to tension or tracking. Heat deformation often appears more evenly across the belt width.",
    cta: "Send top-view photos and working temperature."
  },
  {
    title: "What Causes Self-Stacking Belt Failure in Spiral Freezers?",
    slug: "what-causes-self-stacking-belt-failure-in-spiral-freezers",
    category: "Troubleshooting / Self-Stacker",
    product: "Self-Stacker Belt",
    productUrl: "../self-stacking-belt.html",
    meta: "Troubleshooting guide for self-stacking belt failure in spiral freezers, covering stacking edge, side plates, pitch, load, turning path, and replacement review.",
    answer: "Self-stacking belt failure usually comes from incorrect side plate geometry, pitch mismatch, overload, stacking interference, tower alignment problems, or fatigue in the edge structure. The edge is part of the spiral system, so small dimensional errors can create serious running problems.",
    symptoms: ["Stacking layers rub or interfere", "Side plates crack or deform", "Belt lifts unevenly", "Product shakes in the spiral path", "Edge wear appears in repeated positions"],
    causes: ["Wrong stacking height", "Side plate or edge mismatch", "Tower path alignment issue", "Overload or uneven loading", "Repeated fatigue at rods or plates"],
    checks: [["Stacking height", "Measure side plate height and layer clearance."], ["Pitch", "Confirm pitch across several sections."], ["Edge plate", "Inspect cracks, burrs, and deformation."], ["Tower alignment", "Check repeated rubbing positions."], ["Old sample", "Compare new spec against an unworn sample if available."]],
    insight: "For self-stacker belts, we pay special attention to the edge. A small side plate difference can change how the belt carries itself in the spiral path. That is why photos of the edge are more important than general surface photos.",
    cta: "Send edge photos, side plate dimensions, and freezer tower model."
  },
  {
    title: "Why Do Conveyor Belts Stretch or Lose Tension?",
    slug: "why-do-conveyor-belts-stretch-or-lose-tension",
    category: "Troubleshooting / Tension",
    product: "Metal Conveyor Belt",
    productUrl: "../products.html",
    meta: "Troubleshooting guide for conveyor belts stretching or losing tension, covering pitch elongation, load, material fatigue, sprocket wear, and tension adjustment.",
    answer: "Conveyor belts stretch or lose tension because rods, links, chains, or belt joints elongate under load, wear, heat, or repeated bending. In metal belts, the issue is often pitch elongation, edge wear, worn sprockets, incorrect take-up adjustment, or overload.",
    symptoms: ["Belt becomes loose", "Pitch measures longer than original", "Drive engagement becomes poor", "Belt sags between supports", "Take-up reaches its limit"],
    causes: ["Normal wear after long use", "Overload or shock load", "High temperature or corrosion fatigue", "Worn sprockets accelerate pitch wear", "Incorrect tension adjustment"],
    checks: [["Pitch elongation", "Measure multiple pitches and compare with original spec."], ["Take-up range", "Check whether adjustment has reached the end."], ["Sprocket wear", "Inspect tooth shape and engagement."], ["Load history", "Review overload and start-stop frequency."], ["Joint area", "Check connection points and repair sections."]],
    insight: "We prefer to measure pitch over multiple repeats, not only one pitch. A single measurement can hide accumulated elongation. Multiple-pitch measurement gives a clearer view of real belt condition.",
    cta: "Send pitch measurement photos and take-up position."
  },
  {
    title: "Why Does a Spiral Freezer Belt Run Unstable?",
    slug: "why-does-a-spiral-freezer-belt-run-unstable",
    category: "Troubleshooting / Spiral Stability",
    product: "Spiral Freezer Belt",
    productUrl: "../spiral-freezer-belt.html",
    meta: "Troubleshooting guide for unstable spiral freezer belt running, including tracking, tension, edge wear, drive matching, tower alignment, and inspection photos.",
    answer: "A spiral freezer belt runs unstable when tracking, tension, edge support, drive matching, tower alignment, or load distribution is not controlled. Unstable running can also come from worn rails, uneven product loading, old belt fatigue, or incorrect replacement dimensions.",
    symptoms: ["Belt shakes in the tower", "Tracking changes during operation", "Product position moves unexpectedly", "Edge rubbing appears", "Noise changes by speed or load"],
    causes: ["Uneven tension or tracking", "Drive drum or sprocket mismatch", "Worn support rail", "Tower alignment issue", "Belt fatigue or wrong replacement spec"],
    checks: [["Running video", "Record infeed, spiral path, and drive area."], ["Edge wear", "Check repeated rubbing marks."], ["Tension", "Confirm both sides are balanced."], ["Drive system", "Inspect drum or sprocket engagement."], ["Load pattern", "Review product distribution and belt speed."]],
    insight: "Unstable running is rarely solved by guessing. We ask for video first because movement tells us what still photos cannot show. The belt path, shake point, and drive timing usually reveal the next check.",
    cta: "Send a running video and belt specification for review."
  }
];

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function rows(rows) {
  return rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("\n");
}

function list(items) {
  return items.map((item) => `<li>${esc(item)}</li>`).join("\n");
}

function photoSlots(topic) {
  const captions = [
    "Failure point close-up: edge, rod, sprocket, or broken area.",
    "System context: drive end, return path, spiral tower, or conveyor frame.",
    "Measurement proof: pitch, rod diameter, wire diameter, width, or tension position."
  ];
  return captions.map((caption, index) => `
        <figure class="blog-photo-slot">
          <div class="slot-mark">TROUBLESHOOTING PHOTO ${index + 1}</div>
          <figcaption>${esc(caption)}</figcaption>
        </figure>`).join("\n");
}

function internalLinks() {
  return links.map(([label, url]) => `<a href="${url}">${esc(label)}</a>`).join("\n");
}

function article(topic) {
  const faq = [
    ["Can YIYI judge the failure from photos only?", "Photos are useful for first screening, but videos, measurements, and operating conditions make the diagnosis much more reliable."],
    ["Should I replace sprockets together with the belt?", "If sprockets are worn, mismatched, or damaged, replacing only the belt may not solve the running problem."],
    ["What should I send before requesting a quote?", "Send belt photos, failure photos, key dimensions, drive photos, operating temperature, load, speed, and any available drawing."]
  ];
  const faqJson = faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }));
  const problemTypes = topic.causes.map((cause) => `<li><strong>${esc(cause)}</strong> - confirm with measurements, photos, and operating history before changing the specification.</li>`).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(topic.title)} | YIYI Mesh Belt Troubleshooting</title>
  <meta name="description" content="${esc(topic.meta)}">
  <link rel="canonical" href="https://www.yiyimeshbelt.com/blog/${topic.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/site-foundation.css">
  <link rel="stylesheet" href="../assets/site-refinement.css">
  <link rel="stylesheet" href="../assets/blog-automation.css">
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: topic.title, description: topic.meta, datePublished: date, dateModified: date, author: { "@type": "Organization", name: "YIYI Mesh Belt" }, publisher: { "@type": "Organization", name: "YIYI Mesh Belt" }, mainEntityOfPage: `https://www.yiyimeshbelt.com/blog/${topic.slug}.html` })}</script>
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqJson })}</script>
</head>
<body class="blog-body">
  <header class="blog-top">
    <a href="../index.html" class="blog-brand">YIYI MESH BELT</a>
    <nav aria-label="Blog article navigation">
      <a href="../index.html">Home</a>
      <a href="../products.html">Products</a>
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
        <div class="blog-kicker">${esc(topic.category)}</div>
        <h1>${esc(topic.title)}</h1>
        <p>${esc(topic.meta)}</p>
        <div class="blog-meta"><span>${date}</span><span>Troubleshooting guide</span><span>${esc(topic.product)}</span></div>
        <div class="blog-cta-row">
          <a class="blog-btn blog-btn-primary" href="../contact.html?intent=troubleshooting&source=${topic.slug}">Send Failure Photos</a>
          <a class="blog-btn" href="${topic.productUrl}">View ${esc(topic.product)}</a>
        </div>
      </header>

      <section class="blog-section blog-answer-box">
        <h2>Direct Answer</h2>
        <p><strong>${esc(topic.answer)}</strong></p>
        <p>For a reliable answer, do not only describe the failure. Send clear photos, a short running video if possible, and measurements from an unworn belt section.</p>
      </section>

      <div class="blog-visual-grid">
${photoSlots(topic)}
      </div>

      <section class="blog-section">
        <h2>What failure signs should you check first?</h2>
        <p>Start with visible symptoms before changing the belt specification. In our engineering review, we separate surface symptoms from root causes. A broken rod, unstable tracking, or damaged edge is a clue. It is not always the final cause.</p>
        <ul class="blog-checklist">
${list(topic.symptoms)}
        </ul>
      </section>

      <section class="blog-section">
        <h2>What are the most common root causes?</h2>
        <p>Most conveyor belt failures come from a combination of belt structure, drive matching, load, tension, and machine condition. The same visible failure can have different causes in different factories. That is why YIYI asks for operating context before confirming production.</p>
        <ul class="blog-checklist">
${problemTypes}
        </ul>
      </section>

      <aside class="blog-inline-cta">
        <div>
          <strong>Need a failure review before replacing the belt?</strong>
          <p>Send the failure photos, old belt dimensions, drive-end photos, and operating condition. We will help confirm whether to repeat or adjust the specification.</p>
        </div>
        <a href="../contact.html?intent=troubleshooting&source=${topic.slug}">Send Photos</a>
      </aside>

      <section class="blog-section">
        <h2>Which measurements should be confirmed?</h2>
        <div class="blog-table-wrap">
          <table class="blog-spec-table">
            <thead><tr><th>Check Point</th><th>Engineering reason</th></tr></thead>
            <tbody>
${rows(topic.checks)}
            </tbody>
          </table>
        </div>
      </section>

      <section class="blog-section">
        <h2>What photos should buyers send?</h2>
        <p>Good photos reduce quotation risk. Please send one close-up photo of the failed part, one photo of the full belt width, one drive-end photo, one return-path photo, and one measurement photo with a ruler or caliper. If the belt runs unstable, a short video is better than ten still photos.</p>
      </section>

      <section class="blog-section">
        <h2>My Insights from replacement projects</h2>
        <p>${esc(topic.insight)}</p>
        <p>We prefer practical evidence over assumptions. When buyers provide photos, drawings, and operating details, we can usually separate three questions: what failed, why it failed, and what should be changed before the next belt is produced.</p>
      </section>

      <section class="blog-section">
        <h2>Common mistakes to avoid</h2>
        <ul class="blog-checklist">
          <li>Replacing the belt without checking sprockets, drums, support rails, or shaft alignment.</li>
          <li>Measuring a worn section and treating it as the original specification.</li>
          <li>Choosing a thicker belt without checking drive engagement and turning radius.</li>
          <li>Ignoring cleaning chemicals, temperature, corrosion, or start-stop shock load.</li>
        </ul>
      </section>

      <section class="blog-section">
        <h2>Recommended internal links</h2>
        <div class="blog-link-grid">
${internalLinks()}
        </div>
      </section>

      <section class="blog-section">
        <h2>FAQ</h2>
${faq.map(([q, a]) => `        <details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n")}
      </section>

      <aside class="blog-inline-cta">
        <div>
          <strong>${esc(topic.cta)}</strong>
          <p>YIYI can review photos, drawings, samples, and operating conditions before production.</p>
        </div>
        <a href="../contact.html?intent=quote&source=${topic.slug}">Ask For A Quick Quote</a>
      </aside>
    </article>
  </main>
  <footer class="blog-footer">
    <div>
      <strong>YIYI MESH BELT</strong>
      <p>Metal conveyor belt manufacturing, troubleshooting, and replacement support for OEM and industrial buyers.</p>
    </div>
    <div>
      <a href="../contact.html?intent=drawing">Send Your Belt Drawing</a>
      <a href="../belt-matching.html">Belt Matching Service</a>
      <a href="../products.html">All Products</a>
    </div>
  </footer>
  <script src="../assets/site-shell.js"></script>
</body>
</html>
`;
}

function card(topic) {
  return `        <a class="blog-card" href="blog/${topic.slug}.html">
          <div class="blog-card-photo-placeholder"><span>${esc(topic.category)}</span></div>
          <div>
            <span>${esc(topic.category)}</span>
            <h2>${esc(topic.title)}</h2>
            <p>${esc(topic.meta)}</p>
            <strong>Read troubleshooting guide -&gt;</strong>
          </div>
        </a>`;
}

for (const topic of topics) {
  fs.writeFileSync(path.join(blogDir, `${topic.slug}.html`), article(topic));
}

const blogPath = path.join(publicDir, "blog.html");
let blog = fs.readFileSync(blogPath, "utf8");
const newCards = topics.map(card).join("\n");
const firstSlug = `blog/${topics[0].slug}.html`;
if (!blog.includes(firstSlug)) {
  blog = blog.replace(/(      <div class="blog-index-grid">\n)/, `$1${newCards}\n`);
}
const newQueue = topics.map((topic) => `<li>${esc(topic.title)}</li>`).join("\n            ");
blog = blog.replace(/(<h2>Next Writing Queue<\/h2>\s*<ul>)([\s\S]*?)(<\/ul>)/, `$1\n            ${newQueue}\n          $3`);
fs.writeFileSync(blogPath, blog);

console.log(JSON.stringify({ created: topics.length, blogUpdated: true }, null, 2));
