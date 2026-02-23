import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Search, PenTool, Megaphone, CheckCircle2, TrendingUp, Users, Target } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";


export default function DigitalMarketingHub() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const pillars = [
    {
      title: "SEO & Visibility",
      description: "Dominate search rankings with enterprise-grade SEO and generative engine optimization.",
      icon: Search,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      link: "/digital-marketing/seo/overview",
      features: ["Enterprise SEO", "Local Dominance", "Generative Engine Optimization"]
    },
    {
      title: "AI Marketing",
      description: "Leverage AI agents and ChatGPT to automate content, support, and lead generation.",
      icon: TrendingUp,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      link: "/digital-marketing/ai/overview",
      features: ["AI Agents", "ChatGPT Integration", "Predictive Analytics"]
    },
    {
      title: "Content Strategy",
      description: "Create high-converting content that builds authority and drives organic traffic.",
      icon: PenTool,
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      link: "/digital-marketing/content/overview",
      features: ["Copywriting", "Social Media", "Video Production"]
    },
    {
      title: "Paid Advertising",
      description: "Scale your revenue with precision-targeted PPC, social ads, and programmatic campaigns.",
      icon: Megaphone,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      link: "/digital-marketing/advertising/overview",
      features: ["PPC Management", "Social Ads", "Programmatic Display"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <Header />
      <div className="pt-20">
        <Breadcrumbs />
      </div>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Data-Driven Growth Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Dominate Your Market with <br />
              <span className="text-blue-500">Digital Intelligence</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop guessing. Start growing. We combine AI precision with creative strategy to build marketing systems that generate predictable revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg shadow-lg shadow-blue-600/20 font-semibold"
                onClick={() => setContactModalOpen(true)}
              >
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-700 hover:bg-slate-800 text-slate-300 h-14 text-lg px-8 font-medium"
                onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-slate-800 bg-slate-900/50 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-slate-500 font-medium mb-6 uppercase tracking-wider">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder Logos - Replace with real client logos */}
            <div className="h-8 w-32 bg-slate-700/50 rounded animate-pulse" />
            <div className="h-8 w-32 bg-slate-700/50 rounded animate-pulse" />
            <div className="h-8 w-32 bg-slate-700/50 rounded animate-pulse" />
            <div className="h-8 w-32 bg-slate-700/50 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <section id="pillars" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Digital Dominance</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We don't just run ads. We build comprehensive ecosystems that capture, nurture, and convert leads at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.link}>
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 cursor-pointer h-full">
                  <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <ArrowRight className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <div className={`w-14 h-14 rounded-xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{pillar.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                        <CheckCircle2 className={`w-4 h-4 mr-2 ${pillar.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 bg-blue-900/10 border-y border-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
                  <BarChart className="w-4 h-4" />
                  Free Growth Audit
                </div>
                <h2 className="text-3xl font-bold mb-4">Where are you losing revenue?</h2>
                <p className="text-slate-400 mb-6">
                  Get a comprehensive 15-point audit of your digital presence. We'll identify hidden gaps in your SEO, ad spend, and conversion funnel.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                    SEO & Keyword Gap Analysis
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                    Competitor Ad Spend Spy
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                    Conversion Rate Optimization Check
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={() => setContactModalOpen(true)}
                >
                  Claim Your Free Audit
                </Button>
              </div>
              <div className="relative">
                {/* Abstract Audit Visual */}
                <div className="aspect-square rounded-2xl bg-slate-800 border border-slate-700 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
                  <div className="space-y-4">
                    <div className="h-2 w-1/3 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700/50 rounded-xl border border-slate-600/50 flex items-end justify-around p-4">
                      <div className="w-8 h-16 bg-blue-500/50 rounded-t" />
                      <div className="w-8 h-24 bg-blue-500/70 rounded-t" />
                      <div className="w-8 h-20 bg-blue-500/60 rounded-t" />
                      <div className="w-8 h-28 bg-green-500 rounded-t shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div className="h-2 w-1/4 bg-slate-700 rounded" />
                      <div className="h-6 w-20 bg-green-500/20 rounded-full flex items-center justify-center text-xs text-green-400 font-bold">
                        +127% ROI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
