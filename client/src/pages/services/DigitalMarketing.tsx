import { TrendingUp, ArrowRight, Brain, Search, Target, Video, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LeadMagnetHeroMarketing from "@/components/LeadMagnetHeroMarketing";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsDark from "@/components/TestimonialsDark";

export default function DigitalMarketing() {
  const categories = [
    {
      icon: Brain,
      title: "AI Services",
      count: "7 Services",
      description: "AI consulting, ChatGPT optimization, agent development, and enterprise GEO",
      link: "/digital-marketing/ai/overview",
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      icon: Search,
      title: "SEO & Search Visibility",
      count: "7 Services",
      description: "Generative engine SEO, traditional SEO, enterprise solutions, and local SEO",
      link: "/digital-marketing/seo/overview",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      count: "7 Services",
      description: "PPC management, social media ads, programmatic advertising, and local services",
      link: "/digital-marketing/advertising/overview",
      color: "bg-orange-500/20 text-orange-400"
    },
    {
      icon: Video,
      title: "Content Marketing",
      count: "7 Services",
      description: "Content strategy, copywriting, social management, and CTV/OTT advertising",
      link: "/digital-marketing/content/overview",
      color: "bg-green-500/20 text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* 1. NEW LEAD MAGNET HERO */}
      <LeadMagnetHeroMarketing />

      {/* 2. BENEFITS SECTION (Reused for consistency) */}
      <BenefitsSection />

      {/* 2.5 TESTIMONIALS (Dark Mode) */}
      <TestimonialsDark />

      {/* 3. CATEGORIES GRID */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Choose from 28 specialized services across 4 main categories, each designed to drive measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.title} href={category.link}>
                  <div className="group relative bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-xs font-semibold bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-700">
                          {category.count}
                        </span>
                      </div>
                      
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:gap-2 transition-all">
                        View Services
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Dark Mode) */}
      <section className="py-24 bg-slate-950">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Why Digital Marketing Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Measurable ROI",
                  desc: "Track every dollar spent and its impact on revenue. Our data-driven approach ensures you know exactly what's working."
                },
                {
                  title: "AI-Powered Optimization",
                  desc: "Leverage cutting-edge AI tools for campaign automation, audience targeting, and predictive analytics."
                },
                {
                  title: "Multi-Channel Strategy",
                  desc: "Reach your audience wherever they are - search engines, social media, email, streaming platforms, and emerging channels."
                },
                {
                  title: "Scalable Growth",
                  desc: "Start small and scale what works. Our flexible approach grows with your business, from startup to enterprise."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl hover:bg-slate-800 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (Dark Mode) */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl mb-10 text-purple-100/80">
              Get a free consultation and custom strategy tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 h-14 px-8 text-lg font-bold shadow-xl">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/digital-marketing">
                <Button size="lg" variant="outline" className="border-purple-400/30 text-purple-100 hover:bg-purple-900/50 h-14 px-8 text-lg">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
