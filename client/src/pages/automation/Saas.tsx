import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Rocket, Users, CreditCard, BarChart, DollarSign, HelpCircle, Lightbulb, Award } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Saas() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Stripe, ToolLogos.HubSpot, ToolLogos.Intercom, ToolLogos.Slack, ToolLogos.OpenAI, ToolLogos.GoogleSheets]}
      title="SaaS Operations Automation"
      subtitle="Scale your SaaS without scaling headcount. Automate onboarding and churn reduction."
      description="We build workflows for user onboarding, subscription management, and churn prediction. Integrate Stripe, your app, and your CRM."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/NcZgNuTHmtUCHiae.png"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/xcStBxfiveprEgPP.jpg"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/NcZgNuTHmtUCHiae.png"
      
      benefits={[
        {
          icon: <Rocket className="h-12 w-12" />,
          title: "Automated Onboarding",
          description: "Streamline user onboarding with automated welcome emails, account setup, and product tours"
        },
        {
          icon: <Users className="h-12 w-12" />,
          title: "Churn Reduction",
          description: "Identify at-risk customers automatically and trigger retention workflows"
        },
        {
          icon: <CreditCard className="h-12 w-12" />,
          title: "Billing Automation",
          description: "Automate invoicing, dunning management, and subscription renewals"
        },
        {
          icon: <BarChart className="h-12 w-12" />,
          title: "Product Analytics",
          description: "Connect product usage data to your CRM and marketing tools for better insights"
        }
      ]}
      
      features={[
        "Manual user onboarding slowing down growth",
        "High churn due to lack of proactive engagement",
        "Billing issues and failed payments not handled automatically",
        "Support team overwhelmed with basic queries",
        "Disconnect between product data and sales/marketing teams",
        "Difficulty scaling operations with user growth"
      ]}
      
      tools={[
        "Stripe",
        "Intercom",
        "Segment",
        "Mixpanel",
        "HubSpot",
        "Salesforce",
        "Zapier",
        "Make (formerly Integromat)",
        "Slack"
      ]}
      
      process={[
        { step: 1, title: "Discovery", description: "Understand your current operations, identify pain points, and define automation opportunities." },
        { step: 2, title: "Setup", description: "Configure necessary tools and platforms, establish data connections, and design the automation architecture." },
        { step: 3, title: "Build", description: "Develop and implement the automation workflows, ensuring robust functionality and seamless integration." },
        { step: 4, title: "Launch", description: "Deploy the automation, monitor performance, and provide ongoing support and optimization." }
      ]}

      useCases={[
        {
          title: "Automated Customer Onboarding for a FinTech SaaS",
          industry: "FinTech",
          challenge: "Manual onboarding process for new users was slow, leading to high drop-off rates and increased support costs.",
          solution: "Implemented an automated onboarding flow that included identity verification, personalized product tours, and automated follow-up emails based on user engagement.",
          results: ["Reduced onboarding time by 70%", "Increased user activation by 25%", "Saved 15 hours/week for the support team"]
        },
        {
          title: "Churn Prediction and Retention for a B2B SaaS",
          industry: "B2B Software",
          challenge: "High customer churn due to a lack of proactive engagement with at-risk users.",
          solution: "Developed an automation that analyzed user behavior data to identify potential churn risks, triggering automated alerts to account managers and personalized re-engagement campaigns.",
          results: ["Decreased customer churn by 18% within 6 months", "Increased customer lifetime value by 30%"]
        }
      ]}

      testimonials={[
        {
          quote: "Conquermark transformed our onboarding process. We saw a significant increase in user activation and our support team is now free to focus on more complex issues.",
          author: "Jane Doe",
          role: "COO",
          company: "SaaS Innovators Inc.",
          rating: 5
        },
        {
          quote: "Their automation solutions helped us proactively address churn. Our retention rates have never been better, directly impacting our bottom line.",
          author: "John Smith",
          role: "CEO",
          company: "Tech Growth Solutions",
          rating: 5
        },
        {
          quote: "The team at Conquermark is exceptional. They seamlessly integrated with our complex tech stack and delivered results beyond our expectations.",
          author: "Emily White",
          role: "VP of Product",
          company: "NextGen Software"
        }
      ]}

      pricingPlans={[
        {
          name: "Starter",
          price: "$999",
          period: "month",
          features: ["5 Automation Workflows", "Basic Support", "Standard Integrations", "Monthly Performance Reports"]
        },
        {
          name: "Professional",
          price: "$2,999",
          period: "month",
          features: ["20 Automation Workflows", "Priority Support", "Custom Integrations", "Dedicated Account Manager", "Bi-Weekly Performance Reviews"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "month",
          features: ["Unlimited Automation Workflows", "24/7 Premium Support", "Advanced Security Features", "On-site Training & Workshops", "Strategic Consulting"]
        }
      ]}

      faqs={[
        {
          question: "What kind of SaaS businesses do you work with?",
          answer: "We work with SaaS businesses of all sizes, from early-stage startups to established enterprises, across various industries. Our solutions are tailored to your specific needs."
        },
        {
          question: "How long does it take to implement automation solutions?",
          answer: "Implementation timelines vary depending on the complexity of your existing systems and the scope of the automation. Typically, projects range from 4 to 12 weeks."
        },
        {
          question: "What tools do you use for SaaS automation?",
          answer: "We leverage a wide range of tools including integration platforms like Zapier and Make (formerly Integromat), CRM systems like HubSpot and Salesforce, billing platforms like Stripe, and analytics tools like Mixpanel and Segment."
        },
        {
          question: "Can you integrate with our existing tech stack?",
          answer: "Yes, our primary goal is to integrate seamlessly with your current tech stack. We specialize in building custom integrations and leveraging APIs to ensure all your systems work together efficiently."
        },
        {
          question: "What is the ROI of SaaS automation?",
          answer: "SaaS automation can lead to significant ROI through reduced operational costs, increased efficiency, improved customer satisfaction, higher retention rates, and accelerated growth. Specific metrics will depend on the implemented solutions."
        }
      ]}
      
      ctaTitle="Ready to Scale Your SaaS?"
      ctaSubtitle="SaaS Operations Automation"
      
      seoTitle="SaaS Operations Automation | Conquermark"
      seoDescription="Automate SaaS operations. We streamline user onboarding, subscription billing, and churn management for software companies."
      seoKeywords="saas automation, saas operations, user onboarding automation, churn reduction workflows, stripe integration"
    />
  );
}
