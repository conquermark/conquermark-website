from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch

def create_pdf():
    doc = SimpleDocTemplate("/home/ubuntu/conquermark-website/public/Marketing-ROI-Guide.pdf", pagesize=LETTER)
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
        textColor=colors.HexColor('#9333ea'), # Purple
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
        textColor=colors.HexColor('#9333ea'),
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
    story.append(Paragraph("The 2026 Marketing ROI Guide", title_style))
    story.append(Paragraph("Stop Guessing. Start Scaling with AI.", subtitle_style))
    story.append(Spacer(1, 0.5*inch))
    story.append(Paragraph("<b>Prepared by Conquermark</b>", ParagraphStyle('Centered', parent=body_style, alignment=1)))
    story.append(PageBreak())

    # Introduction
    story.append(Paragraph("Introduction: The End of 'Spray and Pray'", h1_style))
    story.append(Paragraph("The era of throwing budget at ad platforms and hoping for the best is over. In 2026, the winners are not the biggest spenders, but the smartest optimizers.", body_style))
    story.append(Paragraph("This guide reveals how top brands are using AI Agents to cut Customer Acquisition Costs (CAC) by 40% while tripling conversion rates. It’s time to move from manual campaign management to autonomous growth engines.", body_style))
    
    story.append(Paragraph("What You Will Learn", h2_style))
    story.append(Paragraph("1. <b>The New Funnel Mathematics:</b> Why traditional metrics are failing you.", bullet_style))
    story.append(Paragraph("2. <b>AI-Driven Ad Optimization:</b> How to let algorithms manage your bids 24/7.", bullet_style))
    story.append(Paragraph("3. <b>Predictive SEO:</b> Ranking for what your customers will search for next month.", bullet_style))
    story.append(Paragraph("4. <b>The 3-Step Action Plan:</b> Immediate steps to reclaim your wasted ad spend.", bullet_style))
    story.append(Spacer(1, 0.2*inch))

    # Chapter 1
    story.append(Paragraph("Chapter 1: The New Funnel Mathematics", h1_style))
    story.append(Paragraph("Traditional marketing funnels are leaky buckets. You pay for traffic, lose 98% of it, and celebrate a 2% conversion rate. AI changes the equation by plugging the leaks in real-time.", body_style))

    story.append(Paragraph("The Old Way vs. The AI Way", h2_style))
    data = [
        ['Metric', 'The Old Way', 'The AI Way'],
        ['Targeting', 'Broad demographics (Age, Location)', 'Behavioral Intent & Predictive Scoring'],
        ['Creative', 'A/B Testing (Takes weeks)', 'Generative Multivariate Testing (Real-time)'],
        ['Follow-up', 'Generic Drip Campaigns', 'Hyper-Personalized 1:1 Agent Outreach'],
        ['Optimization', 'Weekly Manual Review', 'Second-by-Second Algorithmic Adjustments']
    ]
    t = Table(data, colWidths=[1.5*inch, 2.5*inch, 2.5*inch])
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
        ('TEXTCOLOR', (2, 1), (2, -1), colors.HexColor('#9333ea')),
        ('FONTNAME', (2, 1), (2, -1), 'Helvetica-Bold'),
    ]))
    story.append(t)
    story.append(Paragraph("<b>Key Insight:</b> AI doesn't just optimize the campaign; it optimizes the <i>customer journey</i>.", body_style))
    story.append(PageBreak())

    # Chapter 2
    story.append(Paragraph("Chapter 2: AI-Driven Ad Optimization", h1_style))
    story.append(Paragraph("Your human media buyer sleeps. Your AI ad manager doesn't.", body_style))

    story.append(Paragraph("How It Works", h2_style))
    story.append(Paragraph("1. <b>Real-Time Bidding:</b> AI analyzes thousands of signals (device, time, location, browsing history) to bid only on high-intent users.", bullet_style))
    story.append(Paragraph("2. <b>Creative Fatigue Monitoring:</b> The system detects when an ad's performance dips and automatically swaps in fresh creative variations generated by AI.", bullet_style))
    story.append(Paragraph("3. <b>Cross-Channel Allocation:</b> Budget is dynamically shifted between Meta, Google, and LinkedIn based on which platform is delivering the best ROAS <i>right now</i>.", bullet_style))

    story.append(Paragraph("Case Study: E-commerce Brand 'StyleHub'", h2_style))
    story.append(Paragraph("• <b>Challenge:</b> Rising CPMs on Facebook were killing profitability.", bullet_style))
    story.append(Paragraph("• <b>Solution:</b> Deployed an AI agent to manage bids and creative rotation.", bullet_style))
    story.append(Paragraph("• <b>Result:</b> 35% drop in CPA and 2.5x increase in ROAS within 30 days.", bullet_style))
    story.append(PageBreak())

    # Chapter 3
    story.append(Paragraph("Chapter 3: Predictive SEO", h1_style))
    story.append(Paragraph("Stop optimizing for yesterday's keywords. Predictive SEO uses trend analysis to identify topics before they peak.", body_style))

    story.append(Paragraph("The Strategy", h2_style))
    story.append(Paragraph("• <b>Topic Clustering:</b> AI analyzes search intent to build comprehensive content clusters that dominate niche authority.", bullet_style))
    story.append(Paragraph("• <b>Content Updates:</b> Agents automatically flag decaying content and suggest updates to maintain rankings.", bullet_style))
    story.append(Paragraph("• <b>Technical Health:</b> 24/7 crawling to identify and fix broken links, slow pages, and schema errors before Google notices.", bullet_style))
    story.append(Spacer(1, 0.2*inch))

    # Chapter 4
    story.append(Paragraph("Chapter 4: The 3-Step Action Plan", h1_style))
    story.append(Paragraph("Ready to stop wasting budget? Here is your immediate roadmap.", body_style))

    story.append(Paragraph("Step 1: Audit Your Data (Week 1)", h2_style))
    story.append(Paragraph("You cannot optimize what you cannot measure. Ensure your conversion tracking is server-side (CAPI) and your CRM data is feeding back into your ad platforms.", body_style))

    story.append(Paragraph("Step 2: Deploy a 'Pilot' Agent (Week 2)", h2_style))
    story.append(Paragraph("Start small. Choose one channel (e.g., Google Search) and one function (e.g., Bid Management) to hand over to an AI tool. Measure the lift against your manual baseline.", body_style))

    story.append(Paragraph("Step 3: Automate the Nurture (Week 3)", h2_style))
    story.append(Paragraph("The money is in the follow-up. Implement an AI SDR to instantly engage every lead that comes through your funnel. Speed to lead is the single biggest predictor of conversion.", body_style))
    story.append(Spacer(1, 0.5*inch))

    # Conclusion
    story.append(Paragraph("Conclusion: The Competitive Advantage", h1_style))
    story.append(Paragraph("The gap between AI-native marketing teams and traditional teams is widening every day. The tools are accessible, the strategies are proven, and the ROI is undeniable.", body_style))
    story.append(Paragraph("<b>The only question is: Will you disrupt your market, or will you be disrupted?</b>", body_style))
    story.append(Spacer(1, 0.3*inch))
    
    story.append(Paragraph("Get Your Custom Marketing Audit", h2_style))
    story.append(Paragraph("Stop guessing. Let us analyze your current stack and show you exactly where you're losing money.", body_style))
    story.append(Paragraph("<a href='https://www.conquermark.com' color='blue'>www.conquermark.com</a>", ParagraphStyle('Link', parent=body_style, alignment=1, textColor=colors.blue)))

    doc.build(story)

if __name__ == "__main__":
    create_pdf()
