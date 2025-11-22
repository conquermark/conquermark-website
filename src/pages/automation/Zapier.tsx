import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Zap, Link, Workflow, Filter } from "lucide-react";

export default function Zapier() {
  return (
    <AutomationPageTemplate
      heroTitle="Zapier Workflow Automation Experts"
      heroSubtitle="Connect 6,000+ apps without code using Zapier"
      heroDescription="We are certified Zapier experts helping businesses build powerful automation workflows that connect all their favorite apps - from Gmail to Salesforce, Shopify to Slack - without writing a single line of code."
      heroImage="/zapier-automation.svg"
      
      painPoints={[
        "Manually copying data between apps eating up 10+ hours weekly",
        "No integration between critical business tools causing data silos",
        "Repetitive tasks like data entry consuming your team's productive time",
        "Data sync errors between systems causing customer service issues",
        "Unable to automate multi-step processes across different platforms",
        "Missing opportunities because manual processes are too slow"
      ]}
      
      solutions={[
        {
          icon: <Zap className="h-12 w-12" />,
          title: "App Integrations",
          description: "Connect 6,000+ apps including Gmail, Slack, Salesforce, Shopify, HubSpot, Google Sheets, and virtually any business tool you use"
        },
        {
          icon: <Workflow className="h-12 w-12" />,
          title: "Multi-Step Workflows",
          description: "Build complex workflows with multiple steps, conditional logic, filters, and branching paths to handle any business process"
        },
        {
          icon: <Link className="h-12 w-12" />,
          title: "Data Transformation",
          description: "Format, parse, and transform data between apps with built-in formatters, custom fields, and data mapping"
        },
        {
          icon: <Filter className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Add conditions, filters, delays, and schedules to create intelligent automations that work exactly how you need"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Discovery & Planning",
          description: "We analyze your current processes, identify automation opportunities, and design the optimal solution architecture."
        },
        {
          step: 2,
          title: "Integration & Setup",
          description: "Connect all necessary tools and platforms, configure authentication, and set up the automation infrastructure."
        },
        {
          step: 3,
          title: "Build & Test",
          description: "Build automation workflows with all logic and conditions, test thoroughly with real data, and ensure everything works perfectly."
        },
        {
          step: 4,
          title: "Deploy & Optimize",
          description: "Launch automation to production, train your team, monitor performance, and continuously optimize for better results."
        }
      ]}
      
      useCases={[
        {
          title: "Agency Automates Client Onboarding with Zapier",
          industry: "Marketing Agency",
          challenge: "A 50-person marketing agency was manually onboarding 20+ new clients monthly. Each onboarding involved creating Google Drive folders, setting up project management tools, sending welcome emails, and notifying team members. The process took 3 hours per client and was error-prone.",
          solution: "We built a comprehensive Zapier automation: New client in CRM (HubSpot) → Create branded Google Drive folder structure → Add client to Asana project → Send personalized welcome email with onboarding checklist → Create Slack channel → Notify account manager → Add to billing system (QuickBooks).",
          results: [
            "Onboarding time reduced from 3 hours to 5 minutes per client",
            "Zero missed steps in onboarding process - 100% consistency",
            "Agency saved 60 hours monthly ($4,800 in labor costs)",
            "Client satisfaction improved with faster, more professional onboarding"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Zapier automation transformed our client onboarding. What used to take 3 hours and multiple people now happens in 5 minutes automatically. Our clients are impressed, and our team is freed up for higher-value work.",
          author: "Jessica Brown",
          role: "Operations Manager",
          company: "Growth Marketing Co",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Do we need a Zapier subscription?",
          answer: "Yes, you'll need a Zapier account. We help you choose the right Zapier plan based on your automation needs (tasks per month) and can set everything up for you. Most businesses start with the Professional plan ($20-50/month)."
        },
        {
          question: "Can Zapier handle complex workflows?",
          answer: "Absolutely! Zapier supports multi-step workflows (up to 100 steps), conditional logic, filters, formatters, webhooks, and custom code. We've built automations handling everything from simple data sync to complex multi-system processes."
        },
        {
          question: "Which apps does Zapier integrate with?",
          answer: "Zapier connects with 6,000+ apps including all major business tools: Salesforce, HubSpot, Shopify, Gmail, Slack, Google Sheets, Mailchimp, QuickBooks, Asana, and many more. If an app has an API, Zapier can likely connect to it."
        },
        {
          question: "What if an app isn't available in Zapier?",
          answer: "We can use Zapier's webhook functionality or custom code steps to connect to any app with an API. We've successfully integrated custom internal systems and niche industry tools using these methods."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$250",
          period: "one-time",
          features: [
            "Basic automation setup",
            "Up to 3 integrations",
            "Standard workflows",
            "1 month support",
            "Training included",
            "Documentation provided"
          ]
        },
        {
          name: "Professional",
          price: "$650",
          period: "one-time",
          popular: true,
          features: [
            "Advanced automation",
            "Unlimited integrations",
            "Complex workflows with logic",
            "Custom conditions & filters",
            "3 months support",
            "Priority support",
            "Ongoing optimization"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Everything in Professional",
            "Dedicated automation engineer",
            "Custom development",
            "Advanced error handling",
            "6 months support",
            "24/7 priority support",
            "Monthly strategy reviews"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Make Automation", href: "/automation/make" },
        { name: "n8n Services", href: "/automation/n8n" },
        { name: "Marketing Automation", href: "/automation/marketing" }
      ]}
    />
  );
}
