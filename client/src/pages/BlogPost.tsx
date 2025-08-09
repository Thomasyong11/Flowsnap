import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPost } from "@/lib/constants";
import { Link } from "wouter";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // For now, we only have one blog post
  if (slug !== blogPost.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog" data-testid="back-to-blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="glass-effect rounded-2xl p-8">
          <div className="mb-8">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
              Featured
            </span>
            <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{blogPost.date}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Are you tired of playing phone tag with clients or double-booking appointments? 
              Busy days can quickly turn chaotic when your booking system isn't working for you. 
              Here's why automation helps and three simple ways to get started.
            </p>
            
            <h4 className="text-xl font-bold mb-4 text-foreground">1. Use an Online Booking Form</h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tools like Google Forms or Microsoft Forms can capture essential client information 
              24/7. Keep fields minimal - name, service needed, preferred dates, and contact info. 
              Your clients can book when it's convenient for them, not just during business hours.
            </p>
            
            <h4 className="text-xl font-bold mb-4 text-foreground">2. Sync with Your Calendar</h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connect your forms to Google Calendar or Outlook to avoid double-booking. 
              If you work with partners or employees, shared calendars ensure everyone 
              stays on the same page without constant check-ins.
            </p>
            
            <h4 className="text-xl font-bold mb-4 text-foreground">3. Automatic Confirmations</h4>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use Zapier or Power Automate to send instant email or WhatsApp confirmations. 
              Follow up with reminders 24 hours before appointments to reduce no-shows. 
              Your clients feel confident, and you spend less time on administrative tasks.
            </p>
            
            <div className="bg-secondary/10 rounded-lg p-6 border-l-4 border-secondary">
              <p className="text-foreground">
                <strong>The bottom line:</strong> Reliability builds trust with your clients. 
                FlowSnap Solutions can help you set up these automated systems using tools 
                you already have, so you can focus on what you do best.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Bookings?</h3>
            <p className="text-muted-foreground mb-6">
              Let's help you set up these systems for your business.
            </p>
            <Link href="/contact" data-testid="blog-post-cta">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started Today
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
