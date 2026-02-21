import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { ShoppingCart, Package, Database, Repeat, Lightbulb, DollarSign, Users, CheckCircle } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function OrderSync() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Shopify, ToolLogos.WooCommerce, ToolLogos.QuickBooks, ToolLogos.Xero, ToolLogos.Stripe, ToolLogos.GoogleSheets]}
      title="Multi-Channel Order Sync"
      subtitle="Centralize orders from Shopify, Amazon, and eBay. One dashboard for everything."
      description="We build custom integrations to sync orders, inventory, and tracking numbers across all your sales channels and fulfillment partners."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/ecFSjLeUQutXCbPh.png"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/LtBdjKdFGetl.png"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/YXxlQahlrLJRydVp.png"
      
      features={[
        "Manual processes consuming hours of productive time daily",
        "Data scattered across multiple disconnected systems",
        "Missing opportunities due to slow manual workflows",
        "No automated notifications for critical business events",
        "Team spending time on repetitive tasks instead of strategic work",
        "Unable to scale operations without hiring more staff"
      ]}
      
      benefits={[
        {
          icon: <ShoppingCart className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <Package className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <Repeat className="h-12 w-12" />,
          title: "Scalable Solutions",
          description: "Build automation that scales with your business growth without additional manual effort"
        }
      ]}
      
      tools={["Shopify", "WooCommerce", "Salesforce", "SAP", "NetSuite", "Amazon Seller Central", "eBay", "QuickBooks", "Xero"]}

      process={[
        { step: 1, title: "Discovery & Analysis", description: "We begin by understanding your current order and inventory processes, identifying pain points and integration needs." },
        { step: 2, title: "Solution Design & Setup", description: "Our experts design a tailored automation solution, configuring integrations and setting up workflows." },
        { step: 3, title: "Development & Testing", description: "We build and rigorously test the automation, ensuring seamless data flow and accurate synchronization." },
        { step: 4, title: "Launch & Optimization", description: "After successful testing, we launch your automation and provide ongoing support and optimization." }
      ]}

      useCases={[
        {
          title: "E-commerce Retailer Expansion",
          industry: "Retail",
          challenge: "A growing e-commerce retailer faced frequent stockouts and delayed shipments due to manual order processing and inventory updates across Shopify and Amazon.",
          solution: "Conquermark implemented automated order and inventory synchronization, connecting Shopify, Amazon, and their ERP system for real-time data flow.",
          results: ["Reduced stockouts by 40%", "Increased order fulfillment speed by 25%", "Saved 15 hours/week in manual data entry"]
        },
        {
          title: "Wholesale Distributor Efficiency",
          industry: "Distribution",
          challenge: "A wholesale distributor struggled with managing large volumes of B2B orders and maintaining real-time inventory accuracy across multiple sales channels.",
          solution: "We deployed an automation solution that integrated their CRM, ERP, and various sales platforms, ensuring seamless order flow and inventory reconciliation.",
          results: ["Improved order accuracy by 98%", "Reduced order processing time by 30%", "Achieved real-time inventory visibility across all channels"]
        }
      ]}

      testimonials={[
        {
          quote: "Conquermark transformed our order processing. We\'ve seen a significant reduction in errors and our team can now focus on growth initiatives.",
          author: "Sarah Chen",
          role: "Operations Manager",
          company: "Global Gadgets Inc.",
          rating: 5
        },
        {
          quote: "The inventory sync solution is a game-changer. We no longer worry about overselling or stockouts, leading to happier customers and better cash flow.",
          author: "David Lee",
          role: "CEO",
          company: "E-Commerce Innovations",
          rating: 5
        },
        {
          quote: "Their team understood our complex needs and delivered a robust automation that has saved us countless hours and improved our supply chain efficiency.",
          author: "Maria Rodriguez",
          role: "Supply Chain Director",
          company: "Wholesale Solutions Ltd.",
          rating: 4
        }
      ]}

      pricingPlans={[
        {
          name: "Starter",
          price: "$499",
          period: "/month",
          features: ["Basic Order Sync", "1-2 Integrations", "Email Support", "Standard Reporting"],
          popular: false
        },
        {
          name: "Professional",
          price: "$1,499",
          period: "/month",
          features: ["Advanced Order Sync", "5+ Integrations", "Inventory Management", "Priority Support", "Customizable Dashboards"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$3,999",
          period: "/month",
          features: ["Custom Integrations", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support", "SLA Guaranteed Uptime"],
          popular: false
        }
      ]}

      faqs={[
        {
          question: "What platforms can you integrate for order and inventory sync?",
          answer: "We can integrate with a wide range of e-commerce platforms (Shopify, WooCommerce, Magento), ERP systems (SAP, NetSuite), CRM systems (Salesforce), and marketplaces (Amazon, eBay, Etsy)."
        },
        {
          question: "How long does it take to set up order and inventory automation?",
          answer: "Setup time varies depending on the complexity of your existing systems and the number of integrations. Typically, projects range from 4 to 12 weeks from discovery to launch."
        },
        {
          question: "Is my data secure with your automation solutions?",
          answer: "Yes, data security is our top priority. We implement industry-standard encryption, access controls, and compliance protocols to ensure your data is protected at all times."
        },
        {
          question: "Can the automation handle peak season order volumes?",
          answer: "Absolutely. Our solutions are designed for scalability and can handle fluctuating order volumes, ensuring your operations run smoothly even during peak seasons like Black Friday or Cyber Monday."
        },
        {
          question: "What kind of support do you offer after implementation?",
          answer: "We offer comprehensive post-implementation support, including ongoing maintenance, performance monitoring, and dedicated technical assistance to ensure your automation continues to run optimally."
        }
      ]}

      ctaTitle="Ready to Automate Your Order + Inventory Sync?"
      ctaSubtitle="Multi-Channel Order Sync"
      seoTitle="Multi-Channel Order Sync Automation | Conquermark"
      seoDescription="Automate order synchronization across channels. We connect Shopify, Amazon, and ERPs to streamline fulfillment and inventory."
      manualTasks={[
    "Lead Qualification",
    "Follow-up Emails",
    "CRM Data Entry",
    "Proposal Generation",
    "Meeting Scheduling"
  ]}
  roiRate={40}
        seoKeywords="order sync automation, inventory management automation, multi-channel ecommerce, erp integration, fulfillment automation"
    />
  );
}