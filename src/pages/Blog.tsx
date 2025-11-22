import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      title: "How to Validate Your Product Idea Before Building",
      excerpt: "Save time and money by validating your idea with customers before writing a single line of code.",
      date: "Nov 1, 2024",
      author: "Conquermark Team",
      category: "Product Strategy"
    },
    {
      title: "MVP Development: How Much Does It Really Cost?",
      excerpt: "A comprehensive breakdown of MVP development costs and how to budget effectively for your startup.",
      date: "Oct 28, 2024",
      author: "Conquermark Team",
      category: "Development"
    },
    {
      title: "Growth Loops: The Secret to Sustainable User Acquisition",
      excerpt: "Learn how to build self-sustaining growth loops that reduce your customer acquisition cost over time.",
      date: "Oct 25, 2024",
      author: "Conquermark Team",
      category: "Growth Marketing"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-foreground/70">
              Practical advice on product development, growth marketing, and building successful startups.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {posts.map((post, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-sm font-semibold text-accent mb-2">{post.category}</div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <Button variant="outline">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
