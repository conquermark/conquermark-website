import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { MessageCircle, Bot, Zap, Users } from "lucide-react";

export default function ChatbotWhatsapp() {
  return (
    <AutomationPageTemplate
      heroTitle="WhatsApp & Chatbot Automation for Indian Businesses"
      heroSubtitle="Engage customers 24/7 on their preferred channel - WhatsApp"
      heroDescription="We build intelligent WhatsApp chatbots and automation workflows to help Indian businesses respond instantly, qualify leads, and provide customer support at scale."
      
      painPoints={[
        "Missing customer inquiries on WhatsApp outside business hours",
        "Sales team overwhelmed answering the same questions repeatedly",
        "No automated lead qualification on WhatsApp (India's #1 channel)",
        "Unable to send bulk WhatsApp notifications for orders/updates",
        "Customer support team can't handle WhatsApp volume",
        "WhatsApp conversations not tracked in CRM or sales pipeline"
      ]}
      
      solutions={[
        {
          icon: <MessageCircle className="h-12 w-12" />,
          title: "WhatsApp Business API",
          description: "Official WhatsApp Business API integration for automated messages, notifications, and two-way conversations at scale"
        },
        {
          icon: <Bot className="h-12 w-12" />,
          title: "AI-Powered Chatbots",
          description: "Intelligent chatbots that understand customer queries, provide instant answers, and qualify leads 24/7"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Automated Notifications",
          description: "Send order confirmations, shipping updates, payment reminders, and promotional messages via WhatsApp"
        },
        {
          icon: <Users className="h-12 w-12" />,
          title: "CRM Integration",
          description: "All WhatsApp conversations automatically logged in your CRM with lead scoring and sales pipeline updates"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "WhatsApp Business Setup",
          description: "We help you get WhatsApp Business API approval (Meta verification), set up your business profile, and configure message templates."
        },
        {
          step: 2,
          title: "Chatbot Design & Training",
          description: "Design conversation flows, train AI chatbot on your FAQs, products, and services, and set up intelligent routing to human agents when needed."
        },
        {
          step: 3,
          title: "Integration & Automation",
          description: "Connect WhatsApp to your CRM, order management system, payment gateway, and other tools to enable end-to-end automation."
        },
        {
          step: 4,
          title: "Launch & Optimize",
          description: "Deploy chatbot, train your team on the dashboard, monitor conversations, and continuously improve bot responses based on real interactions."
        }
      ]}
      
      useCases={[
        {
          title: "Real Estate Company Qualifies 300+ Leads Monthly on WhatsApp",
          industry: "Real Estate",
          challenge: "A Pune-based real estate developer was receiving 500+ WhatsApp inquiries monthly about properties. Sales team could only respond to 40% within 24 hours, losing 60% of potential leads. No way to qualify leads or track conversations.",
          solution: "Built WhatsApp chatbot with lead qualification: Customer messages → Bot asks qualifying questions (budget, location, property type, timeline) → Scores lead → Hot leads instantly routed to sales rep → Warm leads enter nurture sequence → All data saved to CRM with full conversation history.",
          results: [
            "100% of WhatsApp inquiries now get instant response (previously 40%)",
            "300+ qualified leads monthly (5x increase)",
            "Lead response time reduced from 24 hours to under 60 seconds",
            "$18,000 additional monthly revenue from better WhatsApp lead management"
          ]
        },
        {
          title: "E-commerce Brand Automates Customer Support on WhatsApp",
          industry: "E-commerce",
          challenge: "A fashion e-commerce brand was getting 200+ WhatsApp messages daily asking about order status, returns, size availability. Support team of 3 couldn't keep up, leading to poor customer experience and negative reviews.",
          solution: "Implemented WhatsApp automation: Customer message → Bot identifies query type → Order status queries answered automatically (integrated with order system) → Return requests processed with automated workflow → Product questions answered from FAQ database → Complex queries routed to human agent → All conversations logged.",
          results: [
            "80% of customer queries resolved by chatbot without human intervention",
            "Support team now handles 3x volume with same headcount",
            "Average response time reduced from 4 hours to under 1 minute",
            "Customer satisfaction score increased from 3.2 to 4.7 out of 5"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "WhatsApp is where our customers are. The chatbot handles 80% of inquiries automatically, and our sales team gets instant alerts for hot leads. Game changer for our business.",
          author: "Karan Mehta",
          role: "Sales Head",
          company: "PropVista Realty",
          rating: 5
        },
        {
          quote: "We were drowning in WhatsApp support messages. The automated chatbot transformed our customer service. Response time went from hours to seconds, and our team can focus on complex issues.",
          author: "Priya Nair",
          role: "Customer Experience Manager",
          company: "FashionForward India",
          rating: 5
        },
        {
          quote: "The WhatsApp automation paid for itself in the first month. We're now converting 3x more leads from WhatsApp, and every conversation is tracked in our CRM.",
          author: "Sameer Joshi",
          role: "Founder",
          company: "EdTech Solutions",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Do I need WhatsApp Business API approval?",
          answer: "Yes, for automation and bulk messaging, you need WhatsApp Business API (different from the free WhatsApp Business app). We help you through the entire Meta verification process, which typically takes 2-3 weeks."
        },
        {
          question: "What's the cost of WhatsApp Business API?",
          answer: "WhatsApp charges per conversation (not per message). In India, it's approximately ₹0.25-0.40 per conversation depending on volume. We help you optimize to minimize costs while maximizing engagement."
        },
        {
          question: "Can the chatbot understand Hindi and regional languages?",
          answer: "Yes! We build multilingual chatbots that understand and respond in Hindi, English, and other Indian regional languages based on your customer base."
        },
        {
          question: "How do you handle situations the bot can't answer?",
          answer: "We implement intelligent escalation - when the bot doesn't understand or encounters a complex query, it seamlessly transfers to a human agent with full conversation context."
        },
        {
          question: "Can you integrate WhatsApp with our existing CRM?",
          answer: "Absolutely! We integrate WhatsApp with all major CRMs (Salesforce, HubSpot, Zoho, Freshsales, LeadSquared) and custom systems. Every WhatsApp conversation is automatically logged with lead scoring and pipeline updates."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$480",
          period: "one-time",
          features: [
            "WhatsApp Business API setup",
            "Basic chatbot (up to 20 FAQs)",
            "CRM integration",
            "Template message setup",
            "1 month support",
            "Training included"
          ]
        },
        {
          name: "Professional",
          price: "$1,080",
          period: "one-time",
          popular: true,
          features: [
            "Advanced AI chatbot",
            "Multilingual support",
            "Lead qualification workflows",
            "Order/support automation",
            "Analytics dashboard",
            "Human agent handoff",
            "3 months support",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Everything in Professional",
            "Custom AI training",
            "Multi-department routing",
            "Advanced integrations",
            "Dedicated chatbot engineer",
            "6 months support",
            "24/7 support",
            "Monthly optimization"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Lead Capture Automation", href: "/automation/lead-capture" },
        { name: "Sales & CRM Automation", href: "/automation/sales" },
        { name: "Customer Support Automation", href: "/automation/support" },
        { name: "Marketing Automation", href: "/automation/marketing" }
      ]}
    />
  );
}
