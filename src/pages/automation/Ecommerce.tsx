import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { ShoppingCart, Package, TrendingUp, Repeat } from "lucide-react";

export default function Ecommerce() {
  return (
    <AutomationPageTemplate
      heroTitle="E-commerce Automation - Scale Your Online Store"
      heroSubtitle="Automate order processing, inventory sync, and customer communication"
      heroDescription="We help Indian e-commerce brands automate their entire operations - from order to delivery - so you can focus on growth instead of manual processes."
      
      painPoints={[
        "Manually processing 100+ orders daily across multiple platforms",
        "Inventory going out of sync between Shopify, Amazon, and Flipkart",
        "Spending hours sending order confirmations and shipping updates",
        "Unable to recover abandoned carts effectively",
        "No automated system for customer reviews and feedback",
        "Missing sales due to stock-outs that could have been prevented"
      ]}
      
      solutions={[
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
      
      process={[
        {
          step: 1,
          title: "E-commerce Stack Audit",
          description: "We analyze your current setup - sales channels, payment gateways, shipping partners, and identify automation opportunities that will save the most time and increase revenue."
        },
        {
          step: 2,
          title: "Integration & Mapping",
          description: "Connect all your platforms - Shopify, WooCommerce, Amazon, Flipkart, Razorpay, Shiprocket, and map data flows between systems."
        },
        {
          step: 3,
          title: "Workflow Build & Test",
          description: "Build custom automation workflows for order processing, inventory sync, customer notifications, and test thoroughly with real orders."
        },
        {
          step: 4,
          title: "Launch & Monitor",
          description: "Deploy automations, train your team, and provide ongoing monitoring to ensure smooth operations and quick issue resolution."
        }
      ]}
      
      useCases={[
        {
          title: "Fashion Brand Automates 500+ Daily Orders",
          industry: "Fashion E-commerce",
          challenge: "A Mumbai-based fashion brand selling on Shopify, Amazon, and Flipkart was manually processing 500+ orders daily. Order confirmations were delayed, inventory was out of sync (causing overselling), and the team was working 12-hour days just to keep up.",
          solution: "Complete order automation: New order (any channel) → Auto-generate invoice → Update inventory across all channels → Send WhatsApp confirmation → Create shipping label (Shiprocket) → Send tracking SMS → Request review after delivery. Entire flow automated end-to-end.",
          results: [
            "Order processing time reduced from 45 minutes to under 2 minutes",
            "Zero overselling incidents (inventory sync in real-time)",
            "Customer satisfaction increased by 35% due to instant confirmations",
            "Team saved 40 hours/week, redeployed to marketing and growth"
          ]
        },
        {
          title: "Electronics Store Recovers ₹8 Lakhs Monthly from Abandoned Carts",
          industry: "Electronics E-commerce",
          challenge: "An electronics e-commerce store had 65% cart abandonment rate with no automated recovery system. They were leaving $18,000-24,000 on the table every month.",
          solution: "Multi-step cart recovery automation: Cart abandoned → Wait 1 hour → Email with product images → Wait 6 hours → WhatsApp message → Wait 24 hours → SMS with 5% discount → Wait 48 hours → Final email with 10% discount. Personalized messaging based on cart value and products.",
          results: [
            "Recovered 35% of abandoned carts (previously 0%)",
            "$10,000 additional monthly revenue from cart recovery alone",
            "Average order value increased by 15% through upsell automations",
            "Email open rates of 45% and WhatsApp open rates of 92%"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "We were drowning in manual order processing. ConquerMark automated everything - orders, inventory, shipping, customer messages. We now handle 3x more orders with the same team size.",
          author: "Meera Kapoor",
          role: "Founder",
          company: "StyleHub Fashion",
          rating: 5
        },
        {
          quote: "The abandoned cart automation alone paid for itself in the first month. We're now recovering $10,000 monthly from carts that would have been lost forever.",
          author: "Rohit Malhotra",
          role: "E-commerce Manager",
          company: "TechGadgets India",
          rating: 5
        },
        {
          quote: "Inventory sync across our 4 sales channels used to be a nightmare. Now it's automatic and we never oversell. Customer complaints dropped by 80%.",
          author: "Anjali Verma",
          role: "Operations Head",
          company: "HomeDecor Online",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Which e-commerce platforms do you support?",
          answer: "We integrate with all major platforms including Shopify, WooCommerce, Magento, Amazon, Flipkart, Meesho, Myntra, BigCommerce, and custom-built stores. We also work with Indian payment gateways (Razorpay, Paytm, Instamojo) and shipping partners (Shiprocket, Delhivery, Blue Dart)."
        },
        {
          question: "Can you sync inventory across multiple marketplaces?",
          answer: "Yes! We provide real-time inventory synchronization across all your sales channels. When a product sells on Amazon, inventory is instantly updated on Shopify, Flipkart, and your website to prevent overselling."
        },
        {
          question: "How do you handle COD (Cash on Delivery) orders?",
          answer: "We have special workflows for COD orders common in India - including COD verification calls, fake order detection, and automated remittance reconciliation with logistics partners."
        },
        {
          question: "Can you automate WhatsApp notifications for customers?",
          answer: "Absolutely! WhatsApp is crucial for Indian e-commerce. We integrate with WhatsApp Business API to send order confirmations, shipping updates, delivery notifications, and customer support messages."
        },
        {
          question: "What about returns and refunds automation?",
          answer: "We automate the entire returns process - return request → approval → reverse pickup → quality check → refund initiation → customer notification. Integrated with your logistics and payment gateway."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$420",
          period: "one-time",
          features: [
            "2 sales channel integrations",
            "Order processing automation",
            "Basic inventory sync",
            "Email & SMS notifications",
            "1 month support",
            "Training included"
          ]
        },
        {
          name: "Growth",
          price: "$960",
          period: "one-time",
          popular: true,
          features: [
            "Unlimited sales channels",
            "Real-time inventory sync",
            "WhatsApp automation",
            "Cart recovery workflows",
            "Shipping integration",
            "Review automation",
            "3 months support",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Everything in Growth",
            "Multi-warehouse support",
            "Advanced analytics",
            "Custom integrations",
            "Dedicated engineer",
            "6 months support",
            "24/7 support",
            "Monthly optimization"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Order + Inventory Sync", href: "/automation/order-sync" },
        { name: "WhatsApp Automation", href: "/automation/chatbot-whatsapp" },
        { name: "Marketing Automation", href: "/automation/marketing" },
        { name: "Reporting & Dashboards", href: "/automation/reporting" }
      ]}
    />
  );
}
