import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Headphones, MessageSquare, Clock, BarChart } from "lucide-react";

export default function Support() {
  return (
    <AutomationPageTemplate
      heroTitle="Customer Support Automation - Scale Support Without Scaling Headcount"
      heroSubtitle="Automate ticket routing, responses, and customer communication"
      heroDescription="We help support teams handle 10x more tickets with AI-powered automation, intelligent routing, and seamless integration with your helpdesk tools."
      
      painPoints={[
        "Support tickets piling up with 24+ hour response times",
        "Agents spending hours on repetitive questions that could be automated",
        "No automated ticket routing based on priority or expertise",
        "Customer satisfaction dropping due to slow response times",
        "Support data scattered across email, chat, and helpdesk tools",
        "Unable to provide 24/7 support without hiring night shift teams"
      ]}
      
      solutions={[
        {
          icon: <MessageSquare className="h-12 w-12" />,
          title: "AI-Powered Auto-Responses",
          description: "Automatically answer common questions, provide instant solutions, and deflect 60-80% of repetitive tickets"
        },
        {
          icon: <Headphones className="h-12 w-12" />,
          title: "Intelligent Ticket Routing",
          description: "Route tickets to the right agent based on issue type, priority, customer tier, and agent expertise"
        },
        {
          icon: <Clock className="h-12 w-12" />,
          title: "24/7 Automated Support",
          description: "Provide instant responses outside business hours, escalate urgent issues, and queue non-urgent tickets"
        },
        {
          icon: <BarChart className="h-12 w-12" />,
          title: "Support Analytics",
          description: "Real-time dashboards tracking response times, resolution rates, customer satisfaction, and agent performance"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Support Workflow Analysis",
          description: "We analyze your current support process, identify bottlenecks, categorize common issues, and map automation opportunities."
        },
        {
          step: 2,
          title: "Helpdesk Integration",
          description: "Connect your helpdesk (Zendesk, Freshdesk, Intercom, Help Scout) with email, chat, CRM, and knowledge base systems."
        },
        {
          step: 3,
          title: "Automation Build",
          description: "Build AI responses for common questions, set up intelligent routing rules, create escalation workflows, and automate follow-ups."
        },
        {
          step: 4,
          title: "Train & Optimize",
          description: "Train your support team, monitor automation performance, and continuously improve response accuracy and routing logic."
        }
      ]}
      
      useCases={[
        {
          title: "SaaS Company Reduces Response Time by 85%",
          industry: "B2B SaaS",
          challenge: "A project management SaaS was receiving 500+ support tickets daily. Average response time was 18 hours, and customer satisfaction was dropping. Support team of 8 was overwhelmed and burning out.",
          solution: "Implemented comprehensive support automation: Ticket received → AI categorizes issue → Common questions auto-answered with KB articles → Technical issues routed to product team → Billing questions to finance → Urgent issues escalated immediately → All responses tracked in Zendesk → Satisfaction surveys automated.",
          results: [
            "Response time reduced from 18 hours to 2.5 hours (85% improvement)",
            "65% of tickets now resolved automatically without human intervention",
            "Customer satisfaction score increased from 3.1 to 4.6 out of 5",
            "Support team handles 3x volume with same headcount"
          ]
        },
        {
          title: "E-commerce Brand Provides 24/7 Support with Same Team",
          industry: "E-commerce",
          challenge: "An online fashion retailer had customers in multiple time zones but only provided support 9 AM - 6 PM. After-hours inquiries went unanswered for 12+ hours, causing cart abandonment and negative reviews.",
          solution: "Built 24/7 automated support system: Customer inquiry (email/chat) → AI identifies query type → Order status queries answered automatically (integrated with order system) → Return/exchange requests processed with automated workflow → Product questions answered from FAQ → Urgent issues create high-priority tickets for morning → All tracked in Freshdesk.",
          results: [
            "Now providing 24/7 support without hiring additional staff",
            "After-hours inquiries get instant responses (previously 12+ hour wait)",
            "80% of order status and return queries fully automated",
            "$15,000 monthly revenue recovered from reduced cart abandonment"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Support automation transformed our customer experience. We went from 18-hour response times to under 3 hours, and our team is no longer overwhelmed. Customer satisfaction doubled.",
          author: "Sarah Mitchell",
          role: "Head of Customer Success",
          company: "TaskFlow SaaS",
          rating: 5
        },
        {
          quote: "We now provide 24/7 support without hiring a night shift. The AI handles 80% of common questions automatically, and our team focuses on complex issues that actually need human expertise.",
          author: "David Chen",
          role: "Customer Support Manager",
          company: "StyleNow Fashion",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Which helpdesk systems do you integrate with?",
          answer: "We work with all major helpdesk platforms including Zendesk, Freshdesk, Intercom, Help Scout, Front, Gorgias, and custom support systems. We also integrate with live chat tools like Drift, Crisp, and Tawk.to."
        },
        {
          question: "How accurate are the AI auto-responses?",
          answer: "We train the AI on your knowledge base, past tickets, and FAQs to achieve 85-95% accuracy. The system learns over time and improves. For questions it's unsure about, it escalates to human agents rather than providing incorrect information."
        },
        {
          question: "Can you automate support across multiple channels?",
          answer: "Yes! We automate support across email, live chat, social media (Twitter, Facebook), WhatsApp, and in-app messaging - all managed from your central helpdesk with unified customer history."
        },
        {
          question: "What happens to tickets the AI can't handle?",
          answer: "The system intelligently escalates to human agents with full context. We set up routing rules so complex or sensitive issues go directly to the right team member without AI attempting to answer."
        },
        {
          question: "Do you provide ongoing support and optimization?",
          answer: "Yes! Our support packages include monitoring, performance optimization, updating AI responses based on new issues, and expanding automation as your support needs evolve."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$400",
          period: "one-time",
          features: [
            "Helpdesk integration",
            "Basic AI auto-responses (up to 30 FAQs)",
            "Ticket routing automation",
            "Email support automation",
            "1 month support",
            "Training included"
          ]
        },
        {
          name: "Professional",
          price: "$950",
          period: "one-time",
          popular: true,
          features: [
            "Advanced AI chatbot",
            "Multi-channel support (email, chat, social)",
            "Intelligent routing & escalation",
            "24/7 automated responses",
            "Analytics dashboard",
            "Knowledge base integration",
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
            "Multi-language support",
            "Advanced analytics",
            "Dedicated support engineer",
            "6 months support",
            "24/7 support",
            "Monthly optimization"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "WhatsApp Automation", href: "/automation/chatbot-whatsapp" },
        { name: "Marketing Automation", href: "/automation/marketing" },
        { name: "Slack/Email Notifications", href: "/automation/notifications" },
        { name: "Reporting & Dashboards", href: "/automation/reporting" }
      ]}
    />
  );
}
