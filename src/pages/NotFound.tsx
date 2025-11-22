import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 mb-4">Popular pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/services">
                <span className="text-sm text-primary-foreground/80 hover:text-accent cursor-pointer underline">Services</span>
              </Link>
              <span className="text-primary-foreground/40">•</span>
              <Link href="/case-studies">
                <span className="text-sm text-primary-foreground/80 hover:text-accent cursor-pointer underline">Case Studies</span>
              </Link>
              <span className="text-primary-foreground/40">•</span>
              <Link href="/about">
                <span className="text-sm text-primary-foreground/80 hover:text-accent cursor-pointer underline">About</span>
              </Link>
              <span className="text-primary-foreground/40">•</span>
              <Link href="/contact">
                <span className="text-sm text-primary-foreground/80 hover:text-accent cursor-pointer underline">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
