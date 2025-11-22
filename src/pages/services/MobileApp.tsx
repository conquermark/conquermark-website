import ServicePage from "@/components/ServicePage";
import { Smartphone } from "lucide-react";

export default function MobileApp() {
  return (
    <ServicePage
      icon={Smartphone}
      title="Mobile App Development"
      subtitle="Native and cross-platform mobile solutions"
      description="We build high-performance mobile applications for iOS and Android that users love. From concept to App Store launch, we handle the entire development lifecycle with expertise in native and cross-platform technologies."
      challenges={[
        {
          title: "Platform Fragmentation",
          description: "Building for both iOS and Android with different codebases is expensive and time-consuming."
        },
        {
          title: "Performance Issues",
          description: "Poor app performance leads to bad reviews and user churn."
        },
        {
          title: "App Store Approval",
          description: "Navigating App Store and Play Store guidelines can be complex and frustrating."
        },
        {
          title: "User Acquisition",
          description: "Getting your app discovered in crowded app stores requires strategic ASO and marketing."
        },
        {
          title: "Ongoing Maintenance",
          description: "Keeping apps updated with new OS versions and devices requires continuous effort."
        },
        {
          title: "Monetization Strategy",
          description: "Choosing the right revenue model and implementing it effectively is crucial for success."
        }
      ]}
      capabilities={[
        {
          name: "iOS Development (Swift & SwiftUI)",
          description: "Native iOS apps with the latest Apple technologies for optimal performance and user experience."
        },
        {
          name: "Android Development (Kotlin & Jetpack Compose)",
          description: "Modern Android apps using Kotlin and Google's recommended architecture components."
        },
        {
          name: "React Native",
          description: "Cross-platform development with near-native performance and code sharing between iOS and Android."
        },
        {
          name: "Flutter",
          description: "Beautiful, fast apps for mobile, web, and desktop from a single codebase."
        },
        {
          name: "App Store Optimization (ASO)",
          description: "Optimize your app listing for maximum visibility and downloads."
        },
        {
          name: "Backend & API Integration",
          description: "Robust backend systems, third-party API integrations, and cloud infrastructure."
        }
      ]}
      process={[
        {
          title: "Discovery",
          description: "Requirements gathering, user research, competitive analysis, and technical architecture planning."
        },
        {
          title: "Design",
          description: "Wireframes, UI/UX design, interactive prototypes, and design system creation."
        },
        {
          title: "Build",
          description: "Agile development with regular demos, testing, and iteration based on feedback."
        },
        {
          title: "Launch",
          description: "App Store submission, ASO, beta testing, launch marketing, and post-launch support."
        }
      ]}
      pricingModels={[
        {
          name: "Fixed Price",
          description: "Well-defined scope with a fixed budget and timeline."
        },
        {
          name: "Time & Materials",
          description: "Flexible engagement for evolving requirements and ongoing development."
        },
        {
          name: "Retainer",
          description: "Dedicated team capacity for continuous product development."
        },
        {
          name: "Equity Partnership",
          description: "We invest our expertise in exchange for equity in high-potential startups."
        }
      ]}
      faqs={[
        {
          question: "Should I build native or cross-platform?",
          answer: "It depends on your requirements, budget, and timeline. Native apps offer the best performance and access to platform-specific features, but cost more. Cross-platform (React Native, Flutter) allows code sharing and faster development. We'll help you choose the right approach based on your specific needs."
        },
        {
          question: "How long does it take to build a mobile app?",
          answer: "A simple MVP can be built in 8-12 weeks. More complex apps with custom features, integrations, and backend systems typically take 3-6 months. We provide detailed timelines during the scoping phase."
        },
        {
          question: "Do you help with App Store submission?",
          answer: "Yes! We handle the entire App Store and Play Store submission process, including preparing assets, writing descriptions, implementing ASO best practices, and responding to review feedback."
        },
        {
          question: "What happens after launch?",
          answer: "We offer ongoing support and maintenance packages to keep your app updated, fix bugs, add new features, and ensure compatibility with new OS versions and devices."
        }
      ]}
      caseStudyTitle="How we helped a startup launch their app and reach 50,000 users"
      caseStudyHref="/case-studies/app-launch"
    />
  );
}
