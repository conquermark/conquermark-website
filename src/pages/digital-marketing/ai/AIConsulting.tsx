import ConversionPageTemplate from "@/components/ConversionPageTemplate";
import AIAuditPopup from "@/components/popups/AIAuditPopup";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export default function AIConsulting() {
  return (
    <ConversionPageTemplate
      heroHeadline="AI Consulting That Delivers Real Business Results"
      heroSubheadline="Stop guessing which AI tools to use. Our strategic AI consulting identifies the highest-ROI opportunities and creates a custom roadmap for your business. Average client ROI: 312% in year one."
      heroCTA="Get My Free Audit Report"
      heroCTALink="/ai-audit"
      heroStats={[
        { label: "Average First-Year ROI", value: "312%", icon: DollarSign },
        { label: "Cost Savings", value: "52%", icon: TrendingUp },
        { label: "Success Rate", value: "96%", icon: Users },
        { label: "Strategy Delivery", value: "7 Days", icon: Clock }
      ]}
      
      awards={["Best AI Strategy Firm 2024", "Top Innovation Consultant", "AI Excellence Award"]}
      asSeenIn={["Harvard Business Review", "MIT Technology Review", "VentureBeat"]}
      reviewCount={350}
      rating={4.9}
      
      painPoints={[
        "You've tried AI tools but they didn't deliver the promised results",
        "Your team is overwhelmed by AI options and doesn't know where to start",
        "Previous consultants gave generic advice that didn't fit your business",
        "You're losing market share to competitors who are using AI effectively",
        "You've wasted budget on AI solutions that never got implemented"
      ]}
      audienceThoughts={[
        "How do I know which AI investments will actually pay off?",
        "What if we choose the wrong AI strategy and waste months?",
        "Can AI really work for a business our size?",
        "We don't have data scientists - can we still use AI?",
        "How long before we see actual business results?"
      ]}
      
      solutionHeadline="Strategic AI Consulting Built on Real-World Results"
      solutionDescription="We don't sell you AI for the sake of AI. Our consulting process starts with your business goals and works backward to identify AI opportunities that deliver measurable ROI. Every recommendation is backed by data from our 500+ successful implementations."
      usps={[
        "ROI-focused strategy, not technology for technology's sake",
        "Custom roadmap delivered in 7 days, not months",
        "Implementation support included - we don't just advise",
        "Industry-specific AI playbooks from 15+ sectors",
        "Ongoing optimization to maximize your AI investment",
        "Risk assessment to avoid costly AI mistakes"
      ]}
      
      expertiseHeadline="Why Fortune 500s and Startups Trust Our AI Consulting"
      expertisePoints={[
        {
          title: "Proven AI Framework",
          description: "Our proprietary AI Opportunity Matrix has identified $100M+ in cost savings and revenue opportunities for clients across industries."
        },
        {
          title: "Implementation Experience",
          description: "Unlike pure strategy firms, we've personally implemented 500+ AI solutions. We know what actually works in production."
        },
        {
          title: "Industry Expertise",
          description: "Dedicated AI consultants for e-commerce, healthcare, finance, manufacturing, and 11 other industries."
        },
        {
          title: "Technology Agnostic",
          description: "We recommend the best AI tools for your needs, not what pays us the highest commission. OpenAI, Google, AWS, or custom - whatever works."
        },
        {
          title: "Fast Time to Value",
          description: "Our clients see measurable results within 30 days. We focus on quick wins while building long-term AI capabilities."
        },
        {
          title: "Change Management Included",
          description: "AI strategy fails without adoption. We include team training and change management to ensure your AI initiatives succeed."
        }
      ]}
      yearsExperience={12}
      clientsServed={350}
      
      testimonials={[
        {
          name: "Amanda Foster",
          title: "Chief Strategy Officer",
          company: "RetailTech Global",
          quote: "Conquermark's AI consulting saved us from a $500K mistake. They showed us exactly which AI investments would pay off and which were hype. We're now seeing 4x ROI on our AI budget."
        },
        {
          name: "Dr. James Patterson",
          title: "CEO",
          company: "HealthCare Innovations",
          quote: "Best consulting engagement we've ever had. They delivered a comprehensive AI strategy in 7 days that our previous consultant couldn't produce in 3 months. Implementation is already underway."
        },
        {
          name: "Maria Gonzalez",
          title: "VP of Operations",
          company: "Manufacturing Pro",
          quote: "We were skeptical about AI for manufacturing. Conquermark showed us opportunities we never imagined. We've reduced defects by 67% and increased throughput by 34% using their AI strategy."
        },
        {
          name: "Kevin Huang",
          title: "Founder",
          company: "FinTech Startup",
          quote: "As a startup, we couldn't afford to waste money on the wrong AI tools. Conquermark's consulting helped us prioritize and we're now processing 10x more transactions with the same team size."
        },
        {
          name: "Rachel Morrison",
          title: "CMO",
          company: "E-Commerce Leaders",
          quote: "The AI marketing strategy they developed increased our conversion rate by 28% and reduced customer acquisition cost by 41%. ROI was 6x in the first year alone."
        },
        {
          name: "Tom Bradley",
          title: "CTO",
          company: "SaaS Solutions Inc",
          quote: "Finally, consultants who actually understand AI implementation. They didn't just give us a pretty PowerPoint - they helped us execute and saw it through to results."
        }
      ]}
      
      futureHeadline="Picture Your Business With a Winning AI Strategy"
      futureDescription="In 90 days, you'll have clarity on exactly which AI investments to make, a team that's excited about AI (not afraid of it), and measurable results from your first AI implementations. Your competitors will be asking how you're moving so fast."
      futureOutcomes={[
        "Complete confidence in your AI investment decisions",
        "A clear, prioritized roadmap with ROI projections for each initiative",
        "Your first AI wins already delivering measurable business value",
        "Team members trained and excited to leverage AI in their roles",
        "Competitive advantage from AI capabilities your rivals don't have",
        "Board and stakeholders impressed by your AI progress",
        "Foundation for continuous AI innovation and improvement",
        "Avoided costly mistakes that plague most AI initiatives"
      ]}
      
      offerHeadline="Complete AI Strategic Consulting Package"
      offerItems={[
        {
          title: "AI Opportunity Assessment",
          description: "Deep analysis of your business processes, data, and systems to identify high-ROI AI opportunities. Includes competitive AI benchmarking.",
          value: "$8,000"
        },
        {
          title: "Custom AI Strategy & Roadmap",
          description: "Prioritized 12-month AI implementation plan with ROI projections, resource requirements, and risk mitigation strategies.",
          value: "$15,000"
        },
        {
          title: "Technology Evaluation & Recommendations",
          description: "Unbiased assessment of AI tools, platforms, and vendors. We test options and recommend the best fit for your needs and budget.",
          value: "$6,000"
        },
        {
          title: "Implementation Planning",
          description: "Detailed project plans, timelines, and resource allocation for your top 3 AI initiatives. Ready to execute immediately.",
          value: "$7,000"
        },
        {
          title: "Executive Presentation & Board Deck",
          description: "Professional presentation materials to secure buy-in and budget for your AI initiatives. Includes ROI models and case studies.",
          value: "$4,000"
        },
        {
          title: "90-Day Implementation Support",
          description: "Ongoing consulting support as you execute your AI strategy. Weekly check-ins, troubleshooting, and optimization guidance.",
          value: "$12,000"
        }
      ]}
      totalValue="$52,000 Total Value"
      urgencyText="⚡ Limited Spots: We limit consulting engagements to 3 per month to ensure quality. Next available slot: This month."
      
      faqs={[
        {
          question: "How is AI consulting different from AI implementation?",
          answer: "AI consulting focuses on strategy - identifying opportunities, evaluating options, and creating roadmaps. Implementation is building and deploying the actual AI solutions. We offer both, and most clients start with consulting to ensure they're investing in the right AI initiatives."
        },
        {
          question: "How long does the AI consulting process take?",
          answer: "Our standard engagement is 4 weeks: Week 1 - Discovery and assessment, Week 2 - Strategy development, Week 3 - Technology evaluation and planning, Week 4 - Presentation and handoff. We can accelerate to 2 weeks for urgent needs."
        },
        {
          question: "Do you work with companies that have no AI experience?",
          answer: "Absolutely. In fact, 60% of our consulting clients are starting from zero AI experience. We explain everything in business terms, not technical jargon, and create strategies that match your current capabilities."
        },
        {
          question: "What if we want help implementing the strategy?",
          answer: "Most clients engage us for implementation after consulting. We offer a seamless transition from strategy to execution, and you get priority scheduling plus a 20% discount on implementation services."
        },
        {
          question: "How do you ensure the AI strategy fits our industry?",
          answer: "We have dedicated AI consultants with deep experience in 15+ industries. Your engagement includes an industry-specific consultant who understands your unique challenges, regulations, and opportunities."
        },
        {
          question: "What's included in the 90-day implementation support?",
          answer: "Weekly 1-hour consulting calls, email/Slack support for questions and troubleshooting, review of implementation progress, optimization recommendations, and course corrections as needed. Think of us as your fractional AI leadership team."
        },
        {
          question: "How much should we budget for AI implementation?",
          answer: "It varies widely based on scope. Small AI initiatives start around $30K, comprehensive transformations can be $200K+. Our consulting process includes detailed budget planning so you know exactly what to expect before committing to implementation."
        },
        {
          question: "Can you help us avoid AI hype and focus on real value?",
          answer: "That's our specialty. We're known for telling clients when AI isn't the answer. Our ROI-first approach means we only recommend AI where it delivers measurable business value, not because it's trendy."
        }
      ]}
      
      finalCTAHeadline="Get Your Custom AI Strategy in 7 Days"
      finalCTADescription="Join 350+ companies that have transformed their operations with our strategic AI consulting. Schedule your free strategy session and discover your highest-ROI AI opportunities."
      psText="Every day you wait, your competitors are building AI advantages. The companies that win in the next decade are making their AI moves now. Schedule your free session today."
      
      
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "AI Services", href: "/digital-marketing/ai" },
        { label: "AI Consulting", href: "/digital-marketing/ai/ai-consulting" }
      ]}
    />
  );
}
