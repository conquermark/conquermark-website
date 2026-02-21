import ServicePage from "@/components/ServicePage";
import { Zap } from "lucide-react";

export default function NoCode() {
  return (
    <ServicePage
      icon={Zap}
      title="No-Code Development"
      subtitle="Rapid MVP development without traditional coding"
      description="Build and launch your product fast with no-code platforms. Perfect for MVPs, internal tools, and rapid prototyping. Get to market in weeks, not months, without compromising on functionality or user experience."
      challenges={[
        {
          title: "Time to Market",
          description: "Traditional development takes too long - you need to validate your idea quickly."
        },
        {
          title: "Limited Budget",
          description: "Custom development is expensive, especially for early-stage startups."
        },
        {
          title: "Uncertainty",
          description: "You're not sure if your idea will work - you need to test before investing heavily."
        },
        {
          title: "Technical Complexity",
          description: "You have a great idea but lack technical co-founders or development resources."
        }
      ]}
      capabilities={[
        {
          name: "Bubble Development",
          description: "Full-stack web applications with complex workflows, databases, and user authentication."
        },
        {
          name: "Webflow",
          description: "Beautiful, responsive websites with CMS capabilities and custom interactions."
        },
        {
          name: "Airtable & Databases",
          description: "Custom databases, workflows, and interfaces for internal tools and operations."
        },
        {
          name: "Zapier & Make Integration",
          description: "Connect your tools and automate workflows without code."
        },
        {
          name: "API Integrations",
          description: "Connect no-code platforms with third-party services and custom APIs."
        },
        {
          name: "Migration Planning",
          description: "Strategy for transitioning from no-code to custom development when needed."
        }
      ]}
      process={[
        {
          title: "Scope",
          description: "Define core features, user flows, and technical requirements for your MVP."
        },
        {
          title: "Design",
          description: "Create wireframes and visual designs optimized for the chosen platform."
        },
        {
          title: "Build",
          description: "Rapid development with weekly demos and iteration based on feedback."
        },
        {
          title: "Launch",
          description: "Deploy, test, gather user feedback, and iterate quickly."
        }
      ]}
      pricingModels={[
        {
          name: "Fixed Price MVP",
          description: "Build and launch your MVP with a defined scope and timeline."
        },
        {
          name: "Sprint-Based",
          description: "2-week sprints for iterative development and rapid testing."
        },
        {
          name: "Retainer",
          description: "Ongoing development and optimization after launch."
        },
        {
          name: "Equity Partnership",
          description: "We build your MVP in exchange for equity in promising startups."
        }
      ]}
      faqs={[
        {
          question: "What are the limitations of no-code?",
          answer: "No-code platforms are powerful but have limitations for very complex logic, high-scale applications, or highly custom features. They're perfect for MVPs, internal tools, and many SaaS products. We'll assess if no-code is right for your specific use case."
        },
        {
          question: "Can I migrate to custom code later?",
          answer: "Yes! Many successful companies start with no-code and migrate later. We help you build with migration in mind, documenting logic and workflows to make the transition smooth when you're ready to scale."
        },
        {
          question: "How fast can you build an MVP?",
          answer: "Most no-code MVPs can be built in 4-8 weeks, depending on complexity. Simple prototypes can be ready in 2-3 weeks. This is 3-5x faster than traditional development."
        },
        {
          question: "Will I own the platform and data?",
          answer: "Yes! You'll have full ownership and admin access to your no-code platform account and all data. We build it for you, but you own it completely."
        }
      ]}
    />
  );
}
