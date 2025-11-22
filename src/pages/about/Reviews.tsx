import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Reviews() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/about"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">About</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Conquermark Reviews</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Conquermark Reviews</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              See what our clients say about working with us.
            </p>
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


      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Ready to turn your idea into a successful product?
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
