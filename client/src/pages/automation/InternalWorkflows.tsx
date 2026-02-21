import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Workflow, Zap, Clock, CheckCircle } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function InternalWorkflows() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Notion, ToolLogos.Airtable, ToolLogos.Trello, ToolLogos.Asana, ToolLogos.Monday, ToolLogos.ClickUp]}
      title="Internal Workflow Optimization"
      subtitle="Streamline operations and employee onboarding. Remove internal friction."
      description="We automate HR requests, expense approvals, and project setup. Give your team more time to focus on high-value work."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/mQDzsnUJCOnRKvXv.jpg"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/hmbJIIqSfzAHEqIq.png"
      benefits={[
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
      features={[
        "Manual approval processes taking days instead of hours",
        "Data entry consuming 10+ hours weekly per employee",
        "Information silos between departments causing delays",
        "No automated onboarding/offboarding for employees",
        "Expense reports and invoices processed manually",
        "Meeting notes and action items not automatically tracked"
      ]}
      tools={[
        "Asana",
        "Jira",
        "Monday.com",
        "Slack",
        "Microsoft Teams",
        "Google Workspace",
        "Microsoft 365",
        "BambooHR",
        "Workday",
        "Zapier",
        "Make (formerly Integromat)"
      ]}
      process={[
        { step: 1, title: "Discovery", description: "Understand your current internal processes, identify pain points, and define automation opportunities and objectives." },
        { step: 2, title: "Setup", description: "Configure the automation platform, set up necessary integrations, and establish data flow between systems." },
        { step: 3, title: "Build", description: "Develop and test the automation workflows, ensuring they meet all requirements and handle edge cases." },
        { step: 4, title: "Launch", description: "Deploy the automated workflows, provide training to your team, and monitor performance for continuous optimization." }
      ]}
      useCases={[
        {
          title: "HR Onboarding Automation",
          industry: "Human Resources",
          challenge: "Manual onboarding process for new hires, leading to delays in access provisioning and training assignments.",
          solution: "Implemented an automated onboarding workflow that triggers account creation in various systems, assigns initial training modules, and notifies relevant department heads.",
          results: ["Reduced onboarding time by 70%", "Saved HR team 15 hours/week", "Improved new hire satisfaction by 25%"]
        },
        {
          title: "Expense Report Approval",
          industry: "Finance",
          challenge: "Lengthy manual expense report approval process, causing delays in reimbursements and lack of real-time visibility.",
          solution: "Developed an automated multi-level approval workflow for expense reports, integrating with accounting software and providing real-time status updates.",
          results: ["Accelerated approval time by 80%", "Reduced processing errors by 40%", "Increased compliance with company policies"]
        }
      ]}
      testimonials={[
        {
          quote: "ConquerMark transformed our HR operations. Onboarding is now seamless, saving us countless hours and improving employee experience.",
          author: "Sarah Chen",
          role: "HR Director",
          company: "Innovate Corp",
          rating: 5
        },
        {
          quote: "The automation of our expense approvals has been a game-changer. We've seen a significant reduction in processing time and errors.",
          author: "David Lee",
          role: "CFO",
          company: "Global Solutions",
          rating: 5
        },
        {
          quote: "Their team understood our complex internal workflows and delivered a solution that exceeded our expectations. Highly recommend!",
          author: "Maria Garcia",
          role: "Operations Manager",
          company: "Tech Innovations",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$999",
          period: "month",
          features: ["5 Workflow Automations", "2 User Accounts", "Standard Support", "Basic Integrations"]
        },
        {
          name: "Professional",
          price: "$2999",
          period: "month",
          features: ["20 Workflow Automations", "10 User Accounts", "Priority Support", "Custom Integrations", "Advanced Analytics"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: ["Unlimited Workflows", "Unlimited User Accounts", "Dedicated Account Manager", "24/7 Support", "On-premise Deployment Options"]
        }
      ]}
      faqs={[
        {
          question: "What types of internal workflows can be automated?",
          answer: "We can automate a wide range of internal workflows, including HR processes (onboarding, offboarding), finance operations (expense approvals, invoice processing), IT tasks (user provisioning, access management), and cross-departmental data synchronization."
        },
        {
          question: "How long does it take to implement an automation solution?",
          answer: "Implementation timelines vary depending on the complexity of the workflows and the number of integrations required. Typically, a basic automation can be live within 2-4 weeks, while more complex solutions may take 6-12 weeks."
        },
        {
          question: "What tools do you use for internal workflow automation?",
          answer: "We leverage a variety of tools, including Zapier, Make (formerly Integromat), n8n, Workato, and custom scripting with APIs, depending on your existing tech stack and specific needs."
        },
        {
          question: "How do you ensure data security and compliance?",
          answer: "Data security and compliance are paramount. We implement robust encryption, access controls, and adhere to industry best practices and regulations (e.g., GDPR, HIPAA) relevant to your business. All solutions are designed with security in mind from the ground up."
        },
        {
          question: "Can you integrate with our existing systems?",
          answer: "Yes, our solutions are designed for seamless integration with your existing CRM, ERP, HRIS, accounting software, and other business applications through APIs, webhooks, and native connectors."
        }
      ]}
      ctaTitle="Ready to Automate Your Internal Workflows & Operations?"
      ctaSubtitle="Internal Workflow Optimization"
      seoTitle="Internal Workflow Optimization | Conquermark"
      seoDescription="Optimize internal business processes with automation. We streamline HR, finance, and operations workflows for maximum efficiency."
      seoKeywords="internal workflow automation, business process optimization, hr automation, operations efficiency, employee onboarding automation"
    />
  );
}
