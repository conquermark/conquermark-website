import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Mail, MessageSquare, BarChart, Users, Target, Zap } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Marketing() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.HubSpot, ToolLogos.Mailchimp, ToolLogos.GoogleAds, ToolLogos.Facebook, ToolLogos.LinkedIn, ToolLogos.Klaviyo]}
      title="AI Marketing Automation Services"
      subtitle="Stop sending manual emails. Start building intelligent customer journeys that convert 24/7."
      description="We build custom marketing automation systems that nurture leads, segment audiences, and drive revenue. No more generic blasts—deliver the right message at the right time."
      heroImage="/marketing-dashboard.jpg"
      workflowImage="/marketing-workflow.png"
      
      benefits={[
        {
          icon: <Mail className="h-12 w-12" />,
          title: "Smart Email Sequences",
          description: "Automated drip campaigns that adapt based on user behavior (opens, clicks, site visits)."
        },
        {
          icon: <Target className="h-12 w-12" />,
          title: "Lead Scoring & Segmentation",
          description: "Automatically identify hot leads and route them to sales. Segment users by industry, role, or activity."
        },
        {
          icon: <MessageSquare className="h-12 w-12" />,
          title: "Multi-Channel Outreach",
          description: "Coordinate email, SMS, WhatsApp, and ad retargeting in a single unified workflow."
        },
        {
          icon: <BarChart className="h-12 w-12" />,
          title: "ROI Attribution",
          description: "Track exactly which campaigns are driving revenue with closed-loop reporting."
        }
      ]}
      
      features={[
        "Leads falling through the cracks due to slow follow-up",
        "Sales team wasting time on unqualified prospects",
        "Manual data entry between CRM and marketing tools",
        "Generic email blasts with low open rates",
        "No visibility into which campaigns drive actual revenue",
        "Inconsistent messaging across different channels"
      ]}
      
      tools={[
        "HubSpot",
        "ActiveCampaign",
        "Salesforce",
        "Mailchimp",
        "Klaviyo",
        "GoHighLevel",
        "Zapier",
        "Make"
      ]}
      
      process={[
        {
          step: 1,
          title: "Audit & Strategy",
          description: "We analyze your current funnel, identify leaks, and map out a high-converting customer journey."
        },
        {
          step: 2,
          title: "Tech Stack Setup",
          description: "We configure your CRM, email tools, and tracking pixels for perfect data flow."
        },
        {
          step: 3,
          title: "Workflow Build",
          description: "We build complex automation flows with branching logic, lead scoring, and personalization."
        },
        {
          step: 4,
          title: "Launch & Optimize",
          description: "We go live, monitor performance, and A/B test to continuously improve conversion rates."
        }
      ]}
      
      useCases={[
        {
          title: "SaaS Company Increases Demo Bookings by 40%",
          industry: "B2B SaaS",
          challenge: "A SaaS company was generating leads but failing to convert them into demos. Their manual follow-up process was too slow, and leads were going cold.",
          solution: "We implemented an automated lead nurturing engine. New leads received an instant personalized email, followed by a value-driven sequence. High-intent behaviors (pricing page visits) triggered alerts to the sales team.",
          results: [
            "40% increase in demo bookings within 30 days",
            "Lead response time reduced from 4 hours to < 2 minutes",
            "Sales team saved 15 hours/week on manual outreach",
            "Email open rates improved from 18% to 42%"
          ]
        },
        {
          title: "E-commerce Brand Recovers $50k/Month in Abandoned Carts",
          industry: "E-commerce",
          challenge: "An online retailer was losing 70% of shoppers at checkout. Their basic abandoned cart email was generic and often landed in spam.",
          solution: "We built a multi-channel recovery workflow. 1 hour after abandonment: Personalized email with dynamic product images. 24 hours: SMS reminder with a limited-time discount. 48 hours: Final email urgency.",
          results: [
            "$50,000+ recovered revenue per month",
            "18% recovery rate (industry avg is 10%)",
            "SMS channel added $15k in incremental revenue",
            "Customer lifetime value increased by 12%"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Conquermark transformed our marketing. We went from 'spray and pray' to a sophisticated machine that generates qualified leads while we sleep. The ROI has been incredible.",
          author: "Sarah Jenkins",
          role: "CMO",
          company: "TechFlow Solutions",
          rating: 5
        },
        {
          quote: "The level of detail in their workflows is unmatched. They didn't just set up a tool; they built a complete revenue engine for us.",
          author: "Michael Chen",
          role: "Founder",
          company: "GrowthBox",
          rating: 5
        },
        {
          quote: "Finally, our sales and marketing teams are aligned. The lead scoring system they built ensures our reps only talk to people ready to buy.",
          author: "David Miller",
          role: "VP of Sales",
          company: "Enterprise Systems",
          rating: 5
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$1,500",
          period: "one-time",
          features: [
            "Audit of current setup",
            "Core email automation flows (Welcome, Nurture)",
            "CRM integration (HubSpot/ActiveCampaign)",
            "Basic lead scoring",
            "1 month of support"
          ]
        },
        {
          name: "Growth",
          price: "$3,500",
          period: "one-time",
          popular: true,
          features: [
            "Everything in Starter",
            "Advanced segmentation strategy",
            "Multi-channel workflows (SMS, WhatsApp)",
            "Custom reporting dashboard",
            "A/B testing setup",
            "3 months of support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Full-funnel architecture",
            "Custom API integrations",
            "Data warehouse syncing",
            "Dedicated automation engineer",
            "Quarterly strategy reviews",
            "Priority 24/7 support"
          ]
        }
      ]}
      
      faqs={[
        {
          question: "How long does it take to see results?",
          answer: "Most clients see an impact within the first 30 days. Simple workflows (like welcome sequences) start working immediately. Complex nurturing strategies typically mature over 2-3 months as data accumulates."
        },
        {
          question: "Do I need to switch my current software?",
          answer: "Not necessarily. We work with all major platforms (HubSpot, Salesforce, ActiveCampaign, etc.). We'll only recommend a switch if your current tools are actively holding you back."
        },
        {
          question: "Who writes the email copy?",
          answer: "We can work with your existing copy, or our expert copywriters can craft high-converting sequences for you as an add-on service."
        },
        {
          question: "What happens after the project is done?",
          answer: "We provide a training session and documentation so your team can manage the system. We also offer ongoing support packages for optimization and troubleshooting."
        }
      ]}
      
      ctaTitle="Ready to Scale Your Marketing?"
      ctaSubtitle="AI Marketing Automation Services"
      
      seoTitle="AI Marketing Automation Services | Conquermark"
      seoDescription="Expert AI marketing automation services. We build custom workflows in HubSpot, ActiveCampaign, and Salesforce to nurture leads and drive revenue."
      seoKeywords="marketing automation agency, hubspot automation, email marketing automation, lead nurturing, marketing operations"
    />
  );
}
