import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Zap, DollarSign, Workflow, Infinity } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Pabbly() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.WooCommerce, ToolLogos.Stripe, ToolLogos.GoogleSheets, ToolLogos.Facebook, ToolLogos.Mailchimp, ToolLogos.Zoom]}
      title="Pabbly Connect Automation"
      subtitle="Affordable automation without task limits. Switch to Pabbly with confidence."
      description="We help you migrate to Pabbly Connect or build new workflows. Enjoy one-time payment options and unrestricted automation capabilities."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/vnujsFaraOcZtBij.jpg"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/WgCqRJRlMycHIXIn.png"
      benefits={[
        {
          icon: <Infinity className="h-12 w-12" />,
          title: "Unlimited Workflows",
          description: "Create unlimited automation workflows with no per-task limits - perfect for high-volume businesses that need predictable costs"
        },
        {
          icon: <DollarSign className="h-12 w-12" />,
          title: "Fixed Pricing",
          description: "Pay one flat monthly fee regardless of how many tasks you run - save thousands compared to usage-based platforms"
        },
        {
          icon: <Workflow className="h-12 w-12" />,
          title: "Multi-Step Automation",
          description: "Build complex workflows with multiple steps, conditions, filters, and integrations across 1,000+ apps"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Same Power as Zapier",
          description: "Get similar functionality to Zapier including webhooks, API requests, data formatting, and conditional logic"
        }
      ]}
      features={[
        "Paying $500+ monthly for Zapier or Make due to high task volumes",
        "Hitting automation task limits and having workflows pause mid-month",
        "Need unlimited workflows without per-task pricing anxiety",
        "Want same functionality as Zapier but at predictable fixed cost",
        "Scaling automation is too expensive with usage-based pricing",
        "Multiple team members need access without extra per-seat costs"
      ]}
      tools={["Pabbly Connect", "Zapier", "Make", "n8n", "HubSpot", "Salesforce", "Shopify", "WooCommerce", "Stripe"]}
      process={[
        { step: 1, title: "Discovery", description: "Understand your current workflows, pain points, and automation goals. We identify opportunities for Pabbly Connect to streamline your operations." },
        { step: 2, title: "Setup & Strategy", description: "Based on discovery, we design a tailored automation strategy and configure your Pabbly Connect environment for optimal performance." },
        { step: 3, title: "Build & Test", description: "Our experts build and rigorously test your Pabbly Connect workflows, ensuring seamless integration and flawless execution." },
        { step: 4, title: "Launch & Optimize", description: "We launch your new automations, provide training, and continuously monitor and optimize them for maximum efficiency and ROI." }
      ]}
      useCases={[
        {
          title: "E-commerce Order Fulfillment Automation",
          industry: "E-commerce",
          challenge: "Manual processing of orders from multiple platforms (Shopify, WooCommerce) to a single fulfillment system, leading to delays and errors.",
          solution: "Implemented Pabbly Connect to automatically sync orders from Shopify and WooCommerce to the fulfillment system, trigger shipping label generation, and update customers with tracking information.",
          results: ["Reduced order processing time by 70%", "Eliminated 95% of manual data entry errors", "Increased customer satisfaction by 25%"]
        },
        {
          title: "Lead Management and CRM Integration",
          industry: "Marketing & Sales",
          challenge: "Disconnected lead capture forms and CRM systems, resulting in lost leads and delayed follow-ups.",
          solution: "Developed Pabbly Connect workflows to capture leads from various sources (website forms, social media, webinars) and automatically push them into the CRM (e.g., HubSpot, Salesforce), assign to sales reps, and initiate welcome email sequences.",
          results: ["Increased lead conversion rate by 30%", "Saved sales team 15 hours/week on data entry", "Improved lead follow-up time by 80%"]
        }
      ]}
      testimonials={[
        {
          quote: "Switching to Pabbly Connect with Conquermark was a game-changer. We've saved thousands monthly and our workflows are more reliable than ever.",
          author: "Sarah Chen",
          role: "Operations Director",
          company: "Global E-commerce Solutions",
          rating: 5
        },
        {
          quote: "The Conquermark team made our Pabbly migration seamless. Their expertise in fixed-cost automation is unparalleled.",
          author: "David Lee",
          role: "Head of Marketing",
          company: "Innovate Tech",
          rating: 5
        },
        {
          quote: "We no longer worry about task limits. Pabbly Connect, managed by Conquermark, gives us the freedom to scale our automations without fear of spiraling costs.",
          author: "Maria Rodriguez",
          role: "CEO",
          company: "Growth Accelerator Agency",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$500",
          period: "month",
          features: ["Basic workflow setup", "Up to 5 integrations", "Email support"]
        },
        {
          name: "Professional",
          price: "$1500",
          period: "month",
          features: ["Advanced workflow design", "Up to 20 integrations", "Priority support", "Monthly optimization reports"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$4000",
          period: "month",
          features: ["Custom enterprise solutions", "Unlimited integrations", "Dedicated account manager", "24/7 support", "On-site training"]
        }
      ]}
      faqs={[
        {
          question: "What is Pabbly Connect?",
          answer: "Pabbly Connect is an integration platform that allows you to connect various applications and automate workflows without coding. It's known for its unlimited task model, offering a cost-effective solution for businesses with high automation needs."
        },
        {
          question: "How does Pabbly Connect compare to Zapier or Make?",
          answer: "Pabbly Connect offers similar powerful automation capabilities to Zapier and Make, including multi-step workflows, conditional logic, and integrations with 1,000+ apps. Its key differentiator is its fixed monthly pricing model, which can lead to significant cost savings for businesses with high task volumes compared to the usage-based pricing of Zapier or Make."
        },
        {
          question: "Can you migrate my existing Zapier/Make workflows to Pabbly Connect?",
          answer: "Yes, our services include migrating your existing automation workflows from platforms like Zapier or Make to Pabbly Connect, ensuring a smooth transition and optimizing them for Pabbly's unique advantages."
        },
        {
          question: "What kind of support do you offer?",
          answer: "We provide end-to-end support, from initial discovery and strategy to workflow setup, building, testing, and ongoing maintenance. Our goal is to ensure your Pabbly Connect automations run efficiently and effectively."
        },
        {
          question: "Is Pabbly Connect suitable for small businesses?",
          answer: "Absolutely. While Pabbly Connect's unlimited task model particularly benefits businesses with high automation needs, its cost-effectiveness and powerful features make it an excellent choice for small businesses looking to scale their operations without incurring prohibitive costs."
        }
      ]}
      ctaTitle="Ready to Automate Your Pabbly Connect Workflows?"
      ctaSubtitle="Pabbly Connect Automation"
      seoTitle="Pabbly Connect Automation | Conquermark"
      seoDescription="Expert Pabbly Connect automation services. We build cost-effective workflows and help you migrate from Zapier to Pabbly."
      seoKeywords="pabbly connect experts, pabbly automation, migrate to pabbly, pabbly connect consultant, affordable automation"
    />
  );
}