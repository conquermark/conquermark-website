import ConversionPageTemplate from "@/components/ConversionPageTemplate";
import ContentGuidePopup from "@/components/popups/ContentGuidePopup";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export default function ContentOverview() {
  return (
    <ConversionPageTemplate
      heroHeadline="Content Marketing That Generates 3x More Leads Than Paid Ads"
      heroSubheadline="Build authority, drive organic traffic, and generate qualified leads with strategic content marketing. Our content strategies deliver 3x more leads than paid advertising alone while building long-term brand value."
      heroCTA="Get My Free Audit Report"
      heroCTALink="/free-audit?service=content"
      heroStats={[
        { label: "Lead Generation", value: "3x", icon: Users },
        { label: "Organic Traffic Growth", value: "245%", icon: TrendingUp },
        { label: "Content Pieces Created", value: "5000+", icon: DollarSign },
        { label: "Client Success Rate", value: "91%", icon: Clock }
      ]}
      
      awards={["Best Content Agency 2024", "Top Content Marketing Firm", "Excellence in Content"]}
      asSeenIn={["Content Marketing Institute", "HubSpot", "MarketingProfs"]}
      reviewCount={400}
      rating={4.9}
      
      painPoints={[
        "Your blog posts get no traffic or engagement",
        "Content creation is time-consuming and inconsistent",
        "You don't have a clear content strategy or calendar",
        "Your content doesn't generate leads or sales",
        "Previous content agencies delivered quantity over quality"
      ]}
      audienceThoughts={[
        "Is content marketing really worth the investment?",
        "How long before content marketing shows results?",
        "Can we create enough content to compete?",
        "What's the ROI of content vs. paid ads?",
        "Do we need a full-time content team?"
      ]}
      
      solutionHeadline="Strategic Content Marketing That Drives Revenue"
      solutionDescription="We create high-quality blog posts, whitepapers, case studies, infographics, videos, and social content that ranks in search, builds authority, and converts readers into customers. Every piece is optimized for SEO and designed to drive business results."
      usps={[
        "Content that generates 3x more leads than paid ads",
        "SEO-optimized for maximum organic visibility",
        "Multi-format: blogs, videos, infographics, social",
        "Industry-specific expertise across 15+ sectors",
        "Consistent publishing schedule and quality",
        "Full content strategy and calendar included"
      ]}
      
      expertiseHeadline="Why 400+ Companies Trust Our Content Expertise"
      expertisePoints={[
        {
          title: "Strategic Content Planning",
          description: "We don't just create random content. Every piece is part of a strategic plan designed to attract, engage, and convert your ideal customers at every stage of the buyer journey."
        },
        {
          title: "SEO-Optimized Content",
          description: "All content is optimized for search engines and designed to rank. We combine content marketing with SEO for maximum organic visibility and traffic."
        },
        {
          title: "Multi-Format Expertise",
          description: "Blog posts, whitepapers, case studies, infographics, videos, social media content, email newsletters - we create it all with consistent quality and brand voice."
        },
        {
          title: "Industry-Specific Writers",
          description: "Our writers have deep expertise in your industry. They understand your audience, competitors, and the topics that matter most to your customers."
        },
        {
          title: "Conversion-Focused Approach",
          description: "Beautiful content is useless if it doesn't drive results. Every piece includes strategic CTAs and is optimized to move readers toward conversion."
        },
        {
          title: "Consistent Quality & Delivery",
          description: "We deliver high-quality content on schedule, every time. No missed deadlines, no quality fluctuations - just consistent excellence."
        }
      ]}
      yearsExperience={10}
      clientsServed={400}
      
      testimonials={[
        {
          name: "Sarah Mitchell",
          title: "Marketing Director",
          company: "SaaS Solutions Inc",
          quote: "Conquermark's content marketing tripled our inbound leads within 6 months. The quality and consistency is exceptional - they feel like part of our team."
        },
        {
          name: "James Cooper",
          title: "CEO",
          company: "B2B Services Pro",
          quote: "We went from publishing 2 blog posts per month to 12, and our organic traffic increased 287%. Best content investment we've made."
        },
        {
          name: "Maria Santos",
          title: "VP Marketing",
          company: "E-Commerce Growth",
          quote: "The ROI from content marketing exceeded our paid advertising. We're generating qualified leads every day from content Conquermark created months ago."
        },
        {
          name: "David Thompson",
          title: "Founder",
          company: "Tech Startup",
          quote: "Conquermark's content strategy positioned us as thought leaders in our industry. We're now getting inbound leads from Fortune 500 companies."
        },
        {
          name: "Jennifer Park",
          title: "CMO",
          company: "Professional Services",
          quote: "The quality of writing and industry expertise is outstanding. Our content ranks on page 1 for competitive keywords and drives consistent leads."
        },
        {
          name: "Robert Martinez",
          title: "Marketing Manager",
          company: "Healthcare Tech",
          quote: "Finally, a content agency that understands our complex industry. The content is accurate, engaging, and actually drives business results."
        }
      ]}
      
      futureHeadline="Picture Your Content Marketing Machine Running Smoothly"
      futureDescription="In 6 months, you're publishing high-quality content consistently. Your organic traffic has doubled. Leads are coming in daily from content you published weeks ago. You're recognized as a thought leader in your industry. Your content is working 24/7 to attract and convert customers."
      futureOutcomes={[
        "Consistent stream of qualified inbound leads",
        "Doubled or tripled organic traffic to your website",
        "Established authority and thought leadership in your industry",
        "Content library that continues generating leads months later",
        "Reduced dependency on expensive paid advertising",
        "Sales team has valuable content to share with prospects",
        "Clear ROI from content marketing investment",
        "Professional content published on schedule every time"
      ]}
      
      offerHeadline="Complete Content Marketing Services"
      offerItems={[
        {
          title: "Content Strategy & Planning",
          description: "Comprehensive content strategy, editorial calendar, topic research, keyword mapping, and buyer journey alignment. Know exactly what to create and when.",
          value: "$4,000"
        },
        {
          title: "Blog Post Creation",
          description: "High-quality, SEO-optimized blog posts (8-12 per month) written by industry experts. Includes research, writing, editing, and optimization.",
          value: "$12,000"
        },
        {
          title: "Premium Content Assets",
          description: "Whitepapers, case studies, ebooks, and guides designed to generate leads and showcase expertise. 2-4 pieces per quarter.",
          value: "$8,000"
        },
        {
          title: "Visual Content Creation",
          description: "Infographics, motion graphics, and social media visuals to enhance written content and increase engagement.",
          value: "$6,000"
        },
        {
          title: "Content Distribution & Promotion",
          description: "Social media promotion, email newsletter creation, content syndication, and outreach to maximize reach and impact.",
          value: "$5,000"
        },
        {
          title: "Performance Tracking & Optimization",
          description: "Monthly analytics reports, content performance analysis, and continuous optimization based on what's working best.",
          value: "$3,000"
        }
      ]}
      totalValue="$38,000 Total Value"
      urgencyText="⚡ Limited Availability: We only take 4 new content marketing clients per month. 1 spot remaining this month."
      
      faqs={[
        {
          question: "How long before content marketing shows results?",
          answer: "You'll see initial traffic improvements within 2-3 months, with significant results by month 6. Content marketing is a long-term strategy that builds momentum over time. Unlike paid ads that stop when you stop paying, content continues generating leads months and years later."
        },
        {
          question: "How much content do we need to create?",
          answer: "We typically recommend 8-12 blog posts per month plus 2-4 premium content pieces (whitepapers, case studies) per quarter. This provides enough volume to build authority and SEO momentum while maintaining quality."
        },
        {
          question: "Can you write about our complex/technical industry?",
          answer: "Yes. We have writers with expertise across 15+ industries including healthcare, finance, technology, manufacturing, and more. We take time to understand your industry, products, and audience before creating any content."
        },
        {
          question: "What's the ROI of content marketing vs. paid advertising?",
          answer: "Content marketing typically generates 3x more leads than paid advertising at a lower cost per lead. Plus, content continues working long after creation. A blog post from 6 months ago can still generate leads today, while paid ads stop the moment you stop spending."
        },
        {
          question: "Do you handle content promotion or just creation?",
          answer: "We handle both. Content creation is only half the battle - we also promote content through social media, email newsletters, content syndication, and outreach to maximize reach and impact."
        },
        {
          question: "How do you ensure content quality and accuracy?",
          answer: "Every piece goes through our quality process: research, writing by industry expert, editing, fact-checking, SEO optimization, and final review. We also collaborate with your team to ensure technical accuracy."
        },
        {
          question: "Can we see samples of your work?",
          answer: "Absolutely. We'll share relevant samples from your industry during our consultation. We've created 5,000+ pieces of content across 15+ industries with consistent quality."
        },
        {
          question: "How do you measure content marketing success?",
          answer: "We track organic traffic, keyword rankings, time on page, lead generation, and ultimately revenue impact. You get monthly reports showing all key metrics and how content is contributing to business goals."
        }
      ]}
      
      finalCTAHeadline="Ready to Build a Content Marketing Machine?"
      finalCTADescription="Join 400+ companies that have transformed their marketing with strategic content. Generate 3x more leads, build lasting authority, and create content that works 24/7 to grow your business. Schedule your free strategy session today."
      psText="We only take 4 new content marketing clients per month to ensure quality. Don't let your competitors dominate content while you wait. Schedule your free strategy session now and secure your spot."
      
      
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/digital-marketing" },
        { label: "Content Marketing", href: "/digital-marketing/content" }
      ]}
    />
  );
}
