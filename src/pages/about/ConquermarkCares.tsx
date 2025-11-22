import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function ConquermarkCares() {
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
              <span className="text-primary-foreground">Conquermark Cares</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Conquermark Cares</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Giving back through mentorship, education, and pro-bono work.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission to Give Back</h2>
              <p className="text-lg text-foreground/70">
                We believe in using our skills to make a positive impact. Through Conquermark Cares, we dedicate 
                time and resources to support causes we care about and help the next generation of entrepreneurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Free Mentorship</h3>
                  <p className="text-foreground/70 mb-4">
                    We offer free 1-on-1 mentorship sessions to early-stage founders, helping them refine their 
                    ideas, build their MVPs, and navigate the startup journey.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => setContactModalOpen(true)}
                  >
                    Apply for Mentorship
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Pro-Bono Projects</h3>
                  <p className="text-foreground/70 mb-4">
                    We partner with select nonprofits and social enterprises to build technology solutions at 
                    significantly reduced rates or pro-bono.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => setContactModalOpen(true)}
                  >
                    Submit Your Nonprofit
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">100+</div>
                  <p className="text-foreground/70">Hours of Free Mentorship</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <p className="text-foreground/70">Nonprofits Supported</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">$50K+</div>
                  <p className="text-foreground/70">In Pro-Bono Services</p>
                </div>
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
