import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, Clock, Shield, Award, TrendingUp, Users, Star, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ClientLogos from "@/components/ClientLogos";
import VideoLightbox from "@/components/VideoLightbox";

export default function FreeAuditLanding() {
  const [location] = useLocation();
  const serviceType = new URLSearchParams(location.split('?')[1] || '').get("service") || "seo";
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
    monthlyTraffic: "",
    mainGoal: "",
    currentChallenges: "",
    phone: "",
  });

  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // Service-specific content
  const serviceContent = {
    seo: {
      title: "Free SEO Audit",
      subtitle: "Get a comprehensive SEO analysis of your website",
      value: "$497",
      benefits: [
        "Complete technical SEO audit (50+ checkpoints)",
        "Keyword opportunity analysis",
        "Competitor backlink analysis",
        "On-page optimization recommendations",
        "Local SEO assessment (if applicable)",
        "Mobile-first indexing review",
      ],
      deliverables: [
        "30-page detailed SEO audit report",
        "Prioritized action plan with timeline",
        "Keyword gap analysis vs competitors",
        "Technical issues with severity ratings",
        "30-min strategy call with SEO specialist",
      ],
    },
    ppc: {
      title: "Free Google Ads Audit",
      subtitle: "Discover how to reduce ad spend and increase conversions",
      value: "$397",
      benefits: [
        "Account structure analysis",
        "Keyword waste identification",
        "Ad copy performance review",
        "Landing page conversion analysis",
        "Quality Score optimization tips",
        "Budget allocation recommendations",
      ],
      deliverables: [
        "Complete Google Ads account audit",
        "Wasted spend analysis (save 20-40%)",
        "Ad copy improvement suggestions",
        "Conversion tracking setup review",
        "30-min call with PPC specialist",
      ],
    },
    socialAds: {
      title: "Free Social Ads Audit",
      subtitle: "Optimize your Facebook & Instagram ad performance",
      value: "$397",
      benefits: [
        "Campaign structure analysis",
        "Audience targeting review",
        "Creative performance assessment",
        "Ad spend efficiency analysis",
        "Conversion tracking audit",
        "Retargeting strategy recommendations",
      ],
      deliverables: [
        "Full social ads account audit",
        "Audience targeting improvements",
        "Creative recommendations",
        "Budget optimization plan",
        "30-min strategy call",
      ],
    },
    content: {
      title: "Free Content Strategy Audit",
      subtitle: "Transform your content into a lead generation machine",
      value: "$297",
      benefits: [
        "Content gap analysis",
        "SEO content optimization review",
        "Content calendar recommendations",
        "Engagement metrics analysis",
        "Content distribution strategy",
        "Conversion optimization tips",
      ],
      deliverables: [
        "Content audit report",
        "Topic cluster recommendations",
        "Content calendar template",
        "SEO optimization checklist",
        "30-min strategy call",
      ],
    },
    ai: {
      title: "Free AI Opportunity Audit",
      subtitle: "Discover how AI can transform your marketing",
      value: "$497",
      benefits: [
        "AI readiness assessment",
        "ChatGPT optimization opportunities",
        "AI-powered content strategy",
        "Automation potential analysis",
        "GEO (Generative Engine Optimization)",
        "AI tool recommendations",
      ],
      deliverables: [
        "AI opportunity report",
        "ChatGPT visibility analysis",
        "AI implementation roadmap",
        "Tool recommendations",
        "30-min AI strategy call",
      ],
    },
    local: {
      title: "Free Local SEO Audit",
      subtitle: "Dominate local search and attract nearby customers",
      value: "$297",
      benefits: [
        "Google Business Profile optimization",
        "Local citation audit",
        "Review management analysis",
        "Local keyword opportunities",
        "NAP consistency check",
        "Local link building opportunities",
      ],
      deliverables: [
        "Local SEO audit report",
        "GBP optimization checklist",
        "Citation building plan",
        "Review generation strategy",
        "30-min local SEO call",
      ],
    },
    advertising: {
      title: "Free Digital Advertising Audit",
      subtitle: "Maximize ROI across all your advertising channels",
      value: "$397",
      benefits: [
        "Multi-channel performance analysis",
        "Budget allocation review",
        "Creative performance assessment",
        "Conversion funnel analysis",
        "Retargeting strategy audit",
        "Attribution model review",
      ],
      deliverables: [
        "Cross-channel audit report",
        "Budget optimization plan",
        "Creative recommendations",
        "Conversion rate improvements",
        "30-min strategy call",
      ],
    },
  };

  const content = serviceContent[serviceType as keyof typeof serviceContent] || serviceContent.seo;

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.website) {
        toast({
          title: "Required fields missing",
          description: "Please fill in your name, email, and website URL.",
          variant: "destructive",
        });
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Free Audit Form Submitted:", { ...formData, serviceType });
    toast({
      title: "Audit Request Received! 🎉",
      description: "We'll send your detailed audit report within 24 hours.",
    });
    
    // Here you would send to your backend/CRM
    // For now, just log it
  };

  const openVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setVideoOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">{content.value} Value • 100% Free • No Credit Card</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {content.title}
                </h1>
                
                <p className="text-xl text-blue-100 mb-6">
                  {content.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-300" />
                    <span className="text-sm">Delivered in 24 Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span className="text-sm">No Commitment Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-300" />
                    <span className="text-sm">150+ Companies Trust Us</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold">4.8/5</div>
                    <div className="flex gap-0.5 justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs text-blue-200 mt-1">150+ Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-xs text-blue-200 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-xs text-blue-200 mt-1">Clients Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Free Audit</h3>
                    <span className="text-sm text-gray-500">Step {step} of 2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(step / 2) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700">Business Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="website" className="text-gray-700">Website URL *</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-700">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold"
                      >
                        Continue <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>

                      <p className="text-xs text-center text-gray-500">
                        🔒 Your information is 100% secure. We never share your data.
                      </p>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="businessType" className="text-gray-700">Business Type</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="b2b">B2B Services</SelectItem>
                            <SelectItem value="local">Local Business</SelectItem>
                            <SelectItem value="agency">Agency</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="monthlyTraffic" className="text-gray-700">Monthly Website Traffic</Label>
                        <Select value={formData.monthlyTraffic} onValueChange={(value) => handleInputChange("monthlyTraffic", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select traffic range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1k">0 - 1,000 visitors</SelectItem>
                            <SelectItem value="1k-10k">1,000 - 10,000 visitors</SelectItem>
                            <SelectItem value="10k-50k">10,000 - 50,000 visitors</SelectItem>
                            <SelectItem value="50k-100k">50,000 - 100,000 visitors</SelectItem>
                            <SelectItem value="100k+">100,000+ visitors</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="mainGoal" className="text-gray-700">Main Goal</Label>
                        <Select value={formData.mainGoal} onValueChange={(value) => handleInputChange("mainGoal", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="What's your primary goal?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="traffic">Increase Traffic</SelectItem>
                            <SelectItem value="leads">Generate More Leads</SelectItem>
                            <SelectItem value="sales">Boost Sales/Revenue</SelectItem>
                            <SelectItem value="rankings">Improve Rankings</SelectItem>
                            <SelectItem value="roi">Improve ROI</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="currentChallenges" className="text-gray-700">Current Challenges (Optional)</Label>
                        <Textarea
                          id="currentChallenges"
                          placeholder="Tell us about your biggest marketing challenges..."
                          value={formData.currentChallenges}
                          onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                          rows={3}
                          className="mt-1"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 text-lg font-semibold"
                      >
                        Get My Free {content.title} Report 🎉
                      </Button>

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        ← Back to previous step
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 font-medium">Trusted by 150+ Companies Worldwide</p>
          <ClientLogos />
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Receive
              </h2>
              <p className="text-xl text-gray-600">
                A comprehensive {content.title.toLowerCase()} delivered within 24 hours
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Audit Includes:</h3>
                <ul className="space-y-4">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">You'll Get:</h3>
                </div>
                <ul className="space-y-4">
                  {content.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Value:</span>
                    <span className="text-3xl font-bold text-blue-600">{content.value}</span>
                  </div>
                  <p className="text-center mt-2 text-green-600 font-semibold">100% FREE • No Credit Card Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Results from Real Clients
              </h2>
              <p className="text-xl text-gray-600">
                See what our clients have to say about working with us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Video Testimonial 1 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 cursor-pointer group"
                  onClick={() => openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Anytime Contacts</p>
                    <p className="text-sm text-blue-100">E-commerce</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Working with Conquermark delivered amazing results: <strong>$57,000+ organic revenue in 90 days</strong>. Their expertise transformed our business."
                  </p>
                  <p className="text-sm text-gray-500">— Client, Contact Lenses</p>
                </div>
              </div>

              {/* Video Testimonial 2 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="relative h-48 bg-gradient-to-br from-orange-500 to-red-600 cursor-pointer group"
                  onClick={() => openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-orange-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">League Outfitters</p>
                    <p className="text-sm text-orange-100">Sports Equipment</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Conquermark helped us achieve <strong>$50,000+ organic revenue per month</strong>. Their dedication and expertise are unmatched."
                  </p>
                  <p className="text-sm text-gray-500">— Client, Sports Equipment</p>
                </div>
              </div>

              {/* Video Testimonial 3 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600 cursor-pointer group"
                  onClick={() => openVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-green-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Scale Digital</p>
                    <p className="text-sm text-green-100">Marketing Agency</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Professional, responsive, and results-driven. Conquermark feels like an extension of our team, not just a vendor."
                  </p>
                  <p className="text-sm text-gray-500">— Emily Rodriguez, VP of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Free */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Is It <span className="text-blue-600">100% Free?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Instead of spending our marketing budget on flashy ads or expensive PR campaigns, we prefer to invest our time and expertise showing you exactly how we can help your business grow. 
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Demonstrating our skills through real, actionable insights IS our best advertising. We're confident that once you see the value we provide in this free audit, you'll want to work with us long-term.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8 inline-block">
              <p className="text-xl font-semibold text-gray-900 mb-2">
                🎯 No Hidden Catches • No Commitments • No Credit Card Required
              </p>
              <p className="text-gray-600">
                Just honest-to-goodness free advice from experts who care about your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does it take to receive my audit?
                </h3>
                <p className="text-gray-700">
                  You'll receive your comprehensive audit report within 24 hours of submitting your request. We'll also schedule a 30-minute strategy call to walk you through the findings.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there really no catch? Why is it free?
                </h3>
                <p className="text-gray-700">
                  There's absolutely no catch. We provide this free audit as a way to demonstrate our expertise and build trust. There's no obligation to work with us afterward, though we hope you'll be impressed enough to consider it!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What if I don't have a website yet?
                </h3>
                <p className="text-gray-700">
                  No problem! We can still help. During your strategy call, we'll discuss your business goals and provide recommendations for getting started with digital marketing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Will you share my information with anyone?
                </h3>
                <p className="text-gray-700">
                  Never. Your information is 100% confidential and will only be used to create your audit report and contact you about your results. We never sell or share your data with third parties.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What happens after I receive my audit?
                </h3>
                <p className="text-gray-700">
                  After reviewing your audit, you can implement the recommendations yourself, or we can discuss how our team can help you execute the strategy. There's no pressure—the choice is entirely yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 150+ businesses that have discovered growth opportunities through our free audits
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl"
            >
              Get My Free {content.title} Report →
            </Button>
            <p className="mt-6 text-sm text-blue-200">
              ⚡ Limited spots available • Delivered within 24 hours • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      <VideoLightbox
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoUrl={currentVideo}
      />
    </div>
  );
}
