import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Workflow, GitBranch, Database, Zap, Clock, Layers } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Make() {
  return (
    <AutomationPageTemplate
      toolLogos={[ToolLogos.Make, ToolLogos.Airtable, ToolLogos.GoogleSheets, ToolLogos.Slack, ToolLogos.OpenAI, ToolLogos.Stripe]}
      title="Make.com (Integromat) Experts"
      subtitle="Visually design complex automation scenarios. Limitless possibilities."
      description="We leverage the power of Make to build sophisticated automation scenarios. Handle data transformation, arrays, and complex logic with ease."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/ynacgMMTqflMcfad.jpeg"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/ynacgMMTqflMcfad.jpeg"
      
      benefits={[
        {
          icon: <Workflow className="h-12 w-12" />,
          title: "Visual Scenario Builder",
          description: "Design complex workflows visually. See exactly how data flows between your apps."
        },
        {
          icon: <GitBranch className="h-12 w-12" />,
          title: "Advanced Logic & Branching",
          description: "Create sophisticated paths with routers, filters, and error handlers."
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "Data Transformation",
          description: "Manipulate data with powerful functions. Parse JSON, XML, and CSV effortlessly."
        },
        {
          icon: <Clock className="h-12 w-12" />,
          title: "Scheduled Execution",
          description: "Run scenarios at specific intervals or trigger them instantly via webhooks."
        }
      ]}
      
      features={[
        "Complex data mapping and transformation",
        "Multi-step approval workflows",
        "Custom API integrations via HTTP module",
        "Error handling and retry logic",
        "Data aggregation and iteration",
        "Real-time execution monitoring"
      ]}
      
      tools={[
        "Make (Integromat)",
        "Airtable",
        "Google Sheets",
        "Slack",
        "OpenAI",
        "Stripe",
        "Shopify",
        "HubSpot"
      ]}
      
      process={[
        {
          step: 1,
          title: "Scenario Planning",
          description: "We map out the logic and data flow required for your automation scenario."
        },
        {
          step: 2,
          title: "Module Configuration",
          description: "We configure each app module and set up authentication connections."
        },
        {
          step: 3,
          title: "Logic Implementation",
          description: "We add routers, filters, and iterators to handle complex business logic."
        },
        {
          step: 4,
          title: "Testing & Deployment",
          description: "We rigorously test the scenario with sample data before activating it."
        }
      ]}
      
      useCases={[
        {
          title: "Automated Social Media Content Distribution",
          industry: "Marketing",
          challenge: "A marketing agency needed to distribute content to multiple social platforms and track engagement.",
          solution: "We built a Make scenario that watches an Airtable content calendar. When a post is approved, it automatically posts to LinkedIn, Twitter, and Facebook, then updates Airtable with the live links.",
          results: [
            "Saved 10 hours/week on manual posting",
            "Eliminated posting errors",
            "Centralized content management",
            "Real-time engagement tracking"
          ]
        },
        {
          title: "E-commerce Order Processing & Fulfillment",
          industry: "E-commerce",
          challenge: "An online store needed to sync orders from Shopify to their ERP and notify the warehouse.",
          solution: "We created a scenario that triggers on new Shopify orders. It formats the data for the ERP, checks inventory, and sends a pick list to the warehouse via email.",
          results: [
            "Order processing time reduced by 80%",
            "Inventory accuracy improved to 99%",
            "Faster shipping times",
            "Reduced manual data entry errors"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Make.com is powerful, but complex. Conquermark's experts built scenarios we didn't think were possible.",
          author: "Jessica Lee",
          role: "Operations Manager",
          company: "Digital Ventures",
          rating: 5
        },
        {
          quote: "They automated our entire client onboarding process using Make. It's flawless.",
          author: "Ryan Patel",
          role: "CEO",
          company: "ServicePro",
          rating: 5
        },
        {
          quote: "The error handling they built into our scenarios saved us from losing critical data.",
          author: "Emily Chen",
          role: "CTO",
          company: "TechStart",
          rating: 5
        }
      ]}
      
      pricingPlans={[
        {
          name: "Scenario Build",
          price: "$500",
          period: "per scenario",
          features: [
            "Custom scenario design",
            "Up to 20 modules",
            "Basic error handling",
            "Documentation",
            "1 week support"
          ]
        },
        {
          name: "Complex Workflow",
          price: "$1,200",
          period: "per workflow",
          popular: true,
          features: [
            "Advanced logic & routing",
            "Unlimited modules",
            "Advanced error handling",
            "Data transformation",
            "1 month support"
          ]
        },
        {
          name: "Retainer",
          price: "$2,000",
          period: "per month",
          features: [
            "Ongoing optimization",
            "New scenario builds",
            "Priority support",
            "Monthly strategy call",
            "Monitoring & alerts"
          ]
        }
      ]}
      
      faqs={[
        {
          question: "Is Make better than Zapier?",
          answer: "Make is generally more powerful and affordable for complex workflows with advanced logic. Zapier is easier for simple, linear integrations."
        },
        {
          question: "Can you migrate my Zaps to Make?",
          answer: "Yes, we specialize in migrating workflows from Zapier to Make to reduce costs and increase capabilities."
        },
        {
          question: "Do I need a paid Make account?",
          answer: "It depends on your usage. Make has a generous free tier, but complex scenarios often require a paid plan."
        },
        {
          question: "What happens if an error occurs?",
          answer: "We build robust error handling into every scenario to ensure data is not lost and you are notified immediately."
        }
      ]}
      
      ctaTitle="Ready to Automate with Make?"
      ctaSubtitle="Book a free consultation to discuss your automation needs."
      
      seoTitle="Make.com (Integromat) Experts | Conquermark"
      seoDescription="Certified Make.com (formerly Integromat) experts. We build complex automation scenarios to streamline your business operations."
      seoKeywords="make.com experts, integromat consultants, make automation services, complex scenario builder, make.com integration"
    />
  );
}
