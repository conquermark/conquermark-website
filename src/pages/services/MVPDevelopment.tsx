import ServicePage from "@/components/ServicePage";
import { Rocket } from "lucide-react";

export default function MVPDevelopment() {
  return (
    <ServicePage
      icon={Rocket}
      title="MVP Development"
      subtitle="Build your minimum viable product fast"
      description="Get to market quickly with a focused MVP that validates your core value proposition. We help you identify essential features, build rapidly, and iterate based on real user feedback."
      challenges={[
        {
          title: "Feature Creep",
          description: "Trying to build too much delays launch and wastes resources."
        },
        {
          title: "Time to Market",
          description: "Slow development means competitors beat you to market."
        },
        {
          title: "Limited Budget",
          description: "Early-stage startups need to be capital efficient."
        },
        {
          title: "Technical Uncertainty",
          description: "Choosing the right tech stack and architecture is critical."
        }
      ]}
      capabilities={[
        {
          name: "MVP Scoping",
          description: "Identify core features that deliver value and validate assumptions."
        },
        {
          name: "Rapid Prototyping",
          description: "Quick iterations to test ideas before full development."
        },
        {
          name: "Agile Development",
          description: "2-week sprints with regular demos and feedback."
        },
        {
          name: "User Testing",
          description: "Get real user feedback early and often."
        },
        {
          name: "Scalable Architecture",
          description: "Build for today but plan for tomorrow's growth."
        },
        {
          name: "Launch Support",
          description: "Deployment, monitoring, and post-launch optimization."
        }
      ]}
      process={[
        {
          title: "Scope",
          description: "Define core features and success metrics."
        },
        {
          title: "Build",
          description: "Rapid development with weekly demos."
        },
        {
          title: "Test",
          description: "User testing and iteration based on feedback."
        },
        {
          title: "Launch",
          description: "Deploy, monitor, and optimize based on data."
        }
      ]}
      pricingModels={[
        {
          name: "Fixed Price MVP",
          description: "Defined scope and timeline for initial launch."
        },
        {
          name: "Sprint-Based",
          description: "2-week sprints for iterative development."
        },
        {
          name: "Equity Partnership",
          description: "We build your MVP for equity in promising startups."
        },
        {
          name: "Hybrid",
          description: "Reduced cash fee plus equity for aligned incentives."
        }
      ]}
      faqs={[
        {
          question: "How is MVP different from full product development?",
          answer: "An MVP focuses on core features that validate your key assumptions. It's intentionally limited to get to market fast and learn from real users before investing in full development."
        },
        {
          question: "How long does MVP development take?",
          answer: "Most MVPs can be built in 8-12 weeks. We focus on speed and learning, not perfection."
        }
      ]}
    />
  );
}
