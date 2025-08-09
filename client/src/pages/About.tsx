import { SectionHeader } from "@/components/ui/section-header";
import { Check, User } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="About FlowSnap Solutions"
            subtitle="Your partner in business automation"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in one-on-one, jargon-free setup for micro & solo service businesses across Ontario. 
                With a background in IT support and customer service, we understand the unique challenges faced 
                by small business owners.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our focus is simple: save you time and eliminate complexity. We build automation solutions 
                using tools you already know and trust, ensuring you can maintain and grow your systems 
                without dependency on complicated software.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                {[
                  "Specialized in micro & solo service businesses",
                  "Ontario-based with local business understanding",
                  "Focus on time-savings and simplicity",
                  "No jargon, just practical solutions"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="text-secondary text-xl mt-1 flex-shrink-0" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Persona Callout & Info Cards */}
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Meet Lisa</h3>
                  <p className="text-muted-foreground text-sm mb-4">Solo cleaner in Brampton</p>
                  <p className="text-muted-foreground">
                    Uses WhatsApp + Google Calendar and needs simple, mobile-friendly tools 
                    that don't complicate her already busy schedule.
                  </p>
                </div>
              </div>
              
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold mb-4">Why Choose FlowSnap?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ We understand your daily challenges</li>
                  <li>✓ Setup once, benefit forever</li>
                  <li>✓ Use familiar tools you already have</li>
                  <li>✓ Ongoing support when you need it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Values</h2>
            <p className="text-xl text-muted-foreground">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Simplicity First</h3>
              <p className="text-muted-foreground">
                We believe automation should reduce complexity, not add to it. Every solution is designed with simplicity in mind.
              </p>
            </div>

            <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Touch</h3>
              <p className="text-muted-foreground">
                One-on-one setup and support ensures your unique business needs are understood and addressed.
              </p>
            </div>

            <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Real Results</h3>
              <p className="text-muted-foreground">
                Our focus is on delivering measurable time savings and improved efficiency for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
