import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { DollarSign, TrendingUp, Shield, FileCheck } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Finance() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.QuickBooks, ToolLogos.Xero, ToolLogos.Stripe, ToolLogos.GoogleSheets, ToolLogos.Slack, ToolLogos.Zoom]}
      title="AI Finance & Accounting Automation"
      subtitle="Automate invoicing, expense tracking, and reconciliation. Say goodbye to spreadsheets."
      description="We connect your bank, payment gateways, and accounting software to automate bookkeeping. Get real-time financial visibility without the manual error."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/YYuZQnoeeoWOWGwI.jpg"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/QajqRiesFIjiLCan.jpg"
      benefits={[
        {
          icon: <DollarSign className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <TrendingUp className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Shield className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <FileCheck className="h-12 w-12" />,
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
        "Stripe",
        "Zapier",
        "NetSuite",
        "Workato",
        "Ramp",
        "Brex",
        "Salesforce",
        "QuickBooks",
        "Xero"
      ]}
      process={[
        { step: 1, title: "Discovery", description: "Understand your current financial workflows, pain points, and automation goals." },
        { step: 2, title: "Setup", description: "Configure the automation platform and integrate it with your existing financial systems." },
        { step: 3, title: "Build", description: "Develop and customize automation workflows tailored to your specific needs." },
        { step: 4, title: "Launch", description: "Deploy the automated solutions, provide training, and offer ongoing support and optimization." }
      ]}
      useCases={[
        {
          title: "Automated Invoice Processing",
          industry: "FinTech Startup",
          challenge: "Manual invoice processing was time-consuming and prone to errors, leading to delays and increased operational costs.",
          solution: "Implemented an automated invoice processing system that extracts data, validates information, and initiates payments automatically.",
          results: [
            "Reduced manual invoice processing time by 70%",
            "Improved data accuracy by 95%",
            "Saved an estimated $5,000 per month in operational costs"
          ]
        },
        {
          title: "Fraud Detection & Alerting",
          industry: "Financial Institution",
          challenge: "Difficulty in identifying and preventing fraudulent transactions in real-time, leading to potential financial losses.",
          solution: "Deployed an automated fraud detection system with AI-powered anomaly detection and real-time alerting for suspicious activities.",
          results: [
            "30% reduction in fraudulent transactions",
            "Real-time alerts preventing potential losses of over $100,000 annually",
            "Enhanced compliance with financial regulations"
          ]
        }
      ]}
      testimonials={[
        {
          quote: "Conquermark transformed our financial operations. We\'ve seen a significant reduction in manual errors and our team can now focus on strategic initiatives instead of repetitive tasks.",
          author: "Sarah Chen",
          role: "CFO",
          company: "Apex Financial Solutions",
          rating: 5
        },
        {
          quote: "The automation solutions provided by Conquermark are incredibly robust and secure. Our reconciliation process, which used to take days, is now completed in hours.",
          author: "David Lee",
          role: "Head of Operations",
          company: "Global Payments Inc.",
          rating: 5
        },
        {
          quote: "Their team understood our complex FinTech needs perfectly. The custom workflows they built have streamlined our KYC process, making it faster and more compliant.",
          author: "Maria Rodriguez",
          role: "Compliance Officer",
          company: "Innovate FinTech Group",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$999",
          period: "month",
          features: [
            "Basic workflow automation",
            "Up to 5 automated workflows",
            "Standard integrations",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$2,999",
          period: "month",
          popular: true,
          features: [
            "Advanced workflow automation",
            "Up to 20 automated workflows",
            "Premium integrations",
            "Dedicated account manager",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "month",
          features: [
            "Unlimited workflows",
            "Custom integrations & APIs",
            "SLA-backed support",
            "On-premise deployment options",
            "Advanced security & compliance features"
          ]
        }
      ]}
      faqs={[
        {
          question: "What types of financial processes can be automated?",
          answer: "We can automate a wide range of financial processes, including accounts payable/receivable, expense management, reconciliation, financial reporting, KYC/AML checks, and payment processing."
        },
        {
          question: "How secure are your automation solutions for financial data?",
          answer: "Security is our top priority. Our solutions are built with bank-level encryption, compliance with industry standards (e.g., GDPR, SOC 2), and robust access controls to ensure your financial data is always protected."
        },
        {
          question: "What is the typical implementation timeline for finance automation?",
          answer: "Implementation timelines vary depending on the complexity and scope of the project. A basic automation setup can take a few weeks, while more comprehensive enterprise solutions might take several months. We provide a detailed timeline after the discovery phase."
        },
        {
          question: "Can your solutions integrate with our existing financial software?",
          answer: "Yes, our platforms are designed for seamless integration with a wide array of financial software, ERP systems, and banking platforms, including popular tools like QuickBooks, NetSuite, Stripe, and many more."
        },
        {
          question: "What kind of ROI can we expect from finance automation?",
          answer: "Clients typically see significant ROI through reduced operational costs, increased efficiency, improved data accuracy, faster processing times, and enhanced compliance. Specific metrics often include 20-50% time savings and substantial cost reductions."
        }
      ]}
      ctaTitle="Ready to Automate Your Finance Operations?"
      ctaSubtitle="AI Finance & Accounting Automation"
      seoTitle="AI Finance & Accounting Automation | Conquermark"
      seoDescription="Automate your financial operations. We integrate QuickBooks, Xero, and Stripe to streamline invoicing and reconciliation."
      seoKeywords="finance automation services, quickbooks automation, xero integration, automated bookkeeping, invoice automation"
    />
  );
}
