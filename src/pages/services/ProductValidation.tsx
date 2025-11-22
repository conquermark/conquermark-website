import ServicePage from "@/components/ServicePage";
import { Target } from "lucide-react";

export default function ProductValidation() {
  return (
    <ServicePage
      icon={Target}
      title="Product Validation & Go-to-Market"
      subtitle="Validate your idea before building"
      description="Don't waste time and money building something nobody wants. We help you validate product-market fit through customer research, landing page tests, and strategic go-to-market planning."
      challenges={[
        {
          title: "Unvalidated Assumptions",
          description: "Building based on assumptions instead of customer insights leads to failure."
        },
        {
          title: "Wasted Resources",
          description: "Investing in development before validation is risky and expensive."
        },
        {
          title: "Unclear Target Market",
          description: "Without a clear ICP, marketing and sales efforts are inefficient."
        },
        {
          title: "No GTM Strategy",
          description: "Building a great product isn't enough - you need a plan to reach customers."
        }
      ]}
      capabilities={[
        {
          name: "Customer Discovery Interviews",
          description: "In-depth interviews to understand pain points, needs, and willingness to pay."
        },
        {
          name: "Landing Page Tests",
          description: "Validate demand with landing pages and paid traffic before building."
        },
        {
          name: "Market Research",
          description: "Competitive analysis, market sizing, and opportunity assessment."
        },
        {
          name: "Go-to-Market Strategy",
          description: "Channel strategy, positioning, messaging, and launch planning."
        }
      ]}
      process={[
        {
          title: "Research",
          description: "Customer interviews, surveys, and market analysis."
        },
        {
          title: "Test",
          description: "Landing pages, prototypes, and demand validation."
        },
        {
          title: "Strategize",
          description: "GTM plan, positioning, and channel strategy."
        },
        {
          title: "Execute",
          description: "Launch plan, early customer acquisition, and iteration."
        }
      ]}
      pricingModels={[
        {
          name: "Validation Sprint",
          description: "2-4 week intensive validation with clear go/no-go decision."
        },
        {
          name: "GTM Package",
          description: "Comprehensive go-to-market strategy and launch support."
        },
        {
          name: "Ongoing Advisory",
          description: "Monthly advisory for product and growth strategy."
        },
        {
          name: "Equity Partnership",
          description: "We validate and launch in exchange for equity."
        }
      ]}
      faqs={[
        {
          question: "How long does validation take?",
          answer: "A focused validation sprint takes 2-4 weeks. This includes customer interviews, landing page tests, and a clear recommendation on whether to proceed."
        },
        {
          question: "What if my idea doesn't validate?",
          answer: "That's valuable learning! We'll help you pivot based on customer insights or recommend not proceeding, saving you months and significant investment."
        }
      ]}
    />
  );
}
