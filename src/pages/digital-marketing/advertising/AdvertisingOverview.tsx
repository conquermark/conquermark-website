import ConversionPageTemplate from "@/components/ConversionPageTemplate";
import PPCReportPopup from "@/components/popups/PPCReportPopup";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export default function AdvertisingOverview() {
  return (
    <ConversionPageTemplate
      heroHeadline="Digital Advertising That Delivers 4.5x ROAS Consistently"
      heroSubheadline="Stop wasting ad budget on underperforming campaigns. Our advertising experts have managed $50M+ in ad spend and consistently deliver 4-5x ROAS across PPC, social media, and programmatic channels."
      heroCTA="Get My Free Audit Report"
      heroCTALink="/free-audit?service=advertising"
      heroStats={[
        { label: "Average ROAS", value: "4.5x", icon: DollarSign },
        { label: "Ad Spend Managed", value: "$50M+", icon: TrendingUp },
        { label: "Active Campaigns", value: "500+", icon: Users },
        { label: "Client Retention", value: "96%", icon: Clock }
      ]}
      
      awards={["Best PPC Agency 2024", "Top Advertising Firm", "Excellence in Paid Media"]}
      asSeenIn={["Google Partner", "Facebook Marketing Partner", "Microsoft Advertising"]}
      reviewCount={500}
      rating={4.9}
      
      painPoints={[
        "Your ad campaigns lose money instead of making it",
        "You're spending thousands but can't track actual ROI",
        "Cost per acquisition keeps increasing every month",
        "Previous agencies overpromised and underdelivered",
        "You don't know which advertising channels work best"
      ]}
      audienceThoughts={[
        "Can paid advertising really be profitable for my business?",
        "How much should I spend on advertising?",
        "What's a realistic ROAS expectation?",
        "How do I know if my agency is doing good work?",
        "Should I focus on Google Ads, Facebook, or both?"
      ]}
      
      solutionHeadline="Multi-Channel Advertising That Maximizes Every Dollar"
      solutionDescription="We don't just run ads - we engineer profitable campaigns across Google, Bing, Facebook, Instagram, LinkedIn, TikTok, and programmatic networks. Our data-driven strategies consistently deliver 4-5x ROAS with full transparency."
      usps={[
        "Proven 4.5x average ROAS across all channels",
        "Real case studies: $554K revenue, 7x ROAS",
        "Multi-channel expertise: PPC, Social, Programmatic",
        "Advanced targeting and conversion optimization",
        "Real-time reporting and full transparency",
        "No long-term contracts after initial 90 days"
      ]}
      
      expertiseHeadline="Why 500+ Companies Trust Our Advertising Expertise"
      expertisePoints={[
        {
          title: "Proven Results Across Channels",
          description: "We've generated $554K revenue at 3.65x ROAS for fashion e-commerce, $226K monthly at 4.5x for sports equipment, and 7x ROAS for pregnancy pillows. Real clients, real revenue."
        },
        {
          title: "Multi-Channel Mastery",
          description: "Google Ads, Facebook, Instagram, LinkedIn, TikTok, programmatic - we've mastered them all. We know which channels work best for your business and goals."
        },
        {
          title: "Advanced Targeting & Optimization",
          description: "We use sophisticated audience targeting, AI-powered bidding, and continuous A/B testing to maximize performance and minimize wasted spend."
        },
        {
          title: "Conversion Rate Optimization",
          description: "We don't just drive clicks - we optimize your entire funnel from ad to landing page to conversion. More sales, not just more traffic."
        },
        {
          title: "Creative That Converts",
          description: "Our in-house creative team produces scroll-stopping ad creative that captures attention and drives action. Tested and optimized for maximum performance."
        },
        {
          title: "Complete Transparency",
          description: "Real-time dashboards, weekly reports, monthly strategy calls. You always know exactly what we're doing, what we're spending, and the results we're delivering."
        }
      ]}
      yearsExperience={10}
      clientsServed={500}
      
      testimonials={[
        {
          name: "America and Beyond Fashion",
          title: "Marketing Director",
          company: "Fashion E-Commerce",
          quote: "Conquermark generated $554,000 in revenue at 3.65x ROAS. Their PPC expertise transformed our advertising from money pit to profit center."
        },
        {
          name: "League Outfitters",
          title: "CEO",
          company: "Sports Equipment",
          quote: "We're generating $226,000 per month at 4.5x ROAS thanks to Conquermark's advertising strategies. Best marketing partner we've ever had."
        },
        {
          name: "Quilt Comfort",
          title: "Founder",
          company: "Pregnancy Pillows",
          quote: "7x ROAS on Facebook Ads! We went from $2,400/month spend to $18,000/month revenue. Conquermark's expertise is unmatched."
        },
        {
          name: "David Thompson",
          title: "VP Marketing",
          company: "Tech Solutions Inc",
          quote: "Finally, an advertising agency that focuses on ROI, not vanity metrics. Our cost per acquisition dropped 45% while revenue doubled."
        },
        {
          name: "Jennifer Park",
          title: "CMO",
          company: "Health & Wellness",
          quote: "The transparency and communication from Conquermark is exceptional. We always know where our budget is going and what results we're getting."
        },
        {
          name: "Robert Martinez",
          title: "Founder",
          company: "E-Commerce Growth",
          quote: "Conquermark scaled our advertising from $10K to $100K monthly spend while maintaining profitability. That's real expertise."
        }
      ]}
      
      futureHeadline="Imagine Your Advertising Actually Being Profitable"
      futureDescription="In 90 days, your ad campaigns consistently deliver 4-5x ROAS. You have clear visibility into every dollar spent and every sale generated. Your cost per acquisition is dropping while revenue grows. You're confident in your advertising investment."
      futureOutcomes={[
        "Consistent 4-5x ROAS across all advertising channels",
        "Clear understanding of which channels drive the best results",
        "Predictable, scalable customer acquisition",
        "Reduced dependency on any single advertising platform",
        "Complete confidence in your advertising ROI",
        "Ability to scale spend without killing profitability",
        "Professional creative that stands out in crowded feeds",
        "Full transparency into performance and spending"
      ]}
      
      offerHeadline="Complete Digital Advertising Services"
      offerItems={[
        {
          title: "Comprehensive Advertising Audit",
          description: "Deep analysis of current campaigns, competitor research, audience insights, and opportunity identification across all channels.",
          value: "$3,000"
        },
        {
          title: "Multi-Channel Strategy Development",
          description: "Custom advertising strategy across Google Ads, Facebook, Instagram, LinkedIn, TikTok, and programmatic networks.",
          value: "$5,000"
        },
        {
          title: "Campaign Setup & Implementation",
          description: "Professional campaign structure, audience targeting, ad creative, landing page optimization, and conversion tracking.",
          value: "$8,000"
        },
        {
          title: "Creative Production",
          description: "Professional ad creative including images, videos, copy, and landing pages. Tested and optimized for maximum performance.",
          value: "$6,000"
        },
        {
          title: "Ongoing Management & Optimization",
          description: "Daily monitoring, bid optimization, A/B testing, audience refinement, and continuous improvement based on performance data.",
          value: "$12,000"
        },
        {
          title: "Reporting & Analytics",
          description: "Real-time dashboards, weekly performance reports, monthly strategy calls, and full transparency into all metrics and spending.",
          value: "$3,000"
        }
      ]}
      totalValue="$37,000 Total Value"
      urgencyText="⚡ Limited Availability: We only take 5 new advertising clients per month. 2 spots remaining this month."
      
      faqs={[
        {
          question: "What's a realistic ROAS for paid advertising?",
          answer: "It varies by industry, but our clients average 4-5x ROAS. E-commerce typically sees 3-7x, B2B services 2-4x, and local services 5-10x. We've delivered results ranging from 3.65x to 7x ROAS for real clients with documented case studies."
        },
        {
          question: "How much should I spend on advertising?",
          answer: "We typically recommend starting with $5,000-$10,000/month minimum to gather meaningful data and optimize effectively. However, we've worked with budgets ranging from $3,000 to $500,000+ monthly. We'll recommend the right budget based on your goals and industry."
        },
        {
          question: "Which advertising channel is best for my business?",
          answer: "It depends on your business model, target audience, and goals. We typically test multiple channels initially, then scale the winners. Most clients end up with a mix of Google Ads, Facebook/Instagram, and one or two additional channels."
        },
        {
          question: "How long before we see results?",
          answer: "Most clients see initial results within 2-4 weeks, with optimized performance by month 2-3. Advertising delivers faster results than SEO, but it takes time to test, optimize, and scale profitably."
        },
        {
          question: "Do you require long-term contracts?",
          answer: "We require an initial 90-day commitment to allow time for testing and optimization. After that, we offer month-to-month contracts. We're confident you'll want to continue based on the results we deliver."
        },
        {
          question: "What makes your advertising different from other agencies?",
          answer: "We focus on ROI, not vanity metrics. We have real case studies showing $554K revenue and 7x ROAS. We provide complete transparency with real-time reporting. And we're experts across multiple channels, not just one platform."
        },
        {
          question: "Do you handle creative or just campaign management?",
          answer: "We handle both. Our in-house creative team produces professional ad images, videos, copy, and landing pages. Everything is tested and optimized for maximum conversion rates."
        },
        {
          question: "How do you measure and report on success?",
          answer: "We track ROAS, cost per acquisition, conversion rates, and revenue impact. You get access to real-time dashboards showing all metrics, plus weekly email reports and monthly strategy calls. Complete transparency."
        }
      ]}
      
      finalCTAHeadline="Ready to Make Your Advertising Actually Profitable?"
      finalCTADescription="Join companies like America and Beyond Fashion ($554K revenue), League Outfitters ($226K monthly), and Quilt Comfort (7x ROAS) who transformed their advertising with our expertise. Schedule your free audit today."
      psText="We only take 5 new advertising clients per month to ensure quality results. Don't waste another month on underperforming campaigns. Schedule your free audit now and secure your spot."
      
      
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "Advertising Services", href: "/digital-marketing/advertising" }
      ]}
    />
  );
}
