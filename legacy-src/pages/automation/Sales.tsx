import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Users, TrendingUp, Zap, Database } from "lucide-react";

export default function Sales() {
  return (
    <AutomationPageTemplate
      heroTitle="Sales & CRM Automation for High-Velocity Teams"
      heroSubtitle="Automate lead routing, follow-ups, and pipeline management"
      heroDescription="We help sales teams close more deals by automating repetitive tasks, ensuring no lead falls through the cracks, and providing real-time visibility into your pipeline."
      
      painPoints={[
        "Sales reps spending 4+ hours daily on data entry and admin tasks",
        "Leads not getting followed up within 5 minutes (losing 80% conversion)",
        "No automated lead assignment based on territory or product fit",
        "Manual deal stage updates causing inaccurate pipeline forecasts",
        "Sales and marketing data living in separate systems",
        "No automated alerts when deals go stale or customers churn"
      ]}
      
      solutions={[
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Instant Lead Routing",
          description: "Automatically assign leads to the right sales rep based on territory, product, deal size, or custom criteria within seconds"
        },
        {
          icon: <Users className="h-12 w-12" />,
          title: "Automated Follow-Ups",
          description: "Trigger email, SMS, or WhatsApp follow-ups based on deal stage, activity, or time-based rules"
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "CRM Data Sync",
          description: "Keep your CRM updated automatically - no more manual data entry from forms, calls, or meetings"
        },
        {
          icon: <TrendingUp className="h-12 w-12" />,
          title: "Pipeline Intelligence",
          description: "Automated deal stage progression, stale deal alerts, and real-time pipeline dashboards"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Sales Process Audit",
          description: "We map your current sales process, identify bottlenecks, and find opportunities where automation can accelerate deal velocity and improve conversion rates."
        },
        {
          step: 2,
          title: "CRM Integration Setup",
          description: "We connect all your sales tools - CRM, email, calendar, phone system, forms - into one unified automation system."
        },
        {
          step: 3,
          title: "Workflow Automation",
          description: "Build custom automations for lead routing, follow-ups, data enrichment, deal progression, and sales alerts."
        },
        {
          step: 4,
          title: "Training & Optimization",
          description: "Train your sales team on the new workflows, monitor performance, and continuously optimize for better results."
        }
      ]}
      
      useCases={[
        {
          title: "Real Estate Company Cuts Lead Response Time by 90%",
          industry: "Real Estate",
          challenge: "A Bangalore-based real estate company was receiving 200+ leads daily from multiple sources (website, Facebook, 99acres, MagicBricks). Manual lead assignment took 2-4 hours, causing 60% of leads to go cold before contact.",
          solution: "Implemented instant lead routing automation: All lead sources → Centralized system → Auto-enrichment → Territory-based assignment → SMS + WhatsApp to prospect → CRM update → Sales rep mobile notification. Total time: under 2 minutes.",
          results: [
            "Lead response time reduced from 2-4 hours to under 2 minutes",
            "Lead-to-appointment conversion increased by 45%",
            "$21,600 additional monthly revenue from faster follow-up",
            "Sales team saved 20 hours/week on manual lead management"
          ]
        },
        {
          title: "B2B SaaS Automates Entire Sales Pipeline",
          industry: "B2B SaaS",
          challenge: "A HR tech SaaS company had sales reps manually updating Salesforce after every call, email, and demo. Deal stages were inaccurate, and management had no real-time pipeline visibility.",
          solution: "Full pipeline automation: Meeting booked → Calendar → Auto-create deal in Salesforce → Send pre-meeting email → Post-meeting survey → Auto-update deal stage → Trigger follow-up sequence → Slack alert for hot deals → Weekly pipeline report.",
          results: [
            "100% accurate pipeline data in real-time",
            "Sales reps saved 15 hours/week on CRM updates",
            "Deal cycle time reduced by 30%",
            "Revenue forecasting accuracy improved from 60% to 92%"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Our sales team was drowning in admin work. ConquerMark automated everything - lead routing, follow-ups, CRM updates. Now they actually have time to sell. Revenue is up 40%.",
          author: "Vikram Patel",
          role: "VP Sales",
          company: "PropTech Solutions",
          rating: 5
        },
        {
          quote: "We went from manually assigning leads to instant automated routing. Response time dropped from hours to minutes. Our conversion rate doubled in 2 months.",
          author: "Sneha Reddy",
          role: "Sales Director",
          company: "FinServe India",
          rating: 5
        },
        {
          quote: "The pipeline automation gave us real-time visibility we never had. We can now accurately forecast revenue and identify bottlenecks instantly.",
          author: "Amit Gupta",
          role: "COO",
          company: "CloudTech Systems",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Which CRM systems do you integrate with?",
          answer: "We work with all major CRMs including Salesforce, HubSpot, Zoho CRM, Pipedrive, Freshsales, Close, Copper, and custom CRMs. We can also integrate with Indian CRMs like LeadSquared and Kylas."
        },
        {
          question: "Can you automate lead assignment based on custom rules?",
          answer: "Yes! We can route leads based on any criteria - geography, product interest, company size, deal value, lead source, or custom scoring. We also support round-robin, weighted distribution, and availability-based routing."
        },
        {
          question: "How do you handle WhatsApp integration for sales?",
          answer: "We integrate with WhatsApp Business API to send automated messages, follow-ups, and notifications. This is crucial for Indian businesses where WhatsApp is the primary communication channel."
        },
        {
          question: "What happens if a sales rep leaves the company?",
          answer: "We build in reassignment workflows. When a rep leaves, their leads and deals can be automatically reassigned based on your rules (territory, product, or manual assignment)."
        },
        {
          question: "Can you integrate with our calling system?",
          answer: "Absolutely! We integrate with calling platforms like Exotel, Knowlarity, Ozonetel, and international systems like Aircall and RingCentral to log calls automatically in your CRM."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$360",
          period: "one-time",
          features: [
            "CRM integration (1 system)",
            "Lead routing automation",
            "Basic follow-up sequences",
            "Form-to-CRM sync",
            "1 month support",
            "Team training included"
          ]
        },
        {
          name: "Professional",
          price: "$900",
          period: "one-time",
          popular: true,
          features: [
            "Multi-CRM integration",
            "Advanced lead routing & scoring",
            "WhatsApp automation",
            "Pipeline automation",
            "Custom dashboards",
            "Calling system integration",
            "3 months support",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Unlimited integrations",
            "Full sales automation suite",
            "AI-powered lead scoring",
            "Revenue intelligence",
            "Dedicated sales automation engineer",
            "6 months support",
            "24/7 support",
            "Quarterly optimization"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Marketing Automation", href: "/automation/marketing" },
        { name: "Lead Capture Automation", href: "/automation/lead-capture" },
        { name: "Form-to-CRM Integration", href: "/automation/form-to-crm" },
        { name: "WhatsApp Automation", href: "/automation/chatbot-whatsapp" }
      ]}
    />
  );
}
