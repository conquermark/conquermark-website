from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch

def create_pdf():
    doc = SimpleDocTemplate("/home/ubuntu/conquermark-website/public/2026-AI-Automation-Playbook.pdf", pagesize=LETTER)
    styles = getSampleStyleSheet()
    story = []

    # Custom Styles
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Title'],
        fontSize=24,
        textColor=colors.HexColor('#0f1729'),
        spaceAfter=20,
        alignment=1 # Center
    )
    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Heading2'],
        fontSize=18,
        textColor=colors.HexColor('#4f46e5'),
        spaceAfter=30,
        alignment=1 # Center
    )
    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=colors.HexColor('#0f1729'),
        spaceBefore=20,
        spaceAfter=10
    )
    h2_style = ParagraphStyle(
        'Heading2Custom',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#4f46e5'),
        spaceBefore=15,
        spaceAfter=8
    )
    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['BodyText'],
        fontSize=11,
        leading=14,
        spaceAfter=10
    )
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['BodyText'],
        fontSize=11,
        leading=14,
        leftIndent=20,
        spaceAfter=5,
        bulletIndent=10
    )

    # Title Page
    story.append(Spacer(1, 2*inch))
    story.append(Paragraph("The 2026 AI Automation Playbook", title_style))
    story.append(Paragraph("Future-Proof Strategies for Intelligent Systems", subtitle_style))
    story.append(Spacer(1, 0.5*inch))
    story.append(Paragraph("<b>Prepared by Conquermark</b>", ParagraphStyle('Centered', parent=body_style, alignment=1)))
    story.append(PageBreak())

    # Introduction
    story.append(Paragraph("Introduction: The Age of Autonomous Enterprise", h1_style))
    story.append(Paragraph("The business landscape of 2026 is no longer defined by who has the most staff, but by who has the most intelligent systems. We have moved beyond simple task automation into the era of the <b>Autonomous Enterprise</b>.", body_style))
    story.append(Paragraph("This playbook is your blueprint for navigating this shift. It is not about replacing humans; it is about liberating them from the mundane to focus on the strategic, the creative, and the innovative.", body_style))
    
    story.append(Paragraph("What You Will Learn", h2_style))
    story.append(Paragraph("1. <b>The 3 Pillars of AI Automation:</b> How to structure your intelligent workforce.", bullet_style))
    story.append(Paragraph("2. <b>Blueprints for Autonomous Workflows:</b> Real-world examples of self-driving business processes.", bullet_style))
    story.append(Paragraph("3. <b>The ROI of AI Agents:</b> Moving beyond cost savings to value creation.", bullet_style))
    story.append(Spacer(1, 0.2*inch))

    # Chapter 1
    story.append(Paragraph("Chapter 1: The 3 Pillars of AI Automation", h1_style))
    story.append(Paragraph("To build a truly scalable and efficient operation, you must integrate three core layers of automation.", body_style))

    story.append(Paragraph("1. The Foundation: Data Unification", h2_style))
    story.append(Paragraph("Before you can automate, you must integrate. Your data—customer records, sales figures, operational metrics—must flow freely between systems.", body_style))
    story.append(Paragraph("• <b>Action:</b> Connect your CRM, ERP, and Marketing platforms into a single source of truth.", bullet_style))
    story.append(Paragraph("• <b>Tooling:</b> Use platforms like n8n or Make to create seamless data pipelines.", bullet_style))

    story.append(Paragraph("2. The Engine: Intelligent Agents", h2_style))
    story.append(Paragraph("These are not just scripts; they are cognitive workers capable of decision-making.", body_style))
    story.append(Paragraph("• <b>Role:</b> Customer Support Agents that resolve issues, not just ticket them. Sales Development Reps (SDRs) that nurture leads 24/7.", bullet_style))
    story.append(Paragraph("• <b>Technology:</b> Leverage LLMs (Large Language Models) to understand context, sentiment, and intent.", bullet_style))

    story.append(Paragraph("3. The Interface: Human-in-the-Loop", h2_style))
    story.append(Paragraph("Automation is powerful, but human oversight is critical for strategic direction and handling edge cases.", body_style))
    story.append(Paragraph("• <b>Strategy:</b> Design workflows where AI handles 80% of the volume, escalating the complex 20% to human experts.", bullet_style))
    story.append(Paragraph("• <b>Benefit:</b> This ensures quality control while maximizing throughput.", bullet_style))
    story.append(PageBreak())

    # Chapter 2
    story.append(Paragraph("Chapter 2: Blueprints for Autonomous Workflows", h1_style))
    story.append(Paragraph("Stop thinking in tasks. Start thinking in workflows. Here are three high-impact automations you can deploy today.", body_style))

    story.append(Paragraph("Blueprint A: The 'Zero-Touch' Customer Onboarding", h2_style))
    story.append(Paragraph("<b>Goal:</b> Reduce onboarding time from days to minutes.", body_style))
    story.append(Paragraph("1. <b>Trigger:</b> New client signs contract via DocuSign.", bullet_style))
    story.append(Paragraph("2. <b>Action 1 (CRM):</b> AI Agent creates client profile in HubSpot and tags as 'New Customer.'", bullet_style))
    story.append(Paragraph("3. <b>Action 2 (Project Mgmt):</b> AI Agent generates a dedicated project board in ClickUp/Asana with standard tasks.", bullet_style))
    story.append(Paragraph("4. <b>Action 3 (Communication):</b> AI Agent drafts and sends a personalized welcome email with login credentials and kickoff call link.", bullet_style))
    story.append(Paragraph("5. <b>Action 4 (Finance):</b> Invoice is automatically generated and sent via QuickBooks/Stripe.", bullet_style))
    story.append(Paragraph("<b>Result:</b> A seamless, professional experience for the client with zero manual effort from your team.", body_style))

    story.append(Paragraph("Blueprint B: The 24/7 AI Sales Development Rep", h2_style))
    story.append(Paragraph("<b>Goal:</b> Never let a lead go cold.", body_style))
    story.append(Paragraph("1. <b>Trigger:</b> Lead fills out a form on your website.", bullet_style))
    story.append(Paragraph("2. <b>Action 1 (Enrichment):</b> AI Agent scrapes LinkedIn and company data to enrich the lead profile.", bullet_style))
    story.append(Paragraph("3. <b>Action 2 (Qualification):</b> AI analyzes the data against your Ideal Customer Profile (ICP).", bullet_style))
    story.append(Paragraph("4. <b>Action 3 (Engagement):</b>", bullet_style))
    story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;- <i>If Qualified:</i> AI sends a hyper-personalized email referencing their specific pain points.", bullet_style))
    story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;- <i>If Unqualified:</i> AI adds them to a general nurture sequence.", bullet_style))
    story.append(Paragraph("5. <b>Action 4 (Scheduling):</b> AI negotiates a meeting time and books it directly on your sales team's calendar.", bullet_style))
    story.append(Paragraph("<b>Result:</b> Your sales team wakes up to a calendar full of qualified meetings, not a list of cold leads.", body_style))
    story.append(PageBreak())

    # Chapter 3
    story.append(Paragraph("Chapter 3: The ROI of AI Agents", h1_style))
    story.append(Paragraph("Investing in AI automation is not an expense; it is a capital improvement to your business infrastructure.", body_style))

    data = [
        ['Metric', 'Traditional Operation', 'AI-Augmented Operation', 'Impact'],
        ['Response Time', '2-4 Hours', '< 2 Minutes', '120x Faster'],
        ['Cost Per Lead', '$150', '$45', '70% Reduction'],
        ['Employee Focus', '60% Admin / 40% Strategy', '10% Admin / 90% Strategy', 'High Value'],
        ['Scalability', 'Linear (Hire more people)', 'Exponential (Add compute)', 'Unlimited']
    ]
    t = Table(data, colWidths=[1.5*inch, 2*inch, 2*inch, 1.5*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0f1729')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#f3f4f6')),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('ALIGN', (0, 1), (0, -1), 'LEFT'),
        ('ALIGN', (1, 1), (2, -1), 'CENTER'),
        ('TEXTCOLOR', (3, 1), (3, -1), colors.HexColor('#16a34a')),
        ('FONTNAME', (3, 1), (3, -1), 'Helvetica-Bold'),
    ]))
    story.append(t)
    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph("Case Study: Scaling Without Headcount", h2_style))
    story.append(Paragraph("<i>A mid-sized marketing agency implemented the 'Zero-Touch' Onboarding blueprint.</i>", body_style))
    story.append(Paragraph("• <b>Before:</b> Account managers spent 10 hours/week on admin setup.", bullet_style))
    story.append(Paragraph("• <b>After:</b> Admin time reduced to 30 mins/week.", bullet_style))
    story.append(Paragraph("• <b>Outcome:</b> The agency took on 50% more clients without hiring a single new account manager.", bullet_style))
    story.append(Spacer(1, 0.5*inch))

    # Conclusion
    story.append(Paragraph("Conclusion: Your Next Step", h1_style))
    story.append(Paragraph("The technology is here. The blueprints are proven. The only variable left is your speed of execution.", body_style))
    story.append(Paragraph("<b>Don't just read this playbook. Deploy it.</b>", body_style))
    story.append(Spacer(1, 0.3*inch))
    
    story.append(Paragraph("Ready to Build Your Autonomous Workforce?", h2_style))
    story.append(Paragraph("Contact Conquermark today for a custom AI Readiness Audit.", body_style))
    story.append(Paragraph("<a href='https://www.conquermark.com' color='blue'>www.conquermark.com</a>", ParagraphStyle('Link', parent=body_style, alignment=1, textColor=colors.blue)))

    doc.build(story)

if __name__ == "__main__":
    create_pdf()
