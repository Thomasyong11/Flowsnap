import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  initial: string;
  bgColor: string;
}

export function Testimonial({ name, role, content, initial, bgColor }: TestimonialProps) {
  return (
    <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mr-4`}>
          <span className="text-white font-bold">{initial}</span>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">"{content}"</p>
      <div className="flex text-accent">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
  );
}
