import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Workflow, Zap, Clock, CheckCircle } from "lucide-react";

export default function InternalWorkflows() {
  return (
    <AutomationPageTemplate
      heroTitle="Internal Workflows & Operations Automation"
      heroSubtitle="Automate repetitive tasks and streamline internal processes"
      heroDescription="We help teams eliminate manual work by automating approvals, data entry, reporting, and cross-department workflows."
      
      painPoints={[
        "Manual approval processes taking days instead of hours",
        "Data entry consuming 10+ hours weekly per employee",
        "Information silos between departments causing delays",
        "No automated onboarding/offboarding for employees",
        "Expense reports and invoices processed manually",
        "Meeting notes and action items not automatically tracked"
      ]}
      
      solutions={[
        {
          icon: <Workflow className="h-12 w-12" />,
          title: "Approval Workflows",
          description: "Automate multi-step approvals for expenses, time-off, purchases, and documents with routing rules and notifications"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Data Entry Automation",
          description: "Eliminate manual data entry by automating data sync between systems, forms, and databases"
        },
        {
          icon: <Clock className="h-12 w-12" />,
          title: "Employee Onboarding/Offboarding",
          description: "Automate account creation, access provisioning, training assignments, and exit procedures"
        },
        {
          icon: <CheckCircle className="h-12 w-12" />,
          title: "Task & Project Automation",
          description: "Auto-create tasks, assign team members, send reminders, and track progress across project management tools"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Process Mapping",
          description: "We document your current internal processes, identify bottlenecks, and map automation opportunities."
        },
        {
          step: 2,
          title: "Workflow Design",
          description: "Design automated workflows with approval chains, conditional logic, and exception handling."
        },
        {
          step: 3,
          title: "Integration & Build",
          description: "Connect your internal tools (HR systems, project management, communication tools) and build automations."
        },
        {
          step: 4,
          title: "Deploy & Train",
          description: "Roll out automations, train your team, and provide documentation for ongoing management."
        }
      ]}
      
      useCases={[
        {
          title: "Tech Company Automates Employee Onboarding",
          industry: "Technology",
          challenge: "A 200-person tech company was manually onboarding new hires - creating accounts, assigning equipment, scheduling training. HR spent 8 hours per new hire on administrative tasks.",
          solution: "Built complete onboarding automation: Offer accepted → Auto-create accounts (Google, Slack, GitHub) → Assign laptop → Schedule orientation → Send welcome email → Create training tasks → Notify manager → Track progress in HRIS.",
          results: [
            "Onboarding time reduced from 8 hours to 30 minutes per hire",
            "Zero missed steps in onboarding process",
            "New hires productive on day 1 with all access ready",
            "HR team saved 120 hours monthly"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Internal workflow automation saved our operations team 25 hours weekly. Approvals that took 3 days now complete in 3 hours.",
          author: "Jennifer Lee",
          role: "COO",
          company: "GrowthTech Inc",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Which internal tools can you automate?",
          answer: "We automate workflows across HR systems (BambooHR, Workday), project management (Asana, Monday, Jira), communication (Slack, Teams), Google Workspace, Microsoft 365, and custom internal systems."
        },
        {
          question: "How long does implementation take?",
          answer: "Simple workflows (like approval automation) can be live in 1-2 weeks. Complex multi-department processes take 3-6 weeks depending on the number of systems and approval chains involved."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$350",
          period: "one-time",
          features: [
            "Up to 3 workflow automations",
            "Basic approval workflows",
            "Tool integrations (up to 5)",
            "1 month support",
            "Training included"
          ]
        },
        {
          name: "Professional",
          price: "$850",
          period: "one-time",
          popular: true,
          features: [
            "Up to 10 workflow automations",
            "Complex multi-step approvals",
            "Unlimited tool integrations",
            "Employee onboarding/offboarding",
            "3 months support",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Unlimited workflows",
            "Custom integrations",
            "Dedicated automation engineer",
            "6 months support",
            "24/7 support"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Reporting & Dashboards", href: "/automation/reporting" },
        { name: "Slack/Email Notifications", href: "/automation/notifications" },
        { name: "Sales & CRM Automation", href: "/automation/sales" }
      ]}
    />
  );
}
