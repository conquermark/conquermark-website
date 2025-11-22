import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Zap, DollarSign, Workflow, Infinity } from "lucide-react";

export default function Pabbly() {
  return (
    <AutomationPageTemplate
      heroTitle="Pabbly Connect Automation Services"
      heroSubtitle="Unlimited automation at a fixed monthly price"
      heroDescription="We help businesses leverage Pabbly Connect's unlimited task model to build cost-effective automation workflows without worrying about per-task pricing limits."
      heroImage="/pabbly-automation.svg"
      
      painPoints={[
        "Paying $500+ monthly for Zapier or Make due to high task volumes",
        "Hitting automation task limits and having workflows pause mid-month",
        "Need unlimited workflows without per-task pricing anxiety",
        "Want same functionality as Zapier but at predictable fixed cost",
        "Scaling automation is too expensive with usage-based pricing",
        "Multiple team members need access without extra per-seat costs"
      ]}
      
      solutions={[
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
      
      process={[
        {
          step: 1,
          title: "Cost Analysis",
          description: "We analyze your current automation costs and task volumes to calculate potential savings with Pabbly Connect."
        },
        {
          step: 2,
          title: "Migration Planning",
          description: "Map out all existing automations and plan the migration strategy to Pabbly Connect with zero downtime."
        },
        {
          step: 3,
          title: "Build & Migrate",
          description: "Rebuild all automations in Pabbly Connect, test thoroughly, and migrate workflows one by one to ensure continuity."
        },
        {
          step: 4,
          title: "Optimize & Scale",
          description: "Monitor performance, optimize workflows, and help you scale automation without worrying about costs."
        }
      ]}
      
      useCases={[
        {
          title: "Agency Saves $6,000 Annually Switching to Pabbly",
          industry: "Marketing Agency",
          challenge: "A digital marketing agency was paying $800/month for Zapier Professional due to running 100,000+ tasks monthly across client campaigns. The cost was eating into their margins and they had to carefully monitor task usage.",
          solution: "We migrated all their automations to Pabbly Connect. Rebuilt 47 Zaps as Pabbly workflows including lead capture, email automation, CRM sync, reporting, and client notifications. Set up unlimited workflows for all 30+ clients.",
          results: [
            "Reduced monthly automation costs from $800 to $299 (Pabbly Business plan)",
            "Saved $6,012 annually in automation platform costs",
            "No more task limit anxiety - can scale client automations freely",
            "Same functionality with unlimited tasks and workflows",
            "ROI achieved in first month through cost savings alone"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Switching to Pabbly Connect was the best decision we made. We're running the same automations as before but saving $500 every month. The unlimited tasks mean we can automate everything without worrying about costs.",
          author: "Mike Chen",
          role: "CEO",
          company: "Digital Agency Pro",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Is Pabbly as powerful as Zapier?",
          answer: "Yes! Pabbly Connect offers similar functionality to Zapier including multi-step workflows, conditional logic, filters, formatters, webhooks, and API requests. It integrates with 1,000+ apps. The main difference is the pricing model - Pabbly charges a flat monthly fee for unlimited tasks while Zapier charges per task."
        },
        {
          question: "Can you migrate our existing Zapier automations to Pabbly?",
          answer: "Absolutely! We specialize in migrating automations from Zapier to Pabbly Connect. We analyze your current Zaps, rebuild them in Pabbly with the same functionality, test thoroughly, and migrate with zero downtime. Most migrations are completed within 1-2 weeks."
        },
        {
          question: "What's included in the setup cost?",
          answer: "Our setup includes: complete migration of existing workflows, rebuilding all automations in Pabbly, thorough testing, team training, documentation, and 1-3 months of support. We also help you choose the right Pabbly plan and set up your account."
        },
        {
          question: "How much can we save with Pabbly?",
          answer: "Savings depend on your current task volume. Businesses running 50,000+ tasks monthly typically save $300-800/month compared to Zapier or Make. The more tasks you run, the more you save. We provide a detailed cost analysis before migration."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$300",
          period: "one-time",
          features: [
            "Migration of up to 10 workflows",
            "Pabbly account setup",
            "Basic integrations",
            "1 month support",
            "Training included",
            "Documentation"
          ]
        },
        {
          name: "Professional",
          price: "$750",
          period: "one-time",
          popular: true,
          features: [
            "Migration of unlimited workflows",
            "Complete Zapier/Make migration",
            "Complex workflow rebuilding",
            "Advanced integrations",
            "3 months support",
            "Priority support",
            "Cost savings analysis"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Everything in Professional",
            "Dedicated migration engineer",
            "Custom integrations",
            "Advanced error handling",
            "6 months support",
            "24/7 priority support",
            "Ongoing optimization"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Zapier Automation", href: "/automation/zapier" },
        { name: "Make Automation", href: "/automation/make" },
        { name: "n8n Services", href: "/automation/n8n" }
      ]}
    />
  );
}
