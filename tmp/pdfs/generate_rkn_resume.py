from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Indenter, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


OUTPUT = "output/pdf/rkn-cv-resume.pdf"
HEADER_HEIGHT = 58 * mm


def para(text, style):
    return Paragraph(text, style)


def bullet_list(items, style, bullet_style):
    return [
        Paragraph(f"&bull;&nbsp; {item}", style)
        for item in items
    ]


def section(title, styles):
    return [
        Spacer(1, 7),
        Paragraph(title.upper(), styles["Section"]),
        HRFlowable(width="100%", thickness=0.7, color=colors.HexColor("#16bcd4"), spaceBefore=1, spaceAfter=5),
    ]


def experience_item(role, org, date, bullets, styles):
    header = Table(
        [[Paragraph(f"<b>{role} at {org}</b>", styles["JobTitle"]), Paragraph(date, styles["Date"])]],
        colWidths=[132 * mm, 38 * mm],
        hAlign="LEFT",
    )
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return KeepTogether([header, *bullet_list(bullets, styles["Body"], styles["Body"]), Spacer(1, 4)])


def project_item(title, tech, bullets, styles):
    header = Table(
        [[Paragraph(f"<b>{title}</b>", styles["ProjectTitle"]), Paragraph(f"Tech: {tech}", styles["ProjectTech"])]],
        colWidths=[66 * mm, 104 * mm],
        hAlign="LEFT",
    )
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    content = [
        header,
        *bullet_list(bullets, styles["Body"], styles["Body"]),
        Spacer(1, 3),
    ]
    return KeepTogether(content)


def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        rightMargin=0,
        leftMargin=0,
        topMargin=0,
        bottomMargin=0,
        title="RKN CV Resume",
        author="RKN",
    )

    base = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=31,
            leading=34,
            textColor=colors.white,
            spaceAfter=16,
        ),
        "Role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=16,
            textColor=colors.HexColor("#16d8f0"),
            spaceAfter=9,
        ),
        "Contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.4,
            leading=12,
            textColor=colors.HexColor("#b8b8b8"),
        ),
        "Summary": ParagraphStyle(
            "Summary",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10.2,
            leading=14,
            textColor=colors.HexColor("#333333"),
            spaceBefore=12,
            spaceAfter=8,
        ),
        "Section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=13,
            textColor=colors.HexColor("#16bcd4"),
            borderWidth=0,
            borderPadding=0,
            spaceAfter=1,
        ),
        "JobTitle": ParagraphStyle(
            "JobTitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.7,
            leading=12.6,
            textColor=colors.HexColor("#222222"),
            spaceBefore=1,
        ),
        "ProjectTitle": ParagraphStyle(
            "ProjectTitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.4,
            leading=12.4,
            textColor=colors.HexColor("#222222"),
            spaceBefore=3,
        ),
        "ProjectTech": ParagraphStyle(
            "ProjectTech",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.15,
            leading=12.4,
            textColor=colors.HexColor("#666666"),
            alignment=TA_RIGHT,
            spaceBefore=3,
        ),
        "Date": ParagraphStyle(
            "Date",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.8,
            leading=11,
            textColor=colors.HexColor("#666666"),
            alignment=TA_RIGHT,
        ),
        "Body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.35,
            leading=10.8,
            textColor=colors.HexColor("#3f3f3f"),
            leftIndent=7,
            firstLineIndent=-7,
        ),
        "Aside": ParagraphStyle(
            "Aside",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.45,
            leading=11,
            textColor=colors.HexColor("#4a4a4a"),
            spaceBefore=16,
            spaceAfter=3,
        ),
        "Skills": ParagraphStyle(
            "Skills",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.3,
            leading=10.9,
            textColor=colors.HexColor("#333333"),
        ),
    }

    story = []
    page_width, _ = A4
    header = Table(
        [[[
            Paragraph("Ravi Kumar Nagda", styles["Name"]),
            Paragraph(
                "Email: contact@beingrkn.com&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Twitter: @mebeingrkn&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;LinkedIn: linkedin.com/in/beingrkn",
                styles["Contact"],
            ),
        ]]],
        colWidths=[page_width],
    )
    header.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 29 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 18 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 21 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 16 * mm),
            ]
        )
    )
    story.append(header)
    story.append(Indenter(left=17 * mm, right=17 * mm))
    story.append(
        Paragraph(
            "Developer scaling Discord tools that power 76.8k+ communities and 17.3M+ members, while building Minecraft servers, indie games, automation systems, and full-stack web products.",
            styles["Summary"],
        )
    )

    story.extend(section("Work Experience", styles))
    story.append(
        experience_item(
            "Head of Operations",
            "R.O.T.I.",
            "May 2025 - Present",
            [
                "Overseeing scaling and architectural decisions for a top-tier multipurpose Discord bot.",
                "Coordinating development and community teams to maintain high operations standards.",
                "Managing services across 76.8k+ communities reaching 17.3M+ members with a 4.98/5 rating.",
            ],
            styles,
        )
    )
    story.append(
        experience_item(
            "Technical Lead",
            "Overlab.in",
            "Nov 2025 - Present",
            [
                "Overseeing digital branding web platforms and coordinating a technical team of developers.",
                "Built, deployed, and currently manage Overlab's primary web infrastructure.",
            ],
            styles,
        )
    )
    story.append(
        experience_item(
            "Community Manager & Lead Dev",
            "Mr. Random",
            "Feb 2021 - Present",
            [
                "Led custom anti-cheat, team, and server infrastructure development.",
                "Managed India's largest 20-day Minecraft event with 60+ players and 1,000+ applicants.",
                "Managing a community with 38k+ members.",
                "Builder and developer for a #1 ranked Indian and world #8 most-voted Minecraft server.",
                "Developed 10+ custom Minecraft Java plugins.",
            ],
            styles,
        )
    )
    story.append(
        experience_item(
            "Lead Python Developer",
            "Orator",
            "May 2022 - May 2023",
            [
                "Developed a high-concurrency Text-to-Speech bot supporting 50+ AI voice models.",
                "Scaled bot distribution to 34k+ servers and 3.4M+ active members.",
            ],
            styles,
        )
    )
    story.append(
        experience_item(
            "Founder & Lead Developer",
            "Harmonium Craft",
            "Jul 2021 - Mar 2022",
            [
                "Founded India's most-voted modded survival Minecraft server.",
                "Managed and scaled services for 6k+ unique monthly players.",
            ],
            styles,
        )
    )
    story.append(
        Paragraph(
            "<i>Additional: Managed custom gaming community events for creators Mythpat and Andreobee, and served as a community moderator at WEX Mobile.</i>",
            styles["Aside"],
        )
    )

    story.extend(section("Featured Projects", styles))
    story.append(
        project_item(
            "Chick Chick Go",
            "Godot, GDScript, WebGL",
            [
                "Fast, cheerful arcade survival game built around quick movement, escalating pressure, and satisfying upgrade choices.",
                "Designed runs around dodging foxes, chaining corn pickups, and keeping each play session instantly readable and fun.",
            ],
            styles,
        )
    )
    story.append(
        project_item(
            "Holix",
            "Godot, GDScript, WebGL",
            [
                "Playful Holi website where users throw colored water balloons at any X profile picture in an interactive 3D scene.",
                "Built a viral event-style web game with movement, aiming, custom profile-image loading, and restartable scenes.",
            ],
            styles,
        )
    )
    story.append(
        project_item(
            "Minecraft-Discord Voice Verification",
            "Java, Python, MongoDB",
            [
                "Real-time cross-platform sync system connecting Minecraft servers with Discord voice channels.",
                "Built a Python Discord bot and Java Minecraft plugin that automatically manage access based on live voice channel status.",
            ],
            styles,
        )
    )
    story.append(
        project_item(
            "Mehul Sen Portfolio & Store",
            "Python Flask, Supabase, GSAP, Cashfree API",
            [
                "Designed and developed a premium portfolio website for Mehul Sen, a leading Indian video editor.",
                "Added a custom digital store with accounts, secure Cashfree checkout, payment verification, and protected asset downloads.",
            ],
            styles,
        )
    )

    story.extend(section("Skills & Tech Stack", styles))
    skills = [
        ("Languages", "Python, Java, JavaScript, TypeScript, GDScript, C#"),
        ("Frameworks & Libraries", "React, Flask, Discord.py, Tailwind CSS, GSAP, Spigot API, Pillow"),
        ("Databases & Cloud", "MongoDB, Supabase, SQL, Docker, Git"),
        ("Engines", "Unity, Godot"),
        ("Soft Skills", "Community management, technical leadership, team coordination, operations scaling, creator collaboration, product thinking, problem solving"),
    ]
    for label, value in skills:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["Skills"]))
    story.append(Indenter(left=-17 * mm, right=-17 * mm))

    def draw_header_background(canvas, _doc):
        canvas.saveState()
        canvas.setFillColor(colors.HexColor("#080808"))
        canvas.rect(0, A4[1] - HEADER_HEIGHT, A4[0], HEADER_HEIGHT, stroke=0, fill=1)
        canvas.restoreState()

    doc.build(story, onFirstPage=draw_header_background, onLaterPages=draw_header_background)


if __name__ == "__main__":
    build()
