import ConversionPageTemplate from "@/components/ConversionPageTemplate";
import AIAuditPopup from "@/components/popups/AIAuditPopup";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export default function AIServicesOverview() {
  return (
    <ConversionPageTemplate
      // Section 1: Hero
      heroHeadline="AI Services That Transform Your Business Operations"
      heroSubheadline="Harness the power of artificial intelligence to automate processes, enhance decision-making, and drive unprecedented growth. Our AI solutions deliver measurable ROI within 30 days."
      heroCTA="Get My Free Audit Report"
      heroCTALink="/free-audit?service=ai"
      heroStats={[
        { label: "Average Cost Reduction", value: "47%", icon: DollarSign },
        { label: "Faster Processing", value: "10x", icon: TrendingUp },
        { label: "Client Satisfaction", value: "98%", icon: Users },
        { label: "Implementation Time", value: "14 Days", icon: Clock }
      ]}
      
      // Section 2: Social Proof
      awards={["Best AI Implementation 2024", "Top AI Agency", "Innovation Award"]}
      asSeenIn={["TechCrunch", "Forbes", "Entrepreneur"]}
      reviewCount={500}
      rating={4.9}
      
      // Section 3: Audience Call Out
      painPoints={[
        "Spending thousands on manual processes that AI could automate",
        "Competitors are using AI while you're still doing everything manually",
        "Your team is overwhelmed with repetitive tasks that waste time",
        "You know AI is the future but don't know where to start",
        "Previous AI consultants promised results but delivered nothing"
      ]}
      audienceThoughts={[
        "AI sounds expensive and complicated for my business",
        "I don't have a tech team to implement AI solutions",
        "What if I invest in AI and it doesn't work?",
        "How do I know which AI tools are right for my business?",
        "I need results fast, not a 6-month implementation"
      ]}
      
      // Section 4: Solution
      solutionHeadline="Introducing Conquermark's AI Implementation Framework"
      solutionDescription="We've developed a proven 4-week AI implementation process that delivers measurable results without requiring a technical team. Our framework has helped 500+ companies reduce costs by an average of 47% while improving efficiency by 10x."
      usps={[
        "No technical team required - we handle everything",
        "See ROI within 30 days or we work for free",
        "Custom AI solutions built for your specific needs",
        "Ongoing support and optimization included",
        "Transparent pricing with no hidden costs",
        "Integration with your existing tools and systems"
      ]}
      
      // Section 5: Expertise
      expertiseHeadline="Why Conquermark is Your Best AI Partner"
      expertisePoints={[
        {
          title: "10+ Years of AI Experience",
          description: "Our team has been implementing AI solutions since before it was mainstream. We know what works and what doesn't."
        },
        {
          title: "500+ Successful Implementations",
          description: "We've deployed AI across 15+ industries, from e-commerce to healthcare, with proven results."
        },
        {
          title: "Proprietary AI Framework",
          description: "Our unique 4-week implementation process ensures fast results without disrupting your operations."
        },
        {
          title: "Industry-Specific Solutions",
          description: "We don't use generic AI tools. Every solution is customized for your industry and business model."
        },
        {
          title: "Ongoing Optimization",
          description: "AI isn't set-it-and-forget-it. We continuously optimize your systems for maximum performance."
        },
        {
          title: "Transparent Reporting",
          description: "Track your AI ROI in real-time with our custom dashboards and weekly performance reports."
        }
      ]}
      yearsExperience={10}
      clientsServed={500}
      
      // Section 6: Testimonials
      testimonials={[
        {
          name: "Sarah Chen",
          title: "CEO",
          company: "TechFlow Solutions",
          quote: "Conquermark's AI implementation reduced our customer support costs by 60% while improving response times by 8x. The ROI was immediate and continues to grow."
        },
        {
          name: "Michael Rodriguez",
          title: "Operations Director",
          company: "Global Logistics Inc",
          quote: "We were skeptical about AI, but Conquermark made it simple. Their team handled everything and we saw results in week 2. Our processing time went from 4 hours to 20 minutes."
        },
        {
          name: "Jennifer Park",
          title: "Marketing VP",
          company: "E-Commerce Giants",
          quote: "The AI-powered personalization engine Conquermark built increased our conversion rate by 34%. It's like having 50 extra marketing analysts working 24/7."
        },
        {
          name: "David Thompson",
          title: "Founder",
          company: "HealthTech Innovations",
          quote: "Best investment we've made. The AI chatbot handles 80% of our patient inquiries, freeing our staff to focus on complex cases. Patient satisfaction actually increased."
        },
        {
          name: "Lisa Wang",
          title: "CFO",
          company: "Financial Services Pro",
          quote: "Conquermark's AI fraud detection system saved us $2.3M in the first year alone. The implementation was seamless and the support has been exceptional."
        },
        {
          name: "Robert Martinez",
          title: "CTO",
          company: "Manufacturing Solutions",
          quote: "We tried implementing AI ourselves and failed. Conquermark came in, understood our needs, and delivered a working solution in 3 weeks. Production efficiency up 45%."
        }
      ]}
      
      // Section 7: Future Pacing
      futureHeadline="Imagine Your Business 90 Days From Now"
      futureDescription="Picture this: Your team is focused on high-value work while AI handles the repetitive tasks. Your costs are down 40%+. Your customers are getting instant, accurate responses 24/7. Your competitors are asking how you're doing it."
      futureOutcomes={[
        "Your customer support team handles 3x more inquiries without hiring anyone",
        "Manual data entry is completely eliminated, saving 20+ hours per week",
        "Your marketing campaigns are automatically optimized for maximum ROI",
        "You have real-time insights into every aspect of your business",
        "Your customers receive personalized experiences at scale",
        "You're making data-driven decisions instead of guessing",
        "Your profit margins have increased by double digits",
        "You finally have time to focus on strategy instead of operations"
      ]}
      
      // Section 8: Offer Stack
      offerHeadline="Everything Included in Our AI Implementation Package"
      offerItems={[
        {
          title: "Comprehensive AI Audit & Strategy",
          description: "Deep dive into your operations to identify the highest-ROI AI opportunities. Includes competitive analysis and custom roadmap.",
          value: "$5,000"
        },
        {
          title: "Custom AI Solution Development",
          description: "We build, test, and deploy AI systems tailored to your specific needs. No generic tools - everything is customized.",
          value: "$25,000"
        },
        {
          title: "Integration with Existing Systems",
          description: "Seamless connection with your CRM, marketing tools, databases, and other software. Zero disruption to operations.",
          value: "$8,000"
        },
        {
          title: "Team Training & Documentation",
          description: "Complete training for your team plus detailed documentation so you're never dependent on us.",
          value: "$3,000"
        },
        {
          title: "90 Days of Optimization & Support",
          description: "We don't just deploy and disappear. Three months of continuous optimization to maximize your results.",
          value: "$12,000"
        },
        {
          title: "Real-Time Analytics Dashboard",
          description: "Custom dashboard to track AI performance, ROI, and key metrics. Updated in real-time.",
          value: "$4,000"
        }
      ]}
      totalValue="$57,000 Total Value"
      urgencyText="⚡ Limited Availability: We only take 5 new AI implementation clients per month to ensure quality. 2 spots remaining for this month."
      
      // Section 9: FAQs
      faqs={[
        {
          question: "Do I need a technical team to implement AI?",
          answer: "No. That's the beauty of working with Conquermark. We handle all the technical implementation, integration, and maintenance. You just need to tell us what business problems you want to solve, and we take care of the rest."
        },
        {
          question: "How long does AI implementation take?",
          answer: "Our standard implementation timeline is 4 weeks from kickoff to deployment. This includes strategy, development, testing, integration, and training. Some simpler solutions can be deployed in as little as 2 weeks."
        },
        {
          question: "What kind of ROI can I expect?",
          answer: "Our clients typically see 3-5x ROI within the first year. The average cost reduction is 47%, with efficiency improvements of 10x or more. We guarantee you'll see measurable results within 30 days or we'll work for free until you do."
        },
        {
          question: "What industries do you work with?",
          answer: "We've successfully implemented AI solutions across 15+ industries including e-commerce, healthcare, finance, manufacturing, logistics, professional services, and more. Every solution is customized for your specific industry and business model."
        },
        {
          question: "How much does AI implementation cost?",
          answer: "Investment varies based on scope and complexity, typically ranging from $30,000 to $150,000 for comprehensive implementations. We offer flexible payment plans and our ROI guarantee means the AI pays for itself quickly. Schedule a free audit to get a custom quote."
        },
        {
          question: "What happens after the initial implementation?",
          answer: "We include 90 days of optimization and support with every implementation. After that, most clients choose our ongoing optimization package ($2,500-$5,000/month) to ensure their AI continues improving and adapting to business changes."
        },
        {
          question: "Can AI integrate with our existing software?",
          answer: "Yes. We specialize in integrating AI with existing systems including CRMs (Salesforce, HubSpot), marketing platforms, databases, e-commerce platforms, and custom software. Integration is included in our implementation package."
        },
        {
          question: "What if the AI doesn't work for our business?",
          answer: "We've implemented AI for 500+ companies with a 98% success rate. We start with a comprehensive audit to ensure AI is right for your business before any implementation. Plus, our 30-day ROI guarantee means you're protected."
        }
      ]}
      
      // Section 10: Final CTA
      finalCTAHeadline="Ready to Transform Your Business with AI?"
      finalCTADescription="Join 500+ companies that have reduced costs by 47% and improved efficiency by 10x with our proven AI implementation framework. Schedule your free AI audit today."
      psText="We only take 5 new AI clients per month. Don't wait until your competitors have the AI advantage. Schedule your free audit now and secure your spot."
      
      // Popup
      
      // Breadcrumbs
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "AI Services", href: "/digital-marketing/ai" }
      ]}
    />
  );
}
