import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { BarChart3, TrendingUp, Database, Zap } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Reporting() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.GoogleSheets, ToolLogos.Airtable, ToolLogos.HubSpot, ToolLogos.Salesforce, ToolLogos.Stripe, ToolLogos.QuickBooks]}
      title="Automated Reporting & Dashboards"
      subtitle="Real-time insights without the manual data crunching. Make data-driven decisions."
      description="We build automated reporting pipelines that pull data from all your tools into a central dashboard (Looker, PowerBI, or Sheets)."
      heroImage="/reporting-dashboard.jpg"
      workflowImage="/reporting-workflow.png"
      features={[
        "Spending 10+ hours weekly manually compiling reports",
        "Data scattered across 10+ different tools and platforms",
        "Reports are outdated by the time they're finished",
        "No real-time visibility into key business metrics",
        "Manual data entry errors causing inaccurate reporting",
        "Executive team making decisions based on week-old data"
      ]}
      benefits={[
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
      tools={["Tableau", "Power BI", "Google Data Studio", "Metabase", "Looker", "Qlik Sense", "Microsoft Excel", "Google Sheets", "SQL Databases", "NoSQL Databases", "APIs", "HubSpot", "Salesforce", "Google Analytics", "Facebook Ads", "Stripe", "Shopify"]}
      process={[
        { step: 1, title: "Discovery", description: "Understand your current reporting challenges, existing data sources, and desired outcomes." },
        { step: 2, title: "Setup", description: "Configure data connectors, establish secure data pipelines, and integrate with your existing systems." },
        { step: 3, title: "Build", description: "Develop custom dashboards, reporting logic, and data visualizations tailored to your specific KPIs." },
        { step: 4, title: "Launch", description: "Deploy the automated reporting system, provide comprehensive training, and ensure seamless operation." }
      ]}
      useCases={[
        {
          title: "E-commerce Sales Performance",
          industry: "E-commerce",
          challenge: "Manual aggregation of sales data from Shopify, Stripe, and Google Analytics led to delayed insights and missed opportunities.",
          solution: "Implemented an automated reporting system that consolidated data into a real-time dashboard, providing instant visibility into sales trends, product performance, and customer behavior.",
          results: ["Increased revenue by 15% through faster identification of top-performing products and marketing campaigns", "Saved 10 hours/week on manual data compilation"]
        },
        {
          title: "Marketing Campaign ROI",
          industry: "Digital Marketing",
          challenge: "Difficulty in accurately measuring the ROI of various marketing campaigns due to fragmented data across Facebook Ads, Google Ads, and CRM.",
          solution: "Developed an automated dashboard that unified campaign spend, lead generation, and conversion data, allowing for real-time ROI tracking and optimization.",
          results: ["Improved marketing campaign efficiency by 25% by quickly reallocating budget to high-performing channels", "Reduced reporting time by 8 hours/week"]
        }
      ]}
      testimonials={[
        { quote: "Conquermark transformed our reporting process. We now have real-time insights that were previously impossible to get, saving us countless hours and enabling quicker, data-driven decisions.", author: "Sarah Chen", role: "Head of Analytics", company: "Tech Solutions Inc.", rating: 5 },
        { quote: "The automated dashboards built by Conquermark are a game-changer. We no longer spend days compiling reports; everything is at our fingertips, always up-to-date. Highly recommend!", author: "David Lee", role: "Operations Manager", company: "Global Retail Co.", rating: 5 },
        { quote: "Our executive team is thrilled with the new reporting system. The clarity and speed of data have significantly improved our strategic planning and operational efficiency.", author: "Emily White", role: "CEO", company: "Innovate Marketing Group", rating: 4 }
      ]}
      pricingPlans={[
        { name: "Starter", price: "$1,500", period: "one-time setup", features: ["Basic data integration (up to 3 sources)", "1 custom dashboard", "Weekly automated reports", "Email support"] },
        { name: "Professional", price: "$3,500", period: "one-time setup", features: ["Advanced data integration (up to 10 sources)", "3 custom dashboards", "Daily automated reports", "Real-time alerts", "Priority email & chat support"], popular: true },
        { name: "Enterprise", price: "Custom", period: "per project", features: ["Unlimited data sources & custom integrations", "Unlimited custom dashboards", "Real-time dashboards & alerts", "Dedicated account manager", "24/7 premium support"]
        }
      ]}
      faqs={[
        { question: "What kind of data sources can you integrate?", answer: "We can integrate with a wide range of data sources including CRMs (e.g., HubSpot, Salesforce), marketing platforms (e.g., Google Ads, Facebook Ads), e-commerce platforms (e.g., Shopify, WooCommerce), databases (SQL, NoSQL), and various APIs." },
        { question: "How long does it take to set up an automated reporting system?", answer: "The timeline varies depending on the complexity and number of data sources. Typically, a basic setup can be completed within 2-4 weeks, while more complex systems may take 4-8 weeks." },
        { question: "Can I get real-time data in my dashboards?", answer: "Yes, our systems are designed to provide near real-time data updates, ensuring your dashboards always reflect the most current information available from your integrated sources." },
        { question: "What if my data sources change or I add new ones?", answer: "Our solutions are built to be flexible. We can easily adapt and integrate new data sources or modify existing connections as your business needs evolve." },
        { question: "Do you provide training on how to use the dashboards?", answer: "Absolutely. We provide comprehensive training sessions for your team to ensure they are comfortable and proficient in navigating and utilizing the new automated dashboards and reports." }
      ]}
      ctaTitle="Ready to Automate Your Reporting & Dashboards?"
      ctaSubtitle="Automated Reporting & Dashboards"
      seoTitle="Automated Reporting & Dashboards | Conquermark"
      seoDescription="Automate your business reporting. We build custom dashboards in Looker Studio, PowerBI, and Tableau connected to your live data."
      seoKeywords="automated reporting, business intelligence dashboards, data visualization services, looker studio automation, powerbi integration"
    />
  );
}
