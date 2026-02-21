import ConversionPageTemplate from "@/components/ConversionPageTemplate";
import SEOChecklistPopup from "@/components/popups/SEOChecklistPopup";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export default function SEOServicesOverview() {
  return (
    <ConversionPageTemplate
      heroHeadline="SEO & Search Visibility Services That Drive Real Revenue"
      heroSubheadline="Dominate search engines - both traditional and AI-powered. Our comprehensive SEO strategies have generated $50K+ monthly organic revenue for clients across industries."
      heroCTA="Get My Free Audit Report"
      heroCTALink="/free-audit?service=seo"
      heroStats={[
        { label: "Avg Monthly Revenue", value: "$50K+", icon: DollarSign },
        { label: "Organic Traffic Growth", value: "287%", icon: TrendingUp },
        { label: "Client Success Rate", value: "94%", icon: Users },
        { label: "Results Timeline", value: "30-90 Days", icon: Clock }
      ]}
      
      awards={["Best SEO Agency 2024", "Top Rated SEO Firm", "Excellence in Search"]}
      asSeenIn={["Search Engine Journal", "Moz", "Search Engine Land"]}
      reviewCount={500}
      rating={4.9}
      
      painPoints={[
        "Your website is invisible in search results for valuable keywords",
        "Competitors consistently outrank you on Google",
        "You're spending thousands on ads because organic traffic is low",
        "Previous SEO agencies made promises but delivered no results",
        "You don't understand what your SEO team is actually doing"
      ]}
      audienceThoughts={[
        "How long does SEO really take to show results?",
        "Can SEO work in our competitive industry?",
        "What's a realistic ROI from SEO investment?",
        "How do we know if our SEO agency is doing good work?",
        "Is SEO still relevant with AI search engines?"
      ]}
      
      solutionHeadline="Comprehensive SEO for Traditional and AI Search"
      solutionDescription="We don't just optimize for Google - we prepare you for the future of search. Our SEO strategies work across traditional search engines AND AI-powered platforms like ChatGPT, Perplexity, and Google SGE."
      usps={[
        "Optimize for Google, Bing, AND AI search engines",
        "Real case studies: $57K in 90 days, $50K+ monthly",
        "Transparent reporting with revenue tracking",
        "Technical SEO + content + link building",
        "Industry-specific strategies that actually work",
        "No long-term contracts - month-to-month after 90 days"
      ]}
      
      expertiseHeadline="Why 500+ Companies Trust Our SEO Expertise"
      expertisePoints={[
        {
          title: "Proven Results Across Industries",
          description: "We've generated $57K+ in 90 days for e-commerce, $50K+ monthly for sports equipment, and AED 206K for perfumes. Real clients, real revenue."
        },
        {
          title: "Traditional + AI Search Optimization",
          description: "We're one of the few agencies optimizing for both Google and AI search engines. Future-proof your visibility."
        },
        {
          title: "Technical SEO Excellence",
          description: "Our technical audits identify and fix issues that other agencies miss. Site speed, crawlability, schema markup - we handle it all."
        },
        {
          title: "Content That Ranks and Converts",
          description: "We create SEO content that ranks high AND converts visitors into customers. Not just traffic - revenue."
        },
        {
          title: "White-Hat Link Building",
          description: "Quality backlinks from authoritative sites in your industry. No black-hat tactics that risk penalties."
        },
        {
          title: "Complete Transparency",
          description: "Real-time dashboards, weekly reports, monthly strategy calls. You always know exactly what we're doing and the results we're delivering."
        }
      ]}
      yearsExperience={10}
      clientsServed={500}
      
      testimonials={[
        {
          name: "Anytime Contacts Team",
          title: "E-Commerce Manager",
          company: "Contact Lenses Australia",
          quote: "Conquermark delivered $57,000+ in organic revenue in just 90 days. Their SEO expertise transformed our online visibility and sales."
        },
        {
          name: "League Outfitters",
          title: "Marketing Director",
          company: "Sports Equipment USA",
          quote: "We now generate $50,000+ in organic revenue every single month thanks to Conquermark's SEO strategies. Best marketing investment we've made."
        },
        {
          name: "Lootah Perfumes",
          title: "Digital Marketing Lead",
          company: "Perfumes UAE",
          quote: "AED 206,000+ in organic revenue in 90 days exceeded our expectations. Conquermark's SEO expertise is unmatched in our industry."
        },
        {
          name: "Sarah Mitchell",
          title: "CEO",
          company: "TechSolutions Inc",
          quote: "Finally, an SEO agency that delivers what they promise. Our organic traffic tripled and we're ranking #1 for our most valuable keywords."
        },
        {
          name: "James Cooper",
          title: "VP Marketing",
          company: "HealthCare Pros",
          quote: "Conquermark's SEO strategies are data-driven and results-focused. We've seen consistent growth month over month for the past year."
        },
        {
          name: "Maria Santos",
          title: "Founder",
          company: "E-Commerce Growth",
          quote: "The transparency and communication from Conquermark is refreshing. We always know what they're working on and can see the results in real-time."
        }
      ]}
      
      futureHeadline="Picture Your Business Dominating Search Results"
      futureDescription="In 90 days, your website ranks on page 1 for your most valuable keywords. Organic traffic is flowing in daily. Your cost per acquisition is dropping because you're not relying solely on paid ads. Your competitors are wondering how you did it."
      futureOutcomes={[
        "Page 1 rankings for your most profitable keywords",
        "$50K+ in monthly organic revenue flowing consistently",
        "Reduced dependency on expensive paid advertising",
        "Authority and trust built in your industry",
        "Sustainable, long-term traffic growth",
        "Visibility in both Google AND AI search engines",
        "Complete confidence in your SEO strategy and results",
        "Competitive advantage that's hard to replicate"
      ]}
      
      offerHeadline="Complete SEO Services Package"
      offerItems={[
        {
          title: "Comprehensive SEO Audit",
          description: "Deep technical audit, competitor analysis, keyword research, and opportunity identification. Know exactly what needs to be fixed and optimized.",
          value: "$3,000"
        },
        {
          title: "Technical SEO Optimization",
          description: "Fix crawl errors, improve site speed, implement schema markup, optimize URL structure, and resolve all technical issues.",
          value: "$5,000"
        },
        {
          title: "On-Page SEO & Content",
          description: "Optimize existing pages, create new SEO content, improve meta tags, headers, and internal linking structure.",
          value: "$8,000"
        },
        {
          title: "Link Building Campaign",
          description: "Acquire high-quality backlinks from authoritative sites in your industry. White-hat tactics only.",
          value: "$6,000"
        },
        {
          title: "AI Search Optimization (GEO)",
          description: "Optimize for ChatGPT, Perplexity, Google SGE, and other AI search engines. Future-proof your visibility.",
          value: "$4,000"
        },
        {
          title: "Monthly Reporting & Optimization",
          description: "Real-time dashboards, weekly reports, monthly strategy calls, and continuous optimization based on performance data.",
          value: "$3,000"
        }
      ]}
      totalValue="$29,000 Total Value"
      urgencyText="⚡ Limited Availability: We only take 5 new SEO clients per month. 2 spots remaining this month."
      
      faqs={[
        {
          question: "How long does SEO take to show results?",
          answer: "Most clients see initial improvements within 30-45 days, with significant results by month 3-4. SEO is a long-term strategy, but our clients like Anytime Contacts saw $57K in revenue within 90 days. Timeline varies based on competition and current site health."
        },
        {
          question: "What makes your SEO different from other agencies?",
          answer: "We focus on revenue, not just rankings. We optimize for both traditional search engines AND AI-powered search (ChatGPT, Perplexity, etc.). Plus, we have real case studies showing $50K+ monthly organic revenue for clients."
        },
        {
          question: "Do you guarantee rankings?",
          answer: "No reputable SEO agency can guarantee specific rankings (Google's algorithm is constantly changing). However, we guarantee our effort and expertise. If you're not satisfied in the first 30 days, we offer a money-back guarantee."
        },
        {
          question: "How much does SEO cost?",
          answer: "Our SEO services typically range from $3,000-$10,000/month depending on your industry, competition, and goals. We provide custom quotes after an initial consultation and audit. Most clients see 3-5x ROI within the first year."
        },
        {
          question: "Can SEO work for a competitive industry?",
          answer: "Absolutely. We've delivered results in highly competitive industries like e-commerce, healthcare, finance, and legal services. Competition just means we need a more strategic approach - which is our specialty."
        },
        {
          question: "What's included in your SEO services?",
          answer: "Everything: technical SEO, on-page optimization, content creation, link building, AI search optimization (GEO), local SEO if applicable, and comprehensive reporting. We're a full-service SEO agency."
        },
        {
          question: "Do you require long-term contracts?",
          answer: "We require an initial 90-day commitment to allow time for results. After that, we offer month-to-month contracts. We're confident you'll want to continue based on the results we deliver."
        },
        {
          question: "How do you measure SEO success?",
          answer: "We track rankings, organic traffic, and most importantly - revenue impact. You get access to real-time dashboards showing all key metrics, plus weekly email reports and monthly strategy calls."
        }
      ]}
      
      finalCTAHeadline="Ready to Dominate Search Results and Drive Revenue?"
      finalCTADescription="Join companies like Anytime Contacts ($57K in 90 days) and League Outfitters ($50K+ monthly) who transformed their business with our SEO expertise. Schedule your free audit today."
      psText="We only take 5 new SEO clients per month to ensure quality results. Don't let your competitors dominate search while you wait. Schedule your free audit now and secure your spot."
      
      
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "SEO Services", href: "/digital-marketing/seo" }
      ]}
    />
  );
}
