import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Mail, Target, BarChart3, Repeat } from "lucide-react";

export default function Marketing() {
  return (
    <AutomationPageTemplate
      heroTitle="Marketing Automation That Drives Real ROI"
      heroSubtitle="Connect your marketing tools, automate campaigns, and scale lead generation"
      heroDescription="We build custom marketing automation workflows using n8n, Zapier, and Make to help Indian businesses generate more leads, nurture prospects, and close deals faster."
      heroImage="/marketing-automation.svg"
      
      painPoints={[
        "Spending 15+ hours weekly on manual email campaigns and follow-ups",
        "Leads falling through the cracks between different marketing tools",
        "Unable to track which campaigns actually generate revenue",
        "Social media posting eating up your team's productive hours",
        "Marketing data scattered across 5+ different platforms",
        "No automated lead scoring or qualification system in place"
      ]}
      
      solutions={[
        {
          icon: <Mail className="h-12 w-12" />,
          title: "Email Campaign Automation",
          description: "Automated drip campaigns, behavioral triggers, and personalized email sequences that convert leads to customers"
        },
        {
          icon: <Target className="h-12 w-12" />,
          title: "Lead Scoring & Nurturing",
          description: "Intelligent lead scoring based on behavior, automatic segmentation, and targeted nurture campaigns"
        },
        {
          icon: <Repeat className="h-12 w-12" />,
          title: "Multi-Channel Campaigns",
          description: "Coordinate campaigns across email, SMS, WhatsApp, and social media from one automated workflow"
        },
        {
          icon: <BarChart3 className="h-12 w-12" />,
          title: "Marketing Analytics",
          description: "Real-time dashboards pulling data from all your tools - Google Ads, Facebook, email, CRM"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Discovery & Audit",
          description: "We analyze your current marketing stack, identify bottlenecks, and map out automation opportunities that will have the biggest impact on your ROI."
        },
        {
          step: 2,
          title: "Workflow Design",
          description: "Our team designs custom automation workflows tailored to your business - from lead capture to conversion, with all the triggers and conditions you need."
        },
        {
          step: 3,
          title: "Build & Test",
          description: "We build your automations using enterprise-grade tools (n8n, Zapier, Make), test thoroughly, and ensure seamless integration with your existing systems."
        },
        {
          step: 4,
          title: "Launch & Optimize",
          description: "We deploy your automations, train your team, and provide ongoing monitoring and optimization to maximize performance."
        }
      ]}
      
      useCases={[
        {
          title: "EdTech Company Scales Lead Generation 5x",
          industry: "Education Technology",
          challenge: "An online course platform was manually managing leads from Facebook ads, Google Forms, and their website. They were losing 40% of leads due to slow follow-up and had no automated nurturing system.",
          solution: "We built a complete lead automation system: Facebook Lead Ads → Auto-enrichment (Clearbit) → CRM (HubSpot) → Personalized email sequence → WhatsApp follow-up for hot leads → Sales team notification. All within 60 seconds of form submission.",
          results: [
            "Lead response time reduced from 4 hours to under 60 seconds",
            "5x increase in qualified leads entering sales pipeline",
            "$14,400 additional monthly revenue from better lead conversion",
            "Marketing team saved 25 hours/week on manual data entry"
          ]
        },
        {
          title: "B2B SaaS Automates Entire Marketing Funnel",
          industry: "B2B SaaS",
          challenge: "A project management SaaS company had disconnected tools - Webflow forms, Google Sheets, Mailchimp, and Salesforce. Marketing couldn't track which campaigns drove actual revenue.",
          solution: "Integrated full-funnel automation: Website form → Lead enrichment → Salesforce → Lead scoring → Automated email nurture (Mailchimp) → Slack alerts for hot leads → Revenue attribution dashboard (Google Sheets + Data Studio).",
          results: [
            "100% of website leads now automatically enter nurture campaigns",
            "Marketing can now track ROI for every campaign and channel",
            "40% increase in trial-to-paid conversion rate",
            "Eliminated 3 manual processes saving $10,000 annually in labor costs"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "ConquerMark transformed our marketing operations. We went from manually managing leads across 5 tools to having everything automated. Our conversion rate doubled in 3 months.",
          author: "Priya Sharma",
          role: "Head of Marketing",
          company: "LearnHub India",
          rating: 5
        },
        {
          quote: "The ROI was immediate. Within the first month, we recovered the investment through time savings alone. Now we're generating 3x more qualified leads with the same team size.",
          author: "Rajesh Kumar",
          role: "Founder & CEO",
          company: "CloudSync Solutions",
          rating: 5
        },
        {
          quote: "Finally, our marketing and sales teams are aligned. Leads flow seamlessly from campaigns to CRM, and we can actually see which marketing efforts drive revenue.",
          author: "Anita Desai",
          role: "VP Marketing",
          company: "FinTech Innovations",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Which marketing tools can you integrate?",
          answer: "We integrate with 200+ marketing tools including HubSpot, Salesforce, Mailchimp, ActiveCampaign, Google Ads, Facebook Ads, LinkedIn, WhatsApp Business API, Razorpay, Zoho, Freshsales, and more. If you use it for marketing, we can likely automate it."
        },
        {
          question: "How long does implementation take?",
          answer: "Most marketing automation projects take 2-4 weeks from kickoff to launch. Simple integrations (like form-to-CRM) can be done in 3-5 days. Complex multi-tool workflows with custom logic take 3-6 weeks. We provide a detailed timeline after the discovery call."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes! Every project includes comprehensive training for your team. We provide video tutorials, documentation, and live training sessions. We also offer ongoing support packages if you need help managing or expanding your automations."
        },
        {
          question: "What if our marketing tools change in the future?",
          answer: "We build flexible automations that can be easily modified. If you switch tools (e.g., from Mailchimp to ActiveCampaign), we can update the integration. Our support plans include tool migration assistance."
        },
        {
          question: "Can you automate WhatsApp marketing campaigns?",
          answer: "Absolutely! We integrate with WhatsApp Business API to automate campaigns, follow-ups, and notifications. This is especially powerful for Indian businesses where WhatsApp is the primary communication channel."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$300",
          period: "one-time",
          features: [
            "Up to 3 tool integrations",
            "5 automated workflows",
            "Basic lead capture & CRM sync",
            "Email automation setup",
            "1 month support",
            "Documentation & training"
          ]
        },
        {
          name: "Growth",
          price: "$720",
          period: "one-time",
          popular: true,
          features: [
            "Up to 8 tool integrations",
            "15 automated workflows",
            "Advanced lead scoring & nurturing",
            "Multi-channel campaign automation",
            "WhatsApp integration",
            "Custom dashboards & reporting",
            "3 months support",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Unlimited tool integrations",
            "Unlimited workflows",
            "Full marketing automation suite",
            "AI-powered personalization",
            "Dedicated automation engineer",
            "6 months support",
            "24/7 priority support",
            "Monthly optimization reviews"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Sales & CRM Automation", href: "/automation/sales" },
        { name: "Lead Capture Automation", href: "/automation/lead-capture" },
        { name: "WhatsApp Automation", href: "/automation/chatbot-whatsapp" },
        { name: "Reporting & Dashboards", href: "/automation/reporting" }
      ]}
    />
  );
}
