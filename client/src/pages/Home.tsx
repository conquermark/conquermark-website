import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { 
  Smartphone, Globe, Zap, TrendingUp, CheckCircle2, 
  ArrowRight, Lightbulb, Pencil, Rocket, BarChart3,
  Play, Quote, Mail, Shield, Clock, Users, Star, Award, Target, Search
} from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import { getSEOData } from "@/config/seoData";
import LeadMagnetHero from "@/components/LeadMagnetHero";
import ContactModal from "@/components/ContactModal";
import Breadcrumbs from "@/components/Breadcrumbs";

// Lazy load heavy components
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const VideoLightbox = lazy(() => import("@/components/VideoLightbox"));
const TestimonialSubmissionModal = lazy(() => import("@/components/TestimonialSubmissionModal"));
const TestimonialsDarkHome = lazy(() => import("@/components/TestimonialsDarkHome"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const PriorityAccessForm = lazy(() => import("@/components/PriorityAccessForm"));

export default function Home() {
  const seoData = getSEOData('/');

  const [email, setEmail] = useState("");
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [currentVideoCaption, setCurrentVideoCaption] = useState("");
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openVideoLightbox = (testimonial: any) => {
    setCurrentVideo(testimonial.video);
    setCurrentVideoTitle(`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`);
    setCurrentVideoCaption(testimonial.caseNote);
    setVideoLightboxOpen(true);
  };

  const videoTestimonials = [
    {
      name: "Terrence",
      video: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/gYCQCRyRTvyLrZjt.mp4",
      photo: "/testimonial-terrence.webp",
      company: "Kickads",
      role: "Co-Founder",
      quote: "From idea to funded startup - Conquermark guided us through product validation, MVP development, and pitch preparation.",
      caseNote: "Raised $500K seed round after launching MVP built by Conquermark."
    },
    {
      name: "Felipe",
      video: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/pIOttqeQuWutclXc.mp4",
      photo: "/testimonial-felipe.webp",
      company: "Intermarketing",
      role: "CEO",
      quote: "The team at Conquermark transformed our e-commerce platform. Revenue grew 3x in 6 months.",
      caseNote: "Complete platform redesign with conversion optimization that tripled revenue."
    },
    {
      name: "Franki",
      video: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/SISIqbNGLDlkbBWc.mp4",
      photo: "/testimonial-frankie.webp",
      company: "GroupMori",
      role: "Founder",
      quote: "Conquermark helped us launch our app in just 8 weeks. Their expertise in mobile development and marketing was invaluable.",
      caseNote: "Launched a fitness tracking app that reached 10K users in the first month."
    }
  ];

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://conquermark.com/"
        schema={seoData.schema}
      />
      <div className="min-h-screen">
        <Breadcrumbs />
        {/* 1. NEW LEAD MAGNET HERO SECTION */}
        <LeadMagnetHero />

        {/* 1.5 BRAND POSITIONING STATEMENT */}
        <section className="py-16 bg-background border-b border-white/5">
          <div className="container text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Are An <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI Automation Agency</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't just build websites or run ads. We build <strong>autonomous systems</strong> that scale your business. 
              Whether you need an AI-powered mobile app, a self-driving marketing funnel, or automated operations—we engineer intelligence into every layer of your growth.
            </p>
          </div>
        </section>

        {/* 2. BENEFITS SECTION */}
        <Suspense fallback={<div className="py-20 text-center">Loading benefits...</div>}>
          <BenefitsSection />
        </Suspense>

        {/* 3. SOCIAL PROOF BAR */}
        <section className="py-10 border-y border-white/5 bg-black/20">
          <div className="container">
            <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest">Trusted by innovative startups</p>
            <Suspense fallback={<div className="h-12"></div>}>
              <ClientLogos />
            </Suspense>
          </div>
        </section>

        {/* 4. THE AUTOMATION PROTOCOL (HOW IT WORKS) */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/5 to-background pointer-events-none" />
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Automation Protocol</h2>
              <p className="text-xl text-muted-foreground">
                We don't guess. We engineer. Our 4-step process transforms manual chaos into autonomous order.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Architect",
                  desc: "We map your entire workflow, identify bottlenecks, and design a custom AI architecture.",
                  icon: <Search className="w-6 h-6 text-blue-400" />
                },
                {
                  step: "02",
                  title: "Build & Integrate",
                  desc: "We deploy AI agents and connect your stack (CRM, Email, Slack) into a unified system.",
                  icon: <Zap className="w-6 h-6 text-cyan-400" />
                },
                {
                  step: "03",
                  title: "Validate & Test",
                  desc: "Rigorous stress-testing to ensure 99.9% accuracy before we flip the switch.",
                  icon: <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                },
                {
                  step: "04",
                  title: "Scale & Optimize",
                  desc: "Continuous monitoring and refinement to maximize ROI as your volume grows.",
                  icon: <TrendingUp className="w-6 h-6 text-purple-400" />
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative h-full bg-card/50 border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-4xl font-bold text-white/5 mb-4">{item.step}</div>
                      <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. AI-POWERED CASE STUDY */}
        <section className="py-24 bg-black/40 border-y border-white/5">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  <span>Real Results</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Saved 40+ Hours Per Week & Reduced Tickets by 70%
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  How we helped a logistics company deploy an AI Support Agent to handle 5,000+ monthly inquiries instantly.
                </p>
                
                <div className="space-y-6 mb-10">
                  {[
                    { label: "Response Time", before: "4 Hours", after: "2 Seconds" },
                    { label: "Support Costs", before: "$12k/mo", after: "$2.5k/mo" },
                    { label: "CSAT Score", before: "3.8/5", after: "4.9/5" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                      <span className="font-medium">{stat.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground line-through text-sm">{stat.before}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <span className="text-green-400 font-bold">{stat.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/case-studies">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full">
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card/50 aspect-video flex items-center justify-center group cursor-pointer" onClick={() => openVideoLightbox(videoTestimonials[0])}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-medium text-lg">"We scaled without hiring a single new support agent."</p>
                    <p className="text-white/60 text-sm mt-2">- Terrence, Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. VIDEO TESTIMONIALS */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Founders Trust Conquermark</h2>
              <p className="text-xl text-muted-foreground">
                Hear directly from the entrepreneurs who automated their growth with us.
              </p>
            </div>
            
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading testimonials...</div>}>
              <TestimonialsDarkHome 
                testimonials={videoTestimonials} 
                onPlayVideo={openVideoLightbox} 
              />
            </Suspense>
          </div>
        </section>

        {/* 7. PERFORMANCE ASSURANCE (ZERO RISK) */}
        <section className="py-24 bg-blue-950/20 border-y border-blue-500/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-8">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Performance Assurance</h2>
              <p className="text-xl text-muted-foreground mb-10">
                We don't just deliver code; we deliver outcomes. Our contracts are backed by strict SLAs and performance guarantees.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="p-6 rounded-xl bg-background/50 border border-white/5">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" /> ROI-First Scope
                  </h3>
                  <p className="text-sm text-muted-foreground">We define success metrics before we start. If we don't hit them, we keep working until we do.</p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 border border-white/5">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" /> On-Time Delivery
                  </h3>
                  <p className="text-sm text-muted-foreground">We respect your roadmap. Late delivery penalties are written directly into our agreements.</p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 border border-white/5">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-400" /> Bug-Free Warranty
                  </h3>
                  <p className="text-sm text-muted-foreground">30-day post-launch support included. Any bugs found are fixed immediately at zero cost.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-background pointer-events-none" />
          <div className="container relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Automate?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Stop trading time for money. Build a business that runs itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 rounded-full text-lg shadow-lg shadow-blue-900/20">
                  Book Strategy Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 px-10 h-14 rounded-full text-lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* MODALS */}
      <Suspense fallback={null}>
        {videoLightboxOpen && (
          <VideoLightbox 
            open={videoLightboxOpen} 
            onOpenChange={setVideoLightboxOpen} 
            videoUrl={currentVideo}
            title={currentVideoTitle}
            caption={currentVideoCaption}
          />
        )}
        
        {testimonialModalOpen && (
          <TestimonialSubmissionModal 
            open={testimonialModalOpen} 
            onOpenChange={setTestimonialModalOpen} 
          />
        )}

        <ContactModal 
          open={contactModalOpen} 
          onOpenChange={setContactModalOpen} 
        />
      </Suspense>
    </>
  );
}

function Button({ className, variant = "default", size = "default", ...props }: any) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${className}`} 
      {...props} 
    />
  );
}
