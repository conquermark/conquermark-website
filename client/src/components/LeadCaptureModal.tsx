import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  data: {
    problem: string;
    savings: string;
    industry: string;
  };
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ open, onOpenChange, onSuccess, data }) => {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  // Initialize A/B Test Variant
  React.useEffect(() => {
    const storedVariant = localStorage.getItem('roi_lead_capture_variant');
    if (storedVariant === 'A' || storedVariant === 'B') {
      setVariant(storedVariant);
    } else {
      const newVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem('roi_lead_capture_variant', newVariant);
      setVariant(newVariant);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would send this data to your backend/CRM
    console.log('Lead Captured:', { 
      email, 
      name, 
      company, 
      ...data,
      ab_variant: variant, // Track which variant converted
      ab_variant_name: variant === 'A' ? 'Authority Focus' : 'Benefit Focus'
    });
    
    setLoading(false);
    onSuccess();
    onOpenChange(false);
    setLocation("/thank-you");
  };

  // Variant Content Definitions
  const content = {
    A: {
      title: "Unlock Your Full Diagnostic Report",
      cta: "Unlock My Report Now",
      description: (
        <>
          Enter your details to see the complete breakdown of your <strong>{data.savings}</strong> potential savings and how to fix <strong>{data.problem}</strong>.
        </>
      )
    },
    B: {
      title: "See Exactly How Much You Can Save",
      cta: "Reveal My Savings",
      description: (
        <>
          Stop wasting <strong>{data.savings}</strong> annually. Get your personalized roadmap to eliminate <strong>{data.problem}</strong> today.
        </>
      )
    }
  };

  const currentContent = content[variant];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <DialogHeader>
          <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <DialogTitle className="text-center text-xl font-bold text-slate-900 dark:text-white">
            {currentContent.title}
          </DialogTitle>
          <DialogDescription className="text-center text-slate-600 dark:text-slate-400">
            {currentContent.description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@company.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company" 
              placeholder="Acme Inc." 
              required 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 font-semibold shadow-lg"
              disabled={loading}
            >
              {loading ? 'Generating Report...' : currentContent.cta}
              {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
            </Button>
            <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              100% Secure. We never spam.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
