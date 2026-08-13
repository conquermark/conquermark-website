import ServicePage from "@/components/ServicePage";
import { PenTool } from "lucide-react";

export default function WireframingUX() {
  return (
    <ServicePage
      icon={PenTool}
      title="Wireframing & UX Design"
      subtitle="User-centered design that converts"
      description="Great products start with great design. We create intuitive, beautiful user experiences backed by research and best practices. From wireframes to high-fidelity prototypes and design systems."
      challenges={[
        {
          title: "Poor User Experience",
          description: "Confusing interfaces lead to high bounce rates and low engagement."
        },
        {
          title: "Inconsistent Design",
          description: "Without a design system, your product feels disjointed and unprofessional."
        },
        {
          title: "Low Conversion",
          description: "Beautiful designs that don't convert are wasted effort."
        },
        {
          title: "Accessibility Issues",
          description: "Excluding users with disabilities limits your market and risks legal issues."
        }
      ]}
      capabilities={[
        {
          name: "User Research",
          description: "User interviews, usability testing, and behavioral analysis."
        },
        {
          name: "Wireframing",
          description: "Low and high-fidelity wireframes to define structure and flow."
        },
        {
          name: "UI/UX Design",
          description: "Beautiful, intuitive interfaces optimized for conversion."
        },
        {
          name: "Design Systems",
          description: "Scalable component libraries and style guides."
        },
        {
          name: "Prototyping",
          description: "Interactive prototypes for testing and stakeholder buy-in."
        },
        {
          name: "Accessibility",
          description: "WCAG-compliant designs that work for everyone."
        }
      ]}
      process={[
        {
          title: "Research",
          description: "User research, competitive analysis, and requirements gathering."
        },
        {
          title: "Wireframe",
          description: "Information architecture and low-fidelity wireframes."
        },
        {
          title: "Design",
          description: "High-fidelity mockups and interactive prototypes."
        },
        {
          title: "Handoff",
          description: "Design system, assets, and developer handoff."
        }
      ]}
      pricingModels={[
        {
          name: "Fixed Price",
          description: "Defined scope with deliverables and timeline."
        },
        {
          name: "Hourly",
          description: "Flexible for ongoing design work and iterations."
        },
        {
          name: "Retainer",
          description: "Monthly design capacity for continuous improvements."
        },
        {
          name: "Project-Based",
          description: "Specific design projects like redesigns or new features."
        }
      ]}
      faqs={[
        {
          question: "Do you do user research?",
          answer: "Yes! User research is critical for good design. We conduct interviews, usability tests, and analyze user behavior to inform design decisions."
        },
        {
          question: "What tools do you use?",
          answer: "We primarily use Figma for design and prototyping. It allows for real-time collaboration and easy developer handoff."
        }
      ]}
    />
  );
}
