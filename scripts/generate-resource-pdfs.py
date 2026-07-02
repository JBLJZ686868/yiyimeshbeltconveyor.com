from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = ROOT / "public" / "assets" / "downloads"
FACTORY = ROOT / "public" / "assets" / "factory-media"
LOGO = ROOT / "public" / "assets" / "yiyi-pdf-logo.jpg"
DOWNLOADS.mkdir(parents=True, exist_ok=True)
FACTORY.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#1C3A5E")
BLUE = colors.HexColor("#2F64A3")
GOLD = colors.HexColor("#C8922A")
TEXT = colors.HexColor("#1F2937")
MUTED = colors.HexColor("#5B6B7A")
GRID = colors.HexColor("#D6DEE8")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="SubYIYI", fontName="Helvetica", fontSize=10, leading=14, textColor=MUTED, spaceAfter=8))
styles.add(ParagraphStyle(name="SectionYIYI", fontName="Helvetica-Bold", fontSize=12.5, leading=15, textColor=BLUE, spaceBefore=8, spaceAfter=5))
styles.add(ParagraphStyle(name="BodyYIYI", fontName="Helvetica", fontSize=9.2, leading=13.2, textColor=TEXT))
styles.add(ParagraphStyle(name="SmallYIYI", fontName="Helvetica", fontSize=7.8, leading=10.5, textColor=MUTED))


def p(text, style="BodyYIYI"):
    return Paragraph(text, styles[style])


def bullet(items):
    return [p(f"- {item}") for item in items]


def table(rows, widths=None):
    t = Table(rows, colWidths=widths, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("LEADING", (0, 0), (-1, -1), 11),
        ("GRID", (0, 0), (-1, -1), 0.35, GRID),
        ("BACKGROUND", (0, 1), (-1, -1), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def page_template(canvas, doc, title):
    canvas.saveState()
    page_w, page_h = A4

    if LOGO.exists():
        canvas.drawImage(
            str(LOGO),
            16 * mm,
            page_h - 35 * mm,
            width=44 * mm,
            height=25 * mm,
            preserveAspectRatio=True,
            mask="auto",
        )

    canvas.setFillColor(colors.HexColor("#172B49"))
    canvas.setFont("Helvetica-Bold", 22)
    canvas.drawCentredString(page_w * 0.62, page_h - 19 * mm, "Ningjin Yiyi Mesh Belt Co., Ltd")
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawCentredString(page_w * 0.62, page_h - 27 * mm, "PROVEN  -  STABLE  -  VERIFIED")
    canvas.setFont("Helvetica", 11)
    canvas.drawCentredString(page_w * 0.62, page_h - 34 * mm, "Metal Conveyor Belt Manufacturer for OEMs & Distributors")

    canvas.setStrokeColor(BLUE)
    canvas.setLineWidth(1.4)
    canvas.line(16 * mm, page_h - 41 * mm, page_w - 16 * mm, page_h - 41 * mm)

    canvas.setFillColor(BLUE)
    canvas.rect(16 * mm, page_h - 62 * mm, page_w - 32 * mm, 14 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 17)
    canvas.drawCentredString(page_w / 2, page_h - 57 * mm, title)

    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, page_w, 13 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(15 * mm, 5 * mm, "YIYI Mesh Belt | www.yiyimeshbelt.com | www.yiyimeshbelts.com")
    canvas.drawRightString(page_w - 15 * mm, 5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(filename, title, subtitle, sections, out_dir=DOWNLOADS):
    doc = SimpleDocTemplate(
        str(out_dir / filename),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=68 * mm,
        bottomMargin=18 * mm,
    )
    story = [
        p(subtitle, "SubYIYI"),
        table([
            ["Company", "Ningjin Yiyi Mesh Belt Co., Ltd."],
            ["Websites", "www.yiyimeshbelt.com | www.yiyimeshbelts.com"],
            ["Contact", "info@yiyimeshbelt.com | WhatsApp / Phone: +86 134 5177 3742"],
        ], [34 * mm, 136 * mm]),
        Spacer(1, 7),
    ]
    for heading, content in sections:
        story.append(p(heading, "SectionYIYI"))
        story.extend(bullet(content) if isinstance(content, list) else [content])
        story.append(Spacer(1, 4))
    story.append(Spacer(1, 8))
    story.append(p(
        "Privacy note: drawings, old belt photos, project dimensions, shipment photos, and buyer records are used only for technical review and quotation preparation. Public materials do not include customer names, order numbers, shipping marks, private labels, or faces.",
        "SmallYIYI",
    ))
    doc.build(
        story,
        onFirstPage=lambda canvas, doc: page_template(canvas, doc, title),
        onLaterPages=lambda canvas, doc: page_template(canvas, doc, title),
    )


build_pdf(
    "yiyi-product-catalog-pack-request.pdf",
    "Product Catalog Pack",
    "Clean product-family overview material for OEM buyers, distributors, and replacement projects.",
    [
        ("Core Product Families", [
            "Spiral Freezer Belt: for spiral freezing systems where drum fit, chain pitch, and running stability must be reviewed.",
            "Self-Stacking Belt: for systems where stacking behavior, upper/lower engagement, and plate geometry must be confirmed.",
            "Eye Link Belt: for heavy-duty conveying, washing, cooling, and open-structure product support.",
            "Flat Wire / Honeycomb Belt: for open area, airflow, drainage, and flat product support.",
            "Side Driven Belt, Chain Driven Belt, Trapezoidal Mesh Belt, and Drive Sprockets are selected after drive method review.",
        ]),
        ("What to Send Before Catalog Recommendation", [
            "Application: freezing, washing, baking, cooling, drying, or industrial conveying.",
            "Known belt type, old belt photos, drawing, target width, pitch, and material grade if available.",
            "Operating temperature, product load, cleaning method, line speed, running direction, and delivery timing.",
        ]),
    ],
)

build_pdf(
    "yiyi-spiral-self-stacking-inquiry-checklist.pdf",
    "Spiral & Self-Stacking Checklist",
    "A practical checklist for spiral freezer belt and self-stacking belt project review.",
    [
        ("Spiral Freezer Belt Review", [
            "Confirm overall belt width, usable width, rod pitch, spiral pitch, chain pitch, edge structure, and running direction.",
            "Send drum diameter, sprocket details, tower path photos, old belt photos, and worn or damaged sections.",
            "For three-row chain options, confirm chain row count, pitch, edge clearance, and drive engagement condition.",
        ]),
        ("Self-Stacking Belt Review", [
            "Confirm upper/lower engagement, side plate height, slot length, rod diameter, rod pitch, spiral pitch, and stacking direction.",
            "Send old belt photos from top, side, edge, underside, drive area, and any failed stacking area.",
            "When possible, send a sample section or measured sketch to reduce mismatch risk before production.",
        ]),
    ],
)

build_pdf(
    "yiyi-replacement-belt-photo-checklist.pdf",
    "Replacement Belt Photo Checklist",
    "A photo and measurement guide for old belt replacement projects.",
    [
        ("Required Photos", [
            "Full belt overview, top surface, underside, left edge, right edge, drive area, return path, and damaged section.",
            "Close-up of rod connection, chain link, sprocket engagement, welded point, side plate, or edge hook if applicable.",
            "Photo with ruler or caliper for pitch, width, rod diameter, chain pitch, and plate dimensions.",
        ]),
        ("Required Measurements", [
            "Overall width, usable width, rod diameter, rod pitch, spiral pitch, chain pitch, belt length or section length.",
            "Running direction, drive method, sprocket tooth count, drum diameter, load, speed, and operating temperature.",
        ]),
        ("Common Replacement Risks", [
            "Old sprockets may be worn even when the belt dimension looks correct.",
            "Copying only the old belt can repeat the same failure if system alignment or drum fit caused the damage.",
            "A replacement review should confirm belt structure and drive components together.",
        ]),
    ],
)

build_pdf(
    "yiyi-export-packing-review-note.pdf",
    "Export Packing Review Note",
    "A buyer-facing packing note for clean export delivery and shipment proof review.",
    [
        ("Export Packing Principles", [
            "Neutral outer packing can be prepared without Chinese text when required by the buyer.",
            "Stretch-film protection can be used so the plywood case reaches the terminal side in a cleaner condition.",
            "Packing photos and pre-shipment proof can be provided after customer labels, order references, and private marks are removed.",
        ]),
        ("Before Shipment Review", [
            "Product condition, surface protection, packing method, crate condition, and shipment readiness are checked before dispatch.",
            "For privacy-safe public evidence, YIYI removes customer names, shipping marks, email records, order numbers, private labels, and faces.",
        ]),
    ],
)

build_pdf(
    "yiyi-oem-drawing-review-checklist.pdf",
    "OEM Drawing Review Checklist",
    "A practical checklist for equipment builders before sending a belt drawing or specification sheet.",
    [
        ("Drawing Items to Confirm", [
            "Overall width, usable width, belt path, rod layout, pitch, edge structure, and running direction.",
            "Drive method, sprocket details, drum diameter, product load, line speed, and operating temperature.",
            "Material grade, surface requirement, cleaning method, installation space, and replacement urgency.",
        ]),
        ("Matched Components", [
            "Sprockets, drums, support rails, return path, and clearance points should be reviewed together with the belt.",
            "When replacing an old belt, send old belt photos and any visible wear points before quotation.",
        ]),
        ("Review Outcome", [
            "YIYI reviews drawing, photos, application conditions, and packing requirements before confirming quotation direction.",
            "Third-party factory visit or inspection support can be arranged when required by the buyer.",
        ]),
    ],
)

build_pdf(
    "yiyi-quality-material-control-statement.pdf",
    "Quality & Material Control Statement",
    "Buyer-facing quality and material control statement for supplier qualification and pre-shipment review.",
    [
        ("Material and Specification Control", [
            "Wire is prepared from stainless steel rod under controlled material workflow.",
            "Incoming raw materials are reviewed before production through material review, wire-diameter checks, and mechanical-property control where required.",
            "Specifications, drawings, dimensions, application conditions, and technical questions are confirmed with the buyer before production.",
        ]),
        ("Production and Inspection", [
            "Forming, welding, assembly, and belt-structure control follow standardized production procedures.",
            "Defined checkpoints are used during production under the ISO 9001 quality system.",
            "Final QA may include dimensional accuracy, weld integrity, edge treatment, surface condition, product-specific function, and packing readiness.",
        ]),
        ("Traceability and Audit Support", [
            "Production and inspection information is retained by order, including material use, quantity, inspection notes, and shipment release status.",
            "Buyer audits and third-party inspections can be coordinated for long-term OEM cooperation, distributor evaluation, or quality-sensitive supply chains.",
        ]),
    ],
    FACTORY,
)

build_pdf(
    "yiyi-in-house-wire-drawing-advantage.pdf",
    "In-House Wire Drawing Advantage",
    "Manufacturing proof note for buyers reviewing raw material preparation and production consistency.",
    [
        ("Why Wire Drawing Matters", [
            "In-house wire preparation gives the factory tighter control over wire diameter, material flow, and production scheduling.",
            "Material preparation can be coordinated with belt type, rod diameter, pitch, edge structure, and repeat-order requirements.",
            "Controlled wire preparation reduces dependence on external wire timing during urgent OEM or replacement projects.",
        ]),
        ("Buyer Review Points", [
            "Ask how raw material is prepared before production.",
            "Confirm whether wire diameter and material grade match the drawing, old belt sample, or application requirement.",
            "For repeat orders, confirm whether the same structure and material route can be reproduced.",
        ]),
        ("Related Factory Proof", [
            "Wire preparation, production process, dimensional checks, and pre-shipment review can be supported by photos or videos when required.",
            "Project-specific material records are shared after inquiry review, not posted as public customer files.",
        ]),
    ],
    FACTORY,
)

print("Generated PDFs:")
for folder in (DOWNLOADS, FACTORY):
    for pdf in sorted(folder.glob("yiyi-*.pdf")):
        print(pdf.relative_to(ROOT))
