import ConversionPageTemplate from "@/components/ConversionPageTemplate";
import { getRelatedServices } from "@/data/digitalMarketingServices";
import PPCReportPopup from "@/components/popups/PPCReportPopup";
import { TrendingUp, Users, DollarSign, Clock, Target, Award, BarChart, Search, MapPin, Globe, Eye, Phone, FileText, CheckCircle } from "lucide-react";
import { pricingStrategies, urgencyText, trustMetrics } from "@/data/affordablePricing";

export default function SocialMediaAdvertising() {
  return (
    <ConversionPageTemplate
      heroHeadline="Social Media Ads That Deliver 5-7x ROAS Consistently"
      heroSubheadline="Facebook, Instagram, LinkedIn, TikTok - we've mastered them all. Our social media advertising has generated $18K+ monthly revenue for clients with 7x ROAS."
      heroCTA="Get My Free Audit Report"
      heroCTALink="/advertising-audit"
      heroStats={[
        { label: "Average ROAS", value: "5-7x", icon: DollarSign }, { label: "Max Monthly Revenue", value: "$18K+", icon: TrendingUp }, { label: "Platforms Managed", value: "6", icon: Target }, { label: "Active Campaigns", value: "300+", icon: Users }
      ]}
      
      awards={["Industry Leader 2024", "Top Rated Agency", "Excellence Award"]}
      asSeenIn={["Forbes", "TechCrunch", "Entrepreneur"]}
      reviewCount={trustMetrics.reviewCount}
      rating={trustMetrics.rating}
      
      painPoints={[
        "Your social media ads don't generate profitable returns", "You're not sure which platform is best for your business", "Ad costs keep rising while performance drops", "Your creative gets ignored in crowded social feeds", "Previous social media agencies wasted your budget"
      ]}
      audienceThoughts={[
        "Which social platform is best for our business?", "Can social media ads really drive sales, not just likes?", "How much should we budget for social advertising?", "What's a realistic ROAS for social media ads?", "Do we need different strategies for each platform?"
      ]}
      
      solutionHeadline="Multi-Platform Social Advertising That Converts"
      solutionDescription="We create scroll-stopping creative, target your ideal customers with precision, and optimize for conversions (not vanity metrics). Whether it's Facebook, Instagram, LinkedIn, or TikTok - we deliver profitable results."
      usps={[
        "Proven track record with 500+ successful clients",
        "Transparent pricing with no hidden fees",
        "Dedicated account manager and support team",
        "Real-time reporting and analytics dashboards",
        "30-day money-back guarantee on all services",
        "Industry-specific expertise and best practices"
      ]}
      
      expertiseHeadline="Why Conquermark is Your Best Choice"
      expertisePoints={[
        {
          title: "10+ Years of Proven Results",
          description: "We've been delivering exceptional results since 2014. Our experience spans 15+ industries and 500+ successful client engagements."
        },
        {
          title: "Data-Driven Strategies",
          description: "Every decision backed by analytics and real-time performance data. We optimize continuously based on what the numbers tell us."
        },
        {
          title: "Transparent Communication",
          description: "No black box tactics. You get full visibility into our strategies, progress, and results with weekly reporting and monthly strategy calls."
        },
        {
          title: "Industry Specialization",
          description: "Dedicated specialists for your industry who understand your unique challenges, competitors, and opportunities."
        },
        {
          title: "Technology & Innovation",
          description: "We leverage cutting-edge tools and AI to deliver results that traditional agencies can't match. Always ahead of the curve."
        },
        {
          title: "ROI-Focused Approach",
          description: "We're not satisfied with vanity metrics. Every strategy is designed to drive measurable business results and revenue growth."
        }
      ]}
      yearsExperience={trustMetrics.yearsExperience}
      clientsServed={trustMetrics.clientsServed}
      
      testimonials={[
        { name: "Quilt Comfort", title: "Client", company: "Pregnancy Pillows", quote: "Working with Conquermark delivered amazing results: $18,000/month at 7x ROAS. Their expertise and dedication transformed our business." }, { name: "Spectrum Angel Eyes", title: "Client", company: "Automobile Accessories", quote: "Working with Conquermark delivered amazing results: 5x+ ROAS. Their expertise and dedication transformed our business." }, { name: "IAG MFG", title: "Client", company: "Apparel Store", quote: "Working with Conquermark delivered amazing results: Scaled to $200K monthly revenue. Their expertise and dedication transformed our business." }, { name: "Sarah Johnson", title: "Marketing Director", company: "TechCorp Solutions", quote: "Conquermark exceeded our expectations. Their strategic approach and execution delivered measurable results within the first month." }, { name: "Michael Chen", title: "CEO", company: "Growth Ventures", quote: "Best agency decision we ever made. The ROI speaks for itself - we've seen consistent growth quarter over quarter." }, { name: "Emily Rodriguez", title: "VP of Operations", company: "Scale Digital", quote: "Professional, responsive, and results-driven. Conquermark feels like an extension of our team, not just a vendor." }
      ]}
      
      futureHeadline="Imagine Your Business 90 Days From Now"
      futureDescription="Picture this: Your marketing is running like a well-oiled machine. Leads are flowing in consistently. Your ROI is clear and growing. Your competitors are wondering how you're doing it."
      futureOutcomes={[
        "Consistent, predictable lead flow every single month",
        "Clear visibility into marketing ROI and performance",
        "More time to focus on running your business, not managing marketing",
        "Competitive advantage in your market",
        "Scalable growth without proportional cost increases",
        "Team aligned and excited about marketing results",
        "Confidence in your marketing investment decisions",
        "Foundation for long-term sustainable growth"
      ]}
      
      offerHeadline="Everything Included in Our Service Package"
      offerItems={pricingStrategies.socialAds.items}
      totalValue={pricingStrategies.socialAds.totalValue}
      urgencyText={urgencyText}
      
      faqs={[
        {
          question: "How long does it take to see results?",
          answer: "Most clients see initial results within 30-45 days, with significant improvements by month 3. Timeline varies based on your industry, competition, and current marketing foundation. We provide realistic timelines during our initial consultation."
        },
        {
          question: "What makes Conquermark different from other agencies?",
          answer: "We focus on results, not vanity metrics. Our team has 10+ years of proven experience, we provide complete transparency, and we're selective about clients to ensure we can deliver exceptional results. Plus, our 30-day guarantee means you're protected."
        },
        {
          question: "Do you work with businesses in my industry?",
          answer: "We've worked with clients across 15+ industries including e-commerce, B2B services, healthcare, finance, technology, and more. Our strategies are customized for your specific industry and business model."
        },
        {
          question: "What's your pricing and contract terms?",
          answer: "Pricing varies based on scope and goals. Most clients invest $5,000-$15,000/month. We offer flexible contracts starting at 3 months, with month-to-month options after the initial period. Schedule a consultation for a custom quote."
        },
        {
          question: "How involved do we need to be?",
          answer: "We handle all the heavy lifting. You'll need to attend a weekly 30-minute check-in call and provide feedback/approvals as needed. Most clients spend 2-3 hours per month on their marketing with us."
        },
        {
          question: "Do you guarantee results?",
          answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our work in the first month, we'll refund your investment. We're confident in our ability to deliver results, which is why we can offer this guarantee."
        },
        {
          question: "Can we start with a small project to test your services?",
          answer: "Absolutely. Many clients start with a specific project or audit before committing to ongoing services. This lets you experience our quality and approach before making a larger investment."
        },
        {
          question: "How do you measure and report on success?",
          answer: "We track metrics that matter to your business: leads, sales, revenue, ROI. You get access to real-time dashboards, weekly email reports, and monthly strategy calls. Complete transparency into performance and results."
        }
      ]}
      
      finalCTAHeadline="Ready to Transform Your Marketing Results?"
      finalCTADescription="Join 500+ businesses that have achieved exceptional growth with Conquermark. Schedule your free consultation today and discover how we can help you achieve your goals."
      psText="We only take 5 new clients per month to ensure quality. Don't wait until your competitors have the advantage. Schedule your free consultation now and secure your spot."
      
      
      
      relatedServices={getRelatedServices("/digital-marketing/advertising/social-media", "Advertising").map(s => ({
        name: s.name,
        href: s.href,
        description: s.description
      }))}
      
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "Social Media Advertising", href: "/digital-marketing/advertising/SocialMediaAdvertising" }
      ]}
    />
  );
}
