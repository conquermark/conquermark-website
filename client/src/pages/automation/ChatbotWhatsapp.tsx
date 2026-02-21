import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { MessageCircle, Bot, Zap, Users, DollarSign, Lightbulb, Award, Rocket } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function ChatbotWhatsapp() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Facebook, ToolLogos.OpenAI, ToolLogos.Zendesk, ToolLogos.Intercom, ToolLogos.Slack, ToolLogos.HubSpot]}
      title="AI Chatbot & WhatsApp Automation"
      subtitle="Engage customers instantly on their favorite channels. 24/7 automated conversations."
      description="We build intelligent chatbots for WhatsApp, Facebook Messenger, and your website. Qualify leads, book appointments, and answer FAQs automatically."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/VlIzYJuohZcrRDYR.jpg" // Unsplash image for business communication/chatbot
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/zsckwQTwjBAsxSdX.png"
      benefits={[
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
      features={[
        "Missing customer inquiries on WhatsApp outside business hours",
        "Sales team overwhelmed answering the same questions repeatedly",
        "No automated lead qualification on WhatsApp (India's #1 channel)",
        "Unable to send bulk WhatsApp notifications for orders/updates",
        "Customer support team can't handle WhatsApp volume",
        "WhatsApp conversations not tracked in CRM or sales pipeline"
      ]}
      tools={[
        "WhatsApp Business API",
        "ManyChat",
        "Twilio",
        "Salesforce",
        "HubSpot",
        "Zoho CRM",
        "Intercom"
      ]}
      process={[
        { step: 1, title: "Discovery & Strategy", description: "We begin by understanding your business objectives, target audience, and current communication challenges to define the scope and strategy for your WhatsApp chatbot." },
        { step: 2, title: "Bot Design & Development", description: "Our team designs intuitive conversation flows, develops the chatbot logic, and integrates it with necessary APIs to ensure seamless functionality." },
        { step: 3, title: "Integration & Testing", description: "We integrate the chatbot with your existing CRM, e-commerce platforms, or other tools, followed by rigorous testing to ensure accuracy and performance." },
        { step: 4, title: "Launch & Optimization", description: "After successful testing, we launch your WhatsApp chatbot. We continuously monitor its performance and provide ongoing optimization to maximize its effectiveness." }
      ]}
      useCases={[
        {
          title: "E-commerce Customer Support",
          industry: "Retail",
          challenge: "High volume of repetitive customer queries regarding order status, returns, and product information, overwhelming the support team.",
          solution: "Implemented an AI-powered WhatsApp chatbot to handle common inquiries, provide instant order updates, and guide customers through return processes.",
          results: ["Reduced customer support response time by 70%", "Increased customer satisfaction by 25%", "Saved 30 hours/week for the support team"]
        },
        {
          title: "Lead Qualification for Real Estate",
          industry: "Real Estate",
          challenge: "Sales team spending significant time on unqualified leads received via WhatsApp, leading to inefficient lead nurturing.",
          solution: "Developed a WhatsApp chatbot to pre-qualify leads by asking key questions about budget, location preferences, and property type, then routing qualified leads to sales agents.",
          results: ["Improved lead qualification efficiency by 50%", "Increased sales conversion rate by 15%", "Reduced lead response time to under 1 minute"]
        }
      ]}
      testimonials={[
        { quote: "Our customer engagement on WhatsApp has skyrocketed since implementing the chatbot. It's a game-changer for our support team and has significantly improved our efficiency.", author: "Priya Sharma", role: "CEO", company: "FashionNova India", rating: 5 },
        { quote: "The automated lead qualification has saved our sales team countless hours. We're now focusing on high-quality leads, which has directly impacted our revenue growth.", author: "Rajesh Kumar", role: "Sales Director", company: "Elite Properties", rating: 5 },
        { quote: "Conquermark's WhatsApp automation solution significantly improved our customer service response times and overall satisfaction. Their team was professional and delivered beyond expectations.", author: "Anjali Singh", role: "Marketing Manager", company: "SecureInvest Bank", rating: 4 }
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "$300",
          period: "/month",
          features: [
            "Basic WhatsApp Chatbot",
            "Up to 1,000 conversations/month",
            "Standard integration (e.g., Google Sheets)",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$900",
          period: "/month",
          features: [
            "Advanced AI Chatbot",
            "Up to 10,000 conversations/month",
            "CRM & E-commerce integration",
            "Priority email & chat support",
            "Basic analytics dashboard"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          features: [
            "Custom AI Chatbot Solution",
            "Unlimited conversations",
            "Dedicated account manager",
            "Advanced analytics & reporting",
            "24/7 premium support",
            "On-site training"
          ]
        }
      ]}
      faqs={[
        { question: "What is a WhatsApp chatbot and how does it work?", answer: "A WhatsApp chatbot is an automated program that interacts with users on WhatsApp. It uses AI and predefined rules to understand queries and provide instant responses, automate tasks, and gather information." },
        { question: "How can WhatsApp chatbot automation benefit my Indian business?", answer: "It can help your business provide 24/7 customer support, automate lead qualification, send personalized notifications, reduce operational costs, and improve customer engagement on India's most popular messaging app." },
        { question: "Is the chatbot integrated with existing CRM or e-commerce platforms?", answer: "Yes, our solutions are designed for seamless integration with popular CRMs like Salesforce, HubSpot, Zoho CRM, and e-commerce platforms like Shopify, ensuring all your customer data is synchronized." },
        { question: "What is the typical setup process and timeline?", answer: "Our process involves Discovery & Strategy, Bot Design & Development, Integration & Testing, and Launch & Optimization. The timeline typically ranges from 4-8 weeks, depending on the complexity of the requirements." },
        { question: "How much does WhatsApp chatbot automation cost?", answer: "Our pricing varies based on the complexity and scale of your requirements. We offer Starter, Professional, and Enterprise plans, with custom solutions available. Please refer to our pricing section or contact us for a personalized quote." }
      ]}
      ctaTitle="Ready to Automate Your WhatsApp Chatbots?"
      ctaSubtitle="AI Chatbot & WhatsApp Automation"
      seoTitle="AI Chatbot & WhatsApp Automation | Conquermark"
      seoDescription="Build AI chatbots and WhatsApp automation flows. We integrate OpenAI and Twilio to create intelligent conversational experiences."
      seoKeywords="whatsapp automation, ai chatbot services, messenger bot, conversational marketing, chatbot development"
    />
  );
}