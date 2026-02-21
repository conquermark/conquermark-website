import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Bell, Mail, MessageSquare, Zap } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Notifications() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Slack, ToolLogos.Gmail, ToolLogos.Zoom, ToolLogos.Trello, ToolLogos.Asana, ToolLogos.ClickUp]}
      title="Smart Notification Systems"
      subtitle="Get critical alerts where you work. Slack, Teams, or SMS."
      description="We configure intelligent notification workflows. Get alerted about high-value deals, server downtime, or urgent support tickets instantly."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/wWYUXpnrLfuUmhtw.jpg"
      problemImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/nYfZHLMowakJOyAx.jpg"
        workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/bTyoTAhPnouQNZnN.png"
      
      benefits={[
        {
          icon: <Bell className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <Mail className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <MessageSquare className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <Zap className="h-12 w-12" />,
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

      tools={["Slack", "Microsoft Teams", "Twilio", "SendGrid", "Zapier", "Make.com", "Pushover", "Discord", "Telegram"]}

      ctaTitle="Ready to Automate Your Notifications?"
      ctaSubtitle="Smart Notification Systems"

      seoTitle="Smart Notification Systems | Conquermark"
      seoDescription="Implement smart notification workflows. Get critical alerts in Slack, Microsoft Teams, or via SMS for important business events."
      seoKeywords="notification automation, slack alerts, teams integration, sms notifications, business alert systems"

      process={[
        {
          step: 1,
          title: "Discovery & Analysis",
          description: "We analyze your current processes, identify automation opportunities, and design the optimal solution."
        },
        {
          step: 2,
          title: "Integration Setup",
          description: "Connect all necessary tools and platforms, configure authentication, and set up the infrastructure."
        },
        {
          step: 3,
          title: "Build & Test",
          description: "Build automation workflows, implement all logic and conditions, and test thoroughly with real data."
        },
        {
          step: 4,
          title: "Deploy & Optimize",
          description: "Launch to production, train your team, monitor performance, and continuously optimize results."
        }
      ]}
      
      useCases={[
        {
          title: "E-commerce Order Fulfillment Alerts",
          industry: "E-commerce",
          challenge: "A growing e-commerce business was struggling with manual order tracking and customer communication, leading to delayed shipments and increased customer service inquiries.",
          solution: "We implemented an automated notification system that sends real-time alerts to the fulfillment team on new orders, low stock, and shipping updates. Customers receive automated order confirmations, shipping notifications, and delivery updates via email and SMS.",
          results: [
            "Reduced order processing time by 30%",
            "Decreased customer service inquiries by 25%",
            "Improved customer satisfaction scores by 15%",
            "Saved 15 hours/week in manual tracking and communication"
          ]
        },
        {
          title: "SaaS Customer Onboarding & Engagement",
          industry: "Software as a Service (SaaS)",
          challenge: "A SaaS company experienced high churn rates due to inconsistent customer onboarding and lack of proactive engagement. Manual follow-ups were time-consuming and often missed.",
          solution: "We designed an automated onboarding workflow that triggers personalized email sequences based on user actions within the platform. Automated notifications alert account managers to key user milestones or inactivity, enabling timely intervention.",
          results: [
            "Increased user activation rate by 20%",
            "Reduced customer churn by 10%",
            "Improved customer engagement by 30%",
            "Saved 20 hours/week for account management team"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "The automation has been transformative for our business. We're operating more efficiently, making fewer errors, and our team is focused on growth instead of repetitive tasks.",
          author: "Sarah Johnson",
          role: "Operations Director",
          company: "TechGrowth Solutions",
          rating: 5
        },
        {
          quote: "Conquermark's notification automation solution has significantly improved our internal communication and response times. Critical alerts now reach the right people instantly, preventing potential issues before they escalate.",
          author: "David Lee",
          role: "IT Manager",
          company: "Global Logistics Inc.",
          rating: 5
        },
        {
          quote: "We used to spend hours manually sending updates to our clients. With the automated notification system, we've not only saved countless hours but also enhanced our client's experience with timely and consistent communication.",
          author: "Emily Chen",
          role: "Client Relations Lead",
          company: "Creative Marketing Agency",
          rating: 4
        }
      ]}
      
      faqs={[
        {
          question: "How long does implementation take?",
          answer: "Simple automations can be live in 1-2 weeks. More complex multi-system integrations typically take 3-6 weeks depending on the number of systems and complexity of workflows. We provide a detailed timeline during discovery."
        },
        {
          question: "Which tools and platforms can you integrate?",
          answer: "We integrate with virtually any business tool including CRMs (Salesforce, HubSpot), marketing platforms (Mailchimp, ActiveCampaign), e-commerce (Shopify, WooCommerce), communication tools (Slack, Teams), and custom internal systems via API."
        },
        {
          question: "Do you provide training and support?",
          answer: "Yes! We provide comprehensive training for your team, detailed documentation, and ongoing support (1-6 months depending on your plan). We ensure your team can manage and troubleshoot the automations independently."
        },
        {
          question: "What if our business processes change?",
          answer: "We build flexible automations that can be easily modified as your business evolves. We also provide support during the initial months to help you adapt automations to changing needs."
        },
        {
          question: "Can you integrate with custom-built applications?",
          answer: "Absolutely. We specialize in custom integrations and can connect with proprietary systems through their APIs, ensuring seamless data flow and notification triggers tailored to your unique setup."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$499",
          period: "/month",
          features: [
            "Up to 5 basic notification workflows",
            "Email & Slack integrations",
            "Standard support",
            "Monthly performance reports"
          ]
        },
        {
          name: "Professional",
          price: "$1499",
          period: "/month",
          popular: true,
          features: [
            "Up to 20 advanced notification workflows",
            "Multi-channel integrations (Email, Slack, SMS, Push)",
            "Priority support & dedicated account manager",
            "Custom logic & conditional notifications",
            "Quarterly strategy sessions"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Unlimited complex notification workflows",
            "Full suite of integrations & custom API connections",
            "24/7 premium support & on-demand consultations",
            "Advanced analytics & continuous optimization",
            "Dedicated engineering team for custom development"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Marketing Automation", href: "/automation/marketing" },
        { name: "Sales Automation", href: "/automation/sales" },
        { name: "Zapier Services", href: "/automation/zapier" }
      ]}
    />
  );
}
