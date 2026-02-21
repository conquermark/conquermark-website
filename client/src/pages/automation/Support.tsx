import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Headphones, MessageSquare, Clock, BarChart, Lightbulb, Rocket, Settings, Award } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Support() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Zendesk, ToolLogos.Intercom, ToolLogos.Freshdesk, ToolLogos.Slack, ToolLogos.OpenAI, ToolLogos.Trello]}
      title="AI Customer Support Automation"
      subtitle="Deliver instant, 24/7 support without hiring more agents. Automate tickets, chats, and FAQs."
      description="We implement AI chatbots and automated ticketing workflows that resolve 60% of queries instantly, leaving your team to handle complex issues."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/NcZgNuTHmtUCHiae.png"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/mmErDKirLhyrZAeM.jpg"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/bTyoTAhPnouQNZnN.png"
      benefits={[
        {
          icon: <MessageSquare className="h-12 w-12" />,
          title: "AI-Powered Auto-Responses",
          description: "Automatically answer common questions, provide instant solutions, and deflect 60-80% of repetitive tickets"
        },
        {
          icon: <Headphones className="h-12 w-12" />,
          title: "Intelligent Ticket Routing",
          description: "Route tickets to the right agent based on issue type, priority, customer tier, and agent expertise"
        },
        {
          icon: <Clock className="h-12 w-12" />,
          title: "24/7 Automated Support",
          description: "Provide instant responses outside business hours, escalate urgent issues, and queue non-urgent tickets"
        },
        {
          icon: <BarChart className="h-12 w-12" />,
          title: "Support Analytics",
          description: "Real-time dashboards tracking response times, resolution rates, customer satisfaction, and agent performance"
        }
      ]}
      features={[
        "Support tickets piling up with 24+ hour response times",
        "Agents spending hours on repetitive questions that could be automated",
        "No automated ticket routing based on priority or expertise",
        "Customer satisfaction dropping due to slow response times",
        "Support data scattered across email, chat, and helpdesk tools",
        "Unable to provide 24/7 support without hiring night shift teams"
      ]}
      tools={["Zendesk", "Freshdesk", "Intercom", "Help Scout", "Front", "Gorgias", "Drift", "Crisp", "Tawk.to", "Slack", "Microsoft Teams", "Salesforce Service Cloud"]}
      process={[
        { step: 1, title: "Discovery & Strategy", description: "We begin with an in-depth analysis of your current support workflows, identifying bottlenecks and automation opportunities. We define clear objectives and a tailored strategy." },
        { step: 2, title: "Setup & Integration", description: "Our team integrates automation tools with your existing helpdesk, CRM, and communication platforms. We configure initial rules and AI models based on your data." },
        { step: 3, title: "Build & Refine Automation", description: "We develop custom automation flows for ticket routing, auto-responses, escalation, and reporting. We continuously test and refine these flows for optimal performance." },
        { step: 4, title: "Launch & Optimization", description: "After thorough testing, we launch your automated support system. We provide ongoing monitoring, support, and iterative optimization to ensure maximum efficiency and ROI." }
      ]}
      useCases={[
        {
          title: "E-commerce Customer Service",
          industry: "E-commerce",
          challenge: "A fast-growing e-commerce brand struggled with increasing ticket volumes related to order status, returns, and product inquiries, leading to long response times and agent burnout.",
          solution: "Implemented AI-powered chatbots for instant answers to common questions, automated order status updates, and intelligent routing for complex issues. Integrated with Shopify and Zendesk.",
          results: ["Reduced average response time by 75%", "Deflected 60% of routine tickets", "Increased customer satisfaction by 20%", "Saved 30 hours/week for support agents"]
        },
        {
          title: "SaaS Technical Support",
          industry: "Software as a Service (SaaS)",
          challenge: "A SaaS company faced challenges with escalating technical support requests, requiring specialized agents and leading to high operational costs and slow resolution times.",
          solution: "Deployed an automation system that uses natural language processing to categorize technical issues, provides self-service knowledge base articles, and routes critical bugs directly to engineering teams. Integrated with Intercom and Jira.",
          results: ["Improved first-response time by 80%", "Decreased ticket resolution time by 40%", "Reduced support costs by 25%", "Increased agent efficiency by 35%"]
        }
      ]}
      testimonials={[
        {
          quote: "Conquermark transformed our customer support. We're now handling more tickets with a smaller team, and our customers are happier than ever.",
          author: "Sarah Chen",
          role: "Head of Customer Success",
          company: "InnovateTech",
          rating: 5
        },
        {
          quote: "The automation solutions provided by Conquermark allowed us to scale our support operations globally without compromising on quality. A true game-changer!",
          author: "David Lee",
          role: "Operations Director",
          company: "GlobalConnect",
          rating: 5
        },
        {
          quote: "Our agents can now focus on complex issues, thanks to the efficient automation of repetitive tasks. Conquermark's expertise is unparalleled.",
          author: "Maria Rodriguez",
          role: "Support Team Lead",
          company: "NextGen Solutions",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$999",
          period: "month",
          features: [
            "AI-powered auto-responses",
            "Basic ticket routing",
            "Up to 1,000 automated interactions/month",
            "Email & chat support"
          ]
        },
        {
          name: "Professional",
          price: "$2,999",
          period: "month",
          popular: true,
          features: [
            "Everything in Starter, plus:",
            "Advanced intelligent routing",
            "Up to 10,000 automated interactions/month",
            "Multi-channel support (email, chat, social)",
            "Customizable dashboards & analytics",
            "Dedicated account manager"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "month",
          features: [
            "Everything in Professional, plus:",
            "Unlimited automated interactions",
            "Custom AI model training",
            "On-premise deployment options",
            "24/7 premium support",
            "SLA guarantees",
            "Advanced security & compliance"
          ]
        }
      ]}
      faqs={[
        {
          question: "What kind of support channels can you automate?",
          answer: "We can automate support across various channels including email, live chat, social media, and in-app messaging. Our solutions integrate seamlessly with popular helpdesk platforms."
        },
        {
          question: "How long does it take to implement an automation solution?",
          answer: "Implementation timelines vary based on complexity and existing infrastructure, but typically range from 4 to 8 weeks for a full deployment, including discovery, setup, and optimization."
        },
        {
          question: "Will automation replace my human support agents?",
          answer: "Our goal is not to replace human agents but to augment their capabilities. Automation handles repetitive tasks, freeing up agents to focus on complex, high-value customer interactions, improving job satisfaction and efficiency."
        },
        {
          question: "What kind of ROI can I expect from customer support automation?",
          answer: "Clients typically see significant ROI through reduced operational costs, improved response times, increased customer satisfaction, and higher agent productivity. Specific metrics often include a 20-50% reduction in support costs and a 15-30% increase in CSAT scores."
        },
        {
          question: "Is your solution compatible with my existing helpdesk software?",
          answer: "Yes, we prioritize seamless integration. We support a wide range of popular helpdesk and CRM systems like Zendesk, Freshdesk, Intercom, Salesforce Service Cloud, and many more. During our discovery phase, we'll confirm compatibility and integration strategies."
        }
      ]}
      ctaTitle="Ready to Automate Your Customer Support?"
      ctaSubtitle="AI Customer Support Automation"
      seoTitle="AI Customer Support Automation | Conquermark"
      seoDescription="Reduce support costs with AI automation. We implement Zendesk, Intercom, and Freshdesk automation to resolve tickets faster."
      seoKeywords="customer support automation, ai chatbot services, zendesk automation, intercom workflows, automated helpdesk"
    />
  );
}
