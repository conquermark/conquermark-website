import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { ShoppingCart, Package, TrendingUp, Repeat, DollarSign, HelpCircle, Lightbulb, Users } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Ecommerce() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Shopify, ToolLogos.WooCommerce, ToolLogos.Magento, ToolLogos.BigCommerce, ToolLogos.Stripe, ToolLogos.Klaviyo]}
      title="E-commerce Automation Solutions"
      subtitle="Sync inventory, orders, and customers across all channels. Scale your store on autopilot."
      description="We build unified workflows for Shopify, WooCommerce, and Amazon. Automate order fulfillment, inventory updates, and customer notifications."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/lALlRKHGTNqHJCuk.jpg"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/SpZqkUuNmwDoOdZP.jpg"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/hqyRMJAZhxWuAzQj.png"
      benefits={[
        {
          icon: <ShoppingCart className="h-12 w-12" />,
          title: "Order Processing Automation",
          description: "Auto-process orders, generate invoices, update inventory, and trigger fulfillment - all within minutes of purchase"
        },
        {
          icon: <Package className="h-12 w-12" />,
          title: "Multi-Channel Inventory Sync",
          description: "Real-time inventory synchronization across Shopify, Amazon, Flipkart, Meesho, and your own website"
        },
        {
          icon: <Repeat className="h-12 w-12" />,
          title: "Customer Communication",
          description: "Automated order confirmations, shipping updates, delivery notifications via email, SMS, and WhatsApp"
        },
        {
          icon: <TrendingUp className="h-12 w-12" />,
          title: "Cart Recovery & Upsells",
          description: "Automated abandoned cart recovery, post-purchase upsells, and review request campaigns"
        }
      ]}
      features={[
        "Manually processing 100+ orders daily across multiple platforms",
        "Inventory going out of sync between Shopify, Amazon, and Flipkart",
        "Spending hours sending order confirmations and shipping updates",
        "Unable to recover abandoned carts effectively",
        "No automated system for customer reviews and feedback",
        "Missing sales due to stock-outs that could have been prevented"
      ]}
      tools={[
        "Shopify",
        "WooCommerce",
        "Amazon Seller Central",
        "Flipkart Seller Hub",
        "Meesho",
        "Razorpay",
        "Shiprocket",
        "Delhivery",
        "FedEx",
        "Blue Dart"
      ]}
      process={[
        {
          step: 1,
          title: "Discovery & Analysis",
          description: "We begin by understanding your current e-commerce operations, identifying bottlenecks, and mapping out your desired automation workflows."
        },
        {
          step: 2,
          title: "Solution Design & Setup",
          description: "Based on our analysis, we design a tailored automation solution, configure the necessary tools, and set up the integration points."
        },
        {
          step: 3,
          title: "Build & Testing",
          description: "Our team builds and rigorously tests the automation workflows to ensure seamless operation, accuracy, and reliability."
        },
        {
          step: 4,
          title: "Launch & Optimization",
          description: "We launch your automation system, provide training, and continuously monitor and optimize the workflows for maximum efficiency and impact."
        }
      ]}
      useCases={[
        {
          title: "Streamlining Order Fulfillment for a Fashion Brand",
          industry: "Fashion E-commerce",
          challenge: "A growing fashion brand struggled with manual order processing across Shopify and Instagram, leading to delays and errors.",
          solution: "Implemented an automation solution to automatically capture orders from both platforms, update inventory, generate shipping labels, and send customer notifications.",
          results: [
            "Reduced order processing time by 70%",
            "Decreased shipping errors by 90%",
            "Saved 25 hours/week in manual work"
          ]
        },
        {
          title: "Automating Inventory Sync for a Multi-Channel Electronics Retailer",
          industry: "Electronics E-commerce",
          challenge: "An electronics retailer faced frequent stock-outs and overselling due to delayed inventory updates across Amazon, Flipkart, and their own website.",
          solution: "Developed a real-time inventory synchronization system that instantly updates stock levels across all sales channels whenever a sale occurs or new stock arrives.",
          results: [
            "Eliminated stock-outs and overselling",
            "Increased customer satisfaction by 40%",
            "Improved inventory accuracy to 99%"
          ]
        }
      ]}
      testimonials={[
        {
          quote: "ConquerMark transformed our e-commerce operations. We've saved countless hours and significantly reduced errors in our order fulfillment process.",
          author: "Priya Sharma",
          role: "Founder",
          company: "Ethnic Threads",
          rating: 5
        },
        {
          quote: "The inventory synchronization solution is a game-changer. We no longer worry about overselling or stock discrepancies across our multiple platforms.",
          author: "Rajesh Kumar",
          role: "Operations Manager",
          company: "Tech Gadgets India",
          rating: 5
        },
        {
          quote: "Their automation for customer communication has drastically improved our customer engagement and reduced the load on our support team.",
          author: "Anjali Singh",
          role: "Marketing Head",
          company: "Home Decor Hub",
          rating: 4
        }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$300",
          period: "/month",
          features: [
            "Basic Order Processing Automation",
            "Single Channel Inventory Sync",
            "Email Support",
            "Up to 500 Orders/Month"
          ]
        },
        {
          name: "Professional",
          price: "$700",
          period: "/month",
          features: [
            "Advanced Order Processing Automation",
            "Multi-Channel Inventory Sync",
            "Automated Customer Communication",
            "Priority Support",
            "Up to 2000 Orders/Month",
            "Abandoned Cart Recovery"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          features: [
            "All Professional Features",
            "Custom Integrations",
            "Dedicated Account Manager",
            "24/7 Premium Support",
            "Unlimited Orders"
          ]
        }
      ]}
      faqs={[
        {
          question: "What e-commerce platforms do you integrate with?",
          answer: "We integrate with popular platforms like Shopify, WooCommerce, Amazon Seller Central, Flipkart Seller Hub, Meesho, and can build custom integrations for others."
        },
        {
          question: "How long does it take to set up e-commerce automation?",
          answer: "Setup time varies based on complexity, but most standard automations can be live within 2-4 weeks after initial discovery."
        },
        {
          question: "Can automation help with abandoned carts?",
          answer: "Yes, we implement automated sequences via email, SMS, and WhatsApp to recover abandoned carts, significantly boosting your conversion rates."
        },
        {
          question: "Is my data secure with your automation solutions?",
          answer: "Absolutely. We prioritize data security and compliance, using industry-standard encryption and secure protocols for all integrations and data handling."
        },
        {
          question: "What kind of support do you offer after implementation?",
          answer: "We offer ongoing support, maintenance, and optimization services to ensure your automation workflows run smoothly and adapt to your evolving business needs."
        }
      ]}
      ctaTitle="Ready to Automate Your E-commerce?"
      ctaSubtitle="E-commerce Automation Solutions"
      seoTitle="E-commerce Automation Solutions | Conquermark"
      seoDescription="Scale your e-commerce business with automation. We integrate Shopify, WooCommerce, and Amazon to automate operations."
      manualTasks={[
    "Inventory Syncing",
    "Order Processing",
    "Customer Support Tickets",
    "Return/Refund Handling",
    "Product Data Updates"
  ]}
  roiRate={45}
        seoKeywords="ecommerce automation, shopify automation, woocommerce integration, inventory sync, order fulfillment automation"
    />
  );
}
