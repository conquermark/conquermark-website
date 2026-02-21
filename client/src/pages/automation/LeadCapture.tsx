import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Target, Zap, Users, TrendingUp } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function LeadCapture() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Typeform, ToolLogos.JotForm, ToolLogos.HubSpot, ToolLogos.Salesforce, ToolLogos.GoogleSheets, ToolLogos.Slack]}
      title="Automated Lead Capture Systems"
      subtitle="Never lose a lead again. Instantly capture, enrich, and route every prospect."
      description="We integrate your forms, landing pages, and ads directly with your CRM. Ensure every lead is captured instantly and followed up with immediately."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/ynEXztHdrweDuGCB.jpeg"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/Z3zw1K95rl32.png"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/wWYUXpnrLfuUmhtw.jpg"
      benefits={[
        {
          icon: <Target className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Users className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <TrendingUp className="h-12 w-12" />,
          title: "Scalable Solutions",
          description: "Build automation that scales with your business growth without additional manual effort"
        }
      ]}
      features={[
        "Manual processes consuming hours of productive time daily",
        "Data scattered across multiple disconnected systems",
        "Missing opportunities due to slow manual workflows",
        "No automated notifications for critical business events",
        "Team spending time on repetitive tasks instead of strategic work",
        "Unable to scale operations without hiring more staff"
      ]}
      tools={["Salesforce", "HubSpot", "Pipedrive", "ActiveCampaign", "Mailchimp", "Zapier", "Make.com", "Integrately"]}
      process={[
        { step: 1, title: "Discovery & Strategy", description: "We analyze your current lead capture methods and identify automation opportunities." },
        { step: 2, title: "Solution Design & Setup", description: "We design a tailored automation workflow and configure necessary integrations." },
        { step: 3, title: "Development & Testing", description: "Our team builds and rigorously tests the automation to ensure flawless operation." },
        { step: 4, title: "Launch & Optimization", description: "We deploy your new lead capture automation and continuously optimize for performance." }
      ]}
      useCases={[
        {
          title: "E-commerce Lead Nurturing",
          industry: "E-commerce",
          challenge: "A growing e-commerce business struggled with manual lead segmentation and personalized email outreach, leading to missed sales opportunities.",
          solution: "Implemented an automated lead capture system that instantly segments new sign-ups based on browsing behavior and purchase history, triggering personalized email sequences.",
          results: ["Increased email open rates by 45%", "Boosted conversion rates from email campaigns by 20%", "Saved 15 hours/week in manual lead management"]
        },
        {
          title: "B2B Sales Lead Qualification",
          industry: "B2B SaaS",
          challenge: "A B2B SaaS company faced challenges in quickly qualifying inbound leads, resulting in sales team inefficiency and slow response times.",
          solution: "Developed an automation that captures leads from various channels, enriches data with firmographic information, and scores leads based on predefined criteria, routing high-priority leads directly to sales reps.",
          results: ["Reduced lead response time by 60%", "Improved sales team efficiency by 30%", "Increased qualified lead volume by 25%"]
        }
      ]}
      testimonials={[
        { quote: "ConquerMark transformed our lead capture process. We\'re now converting leads faster than ever before!", author: "Jane Doe", role: "Marketing Director", company: "Tech Solutions Inc.", rating: 5 },
        { quote: "The automation implemented by ConquerMark saved us countless hours and significantly improved our sales pipeline.", author: "John Smith", role: "CEO", company: "Global Innovations", rating: 5 },
        { quote: "Their expertise in lead capture automation is unmatched. Highly recommend their services!", author: "Emily White", role: "Sales Manager", company: "Growth Partners", rating: 4 }
      ]}
      pricingPlans={[
        { name: "Starter", price: "$750", period: "one-time setup", features: ["Basic lead form integration", "CRM sync (1 system)", "Standard email notifications", "Up to 500 leads/month"] },
        { name: "Professional", price: "$2500", period: "one-time setup", features: ["Advanced multi-channel capture", "CRM sync (up to 3 systems)", "Custom lead scoring & routing", "Real-time alerts", "Up to 5,000 leads/month"], popular: true },
        { name: "Enterprise", price: "Custom", period: "project-based", features: ["Unlimited lead sources & integrations", "Advanced data enrichment", "AI-powered lead qualification", "Dedicated support", "Unlimited leads"] }
      ]}
      faqs={[
        { question: "What is lead capture automation?", answer: "Lead capture automation involves using software and tools to automatically collect, process, and distribute leads from various sources to your sales or marketing teams, streamlining the initial stages of your sales funnel." },
        { question: "How quickly can I see results?", answer: "While setup time varies based on complexity, many clients see initial improvements in lead response times and efficiency within 2-4 weeks of deployment." },
        { question: "Can you integrate with my existing CRM?", answer: "Yes, we specialize in integrating with a wide range of CRMs including Salesforce, HubSpot, Pipedrive, and many others to ensure seamless data flow." },
        { question: "What if my lead volume fluctuates?", answer: "Our solutions are designed to be scalable, handling varying lead volumes efficiently. We can adjust your automation workflows as your business needs evolve." },
        { question: "Do you offer ongoing support?", answer: "Yes, we provide ongoing support and optimization services to ensure your lead capture automation continues to perform at its best and adapts to new requirements." }
      ]}
      ctaTitle="Ready to Automate Your Lead Capture?"
      ctaSubtitle="Automated Lead Capture Systems"
      seoTitle="Automated Lead Capture Systems | Conquermark"
      seoDescription="Streamline your lead capture process. We automate form submissions, lead enrichment, and CRM routing for maximum conversion."
      seoKeywords="lead capture automation, form automation, lead routing, crm integration, lead enrichment services"
    />
  );
}
