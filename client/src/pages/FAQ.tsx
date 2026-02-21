import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services does Conquermark offer?",
          a: "We offer end-to-end product development services including mobile app development, web development, no-code solutions, digital marketing, product validation, wireframing/UX design, MVP development, and funding preparation."
        },
        {
          q: "Who are your typical clients?",
          a: "We work with early-stage founders, startup teams, product managers at SMBs, agencies outsourcing development, and investors looking for technical partners."
        },
        {
          q: "Where are you located?",
          a: "We're based in San Francisco, CA, but work with clients globally. We're comfortable with remote collaboration and have experience working across time zones."
        }
      ]
    },
    {
      category: "Pricing & Engagement",
      questions: [
        {
          q: "How much does it cost to build an app or website?",
          a: "It depends on complexity, features, and timeline. Simple MVPs start around $10-25k, while full-featured products range from $50-100k+. We offer fixed-price, time & materials, retainer, and equity partnership models."
        },
        {
          q: "Do you offer equity partnerships?",
          a: "Yes! For high-potential startups with limited cash, we can invest our expertise in exchange for equity. We evaluate each opportunity carefully and look for strong teams, large markets, and clear value propositions."
        },
        {
          q: "What's included in your pricing?",
          a: "Our pricing includes discovery, design, development, testing, launch support, and post-launch optimization. We provide transparent proposals with detailed scope and deliverables."
        },
        {
          q: "Do you offer ongoing support after launch?",
          a: "Yes! We offer maintenance and support packages including bug fixes, updates, new features, and optimization. Many clients continue working with us on a retainer basis."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          q: "How long does it take to build a product?",
          a: "MVPs typically take 8-12 weeks. More complex products take 3-6 months. No-code solutions can be ready in 4-8 weeks. We provide detailed timelines during the scoping phase."
        },
        {
          q: "What's your development process?",
          a: "We follow an agile process: Discovery (requirements, research) → Design (wireframes, UI/UX) → Build (development with regular demos) → Launch (deployment, marketing) → Optimize (data-driven improvements)."
        },
        {
          q: "How involved do I need to be?",
          a: "We're flexible! Some clients prefer weekly check-ins, while others want daily updates. We adapt to your communication style and availability."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What technologies do you use?",
          a: "For mobile: Swift, Kotlin, React Native, Flutter. For web: React, Next.js, Node.js. For no-code: Bubble, Webflow, Airtable. We choose the right stack based on your requirements, not our preferences."
        },
        {
          q: "Will I own the code and intellectual property?",
          a: "Yes! You own all code, designs, and IP. We provide full source code and documentation upon project completion."
        },
        {
          q: "Do you help with App Store submission?",
          a: "Absolutely! We handle the entire submission process for both App Store and Play Store, including asset preparation, descriptions, ASO, and responding to review feedback."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-foreground/70">
              Everything you need to know about working with Conquermark. Can't find what you're looking for? Contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {faqs.map((category, cidx) => (
              <div key={cidx}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qidx) => (
                    <Card key={qidx}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                        <p className="text-foreground/70">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We're here to help. Book a free consultation to discuss your project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
