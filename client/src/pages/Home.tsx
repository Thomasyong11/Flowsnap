import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { PricingTile } from "@/components/ui/pricing-tile";
import { Testimonial } from "@/components/ui/testimonial";
import { BlogCard } from "@/components/ui/blog-card";
import { services, testimonials, trustIndicators, blogPost } from "@/lib/constants";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden geometric-bg">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-45 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-accent/20 rotate-12 animate-float" style={{ animationDelay: '-4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Simple Tools.</span><br />
                <span className="text-foreground">Smoother Days.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Helping small service businesses save time with easy, affordable automation.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" data-testid="hero-cta-primary">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/services" data-testid="hero-cta-secondary">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid sm:grid-cols-3 gap-4">
                {trustIndicators.map((indicator, index) => (
                  <div 
                    key={index}
                    className="glass-effect rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="text-xl mb-2">{indicator.icon}</div>
                    <p className="text-sm font-medium">{indicator.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative animate-fade-in">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center">
                    <Rocket className="text-white text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Automation Made Simple</h3>
                  <p className="text-muted-foreground">Transform your workflow with tools that actually work for small businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Services"
            subtitle="Three simple solutions to streamline your business"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <PricingTile
                key={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                gradient={service.gradient}
                onAction={() => window.location.href = '/services'}
                actionText="Learn More"
              />
            ))}
          </div>
          
          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <div className="glass-effect rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-lg mb-2"><strong>Total setup: $380 CAD</strong></p>
              <p className="text-muted-foreground">Optional tools: Zapier Starter ~$29/mo; Google Workspace ~$7–$10/mo. Free tiers used where possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What Our Clients Say" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Latest from Our Blog"
            subtitle="Tips and insights for small business automation"
          />
          
          <div className="max-w-4xl mx-auto">
            <BlogCard
              {...blogPost}
              featured={true}
              onRead={(slug) => window.location.href = `/blog/${slug}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
