import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Code, Webhook, Link, Shield } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function CustomApi() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Stripe, ToolLogos.OpenAI, ToolLogos.Slack, ToolLogos.GoogleSheets, ToolLogos.Airtable, ToolLogos.Notion]}
      title="Custom API Integration Services"
      subtitle="Connect the unconnected. We build custom bridges for any software."
      description="When off-the-shelf tools fail, we write custom code. We build secure, scalable API integrations to connect your proprietary systems."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/pgfRelRhwDrwzMZY.jpg"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/lfAvsMZPAdIAlDoP.png"
      
      benefits={[
        {
          icon: <Code className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <Webhook className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Link className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <Shield className="h-12 w-12" />,
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

      tools={[
        "Postman",
        "Zapier",
        "Make (formerly Integromat)",
        "AWS Lambda",
        "Azure Functions",
        "Google Cloud Functions"
      ]}

      ctaTitle="Ready to Automate Your Custom API & Webhook Integrations?"
      ctaSubtitle="Custom API Integration Services"
      seoTitle="Custom API Integration Services | Conquermark"
      seoDescription="Expert custom API integration services. We connect proprietary systems and build custom middleware for seamless data flow."
      seoKeywords="custom api integration, api development, middleware solutions, system integration, custom software development"

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
          title: "Business Automates Key Processes",
          industry: "Technology",
          challenge: "Manual processes were consuming 40+ hours weekly across the team. Data entry errors were causing customer service issues and the team couldn't scale operations.",
          solution: "We built comprehensive automation workflows connecting all their business systems. Automated data entry, notifications, reporting, and customer communications.",
          results: [
            "Reduced manual work by 35 hours weekly",
            "Eliminated 95% of data entry errors",
            "Team productivity increased 40%",
            "Able to scale 3x without additional headcount",
            "ROI achieved within first 2 months"
          ]
        },
        {
          title: "E-commerce Platform Enhances Customer Experience",
          industry: "E-commerce",
          challenge: "Our client struggled with manual order processing, inventory updates, and customer communication across multiple platforms, leading to delays and customer dissatisfaction.",
          solution: "We implemented an API-driven automation solution that synchronized order data, updated inventory in real-time, and automated personalized customer notifications.",
          results: [
            "Reduced order processing time by 70%",
            "Improved inventory accuracy by 99%",
            "Increased customer satisfaction scores by 25%",
            "Enabled seamless scaling during peak seasons"
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
          quote: "Conquermark's custom API automation solution streamlined our data flow between critical systems, saving us countless hours and significantly reducing manual errors. Their team was professional and delivered beyond our expectations.",
          author: "David Lee",
          role: "CTO",
          company: "Global Innovations Inc.",
          rating: 5
        },
        {
          quote: "We needed a robust solution to connect our legacy CRM with a modern marketing platform. Conquermark delivered a seamless integration that has boosted our marketing efficiency and data accuracy. Highly recommend!",
          author: "Maria Garcia",
          role: "Marketing Manager",
          company: "Creative Brands Co.",
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
          question: "What is the typical ROI for custom API automation?",
          answer: "The ROI varies based on the complexity and scope of the automation, but clients typically see a return within 2-6 months through reduced manual labor, improved data accuracy, and increased operational efficiency. We can help you calculate potential ROI during our discovery call."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$800",
          period: "one-time",
          features: [
            "Basic automation setup",
            "Up to 3 integrations",
            "Standard workflows",
            "1 month support",
            "Training included",
            "Documentation"
          ]
        },
        {
          name: "Professional",
          price: "$1800",
          period: "one-time",
          popular: true,
          features: [
            "Advanced automation",
            "Unlimited integrations",
            "Complex workflows",
            "Custom logic & conditions",
            "3 months support",
            "Priority support",
            "Ongoing optimization"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "quote",
          features: [
            "Everything in Professional",
            "Dedicated engineer",
            "Custom development",
            "Advanced error handling",
            "6 months support",
            "24/7 priority support",
            "Monthly reviews"
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