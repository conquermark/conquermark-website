import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Star, Quote, ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Reviews() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const stats = [
    { icon: Star, number: "5.0", label: "Average Rating", sublabel: "Based on 200+ reviews" },
    { icon: Users, number: "500+", label: "Happy Clients", sublabel: "Across 15 countries" },
    { icon: TrendingUp, number: "98%", label: "Satisfaction Rate", sublabel: "Would recommend us" },
    { icon: Award, number: "50+", label: "Industry Awards", sublabel: "Recognition for excellence" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      company: "Healthcare SaaS",
      rating: 5,
      text: "Conquermark transformed our idea into a fully functional healthcare platform in just 12 weeks. Their team understood our vision, provided valuable insights, and delivered a product that exceeded our expectations. The attention to detail and commitment to quality is unmatched.",
      result: "Raised $2M seed funding within 3 months of launch"
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      company: "E-commerce Platform",
      rating: 5,
      text: "Working with Conquermark was a game changer for our business. They did not just build our e-commerce platform, they helped us think through the entire customer journey, optimize for conversions, and scale our infrastructure. Revenue grew 300% in the first year.",
      result: "300% revenue growth in year one"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager, FinanceFlow",
      company: "Fintech Startup",
      rating: 5,
      text: "I have worked with many development agencies, but Conquermark stands out. They are true partners who care about your success. Communication was excellent, timelines were met, and the quality of code was top-notch. I would not hesitate to work with them again.",
      result: "Launched on time and under budget"
    },
    {
      name: "David Martinez",
      role: "CTO, EduTech Solutions",
      company: "Education Technology",
      rating: 5,
      text: "The team at Conquermark brought our complex EdTech platform to life with incredible efficiency. They handled everything from UX design to backend architecture to deployment. Their expertise in AI integration helped us build features we did not even know were possible.",
      result: "10,000+ students onboarded in first month"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, FitLife App",
      company: "Health & Fitness",
      rating: 5,
      text: "Conquermark helped us pivot our business model and rebuild our app from scratch. They were patient, understanding, and incredibly skilled. The new app has a 4.8 star rating on the App Store and our user retention has doubled. Best investment we made.",
      result: "4.8 star App Store rating, 2x retention"
    },
    {
      name: "James Wilson",
      role: "CEO, LogiTrack",
      company: "Logistics Software",
      rating: 5,
      text: "We needed a robust logistics management system that could handle complex routing and real-time tracking. Conquermark delivered a scalable solution that processes thousands of shipments daily without any issues. Their post-launch support has been exceptional.",
      result: "Processing 5,000+ shipments daily"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director, BrandBoost",
      company: "Marketing Agency",
      rating: 5,
      text: "Conquermark built our client portal and automation tools that saved us hundreds of hours every month. The ROI was immediate. Their understanding of marketing workflows and ability to translate that into software is impressive. Highly recommend!",
      result: "Saved 200+ hours per month"
    },
    {
      name: "Robert Kim",
      role: "Founder, FoodieConnect",
      company: "Food Delivery",
      rating: 5,
      text: "From concept to launch in 10 weeks! Conquermark moved fast without cutting corners. They built our food delivery platform with all the features we needed: real-time tracking, payment processing, ratings, and more. The app is stable, fast, and users love it.",
      result: "Launched in 10 weeks, 50K downloads"
    },
    {
      name: "Amanda Foster",
      role: "COO, PropertyPro",
      company: "Real Estate Tech",
      rating: 5,
      text: "We had a tight deadline for our real estate platform launch. Conquermark not only met the deadline but delivered a product that wowed our stakeholders. Their project management, communication, and technical skills are world-class.",
      result: "Launched on time, exceeded stakeholder expectations"
    }
  ];

  const platforms = [
    { name: "Clutch", rating: "5.0", reviews: "50+", logo: "🏆" },
    { name: "Google", rating: "4.9", reviews: "100+", logo: "⭐" },
    { name: "Trustpilot", rating: "5.0", reviews: "30+", logo: "💎" },
    { name: "GoodFirms", rating: "5.0", reviews: "20+", logo: "🎯" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/">
                <span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span>
              </Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/about">
                <span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">About</span>
              </Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Reviews</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trusted by Founders Worldwide
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Do not just take our word for it. Here is what our clients say about working with Conquermark.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-foreground/60">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Rated 5 Stars Across Platforms</h2>
              <p className="text-foreground/70">See what clients say on independent review sites</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="text-4xl mb-3">{platform.logo}</div>
                    <h3 className="font-bold text-lg mb-1">{platform.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-accent mb-1">{platform.rating}</div>
                    <div className="text-sm text-foreground/60">{platform.reviews} reviews</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-xl text-foreground/70">
                Real stories from real clients who achieved real results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-accent/20 mb-3" />

                    <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                      {testimonial.text}
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <p className="text-green-800 font-semibold text-sm">
                        ✓ {testimonial.result}
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-foreground/70">{testimonial.role}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-8 h-8 fill-accent" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold">4.9/5.0</span>
            </div>
            <p className="text-xl text-foreground/80">Based on 50+ client reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { name: "Sarah Johnson", company: "HealthTech Startup", review: "Conquermark took our idea from concept to a fully launched app in just 3 months. Their team was professional, responsive, and delivered beyond our expectations." },
              { name: "Michael Chen", company: "E-commerce Platform", review: "The product validation process saved us months of wasted effort. They helped us pivot to a winning strategy before we invested heavily in development." },
              { name: "Emily Rodriguez", company: "FinTech App", review: "Best decision we made was partnering with Conquermark. They handled everything from design to marketing, allowing us to focus on our business." },
              { name: "David Park", company: "SaaS Founder", review: "Their growth marketing expertise helped us acquire our first 1,000 users within 6 weeks of launch. Highly recommend!" }
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground/70 mb-4">See more reviews on</p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://clutch.co" target="_blank" rel="noopener noreferrer">
                View on Clutch
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create a roadmap for success.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setContactModalOpen(true)}
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
