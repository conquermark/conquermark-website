import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Coming Soon</h1>
        <p className="text-xl text-foreground/70 mb-8">
          This page is under construction. Check back soon!
        </p>
        <Link href="/">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Back to Home <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
