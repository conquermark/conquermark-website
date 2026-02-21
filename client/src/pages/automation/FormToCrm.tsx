import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { FileText, Database, Zap, CheckCircle } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function FormToCrm() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Typeform, ToolLogos.JotForm, ToolLogos.HubSpot, ToolLogos.Salesforce, ToolLogos.Pipedrive, ToolLogos.Zoho]}
      title="Form to CRM Automation"
      subtitle="Instant data entry from any form to any CRM. Zero lag, zero errors."
      description="We connect Typeform, JotForm, or custom forms to Salesforce, HubSpot, or Pipedrive. Ensure data integrity and instant follow-up."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/ynEXztHdrweDuGCB.jpeg"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/OpoUdiKFmknxlPMc.jpg"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/wWYUXpnrLfuUmhtw.jpg"
      benefits={[
        {
          icon: <FileText className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <CheckCircle className="h-12 w-12" />,
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
      tools={["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "Typeform", "JotForm", "Google Forms", "Zapier", "Make.com"]}
      process={[
        {
          step: 1,
          title: "Discovery & Strategy",
          description: "We begin by understanding your current form processes, CRM setup, and specific integration needs to define clear objectives."
        },
        {
          step: 2,
          title: "Setup & Configuration",
          description: "Our team configures the necessary connectors and initial data mappings between your forms and CRM, ensuring a solid foundation."
        },
        {
          step: 3,
          title: "Build & Customization",
          description: "We develop custom workflows, implement data enrichment, lead scoring, and any specific logic required to meet your unique business rules."
        },
        {
          step: 4,
          title: "Testing & Launch",
          description: "Thorough testing is conducted to ensure data integrity and workflow accuracy. Upon successful validation, we launch your automated integration."
        }
      ]}
      useCases={[
        {
          title: "Streamlining Sales Lead Management",
          industry: "Software as a Service (SaaS)",
          challenge: "A SaaS company was manually transferring leads from their website forms to Salesforce, leading to delays and missed follow-ups.",
          solution: "Implemented an automated Form-to-CRM integration that instantly pushed new form submissions to Salesforce, assigned leads to sales reps, and triggered welcome emails.",
          results: [
            "Reduced lead response time by 80%",
            "Increased sales qualified leads by 25%",
            "Saved sales team 15 hours per week on data entry"
          ]
        },
        {
          title: "Automating Event Registration & Follow-up",
          industry: "Event Management",
          challenge: "An event management company struggled with manual data entry of attendee registrations into their CRM, causing errors and slow post-event engagement.",
          solution: "Developed an integration that automatically captured event registrations, updated attendee profiles in the CRM, and segmented them for targeted follow-up campaigns.",
          results: [
            "Eliminated 100% of manual data entry for registrations",
            "Improved post-event engagement rates by 30%",
            "Reduced administrative overhead by 20 hours per event"
          ]
        }
      ]}
      testimonials={[
        {
          quote: "Conquermark transformed our lead management. Leads now flow directly into our CRM, saving us countless hours and ensuring no lead falls through the cracks.",
          author: "Sarah Chen",
          role: "Head of Sales",
          company: "TechSolutions Inc.",
          rating: 5
        },
        {
          quote: "The Form-to-CRM integration was seamless and incredibly efficient. Our data is always up-to-date, and our sales team can focus on selling, not data entry.",
          author: "David Lee",
          role: "Marketing Director",
          company: "Global Innovations",
          rating: 5
        },
        {
          quote: "We\'ve seen a significant improvement in our operational efficiency since implementing Conquermark\'s automation. Their team was professional and delivered exactly what we needed.",
          author: "Emily White",
          role: "Operations Manager",
          company: "Dynamic Enterprises",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$499",
          period: "/month",
          features: [
            "Basic CRM Integrations",
            "Standard Form Fields",
            "Email Support",
            "Up to 5 Integrations"
          ]
        },
        {
          name: "Professional",
          price: "$1,499",
          period: "/month",
          features: [
            "Advanced CRM Integrations",
            "Custom Form Fields",
            "Priority Support",
            "Up to 20 Integrations",
            "Data Enrichment",
            "Lead Scoring"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          features: [
            "Unlimited Integrations",
            "Dedicated Account Manager",
            "24/7 Support",
            "Advanced Analytics",
            "Custom Development"
          ]
        }
      ]}
      faqs={[
        {
          question: "What CRMs do you integrate with?",
          answer: "We integrate with popular CRMs like Salesforce, HubSpot, Zoho CRM, Pipedrive, and many more. If your CRM isn\'t listed, contact us for a custom solution."
        },
        {
          question: "How long does it take to set up a Form-to-CRM integration?",
          answer: "Basic integrations can be set up within a few days, while more complex workflows with custom logic and data enrichment may take 1-2 weeks."
        },
        {
          question: "Can I customize the data mapping between my forms and CRM?",
          answer: "Yes, our solutions offer extensive customization options for data mapping, allowing you to precisely control how form fields correspond to CRM fields."
        },
        {
          question: "What if a form submission fails to sync to the CRM?",
          answer: "Our systems include robust error handling and notification mechanisms. You\'ll be alerted to any failed syncs, and we provide tools to reprocess submissions."
        },
        {
          question: "Is my data secure during the integration process?",
          answer: "Absolutely. We prioritize data security and use industry-standard encryption and secure protocols to ensure your data is protected throughout the integration."
        }
      ]}
      ctaTitle="Ready to Automate Your Form-to-CRM Integration?"
      ctaSubtitle="Form to CRM Automation"
      seoTitle="Form to CRM Automation | Conquermark"
      seoDescription="Automate form data entry to your CRM. We connect Typeform, JotForm, and Gravity Forms to Salesforce, HubSpot, and more."
      manualTasks={[
    "Social Media Posting",
    "Email List Cleaning",
    "Lead Scoring",
    "Campaign Performance Reporting",
    "Content Distribution"
  ]}
  roiRate={40}
        seoKeywords="form automation, typeform integration, jotform to crm, data entry automation, lead form integration"
    />
  );
}
