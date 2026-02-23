import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-lg w-full bg-card border-border shadow-2xl">
        <CardContent className="pt-12 pb-12 px-8 text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Application Received
          </h1>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Thank you for securing your priority access. Our team is reviewing your application and will contact you within <span className="font-semibold text-foreground">24 hours</span> to discuss the next steps.
          </p>

          <div className="pt-6 space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg border border-border/50 text-sm text-muted-foreground">
              <p>While you wait, explore how other businesses are scaling with AI agents.</p>
            </div>
            
            <Link href="/">
              <Button className="w-full h-12 text-base font-medium group">
                Return to Homepage
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
