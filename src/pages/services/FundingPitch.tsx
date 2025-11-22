import ServicePage from "@/components/ServicePage";
import { DollarSign } from "lucide-react";

export default function FundingPitch() {
  return (
    <ServicePage
      icon={DollarSign}
      title="Funding & Pitch Preparation"
      subtitle="Prepare for fundraising success"
      description="Raise capital with confidence. We help you craft compelling pitch decks, build financial models, and prepare for investor meetings. From pre-seed to Series A and beyond."
      challenges={[
        {
          title: "Weak Pitch Deck",
          description: "Generic or unclear pitch decks fail to capture investor attention."
        },
        {
          title: "Unrealistic Financials",
          description: "Poor financial modeling undermines credibility with investors."
        },
        {
          title: "No Investor Network",
          description: "Finding the right investors is as important as having a great pitch."
        },
        {
          title: "Poor Demo",
          description: "Technical issues or unclear demos kill investor interest."
        }
      ]}
      capabilities={[
        {
          name: "Pitch Deck Design",
          description: "Compelling, investor-ready pitch decks that tell your story."
        },
        {
          name: "Financial Modeling",
          description: "3-5 year projections, unit economics, and scenario planning."
        },
        {
          name: "Investor Research",
          description: "Identify and prioritize the right investors for your stage and sector."
        },
        {
          name: "Demo Preparation",
          description: "Ensure your product demo is polished and impactful."
        },
        {
          name: "Pitch Coaching",
          description: "Practice sessions and feedback to refine your delivery."
        },
        {
          name: "Data Room Setup",
          description: "Organize documents and materials for due diligence."
        }
      ]}
      process={[
        {
          title: "Assess",
          description: "Review your story, traction, and fundraising goals."
        },
        {
          title: "Prepare",
          description: "Build pitch deck, financial model, and investor list."
        },
        {
          title: "Practice",
          description: "Pitch coaching and demo refinement."
        },
        {
          title: "Execute",
          description: "Outreach, meetings, and deal negotiation support."
        }
      ]}
      pricingModels={[
        {
          name: "Fixed Package",
          description: "Pitch deck, financial model, and investor research."
        },
        {
          name: "Hourly Consulting",
          description: "Flexible support for specific needs."
        },
        {
          name: "Success Fee",
          description: "Fee based on successful fundraising outcome."
        },
        {
          name: "Comprehensive",
          description: "End-to-end fundraising support from prep to close."
        }
      ]}
      faqs={[
        {
          question: "Do you connect us with investors?",
          answer: "We help you research and prioritize investors, and can make warm introductions where we have relationships. However, we're not a placement agent or broker-dealer."
        },
        {
          question: "How long does fundraising take?",
          answer: "Preparation takes 2-4 weeks. The fundraising process itself typically takes 3-6 months from first meetings to closed deals, depending on stage and market conditions."
        }
      ]}
    />
  );
}
