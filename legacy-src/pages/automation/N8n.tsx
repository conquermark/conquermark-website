import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Workflow, Code, Shield, Zap } from "lucide-react";

export default function N8n() {
  return (
    <AutomationPageTemplate
      heroTitle="n8n Automation Services - Self-Hosted & Powerful"
      heroSubtitle="Enterprise-grade automation with complete control and unlimited workflows"
      heroDescription="We are certified n8n experts helping Indian businesses build complex, scalable automation workflows with full data privacy and no per-workflow costs."
      
      painPoints={[
        "Zapier costs skyrocketing as your automation needs grow",
        "Need complete control over automation infrastructure and data",
        "Want to build complex workflows with custom code and logic",
        "Require on-premise or private cloud deployment for compliance",
        "Hit limitations with no-code tools for advanced use cases",
        "Need unlimited workflows without per-task pricing"
      ]}
      
      solutions={[
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
      
      process={[
        {
          step: 1,
          title: "Infrastructure Setup",
          description: "We set up n8n on your preferred infrastructure - cloud (AWS/Azure/GCP) or on-premise servers - with proper security, backups, and monitoring."
        },
        {
          step: 2,
          title: "Workflow Development",
          description: "Our n8n experts design and build custom workflows tailored to your business processes, including complex logic and custom code where needed."
        },
        {
          step: 3,
          title: "Integration & Testing",
          description: "Connect n8n to all your systems (CRM, databases, APIs, SaaS tools), build custom integrations if needed, and thoroughly test all workflows."
        },
        {
          step: 4,
          title: "Training & Support",
          description: "Train your team on n8n, provide documentation, and offer ongoing support for maintenance, optimization, and new workflow development."
        }
      ]}
      
      useCases={[
        {
          title: "FinTech Startup Saves ₹5 Lakhs Annually Switching from Zapier to n8n",
          industry: "FinTech",
          challenge: "A lending platform was spending $600/month on Zapier with 200+ workflows for loan processing, KYC verification, payment reconciliation, and customer communication. Costs were unsustainable as they scaled.",
          solution: "Migrated entire automation infrastructure to self-hosted n8n on AWS: All Zapier workflows rebuilt in n8n → Custom nodes for banking APIs → Advanced error handling and retry logic → Webhook-based real-time processing → Monitoring dashboard → Automated backups.",
          results: [
            "Reduced automation costs from $600/month to $96/month (hosting only)",
            "Annual savings of $6,000+",
            "Built 50+ additional workflows that would have been too expensive on Zapier",
            "Complete data control for regulatory compliance (RBI guidelines)"
          ]
        },
        {
          title: "Healthcare Company Builds HIPAA-Compliant Automation with n8n",
          industry: "Healthcare",
          challenge: "A telemedicine platform needed to automate patient data workflows but couldn't use cloud automation tools due to HIPAA and data privacy regulations. Required on-premise solution with full audit trails.",
          solution: "Deployed n8n on their private cloud infrastructure: Patient registration → Automated KYC → Medical records management → Appointment scheduling → Prescription generation → Insurance claim processing → All data stays within their infrastructure → Complete audit logs → Encrypted data handling.",
          results: [
            "Achieved HIPAA compliance with on-premise automation",
            "Processed 10,000+ patient workflows monthly",
            "Reduced patient onboarding time from 30 minutes to 5 minutes",
            "Zero data privacy concerns with self-hosted solution"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Switching to n8n saved us $6,000 annually and gave us unlimited automation capabilities. The ConquerMark team made the migration seamless and built workflows we couldn't have done on Zapier.",
          author: "Arjun Malhotra",
          role: "CTO",
          company: "QuickLend FinTech",
          rating: 5
        },
        {
          quote: "We needed on-premise automation for regulatory compliance. n8n was the perfect solution, and ConquerMark's expertise made implementation smooth. Now we have complete control over our data.",
          author: "Dr. Kavita Sharma",
          role: "Head of Technology",
          company: "HealthFirst Telemedicine",
          rating: 5
        },
        {
          quote: "n8n's flexibility allowed us to build complex workflows with custom logic that no-code tools couldn't handle. ConquerMark's team are true n8n experts.",
          author: "Rahul Verma",
          role: "VP Engineering",
          company: "DataSync Solutions",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "What's the difference between n8n and Zapier?",
          answer: "n8n is self-hosted and open-source, giving you complete control and unlimited workflows without per-task pricing. Zapier is cloud-based SaaS with per-task costs. n8n is better for complex workflows, high-volume automation, and when you need data control. Zapier is easier for simple workflows and quick setup."
        },
        {
          question: "How much does n8n hosting cost?",
          answer: "n8n itself is free (open-source). You only pay for hosting infrastructure - typically $60-180/month for AWS/Azure/GCP depending on your scale. This replaces per-task costs that can reach $600-1,00,000/month on Zapier for high-volume automation."
        },
        {
          question: "Can you migrate our existing Zapier workflows to n8n?",
          answer: "Yes! We specialize in Zapier-to-n8n migrations. We analyze your Zapier workflows, rebuild them in n8n (often with improvements), test thoroughly, and ensure zero downtime during the switch."
        },
        {
          question: "Do you provide ongoing n8n support and maintenance?",
          answer: "Absolutely! We offer managed n8n services including infrastructure monitoring, security updates, backup management, workflow optimization, and new workflow development. Think of us as your n8n team."
        },
        {
          question: "Can n8n integrate with our custom internal systems?",
          answer: "Yes! n8n excels at custom integrations. We can build custom nodes for your internal APIs, databases, or legacy systems. If it has an API or database connection, n8n can integrate with it."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Setup & Migration",
          price: "$600",
          period: "one-time",
          features: [
            "n8n infrastructure setup",
            "Cloud or on-premise deployment",
            "Up to 20 workflow migrations",
            "Basic integrations",
            "1 month support",
            "Training included"
          ]
        },
        {
          name: "Professional",
          price: "$1,440",
          period: "one-time",
          popular: true,
          features: [
            "Everything in Setup",
            "Up to 50 workflows",
            "Custom node development",
            "Advanced integrations",
            "Monitoring & alerts",
            "3 months support",
            "Priority support"
          ]
        },
        {
          name: "Managed n8n",
          price: "$300/mo",
          period: "monthly",
          features: [
            "Fully managed n8n instance",
            "Unlimited workflows",
            "Infrastructure management",
            "24/7 monitoring",
            "Security updates",
            "Backup management",
            "Dedicated engineer",
            "SLA guarantee"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Zapier Integration", href: "/automation/zapier" },
        { name: "Make (Integromat)", href: "/automation/make" },
        { name: "Custom API/Webhook", href: "/automation/custom-api" },
        { name: "Internal Workflows", href: "/automation/internal-workflows" }
      ]}
    />
  );
}
