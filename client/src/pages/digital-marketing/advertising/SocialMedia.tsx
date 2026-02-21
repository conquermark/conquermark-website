import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function AdvertisingSocialMedia() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const benefits = ["Platform-specific strategies", "Creative testing and optimization", "Audience segmentation", "Retargeting campaigns"];

  return (
    <div className="min-h-screen pb-20">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/digital-marketing"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Digital Marketing</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground/70">Digital Advertising</span>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Social Media Advertising</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Social Media Advertising</h1>
            </div>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">Facebook, Instagram, LinkedIn, and TikTok advertising that converts.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setContactModalOpen(true)}>
              Request Paid Media Proposal <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Campaign Results</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">3.5x</div>
                    <p className="text-foreground/70">ROAS Improvement</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">-42%</div>
                    <p className="text-foreground/70">Cost Per Acquisition</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">+180%</div>
                    <p className="text-foreground/70">Conversion Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Advertising?</h2>
            <p className="text-xl text-foreground/70 mb-8">Get a free advertising audit and custom growth strategy.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setContactModalOpen(true)}>
              Get Free Advertising Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
      
      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/digital-marketing/advertising/enterprise-social">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full border hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Enterprise Social Media Ads</h3>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/digital-marketing/content/social-management">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full border hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Social Media Management</h3>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/digital-marketing/advertising/ppc">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full border hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">PPC Management</h3>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            </div>
            <div className="text-center">
              <Link href="/digital-marketing">
                <Button variant="outline" className="gap-2">
                  View All Digital Marketing Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Which social platforms do you advertise on?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We manage ads on Facebook, Instagram, LinkedIn, TikTok, Twitter, Pinterest, and Snapchat. Platform selection depends on your target audience and business goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How do you target audiences?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We use detailed demographic targeting, interest-based audiences, lookalike audiences, retargeting, and AI-powered audience expansion. Our targeting strategies are continuously refined based on performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">What ad formats work best?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                It varies by platform and goal. We test video ads, carousel ads, stories, reels, and static images. Video typically performs best for awareness, while carousel ads excel for e-commerce.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">How do you measure social media ROI?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We track conversions using pixel tracking, UTM parameters, and platform analytics. You'll see detailed attribution showing which platforms, audiences, and creatives drive the best results.
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
