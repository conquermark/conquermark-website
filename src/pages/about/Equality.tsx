import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Equality() {
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
              <span className="text-primary-foreground">Equality & Diversity</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Equality & Diversity</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Building an inclusive workplace where everyone can thrive.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <p className="text-lg text-foreground/70 mb-6">
                At Conquermark, we believe that diverse teams build better products. We are committed to 
                creating an inclusive environment where people of all backgrounds, identities, and experiences 
                feel welcome and valued.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Equal Opportunity</h3>
              <p className="text-lg text-foreground/70 mb-6">
                We are an equal opportunity employer. We do not discriminate based on race, color, religion, 
                gender, gender identity, sexual orientation, national origin, age, disability, or any other 
                protected characteristic.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Inclusive Hiring</h3>
              <p className="text-lg text-foreground/70 mb-6">
                Our hiring process is designed to be fair and unbiased. We actively seek candidates from 
                underrepresented groups and provide accommodations to ensure everyone has an equal opportunity 
                to succeed.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Ongoing Education</h3>
              <p className="text-lg text-foreground/70 mb-6">
                We provide regular training on unconscious bias, inclusive leadership, and cultural competency 
                to ensure our team continues to grow in their understanding and practice of diversity and inclusion.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg mt-8">
                <p className="text-lg font-semibold mb-2">Questions or Concerns?</p>
                <p className="text-foreground/70">
                  If you have questions about our diversity and inclusion practices, or if you experience 
                  discrimination, please contact us at{" "}
                  <a href="mailto:diversity@conquermark.com" className="text-accent hover:underline">
                    diversity@conquermark.com
                  </a>
                </p>
              </div>
            </div>
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
