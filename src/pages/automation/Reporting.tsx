import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { BarChart3, TrendingUp, Database, Zap } from "lucide-react";

export default function Reporting() {
  return (
    <AutomationPageTemplate
      heroTitle="Reporting & Dashboards Automation"
      heroSubtitle="Automated data collection, analysis, and real-time dashboards"
      heroDescription="We build automated reporting systems that pull data from all your tools, generate insights, and deliver real-time dashboards without manual data entry."
      
      painPoints={[
        "Spending 10+ hours weekly manually compiling reports",
        "Data scattered across 10+ different tools and platforms",
        "Reports are outdated by the time they're finished",
        "No real-time visibility into key business metrics",
        "Manual data entry errors causing inaccurate reporting",
        "Executive team making decisions based on week-old data"
      ]}
      
      solutions={[
        {
          icon: <Database className="h-12 w-12" />,
          title: "Automated Data Collection",
          description: "Automatically pull data from all your tools - CRM, analytics, ads, finance - into centralized dashboards"
        },
        {
          icon: <BarChart3 className="h-12 w-12" />,
          title: "Real-Time Dashboards",
          description: "Live dashboards that update automatically with your latest data - no manual refreshing needed"
        },
        {
          icon: <TrendingUp className="h-12 w-12" />,
          title: "Scheduled Reports",
          description: "Automated daily, weekly, or monthly reports delivered to your inbox or Slack"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Custom Metrics & KPIs",
          description: "Track any metric across any tool with custom calculations and business logic"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Data Audit",
          description: "We identify all your data sources, key metrics, and reporting requirements across departments."
        },
        {
          step: 2,
          title: "Dashboard Design",
          description: "Design custom dashboards tailored to different stakeholders - executives, sales, marketing, operations."
        },
        {
          step: 3,
          title: "Integration & Build",
          description: "Connect all data sources, build automated data pipelines, and create real-time dashboards."
        },
        {
          step: 4,
          title: "Deploy & Optimize",
          description: "Launch dashboards, train your team, and continuously optimize based on usage and feedback."
        }
      ]}
      
      useCases={[
        {
          title: "Marketing Agency Automates Client Reporting",
          industry: "Marketing Agency",
          challenge: "A digital marketing agency was spending 40 hours monthly creating client reports manually - pulling data from Google Ads, Facebook Ads, Google Analytics, and CRM. Reports were delivered 5-7 days after month-end.",
          solution: "Built automated reporting system: All ad platforms + Analytics + CRM → Automated data sync → Custom calculations (ROI, CAC, LTV) → Client-specific dashboards → Automated PDF reports → Email delivery on day 1 of new month.",
          results: [
            "Report creation time reduced from 40 hours to zero",
            "Clients now have real-time access to campaign performance",
            "Reports delivered on day 1 instead of day 7",
            "Agency saved $4,000 monthly in labor costs"
          ]
        },
        {
          title: "SaaS Company Builds Executive Dashboard",
          industry: "B2B SaaS",
          challenge: "A SaaS company's executive team had no real-time visibility into key metrics. Finance manually compiled monthly reports from Stripe, Salesforce, and Google Analytics, taking 2 weeks.",
          solution: "Created real-time executive dashboard: Stripe (MRR, churn) + Salesforce (pipeline, deals) + Analytics (usage, activation) + Support (tickets, CSAT) → Automated calculations → Live dashboard → Slack alerts for key changes → Weekly automated reports.",
          results: [
            "Executive team now has real-time visibility into all key metrics",
            "Monthly reporting time reduced from 2 weeks to zero",
            "Faster decision-making based on current data",
            "Identified $50,000 churn issue within 24 hours instead of 30 days"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "We went from spending 40 hours monthly on client reports to zero. Everything is automated, real-time, and our clients love having instant access to their data.",
          author: "Mark Stevens",
          role: "Agency Owner",
          company: "Digital Growth Partners",
          rating: 5
        },
        {
          quote: "The executive dashboard gave us real-time visibility we never had. We caught a major churn issue in 24 hours instead of finding out 30 days later in the monthly report.",
          author: "Lisa Wang",
          role: "CFO",
          company: "CloudMetrics SaaS",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "Which data sources can you connect?",
          answer: "We connect to 200+ data sources including Google Analytics, Google Ads, Facebook Ads, Salesforce, HubSpot, Stripe, QuickBooks, Shopify, databases (MySQL, PostgreSQL), and custom APIs."
        },
        {
          question: "What dashboard platforms do you use?",
          answer: "We build dashboards using Google Data Studio, Tableau, Power BI, Metabase, or custom solutions depending on your needs and existing tech stack."
        },
        {
          question: "Can you automate report delivery?",
          answer: "Yes! We can automatically generate and deliver reports via email, Slack, or other channels on any schedule (daily, weekly, monthly, or custom)."
        },
        {
          question: "How do you handle custom calculations?",
          answer: "We build custom metrics and KPIs using your business logic - whether it's CAC, LTV, ROI, or proprietary formulas specific to your business."
        },
        {
          question: "What if our data sources change?",
          answer: "We build flexible systems that can easily accommodate new data sources. Our support packages include adding new integrations as your stack evolves."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$450",
          period: "one-time",
          features: [
            "Up to 5 data source integrations",
            "1 automated dashboard",
            "Basic scheduled reports",
            "Standard metrics & KPIs",
            "1 month support",
            "Training included"
          ]
        },
        {
          name: "Professional",
          price: "$1,100",
          period: "one-time",
          popular: true,
          features: [
            "Unlimited data sources",
            "3 custom dashboards",
            "Advanced scheduled reports",
            "Custom metrics & calculations",
            "Real-time alerts",
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
            "Unlimited dashboards",
            "Custom data warehouse",
            "Advanced analytics",
            "Dedicated BI engineer",
            "6 months support",
            "24/7 support"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Marketing Automation", href: "/automation/marketing" },
        { name: "Sales & CRM Automation", href: "/automation/sales" },
        { name: "Internal Workflows", href: "/automation/internal-workflows" },
        { name: "Slack/Email Notifications", href: "/automation/notifications" }
      ]}
    />
  );
}
