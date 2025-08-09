import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Get Started Today"
            subtitle="Ready to streamline your business? Let's chat about how we can help you save time and grow."
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="glass-effect border-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...form.register("name")}
                          placeholder="Your full name"
                          className="mt-2"
                          data-testid="input-name"
                        />
                        {form.formState.errors.name && (
                          <p className="text-destructive text-sm mt-1">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          {...form.register("businessName")}
                          placeholder="Your business name"
                          className="mt-2"
                          data-testid="input-business-name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register("email")}
                          placeholder="your@email.com"
                          className="mt-2"
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="text-destructive text-sm mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...form.register("phone")}
                          placeholder="(555) 123-4567"
                          className="mt-2"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...form.register("message")}
                        rows={5}
                        placeholder="Tell us about your business and what automation challenges you're facing..."
                        className="mt-2"
                        data-testid="textarea-message"
                      />
                      {form.formState.errors.message && (
                        <p className="text-destructive text-sm mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info & Additional Cards */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="glass-effect border-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Prefer Email?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary text-xl" />
                    <a 
                      href="mailto:adjam@flowsnap.ca" 
                      className="text-primary hover:underline"
                      data-testid="contact-email"
                    >
                      adjam@flowsnap.ca
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary text-xl" />
                    <a 
                      href="tel:555-686-5566"
                      className="hover:text-primary transition-colors"
                      data-testid="contact-phone"
                    >
                      555-686-5566
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary text-xl" />
                    <span>Ontario, Canada</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Mini FAQ */}
              <Card className="glass-effect border-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">How long does setup take?</h4>
                    <p className="text-muted-foreground text-sm">
                      Most setups are completed within 1-2 weeks, depending on complexity and your availability for testing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Do I need technical skills?</h4>
                    <p className="text-muted-foreground text-sm">
                      Not at all! We handle the technical setup and provide simple instructions for daily use.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Office Hours */}
              <Card className="glass-effect border-none">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm text-green-600 mt-4">
                    <strong>Response time:</strong> Usually within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
