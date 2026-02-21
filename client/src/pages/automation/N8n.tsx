import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Workflow, Code, Shield, Zap, DollarSign, HelpCircle, Briefcase, Settings, Star } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function N8n() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.HubSpot, ToolLogos.Salesforce, ToolLogos.Slack, ToolLogos.GoogleSheets, ToolLogos.OpenAI, ToolLogos.Stripe]}
      title="n8n Workflow Automation Experts"
      subtitle="Build complex, self-hosted automation workflows without breaking the bank."
      description="We are certified n8n experts. We design, build, and host powerful node-based workflows that connect any API to any app."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/bTyoTAhPnouQNZnN.png"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/bTyoTAhPnouQNZnN.png"
      benefits={[
        {
          icon: <Workflow className="h-12 w-12" />,
          title: "Complex Workflow Design",
          description: "Build sophisticated multi-step workflows with conditional logic, loops, error handling, and custom functions"
        },
        {
          icon: <Shield className="h-12 w-12" />,
          title: "Self-Hosted Deployment",
          description: "Deploy n8n on your own infrastructure (AWS, Azure, GCP, or on-premise) for complete data control and compliance"
        },
        {
          icon: <Code className="h-12 w-12" />,
          title: "Custom Integrations",
          description: "Build custom nodes and integrations for any API or internal system using JavaScript/TypeScript"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Unlimited Workflows",
          description: "No per-workflow or per-task limits - run thousands of workflows without worrying about costs"
        }
      ]}
      features={[
        "Zapier costs skyrocketing as your automation needs grow",
        "Need complete control over automation infrastructure and data",
        "Want to build complex workflows with custom code and logic",
        "Require on-premise or private cloud deployment for compliance",
        "Hit limitations with no-code tools for advanced use cases",
        "Need unlimited workflows without per-task pricing"
      ]}
      tools={["n8n", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Custom APIs", "Webhooks"]}
      process={[
        { step: 1, title: "Discovery & Strategy", description: "We begin by understanding your current processes, pain points, and automation goals to define a clear strategy." },
        { step: 2, title: "Setup & Configuration", description: "Our experts set up your n8n environment, whether self-hosted or cloud-based, ensuring optimal performance and security." },
        { step: 3, title: "Workflow Design & Build", description: "We design, develop, and rigorously test custom n8n workflows tailored to your specific business needs and integrations." },
        { step: 4, title: "Launch & Optimization", description: "After successful testing, we launch your automations and provide ongoing monitoring, maintenance, and optimization." }
      ]}
      useCases={[
        {
          title: "E-commerce Order Fulfillment Automation",
          industry: "E-commerce",
          challenge: "Manual processing of orders from multiple platforms leading to delays and errors.",
          solution: "Implemented n8n to connect Shopify, WooCommerce, and a custom ERP system, automating order syncing, inventory updates, and shipping label generation.",
          results: ["Reduced order processing time by 60%", "Decreased manual errors by 80%", "Saved 15 hours/week in operational costs"]
        },
        {
          title: "Lead Nurturing and CRM Integration",
          industry: "SaaS",
          challenge: "Disconnected lead data across marketing platforms and CRM, leading to inefficient follow-ups.",
          solution: "Developed n8n workflows to capture leads from LinkedIn Ads and website forms, enrich data with Clearbit, and automatically create/update contacts in HubSpot, triggering personalized email sequences.",
          results: ["Increased lead conversion rate by 30%", "Improved sales team efficiency by 20%", "Ensured data consistency across systems"]
        }
      ]}
      testimonials={[
        {
          quote: "ConquerMark's n8n expertise transformed our operations. We've seen a significant reduction in manual tasks and our data is now perfectly synced across all platforms.",
          author: "Priya Sharma",
          role: "Operations Manager",
          company: "InnovateTech Solutions",
          rating: 5
        },
        {
          quote: "The self-hosted n8n solution provided by ConquerMark gave us the data control we desperately needed. Their team was professional and delivered beyond expectations.",
          author: "Rajesh Kumar",
          role: "CTO",
          company: "SecureData Corp",
          rating: 5
        },
        {
          quote: "We were struggling with Zapier costs, and ConquerMark introduced us to n8n. It's been a game-changer for our workflow automation, saving us thousands monthly.",
          author: "Anjali Singh",
          role: "Head of Marketing",
          company: "GrowthEngine Digital",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$500",
          period: "month",
          features: ["Basic n8n setup", "Up to 5 workflows", "Email support", "Standard integrations"]
        },
        {
          name: "Professional",
          price: "$1,500",
          period: "month",
          features: ["Advanced n8n setup", "Up to 20 workflows", "Priority support", "Custom integrations", "Performance monitoring"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: ["Dedicated n8n team", "Unlimited workflows", "24/7 premium support", "On-premise deployment", "SLA & compliance"]
        }
      ]}
      faqs={[
        {
          question: "What is n8n and why should I use it?",
          answer: "n8n is a powerful open-source workflow automation tool that allows you to connect various applications and services to automate tasks. It's ideal for businesses needing full control over their data, custom integrations, and unlimited workflows without per-task pricing, unlike many cloud-based alternatives."
        },
        {
          question: "Is n8n suitable for small businesses or large enterprises?",
          answer: "n8n is highly scalable and can be tailored for businesses of all sizes. For small businesses, it offers cost-effective automation. For enterprises, its self-hosted nature provides unparalleled data privacy, security, and the ability to handle complex, high-volume workflows."
        },
        {
          question: "How does n8n compare to Zapier or Make (formerly Integromat)?",
          answer: "While Zapier and Make are excellent cloud-based automation tools, n8n offers key advantages like self-hosting for data control, unlimited workflows without per-task costs, and the flexibility to build custom nodes and integrations for any API. It's often chosen by businesses with specific compliance needs or those looking to avoid escalating costs."
        },
        {
          question: "What kind of support do you offer for n8n services?",
          answer: "We offer comprehensive support packages ranging from basic email support for starter plans to dedicated teams and 24/7 support for enterprise clients. Our services include initial setup, workflow design, custom node development, ongoing maintenance, and performance optimization."
        },
        {
          question: "Can n8n integrate with my existing custom systems?",
          answer: "Absolutely. One of n8n's core strengths is its flexibility. We can develop custom nodes and integrations to connect with virtually any API or internal system, ensuring seamless data flow and automation across your entire tech stack."
        }
      ]}
      ctaTitle="Ready to Automate Your Workflows?"
      ctaSubtitle="n8n Workflow Automation Experts"
      seoTitle="n8n Workflow Automation Experts | Conquermark"
      seoDescription="Hire certified n8n experts to build custom automation workflows. We specialize in self-hosted n8n implementation and complex integrations."
      seoKeywords="n8n experts, n8n automation services, n8n workflow builder, self-hosted automation, n8n consultant"
    />
  );
}
