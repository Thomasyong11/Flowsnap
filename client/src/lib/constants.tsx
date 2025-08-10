import { Calendar, FileText, Star } from "lucide-react";

export const services = [
  {
    id: "booking",
    title: "Smart Booking System Setup",
    description: "Branded form, calendar sync, auto-confirmation, simple job tracker.",
    price: "$120 CAD",
    icon: <Calendar className="text-white text-2xl" />,
    gradient: "bg-gradient-to-br from-primary to-secondary",
    features: [
      "Custom branded booking form",
      "Google/Outlook calendar integration",
      "Automatic confirmation emails",
      "Simple job tracking system",
      "Mobile-friendly interface"
    ]
  },
  {
    id: "quotes",
    title: "Automated Quote & Follow-Up",
    description: "Quote tracker + polite, timed reminders so leads don't go cold.",
    price: "$150 CAD",
    icon: <FileText className="text-white text-2xl" />,
    gradient: "bg-gradient-to-br from-secondary to-accent",
    features: [
      "Quote tracking system",
      "Automated follow-up sequences",
      "Customizable reminder timing",
      "Lead temperature monitoring",
      "Professional email templates"
    ]
  },
  {
    id: "reviews",
    title: "Client Feedback & Reviews",
    description: "Auto thank-you + review requests when a job is marked complete.",
    price: "$110 CAD",
    icon: <Star className="text-white text-2xl" />,
    gradient: "bg-gradient-to-br from-accent to-primary",
    features: [
      "Automated thank-you messages",
      "Review request automation",
      "Multiple platform integration",
      "Feedback collection system",
      "Reputation monitoring"
    ]
  }
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Cleaning Service Owner",
    content: "FlowSnap transformed how I handle bookings. No more double-booking headaches!",
    initial: "S",
    bgColor: "bg-primary"
  },
  {
    name: "Mike R.",
    role: "Handyman Services",
    content: "The automated follow-ups helped me close 30% more deals. Simple and effective!",
    initial: "M",
    bgColor: "bg-secondary"
  },
  {
    name: "Lisa K.",
    role: "Solo Cleaner, Brampton",
    content: "Perfect for someone like me who needs mobile-friendly tools that just work!",
    initial: "L",
    bgColor: "bg-accent"
  }
];

export const trustIndicators = [
  {
    icon: "📍",
    title: "Ontario-based, practical, one-on-one setup"
  },
  {
    icon: "🔧",
    title: "Built on tools you already use (Google Workspace / Microsoft 365)"
  },
  {
    icon: "💰",
    title: "Clear pricing. No surprise subscriptions."
  }
];

export const blogPost = {
  title: "3 Ways to Save Time with Automated Bookings",
  slug: "automated-bookings-time-savers",
  date: "August 05, 2025",
  readTime: "5 min read",
  excerpt: "Are you tired of playing phone tag with clients or double-booking appointments? Busy days can quickly turn chaotic when your booking system isn't working for you. Here's why automation helps and three simple ways to get started.",
  content: `
    <p>Are you tired of playing phone tag with clients or double-booking appointments? Busy days can quickly turn chaotic when your booking system isn't working for you. Here's why automation helps and three simple ways to get started.</p>
    
    <h4>1. Use an Online Booking Form</h4>
    <p>Tools like Google Forms or Microsoft Forms can capture essential client information 24/7. Keep fields minimal - name, service needed, preferred dates, and contact info. Your clients can book when it's convenient for them, not just during business hours.</p>
    
    <h4>2. Sync with Your Calendar</h4>
    <p>Connect your forms to Google Calendar or Outlook to avoid double-booking. If you work with partners or employees, shared calendars ensure everyone stays on the same page without constant check-ins.</p>
    
    <h4>3. Automatic Confirmations</h4>
    <p>Use Zapier or Power Automate to send instant email or WhatsApp confirmations. Follow up with reminders 24 hours before appointments to reduce no-shows. Your clients feel confident, and you spend less time on administrative tasks.</p>
    
    <div class="callout">
      <p><strong>The bottom line:</strong> Reliability builds trust with your clients. FlowSnap Solutions can help you set up these automated systems using tools you already have, so you can focus on what you do best.</p>
    </div>
  `
};
