import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/constants";
import { Link } from "wouter";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Services"
            subtitle="Complete automation solutions for small service businesses"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="glass-effect border-none hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-lg px-4 py-2 bg-accent text-accent-foreground">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact" data-testid={`service-cta-${service.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Book a Free Chat
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deal */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Complete Package</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <div className="text-5xl font-bold text-accent mb-4">$380 CAD</div>
                <p className="text-xl text-muted-foreground">All three services included</p>
                <p className="text-sm text-muted-foreground mt-2">Save $50 compared to individual pricing</p>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-4">Optional Monthly Tools:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Zapier Starter: ~$29/month</li>
                  <li>• Google Workspace: ~$7-$10/month</li>
                  <li>• Microsoft 365: ~$6-$12/month</li>
                </ul>
                <p className="text-sm mt-4 text-green-600">
                  <strong>Note:</strong> Free tiers used where possible to minimize ongoing costs.
                </p>
              </div>
            </div>
            
            <Link href="/contact" data-testid="package-cta">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-4 text-lg">
                Get Complete Package
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our services"
          />

          <div className="grid gap-8">
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">How long does setup take?</h3>
              <p className="text-muted-foreground">
                Most setups are completed within 1-2 weeks, depending on complexity and your availability for testing. 
                We work around your schedule to minimize disruption to your business.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Do I need technical skills?</h3>
              <p className="text-muted-foreground">
                Not at all! We handle all the technical setup and provide simple, step-by-step instructions for daily use. 
                If you can send an email, you can use our systems.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">What tools do you work with?</h3>
              <p className="text-muted-foreground">
                We primarily use Google Workspace (Gmail, Calendar, Forms) and Microsoft 365 (Outlook, Forms, Teams), 
                plus automation tools like Zapier and Power Automate. We choose tools you're already familiar with.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">What if something breaks?</h3>
              <p className="text-muted-foreground">
                We provide 30 days of free support after setup, plus ongoing assistance as needed. 
                Most issues are simple fixes that we can walk you through over email or phone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
