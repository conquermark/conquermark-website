import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getRelatedServices } from "@/data/digitalMarketingServices";
import { pricingStrategies, urgencyText, trustMetrics } from "@/data/affordablePricing";
import {
  Brain,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Clock,
  Users,
  CheckCircle,
  BarChart,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function Consulting() {
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle="Strategic AI Consulting for Business Transformation"
      heroSubtitle="Get expert guidance on AI adoption, implementation strategy, and ROI optimization from our team of AI specialists"
      heroStats={[
        { label: "Client Retention Rate", value: "94%", color: "blue-600" },
        { label: "Average ROI Increase", value: "287%", color: "green-600" },
        { label: "Projects Delivered", value: "500+", color: "purple-600" },
        { label: "Client Satisfaction", value: "4.9/5", color: "orange-600" },
      ]}
      heroTestimonial={{
        quote: "Working with Conquermark transformed our business. Their expertise and dedication delivered results beyond our expectations.",
        author: "Sarah Johnson",
        company: "TechCorp Inc."
      }}
      
      // What's Included Section
      includedTitle="What's Included in Our AI Consulting Services"
      includedFeatures={[
        {
          icon: <Brain className="h-6 w-6" />,
          title: "Strategic Planning",
          description: "Comprehensive strategy development tailored to your business goals and market position"
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Implementation & Execution",
          description: "Expert execution of campaigns with continuous monitoring and optimization"
        },
        {
          icon: <BarChart className="h-6 w-6" />,
          title: "Performance Analytics",
          description: "Detailed reporting and insights to track ROI and inform decision-making"
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Dedicated Account Manager",
          description: "Your personal point of contact for seamless communication and support"
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Rapid Deployment",
          description: "Quick setup and launch to start seeing results faster"
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Quality Assurance",
          description: "Rigorous testing and quality control to ensure optimal performance"
        },
      ]}
      
      // Platform Section
      platformTitle="Powered by Our Proprietary Technology"
      platformDescription="Access cutting-edge tools and platforms that give you a competitive advantage"
      platformFeatures={[
        {
          stat: "+150%",
          title: "Performance Boost",
          description: "Average improvement in key metrics"
        },
        {
          stat: "24/7",
          title: "Monitoring",
          description: "Continuous tracking and optimization"
        },
        {
          stat: "100%",
          title: "Transparency",
          description: "Full visibility into campaigns and results"
        },
        {
          stat: "$2M+",
          title: "Platform Value",
          description: "Built-in technology stack included"
        },
      ]}
      
      // Pricing Section
      pricingStarting="$5,000/month"
      pricingIncludes={[
        "Comprehensive strategy development and planning",
        "Dedicated account manager and expert team",
        "Monthly performance reporting and analytics",
        "Continuous optimization and A/B testing",
        "Access to proprietary tools and platforms",
        "Priority support and consultation",
        "Regular strategy reviews and updates",
        "Competitor analysis and market insights"
      ]}
      
      // Benefits Section
      benefitsTitle="Why Choose Conquermark for AI Consulting"
      benefits={[
        {
          icon: <Rocket className="h-6 w-6" />,
          title: "Accelerate Growth",
          description: "Drive faster revenue growth with proven strategies that deliver measurable results"
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Precision Targeting",
          description: "Reach your ideal customers with data-driven targeting and personalization"
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "Maximize ROI",
          description: "Get more value from every dollar spent with optimized campaigns and strategies"
        },
        {
          icon: <Lightbulb className="h-6 w-6" />,
          title: "Expert Guidance",
          description: "Benefit from our team's deep expertise and industry-leading best practices"
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "Save Time",
          description: "Focus on your core business while we handle the complexity of digital marketing"
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Reduce Risk",
          description: "Minimize wasted spend and maximize success with proven methodologies"
        },
      ]}
      
      // Process Section
      processTitle="Our Proven AI Consulting Process"
      processSteps={[
        {
          number: "01",
          title: "Discovery & Audit",
          description: "We analyze your current situation, goals, and opportunities to create a custom strategy"
        },
        {
          number: "02",
          title: "Strategy Development",
          description: "Our experts craft a comprehensive plan tailored to your business objectives"
        },
        {
          number: "03",
          title: "Implementation",
          description: "We execute the strategy with precision, launching campaigns and initiatives"
        },
        {
          number: "04",
          title: "Optimization & Growth",
          description: "Continuous monitoring, testing, and refinement to maximize your results"
        },
      ]}
      
      // Results Section
      resultsTitle="Real Results from AI Consulting"
      results={[
        {
          metric: "287%",
          description: "Average ROI Increase",
          industry: "Industry avg: 120%"
        },
        {
          metric: "3.5x",
          description: "Lead Generation Growth",
          industry: "Industry avg: 1.8x"
        },
        {
          metric: "94%",
          description: "Client Retention Rate",
          industry: "Industry avg: 68%"
        },
      ]}
      resultsTestimonial={{
        quote: "Conquermark's AI Consulting services transformed our business. We saw immediate improvements in our key metrics and continue to see growth month over month.",
        author: "Michael Chen",
        company: "Growth Ventures LLC",
        result: "+425%"
      }}
      
      // FAQ Section
      faqs={[
        {
          question: "How long does it take to see results from AI Consulting?",
          answer: "Most clients start seeing initial results within 30-60 days, with significant improvements typically visible within 90 days. The timeline varies based on your industry, competition, and current baseline."
        },
        {
          question: "What makes Conquermark different from other agencies?",
          answer: "We combine cutting-edge technology with deep expertise and a results-driven approach. Our proprietary tools, dedicated account management, and proven methodologies consistently deliver superior ROI for our clients."
        },
        {
          question: "Do you work with businesses in my industry?",
          answer: "Yes! We've successfully served clients across 50+ industries including SaaS, e-commerce, healthcare, finance, manufacturing, and more. Our strategies are customized to your specific market and goals."
        },
        {
          question: "What's included in the monthly investment?",
          answer: "Your monthly investment includes strategy development, implementation, dedicated account management, performance reporting, continuous optimization, and access to our proprietary technology platform. No hidden fees or surprise charges."
        },
        {
          question: "Can I cancel or change my plan?",
          answer: "Yes, we offer flexible contracts with 30-day notice for changes or cancellation. However, we recommend a minimum 6-month commitment to see the full impact of our strategies."
        },
        {
          question: "How do you measure success?",
          answer: "We track the metrics that matter most to your business - whether that's leads, sales, revenue, ROI, or other KPIs. You'll receive detailed monthly reports showing progress toward your goals."
        },
      ]}
      
      // SEO & Navigation
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "AI Services", href: "/digital-marketing/ai" },
        { label: "AI Consulting", href: "#" },
      ]}
      category="AI Services"
      serviceName="AI Consulting"
      popupOffer="Get your free AI Consulting audit and custom strategy proposal"
      relatedServices={getRelatedServices("/digital-marketing/ai/consulting", "AI").map(s => ({
        name: s.name,
        href: s.href,
        description: s.description
      }))}
    />
  );
}
