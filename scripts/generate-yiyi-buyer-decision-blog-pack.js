const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const blogDir = path.join(publicDir, "blog");
const date = "2026-06-17";

const internalLinks = [
  ["Spiral Freezer Belt", "../spiral-freezer-belt.html"],
  ["Self-Stacker Belt", "../self-stacking-belt.html"],
  ["Eye Link Belt", "../eye-link-belt.html"],
  ["Flat Wire Belt", "../flat-wire-belt.html"],
  ["Chain Driven Belt", "../chain-driven-belt.html"],
  ["Drive Sprockets", "../drive-sprockets.html"],
  ["Belt Matching Service", "../belt-matching.html"],
  ["Replacement Review", "../replacement-review.html"],
  ["Quality Control", "../quality-control.html"],
  ["Engineering & OEM Support", "../engineering-oem.html"],
  ["Contact YIYI", "../contact.html?intent=quote"],
];

const topics = [
  {
    title: "What Information Should You Send Before Requesting a Metal Conveyor Belt Quote?",
    slug: "what-information-to-send-before-metal-conveyor-belt-quote",
    category: "RFQ Preparation",
    meta: "Buyer checklist for requesting a metal conveyor belt quote, including drawings, photos, dimensions, materials, drive details, load, temperature, and project context.",
    answer: "Before requesting a metal conveyor belt quote, send the belt type, width, length, pitch, wire or rod diameter, material, drive method, sprocket photos, product load, temperature, application, and old belt photos. Drawings and failure photos help engineers confirm the specification faster.",
    buyer: "Procurement teams, OEM engineers, distributors, and replacement buyers.",
    sections: [
      ["Why is RFQ information more important than a product name?", "A metal conveyor belt name is only the starting point. The same product name can represent different pitch, edge structure, material grade, sprocket engagement, and load conditions. We often see RFQs that say only “spiral belt” or “flat wire belt”. That is not enough for a reliable quotation. A useful RFQ shows how the belt works in the machine. When buyers provide drawings, photos, measurements, and operating context, the supplier can check whether the request is a repeat order, replacement match, or engineering adjustment. This reduces back-and-forth, avoids wrong assumptions, and helps the buyer get a quote that can actually be produced."],
      ["Which photos should be included?", "Send photos from several angles: top surface, edge structure, underside, drive end, return path, sprocket or drum area, damaged section, and any old nameplate or drawing. If the belt failed, include close-ups of the failure point and a wider photo showing where it happened in the machine. A short running video is also useful when the problem is tracking, jumping, unstable running, or rubbing. The goal is not to make the belt look beautiful. The goal is to let engineering read the machine condition from practical evidence. We can often identify missing dimensions from photos, but we still prefer confirmed measurements."],
      ["What dimensions should be measured?", "Measure belt width, usable width, total length, pitch, rod diameter, wire diameter, opening size, edge height, side plate height, and sprocket or drum information. For worn belts, measure several areas because old belts may stretch or deform. If possible, measure an unworn section. Use a ruler or caliper in the photo so the scale is visible. For chain driven belts, chain pitch and sprocket tooth count are important. For self-stacking belts, side plate height and stacking geometry are critical. For spiral freezer belts, turning radius and edge structure matter."],
      ["How does good RFQ data shorten lead time?", "Good RFQ data shortens lead time because engineering can confirm the specification without repeated clarification. It also helps production prepare material, tooling, welding, inspection, and packing requirements earlier. In replacement projects, poor information can create expensive delay because the buyer may not discover a mismatch until installation. My Insights: We have seen projects where a buyer sent only belt photos and received an attractive price, but the replacement failed because sprocket pitch was not confirmed. A slower RFQ at the beginning is often faster than a wrong belt at the end."]
    ],
    table: [
      ["Belt type", "Identify the basic product family and application."],
      ["Pitch", "Controls drive matching and replacement accuracy."],
      ["Width and length", "Required for quotation and production planning."],
      ["Material", "304, 316, 310S, or project-specific grade."],
      ["Drive details", "Sprocket, drum, chain, or friction drive information."],
      ["Photos and videos", "Show structure, failure, and machine context."]
    ],
    cta: "Send drawings, old belt photos, and operating conditions for a faster engineering quote."
  },
  {
    title: "How Do You Compare Metal Conveyor Belt Manufacturers for OEM Supply?",
    slug: "how-to-compare-metal-conveyor-belt-manufacturers-for-oem-supply",
    category: "Supplier Evaluation",
    meta: "OEM buyer guide for comparing metal conveyor belt manufacturers by factory capability, engineering support, quality control, material control, delivery, and repeat supply.",
    answer: "Compare metal conveyor belt manufacturers by checking real factory capability, engineering review, material control, welding or forming process, quality inspection, export experience, repeat order support, and whether they can match belts with sprockets or drive parts.",
    buyer: "OEM equipment builders and long-term distributor partners.",
    sections: [
      ["What should OEM buyers verify first?", "OEM buyers should first verify whether the supplier is a real manufacturer or mainly a trading office. A real manufacturer can show production equipment, material preparation, welding or forming process, inspection steps, packing, and repeat order records. This matters because OEM projects need stable repeat supply, not only one sample. If the supplier cannot explain pitch, edge structure, drive matching, or quality control, the risk is higher. The best supplier is not always the cheapest supplier. It is the supplier that can protect the OEM machine reputation after the equipment reaches the end user."],
      ["Why does engineering communication matter?", "Metal conveyor belts are mechanical parts inside a system. The supplier must understand belt geometry, load, temperature, product contact, cleaning, sprockets, and replacement logic. Good communication means the supplier asks practical questions before production. Poor communication means the supplier accepts any drawing without checking risks. We prefer to clarify before production because a small pitch, material, or edge error can create installation failure. For OEM buyers, a supplier who can review drawings and suggest checks is more valuable than a supplier who only quotes quickly."],
      ["How should quality control be compared?", "Quality control should be visible and specific. Ask how the supplier checks pitch, width, rod diameter, wire diameter, edge alignment, welding consistency, surface condition, and packing. For food processing belts, material and surface cleanliness are also important. For spiral freezer and self-stacking belts, edge structure is critical. For chain driven belts, sprocket matching matters. A good supplier can show process photos, inspection records, or shipment checks. These proofs help buyers judge whether the factory has a repeatable system."],
      ["What is our practical supplier evaluation logic?", "My Insights: We evaluate supplier strength by asking whether the factory can prevent predictable failures. If a supplier has real production equipment, raw material control, inspection steps, and engineering review, it can usually support repeat orders better. If a supplier only shows catalog photos, the buyer still has to carry the technical risk. For YIYI Mesh Belt, the strongest sales argument is not a slogan. It is the ability to connect drawing review, in-house production, quality inspection, and export-ready delivery into one workflow."]
    ],
    table: [
      ["Factory proof", "Workshop, equipment, production process, and real product photos."],
      ["Engineering review", "Ability to check drawings, drive matching, and failure risks."],
      ["Quality system", "Dimensional checks, surface checks, and shipment proof."],
      ["Material control", "Raw material preparation and traceable material selection."],
      ["Export readiness", "Packing, documentation, communication, and delivery support."],
      ["Repeat supply", "Stable specification control across future orders."]
    ],
    cta: "Send your OEM belt drawing and ask for an engineering-supported quotation."
  },
  {
    title: "What Affects the Price of a Metal Conveyor Belt?",
    slug: "what-affects-metal-conveyor-belt-price",
    category: "Price Factors",
    meta: "Practical guide explaining metal conveyor belt price factors, including material, belt structure, pitch, width, quantity, welding, sprockets, quality requirements, and delivery.",
    answer: "Metal conveyor belt price is affected by material grade, wire or rod diameter, belt width, length, pitch, edge structure, welding or forming complexity, quantity, sprocket matching, inspection requirements, packing, and delivery terms.",
    buyer: "Procurement teams comparing quotes and replacement buyers preparing budgets.",
    sections: [
      ["Why do two similar belts have different prices?", "Two belts can look similar in photos but cost differently because their material, pitch, rod diameter, edge structure, and production process are different. A heavier rod, special side plate, tighter tolerance, or more complex welding process increases cost. Stainless steel grade also matters. 316 usually costs more than 304. Heat-resistant materials can cost more again. A buyer comparing only photos may think one supplier is cheaper, but the cheaper quote may not include the same material, edge structure, or inspection level."],
      ["How does material affect price?", "Material grade is one of the largest cost factors. 304 is common for many food processing belts. 316 is used when corrosion resistance matters more, such as seafood or strong washdown environments. 310S or other heat-resistant grades are used where temperature is the main concern. Wire and rod diameter also affect the total stainless steel weight. If the belt is wide or long, material weight becomes even more important. The best quotation should state the material clearly so the buyer can compare correctly."],
      ["How do structure and customization affect price?", "Custom edge structures, side plates, chain edges, sprocket matching, tight pitch control, and special surface treatments can increase cost. However, customization can also reduce long-term risk when the belt must fit a specific OEM machine or replacement system. A standard belt may be cheaper but unsuitable. A custom belt may cost more but avoid installation failure. The price should be judged against downtime risk, replacement frequency, and the cost of machine stoppage. For industrial buyers, the cheapest belt is not always the lowest total cost."],
      ["How should buyers compare quotes fairly?", "My Insights: When comparing quotes, we recommend building a simple quote comparison table. Compare material, pitch, rod diameter, wire diameter, width, length, edge type, quantity, inspection proof, packing, and delivery terms. If a quote is much lower, ask what is different. In several replacement projects, the low price came from lighter material or missing drive-matching review. That difference only became expensive when the belt did not run correctly."]
    ],
    table: [
      ["Material grade", "304, 316, 310S, or special grade changes cost."],
      ["Belt weight", "Wire diameter, rod diameter, width, and length affect material use."],
      ["Edge structure", "Side plates, chains, and custom edges add production work."],
      ["Inspection level", "Additional checks and reports add time but reduce risk."],
      ["Quantity", "Larger orders may reduce unit setup cost."],
      ["Delivery terms", "Packing and shipping method affect total landed cost."]
    ],
    cta: "Send the same specification to compare price fairly and avoid hidden mismatch risk."
  },
  {
    title: "When Should You Replace Conveyor Belt and Sprockets Together?",
    slug: "when-to-replace-conveyor-belt-and-sprockets-together",
    category: "Replacement Decision",
    meta: "Engineering guide explaining when conveyor belts and sprockets should be replaced together, including pitch wear, tooth wear, jumping, tracking, and drive matching.",
    answer: "Replace the conveyor belt and sprockets together when sprocket teeth are worn, pitch no longer matches, the belt jumps, engagement is noisy, shafts are misaligned, or the new belt would run on damaged drive parts.",
    buyer: "Maintenance teams, replacement buyers, and OEM service teams.",
    sections: [
      ["Why can new belts fail on old sprockets?", "A new belt is made to a confirmed pitch and structure. Old sprockets may have worn teeth, changed engagement geometry, or uneven spacing. When the new belt runs on worn sprockets, it may jump, pull unevenly, or wear quickly. The buyer may think the new belt is wrong, but the real cause can be old drive parts. This is common in chain driven belts, eye link belts with sprocket drive, and some spiral belt systems. Replacement review should include both belt and drive components."],
      ["What signs show sprockets may need replacement?", "Look for sharp or hooked teeth, uneven tooth wear, side rubbing, poor engagement, abnormal noise, and belt jumping during start-up. Check whether all sprockets across the shaft are aligned and spaced correctly. Also compare the old belt pitch with the sprocket pitch. If the belt has stretched, the sprockets may have worn together with it. Installing a new belt on these old sprockets can create a mismatch. Photos of sprockets from the side and front are useful for review."],
      ["How should pitch matching be checked?", "Measure several belt pitches, not only one. Measure sprocket tooth pitch and confirm tooth count and outside diameter where possible. For chain driven belts, measure chain pitch. For drive sprockets supplied with custom belts, confirm the profile and spacing before production. If the buyer has a drawing, use it as a reference, but also compare with the current machine condition. Machines change through wear, repair, and previous replacement decisions."],
      ["What is our recommendation before replacement?", "My Insights: We do not automatically tell every buyer to replace sprockets. We first ask for photos, pitch measurements, and a short drive-end video. If sprocket wear is small and engagement is stable, belt-only replacement may be acceptable. If sprockets are worn, the risk of belt-only replacement is high. The practical goal is to avoid paying twice: once for a belt and again for emergency sprocket correction."]
    ],
    table: [
      ["Sprocket teeth", "Check for sharp, hooked, broken, or uneven teeth."],
      ["Pitch match", "Confirm belt pitch and sprocket pitch match."],
      ["Noise", "Impact noise may show poor engagement."],
      ["Jumping", "Repeated jumping usually requires drive review."],
      ["Shaft alignment", "Misalignment can damage both belt and sprockets."],
      ["Replacement history", "Old repairs may have changed drive conditions."]
    ],
    cta: "Send sprocket photos and belt pitch measurements before ordering replacement parts."
  },
  {
    title: "How Can Buyers Reduce Lead Time for Replacement Metal Conveyor Belts?",
    slug: "how-to-reduce-lead-time-for-replacement-metal-conveyor-belts",
    category: "Delivery Planning",
    meta: "Practical guide for reducing replacement metal conveyor belt lead time through better RFQ data, drawings, material confirmation, stock planning, and inspection preparation.",
    answer: "Buyers can reduce replacement metal conveyor belt lead time by sending complete drawings, photos, dimensions, material requirements, drive details, quantity, delivery deadline, and failure context at the start of the inquiry.",
    buyer: "Maintenance buyers, production plants, distributors, and urgent replacement teams.",
    sections: [
      ["What causes lead time delays?", "Lead time delays usually come from unclear specifications, missing drawings, uncertain material grade, unclear drive matching, or late confirmation of packing and shipping requirements. When a buyer sends only a product name, engineering must ask for more information. Each clarification takes time. If the belt is custom or replacement-critical, missing one dimension can stop production planning. For urgent replacement, information quality matters as much as factory capacity."],
      ["How does material preparation affect lead time?", "Material availability affects how quickly production can start. If the supplier has regular raw material stock and in-house wire preparation, some projects can move faster. If the material must be purchased after order confirmation, lead time may increase. For YIYI, in-house wire drawing and regular core wire stock are important because they help control material preparation earlier. However, special materials or unusual sizes still need confirmation. Buyers should state material grade and expected quantity early."],
      ["What should distributors prepare in advance?", "Distributors can prepare common belt specifications, old customer drawings, photos, measurement templates, and standard RFQ forms. They can also identify repeat products that may need faster future supply. For replacement buyers, keeping a record of pitch, width, length, material, sprockets, and previous order details can save many days. A simple record can prevent emergency guesswork when the line is down."],
      ["What is our practical lead-time advice?", "My Insights: The fastest replacement projects are not always the simplest belts. They are the projects where the buyer sends complete data on day one. A clear drawing, old belt photos, sprocket photos, material grade, and target delivery date allow engineering, production, and packing to move in the same direction. Poor RFQ data can waste more time than production itself."]
    ],
    table: [
      ["Complete drawing", "Reduces engineering confirmation time."],
      ["Old belt photos", "Helps confirm structure and failure context."],
      ["Material grade", "Allows raw material planning earlier."],
      ["Drive details", "Prevents late sprocket or pitch clarification."],
      ["Quantity", "Supports production scheduling and packing planning."],
      ["Deadline", "Helps prioritize urgent replacement projects."]
    ],
    cta: "Send complete replacement data to start engineering review faster."
  },
  {
    title: "How Should a Metal Conveyor Belt Be Inspected Before Shipment?",
    slug: "how-should-a-metal-conveyor-belt-be-inspected-before-shipment",
    category: "Pre-Shipment QA",
    meta: "Pre-shipment inspection guide for metal conveyor belts covering dimensions, pitch, edge, welding, material, surface condition, packing, and export documentation.",
    answer: "Before shipment, a metal conveyor belt should be inspected for width, length, pitch, rod or wire diameter, edge alignment, welding or forming quality, surface condition, drive matching, packing protection, labels, and export documents.",
    buyer: "OEM buyers, distributors, quality teams, and replacement project managers.",
    sections: [
      ["Why is pre-shipment inspection important?", "Once a metal conveyor belt is shipped overseas, a mistake becomes expensive. Pre-shipment inspection reduces the chance of dimensional mismatch, edge defects, packing damage, or missing documents. It also gives buyers proof before the product leaves the factory. Inspection is especially important for custom belts, spiral freezer belts, self-stacking belts, and belts with sprocket matching. The inspection does not need to be complicated, but it must focus on the dimensions and structures that control installation."],
      ["Which dimensions should be checked?", "Check width, usable width, total length, pitch, rod diameter, wire diameter, opening size, side plate height, and edge structure. If the belt is positively driven, check the sprocket or drive engagement dimensions. For replacement belts, compare the production specification with the approved drawing or confirmed sample. Photos of caliper measurements are useful when the buyer cannot inspect in person. Measurement records also help with repeat orders."],
      ["What visual defects should be checked?", "Check burrs, sharp edges, uneven welds, surface contamination, bent rods, edge deformation, cracked plates, and abnormal discoloration. For food-contact belts, surface cleanliness and finish matter. For heavy-duty belts, connection points and rods matter. For spiral systems, edge consistency matters. Visual inspection should be practical: it should focus on what can create installation, safety, cleaning, or running problems."],
      ["What proof should buyers request?", "My Insights: Buyers often ask for inspection reports, but photos are sometimes more useful than a generic form. We recommend requesting photos of key dimensions, edge details, full belt overview, packing, label, and any matched sprockets. For repeat orders, keep these photos with the order record. When the next order comes, both sides can compare quickly and reduce uncertainty."]
    ],
    table: [
      ["Dimensional check", "Width, length, pitch, rod, wire, and edge height."],
      ["Surface check", "Burrs, contamination, scratches, or sharp edges."],
      ["Edge alignment", "Critical for tracking, spiral movement, and stacking."],
      ["Drive matching", "Sprocket, drum, or chain engagement confirmation."],
      ["Packing check", "Protects the belt during export shipping."],
      ["Label and documents", "Supports customs, receiving, and repeat orders."]
    ],
    cta: "Ask for pre-shipment photos before confirming export delivery."
  },
  {
    title: "How Do You Choose Between 304 and 316 Stainless Steel Conveyor Belts?",
    slug: "how-to-choose-between-304-and-316-stainless-steel-conveyor-belts",
    category: "Material Decision",
    meta: "Practical comparison of 304 and 316 stainless steel conveyor belts for food processing, seafood, washing lines, corrosion resistance, and cost decisions.",
    answer: "Choose 304 stainless steel for many standard food and industrial conveyor belt applications. Choose 316 when corrosion resistance is more important, especially in seafood, salty environments, stronger cleaning chemicals, or high-moisture washdown lines.",
    buyer: "Food processors, seafood plants, washing line buyers, and OEM engineers.",
    sections: [
      ["Why is 304 common?", "304 stainless steel is common because it gives a good balance of corrosion resistance, mechanical performance, availability, and cost. Many food processing belts, baking belts, cooling belts, and general conveyor belts use 304 successfully. If the environment is not highly corrosive and cleaning chemicals are moderate, 304 can be a practical choice. It is also easier to source for many standard belt structures. However, 304 is not automatically correct for every food line. The process environment must be reviewed."],
      ["When is 316 the better choice?", "316 stainless steel is usually considered when corrosion risk is higher. Seafood, salt, acidic residues, strong cleaning chemicals, and constant moisture can justify 316. The decision should also consider expected belt life, downtime cost, and customer quality requirements. 316 costs more, but in corrosive environments it may reduce replacement frequency. For export OEM equipment, material choice can also affect how the end user evaluates machine quality."],
      ["What information should buyers provide?", "Buyers should provide product type, cleaning method, cleaning chemical, temperature, moisture level, operating hours, load, and whether the belt touches food directly. If the old belt corroded, send photos of corrosion points. Corrosion pattern helps identify whether the issue is material, cleaning, residue, or environmental exposure. A material decision without process information is just guessing."],
      ["How do we make the recommendation?", "My Insights: We avoid saying 316 is always better. In many projects, 304 is enough and more cost-effective. In other projects, especially seafood or washdown lines, 316 is the safer engineering choice. We first look at corrosion exposure, cleaning chemistry, and buyer expectations. Then we compare material cost against failure risk. That is a better decision than choosing only by price."]
    ],
    table: [
      ["304 stainless steel", "Common choice for many standard food and industrial belts."],
      ["316 stainless steel", "Better corrosion resistance for seafood, salt, and stronger washdown."],
      ["Cleaning chemicals", "Strong chemicals may push selection toward 316."],
      ["Moisture", "Constant wet use increases corrosion concern."],
      ["Cost", "316 is usually higher cost than 304."],
      ["Failure history", "Old corrosion photos help confirm the right grade."]
    ],
    cta: "Send process details and corrosion photos for material review."
  },
  {
    title: "How Do You Choose the Right Metal Conveyor Belt for Washing Lines?",
    slug: "how-to-choose-metal-conveyor-belt-for-washing-lines",
    category: "Washing Line Selection",
    meta: "Guide to choosing metal conveyor belts for washing lines, including drainage, open area, corrosion resistance, product support, cleanability, and drive matching.",
    answer: "Choose a metal conveyor belt for washing lines by matching open area, drainage, product support, corrosion resistance, cleanability, load, drive method, and cleaning chemicals. Flat wire, eye link, and chain driven belts are common options depending on product and line design.",
    buyer: "Food washing line builders, can washing lines, seafood processors, and OEM equipment teams.",
    sections: [
      ["What does a washing line require from the belt?", "A washing line needs drainage, product support, cleaning access, corrosion resistance, and stable movement. Water, residue, cleaning chemicals, and product load all affect the belt. The belt should allow liquid to pass through without trapping too much material. It should also support the product without causing damage or product loss. For small products, opening size matters. For heavy products, rod and wire strength matter. For corrosive environments, material choice matters."],
      ["Which belt types are commonly used?", "Flat wire belts are common when drainage and a relatively flat surface are needed. Eye link belts are useful when strength, open area, and cleanability are important. Chain driven belts can be used when positive drive and stable movement are required. Some washing systems need custom side guards or edges. The best belt depends on product size, weight, water flow, cleaning method, and conveyor drive. The buyer should not choose only from a catalog photo."],
      ["How should material be selected?", "304 stainless steel is common for many washing applications. 316 may be better when the line handles seafood, salt, stronger cleaning chemicals, or high moisture for long periods. If the belt previously corroded, photos of the corrosion area help engineering judge the material risk. Material choice should also consider weldability, strength, and cost. If the line requires food contact compliance, ask for material and process support documents."],
      ["What should be checked before quotation?", "My Insights: For washing belts, we ask for product size, water direction, product weight, cleaning chemical, belt speed, opening requirement, and drive method. We also ask whether product falls through the belt or sticks to the surface. These simple details can change the belt recommendation. A washing line belt is not only a conveyor surface. It is part of the cleaning and drainage performance."]
    ],
    table: [
      ["Open area", "Controls drainage and cleaning access."],
      ["Product support", "Prevents product loss or damage."],
      ["Material grade", "304 or 316 depending on corrosion exposure."],
      ["Drive method", "Friction, sprocket, or chain drive must be matched."],
      ["Cleaning chemicals", "Affects corrosion and material selection."],
      ["Edge design", "Guides product and supports stable tracking."]
    ],
    cta: "Send product size, washing process, and belt photos for selection support."
  },
  {
    title: "How Do You Prepare a Replacement Conveyor Belt Project Without an Original Drawing?",
    slug: "how-to-prepare-replacement-conveyor-belt-project-without-original-drawing",
    category: "Replacement Without Drawing",
    meta: "Step-by-step guide for preparing a replacement metal conveyor belt project when the original drawing is missing, including photos, measurements, samples, and engineering review.",
    answer: "If the original conveyor belt drawing is missing, prepare clear photos, an old belt sample if possible, width, length, pitch, rod diameter, wire diameter, edge details, material, drive photos, sprocket details, load, temperature, and application information.",
    buyer: "Maintenance teams and overseas buyers replacing old or unknown belts.",
    sections: [
      ["Can a replacement belt be made without a drawing?", "Yes, many replacement belt projects can start without a drawing, but the buyer must provide enough physical evidence. Photos, measurements, samples, and machine context become the substitute for the drawing. The more custom the belt is, the more careful the review must be. Spiral freezer belts, self-stacking belts, sprocket-driven belts, and belts with side plates need more detail than simple straight conveying belts."],
      ["What photos are needed?", "Take photos of the full belt, top surface, underside, edge, drive area, sprockets or drum, return path, damaged parts, and any unique structure. Put a ruler or caliper in the photos when possible. If the belt is installed, take machine context photos. If the belt is removed, lay it flat and photograph the edge and pitch. For failures, photograph the failure point before cutting or repairing the belt. This helps engineering understand the original problem."],
      ["What measurements are essential?", "Measure width, usable width, total length, pitch, wire diameter, rod diameter, opening size, side plate height, chain pitch, and sprocket details if applicable. Measure several pitches because old belts may stretch. If you have only a damaged belt, measure the least damaged area. For self-stacking belts, side plate geometry is critical. For chain driven belts, chain pitch and sprocket tooth count are critical. For flat wire belts, opening size and edge type are important."],
      ["How does engineering confirm the specification?", "My Insights: Without a drawing, we build the specification from evidence. We compare photos, measurements, product type, machine function, and failure signs. Sometimes we recommend making a drawing from the sample before production. This adds a step, but it prevents guesswork. A missing drawing is not a disaster. A rushed replacement without enough evidence is the real risk."]
    ],
    table: [
      ["Old sample", "Best evidence when drawings are missing."],
      ["Measurement photos", "Show scale and reduce misunderstanding."],
      ["Drive photos", "Confirm sprocket, drum, chain, or friction drive."],
      ["Failure photos", "Help avoid repeating the same failure."],
      ["Application data", "Load, temperature, product, speed, and cleaning."],
      ["Engineering review", "Turns evidence into a production specification."]
    ],
    cta: "Send old belt photos and measurements to start replacement review."
  }
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function list(items) {
  return items.map((item) => `<li>${esc(item)}</li>`).join("\n");
}

function table(rows) {
  return rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("\n");
}

function linkCloud() {
  return internalLinks.map(([label, url]) => `<a href="${url}">${esc(label)}</a>`).join("\n");
}

function photoSlots(topic) {
  const captions = [
    "Buyer evidence photo: product, old belt, machine context, or process condition.",
    "Engineering detail photo: pitch, edge, sprocket, material, or drive structure.",
    "Quality proof photo: inspection, packing, shipment, or repeat order reference."
  ];
  return captions.map((caption, index) => `
        <figure class="blog-photo-slot">
          <div class="slot-mark">BUYER DECISION PHOTO ${index + 1}</div>
          <figcaption>${esc(caption)}</figcaption>
        </figure>`).join("\n");
}

function article(topic) {
  const faq = [
    ["Can YIYI quote from photos only?", "Photos can start the review, but dimensions, material, drive details, and operating conditions make the quotation more reliable."],
    ["Should I send a drawing or old sample?", "Yes. A drawing is best. If no drawing exists, an old belt sample and clear photos can help engineering rebuild the specification."],
    ["What is the fastest way to get engineering support?", "Send the belt application, photos, key measurements, failure context, and target delivery schedule together in one message."]
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(topic.title)} | YIYI Mesh Belt Buyer Guide</title>
  <meta name="description" content="${esc(topic.meta)}">
  <link rel="canonical" href="https://www.yiyimeshbelt.com/blog/${topic.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/site-foundation.css">
  <link rel="stylesheet" href="../assets/site-refinement.css">
  <link rel="stylesheet" href="../assets/blog-automation.css">
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: topic.title, description: topic.meta, datePublished: date, dateModified: date, author: { "@type": "Organization", name: "YIYI Mesh Belt" }, publisher: { "@type": "Organization", name: "YIYI Mesh Belt" }, mainEntityOfPage: `https://www.yiyimeshbelt.com/blog/${topic.slug}.html` })}</script>
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) })}</script>
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
        <div class="blog-meta"><span>${date}</span><span>Buyer decision guide</span><span>${esc(topic.buyer)}</span></div>
        <div class="blog-cta-row">
          <a class="blog-btn blog-btn-primary" href="../contact.html?intent=quote&source=${topic.slug}">Ask For A Quick Quote</a>
          <a class="blog-btn" href="../contact.html?intent=drawing&source=${topic.slug}">Send Your Belt Drawing</a>
        </div>
      </header>

      <section class="blog-section blog-answer-box">
        <h2>Direct Answer</h2>
        <p><strong>${esc(topic.answer)}</strong></p>
        <p>This guide is written for buyers who need a practical decision before sending an RFQ, approving a supplier, or replacing a belt under production pressure.</p>
      </section>

      <div class="blog-visual-grid">
${photoSlots(topic)}
      </div>

      ${topic.sections.map(([heading, body]) => `<section class="blog-section">
        <h2>${esc(heading)}</h2>
        <p>${esc(body)}</p>
      </section>`).join("\n\n")}

      <aside class="blog-inline-cta">
        <div>
          <strong>Need engineering confirmation before RFQ?</strong>
          <p>${esc(topic.cta)}</p>
        </div>
        <a href="../contact.html?intent=engineering&source=${topic.slug}">Get Engineering Support</a>
      </aside>

      <section class="blog-section">
        <h2>Buyer Checklist</h2>
        <div class="blog-table-wrap">
          <table class="blog-spec-table">
            <thead><tr><th>Item</th><th>Why it matters</th></tr></thead>
            <tbody>
${table(topic.table)}
            </tbody>
          </table>
        </div>
      </section>

      <section class="blog-section">
        <h2>Internal Links for the Next Step</h2>
        <div class="blog-link-cloud">
${linkCloud()}
        </div>
      </section>

      <section class="blog-section">
        <h2>FAQ</h2>
        ${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n")}
      </section>

      <section class="blog-final-cta">
        <h2>Send Your Project Details to YIYI</h2>
        <p>${esc(topic.cta)} We will review the belt type, dimensions, material, drive matching, quality points, and delivery requirements before quotation.</p>
        <a href="../contact.html?intent=quote&source=${topic.slug}">Ask For A Quick Quote</a>
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
</html>`;
}

function card(topic) {
  return `        <a class="blog-card" href="blog/${topic.slug}.html">
          <div class="blog-card-photo-placeholder"><span>${esc(topic.category)}</span></div>
          <div>
            <span>${esc(topic.category)}</span>
            <h2>${esc(topic.title)}</h2>
            <p>${esc(topic.meta)}</p>
            <strong>Read buyer guide -&gt;</strong>
          </div>
        </a>`;
}

fs.mkdirSync(blogDir, { recursive: true });
for (const topic of topics) {
  fs.writeFileSync(path.join(blogDir, `${topic.slug}.html`), article(topic), "utf8");
}

const blogPath = path.join(publicDir, "blog.html");
let blogHtml = fs.readFileSync(blogPath, "utf8");
const cards = topics.map(card).join("\n");
blogHtml = blogHtml.replace('      <div class="blog-index-grid">', `      <div class="blog-index-grid">\n${cards}`);
const queue = [
  "What information should you send before requesting a quote?",
  "How to compare metal conveyor belt manufacturers?",
  "What affects metal conveyor belt price?",
  "When should belt and sprockets be replaced together?",
  "How to reduce replacement belt lead time?",
  "How should belts be inspected before shipment?",
  "How to choose between 304 and 316 stainless steel?",
  "How to prepare replacement without an original drawing?"
];
blogHtml = blogHtml.replace(/<section class="blog-topic-card">[\s\S]*?<\/section>/, `<section class="blog-topic-card">
          <h2>Next Writing Queue</h2>
          <ul>
${queue.map((item) => `            <li>${esc(item)}</li>`).join("\n")}
          </ul>
          <a href="contact.html?intent=topic&source=blog-writing-queue">Suggest a Topic -></a>
        </section>`);
fs.writeFileSync(blogPath, blogHtml, "utf8");

const knowledgePath = path.join(publicDir, "knowledge-center.html");
let knowledgeHtml = fs.readFileSync(knowledgePath, "utf8");
const knowledgeSection = `    <section class="content-section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="eyebrow" style="color:#4a8cc8">Buyer Decision / RFQ Cluster</div>
            <h2>Procurement Guides Built for Quote-Ready Buyers</h2>
            <p>These articles help buyers prepare RFQs, compare suppliers, check materials, reduce lead time, and avoid replacement mismatch before contacting engineering.</p>
          </div>
          <a class="btn-secondary" href="blog.html">View All Blog Articles</a>
        </div>
        <div class="content-grid">
${topics.map((topic) => `          <a class="content-card" href="blog/${topic.slug}.html"><div class="mini-label">${esc(topic.category)}</div><h3>${esc(topic.title)}</h3><p>${esc(topic.answer)}</p></a>`).join("\n")}
        </div>
      </div>
    </section>

`;
if (!knowledgeHtml.includes("Buyer Decision / RFQ Cluster")) {
  knowledgeHtml = knowledgeHtml.replace('    <section class="cta-section">', `${knowledgeSection}    <section class="cta-section">`);
  fs.writeFileSync(knowledgePath, knowledgeHtml, "utf8");
}

console.log(`Generated ${topics.length} buyer decision articles.`);
