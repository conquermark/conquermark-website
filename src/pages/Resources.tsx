import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckSquare } from "lucide-react";
import { toast } from "sonner";

export default function Resources() {
  const resources = [
    {
      icon: CheckSquare,
      title: "MVP Launch Checklist",
      description: "Complete checklist covering everything from idea validation to post-launch growth.",
      type: "PDF"
    },
    {
      icon: FileText,
      title: "Product Validation Template",
      description: "Customer interview scripts and landing page test framework.",
      type: "Google Doc"
    },
    {
      icon: FileText,
      title: "Pitch Deck Template",
      description: "Investor-ready pitch deck template with examples and best practices.",
      type: "PowerPoint"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources & Downloads</h1>
            <p className="text-xl text-foreground/70">
              Free templates, checklists, and guides to help you build and launch successful products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="grid gap-6">
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{resource.title}</h3>
                        <p className="text-foreground/70">{resource.description}</p>
                        <div className="text-sm text-accent mt-1">{resource.type}</div>
                      </div>
                    </div>
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => toast.success("Download started!")}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
