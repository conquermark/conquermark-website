import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Heart, Shield, Calendar, FileText, DollarSign, Lightbulb, Users, Settings } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Healthcare() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.DrChrono, ToolLogos.Epic, ToolLogos.GoogleSheets, ToolLogos.Slack, ToolLogos.Zoom, ToolLogos.JotForm]}
      title="Healthcare Workflow Automation"
      subtitle="Automate patient intake, appointment scheduling, and follow-ups. HIPAA compliant."
      description="We build secure automation workflows for clinics and hospitals. Reduce administrative burden and improve patient outcomes with automated communication."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/NcZgNuTHmtUCHiae.png" // Relevant Unsplash image for healthcare tech
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/aJ5b9BA3988k.jpg"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/bTyoTAhPnouQNZnN.png"
      benefits={[
        {
          icon: <Heart className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <Shield className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Calendar className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <FileText className="h-12 w-12" />,
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
      tools={[
        "Epic Systems",
        "Cerner",
        "Meditech",
        "athenahealth",
        "Salesforce Health Cloud",
        "Microsoft Teams",
        "Slack",
        "Redox",
        "Health Gorilla"
      ]}
      process={[
        {
          step: 1,
          title: "Discovery & Compliance Audit",
          description: "We begin by understanding your existing healthcare workflows, identifying pain points, and conducting a thorough HIPAA compliance audit to ensure all automation adheres to regulatory standards."
        },
        {
          step: 2,
          title: "Solution Design & Integration",
          description: "Based on the discovery, we design a tailored automation solution, outlining the tools, integrations (EHR/EMR, CRM), and custom logic required to streamline your operations while maintaining data security."
        },
        {
          step: 3,
          title: "Development & Secure Implementation",
          description: "Our team develops and implements the automation workflows, rigorously testing each component to ensure accuracy, efficiency, and strict adherence to HIPAA and other relevant healthcare regulations."
        },
        {
          step: 4,
          title: "Launch, Training & Ongoing Support",
          description: "After successful testing, we launch the automated system, provide comprehensive training to your staff, and offer continuous support and optimization to ensure long-term success and compliance."
        }
      ]}
      useCases={[
        {
          title: "Automated Patient Onboarding",
          industry: "Healthcare Clinics",
          challenge: "Manual patient intake forms and scheduling led to delays, errors, and a poor initial patient experience.",
          solution: "Implemented an automated system for digital form submission, appointment booking, and secure data transfer to the EHR, reducing manual data entry.",
          results: [
            "Reduced patient onboarding time by 40%",
            "Decreased data entry errors by 25%",
            "Improved patient satisfaction scores by 15%"
          ]
        },
        {
          title: "Streamlined Medical Billing & Claims",
          industry: "Medical Practices",
          challenge: "Processing insurance claims and patient billing manually was time-consuming and prone to human error, impacting revenue cycles.",
          solution: "Developed an automation workflow that integrates with billing software to automatically generate and submit claims, track payments, and send patient reminders.",
          results: [
            "Accelerated claims processing by 30%",
            "Reduced billing errors by 20%",
            "Improved cash flow by 10% through faster payment collection"
          ]
        }
      ]}
      testimonials={[
        {
          quote: "Conquermark transformed our patient scheduling and record management. We\\'ve saved countless hours and significantly reduced administrative burden, all while maintaining HIPAA compliance.",
          author: "Dr. Emily Chen",
          role: "Clinic Director",
          company: "Harmony Health Clinic",
          rating: 5
        },
        {
          quote: "The automation solutions provided by Conquermark have been a game-changer for our medical billing department. Our team can now focus on more critical tasks, and our revenue cycle has never been smoother.",
          author: "Michael Rodriguez",
          role: "Operations Manager",
          company: "Vitality Medical Group",
          rating: 5
        },
        {
          quote: "We were struggling with data silos across our various healthcare systems. Conquermark\\'s integration expertise brought everything together, giving us a unified view and enabling real-time decision-making.",
          author: "Sarah Jenkins",
          role: "IT Director",
          company: "Apex Hospital Systems",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter Automation",
          price: "$1,500",
          period: "/month",
          features: [
            "Up to 5 automated workflows",
            "Basic EHR/EMR integration",
            "HIPAA compliance review",
            "Email & chat support"
          ]
        },
        {
          name: "Professional Automation",
          price: "$3,500",
          period: "/month",
          features: [
            "Up to 15 automated workflows",
            "Advanced EHR/EMR & CRM integration",
            "Dedicated compliance consultant",
            "Priority support & training",
            "Custom reporting"
          ],
          popular: true
        },
        {
          name: "Enterprise Automation",
          price: "Custom",
          period: "/month",
          features: [
            "Unlimited custom workflows",
            "Full system integration & API access",
            "24/7 dedicated support",
            "On-site implementation & training",
            "Advanced security & audit logs",
            "SLA-backed performance"
          ]
        }
      ]}
      faqs={[
        {
          question: "Is your automation HIPAA compliant?",
          answer: "Yes, all our healthcare automation solutions are designed and implemented with strict adherence to HIPAA regulations, ensuring patient data privacy and security."
        },
        {
          question: "What types of healthcare systems can you integrate with?",
          answer: "We can integrate with a wide range of Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems, as well as CRMs like Salesforce Health Cloud, and various communication platforms."
        },
        {
          question: "How long does it take to implement an automation solution?",
          answer: "Implementation timelines vary depending on the complexity and scope of the workflows. A typical project can range from 4 to 12 weeks, including discovery, design, development, and deployment."
        },
        {
          question: "Can automation help reduce administrative costs?",
          answer: "Absolutely. By automating repetitive tasks such as appointment scheduling, patient intake, billing, and record management, healthcare providers can significantly reduce administrative overhead and operational costs."
        },
        {
          question: "What kind of support do you offer after implementation?",
          answer: "We offer comprehensive post-implementation support, including ongoing maintenance, performance monitoring, and optimization services to ensure your automation solutions continue to run smoothly and efficiently."
        }
      ]}
      ctaTitle="Ready to Automate Your Healthcare?"
      ctaSubtitle="Healthcare Workflow Automation"
      seoTitle="Healthcare Workflow Automation | Conquermark"
      seoDescription="HIPAA-compliant healthcare automation services. We automate patient scheduling, intake forms, and EHR integrations."
      roiRate={90}
        seoKeywords="healthcare automation, hipaa compliant automation, patient scheduling automation, ehr integration, medical practice automation"
    />
  );
}
