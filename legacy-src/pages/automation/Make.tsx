import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { Workflow, GitBranch, Zap, Database } from "lucide-react";

export default function Make() {
  return (
    <AutomationPageTemplate
      heroTitle="Make (Integromat) Automation Services"
      heroSubtitle="Visual automation platform for complex workflows"
      heroDescription="We specialize in Make (formerly Integromat) to build sophisticated visual automation workflows with advanced logic, data transformation, error handling, and real-time processing for businesses that need more than basic automation."
      heroImage="/make-automation.svg"
      
      painPoints={[
        "Need more advanced automation capabilities than Zapier offers",
        "Complex data transformations and manipulations required",
        "Multiple conditional branches and logic paths needed in workflows",
        "Want visual workflow builder to understand automation logic",
        "Need better error handling and debugging capabilities",
        "Require real-time data processing and webhooks"
      ]}
      
      solutions={[
        {
          icon: <Workflow className="h-12 w-12" />,
          title: "Visual Workflows",
          description: "Build complex automations with intuitive drag-and-drop visual interface that makes even sophisticated logic easy to understand and maintain"
        },
        {
          icon: <GitBranch className="h-12 w-12" />,
          title: "Advanced Logic",
          description: "Implement complex conditional logic, loops, iterators, aggregators, and parallel processing paths"
        },
        {
          icon: <Database className="h-12 w-12" />,
          title: "Data Transformation",
          description: "Powerful built-in tools for data manipulation, JSON parsing, array operations, and custom functions"
        },
        {
          icon: <Zap className="h-12 w-12" />,
          title: "Real-Time Processing",
          description: "Instant webhook triggers, real-time data sync, and sub-second automation execution"
        }
      ]}
      
      process={[
        {
          step: 1,
          title: "Discovery & Planning",
          description: "We analyze your current processes, identify automation opportunities, and design the optimal solution architecture."
        },
        {
          step: 2,
          title: "Integration & Setup",
          description: "Connect all necessary tools and platforms, configure authentication, and set up the automation infrastructure."
        },
        {
          step: 3,
          title: "Build & Test",
          description: "Build automation workflows with all logic and conditions, test thoroughly with real data, and ensure everything works perfectly."
        },
        {
          step: 4,
          title: "Deploy & Optimize",
          description: "Launch automation to production, train your team, monitor performance, and continuously optimize for better results."
        }
      ]}
      
      useCases={[
        {
          title: "E-commerce Brand Automates Order Processing",
          industry: "E-commerce",
          challenge: "A growing e-commerce company needed complex order processing automation with inventory checks across 3 warehouses, multi-warehouse routing based on location and stock levels, custom shipping logic, and integration with their custom ERP system. Zapier couldn't handle the complexity.",
          solution: "Built sophisticated Make automation: Order placed (Shopify) → Check inventory across 3 warehouses (custom API) → Calculate shipping costs from each location → Route to nearest warehouse with stock → Create shipping label (ShipStation) → Update inventory in all systems → Send confirmation email with tracking → Notify fulfillment team on Slack → Update analytics dashboard.",
          results: [
            "Order processing fully automated - zero manual intervention",
            "Multi-warehouse routing working perfectly with 99.9% accuracy",
            "Processing time reduced from 30 minutes to under 2 minutes",
            "Eliminated order routing errors saving $15,000 annually"
          ]
        }
      ]}
      
      testimonials={[
        {
          quote: "Make gave us the advanced automation capabilities we desperately needed. The visual interface makes our complex workflows easy to understand and maintain. We couldn't have scaled to 1000+ daily orders without it.",
          author: "Tom Rodriguez",
          role: "Operations Director",
          company: "StyleHub E-commerce",
          rating: 5
        }
      ]}
      
      faqs={[
        {
          question: "What's the difference between Make and Zapier?",
          answer: "Make offers more advanced features: visual workflow builder, better data transformation tools, more complex logic handling, and real-time processing. It's ideal for sophisticated automation scenarios. Think of Zapier as easier for simple automations, Make for complex ones."
        },
        {
          question: "Is Make more expensive than Zapier?",
          answer: "Make pricing is based on operations (similar to Zapier's tasks). For complex workflows, Make is often more cost-effective because one Make scenario can replace multiple Zaps. Plans start at $9/month for 10,000 operations."
        },
        {
          question: "Can you migrate our existing Zapier automations to Make?",
          answer: "Yes! We regularly migrate automations from Zapier to Make when clients need more advanced capabilities. We analyze your current Zaps, redesign them in Make with enhanced logic, and ensure seamless transition."
        },
        {
          question: "Do you provide training on Make?",
          answer: "Absolutely. We provide comprehensive training for your team including how to use the visual editor, understand workflow logic, troubleshoot issues, and make simple modifications themselves."
        }
      ]}
      
      pricingPlans={[
        {
          name: "Starter",
          price: "$400",
          period: "one-time",
          features: [
            "Basic automation setup",
            "Up to 3 integrations",
            "Standard workflows",
            "1 month support",
            "Training included",
            "Documentation provided"
          ]
        },
        {
          name: "Professional",
          price: "$950",
          period: "one-time",
          popular: true,
          features: [
            "Advanced automation",
            "Unlimited integrations",
            "Complex workflows with logic",
            "Custom conditions & filters",
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
            "Dedicated automation engineer",
            "Custom development",
            "Advanced error handling",
            "6 months support",
            "24/7 priority support",
            "Monthly strategy reviews"
          ]
        }
      ]}
      
      relatedServices={[
        { name: "Zapier Automation", href: "/automation/zapier" },
        { name: "n8n Services", href: "/automation/n8n" },
        { name: "Custom API", href: "/automation/custom-api" }
      ]}
    />
  );
}
