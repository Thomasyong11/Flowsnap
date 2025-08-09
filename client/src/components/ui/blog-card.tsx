import { Calendar, Clock } from "lucide-react";
import { Button } from "./button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  slug: string;
  onRead?: (slug: string) => void;
}

export function BlogCard({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  featured = false,
  slug,
  onRead
}: BlogCardProps) {
  return (
    <article className="glass-effect rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
      <div className="mb-6">
        {featured && (
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
            Featured
          </span>
        )}
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <div className="flex items-center text-muted-foreground text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-2" />
          <span>{readTime}</span>
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6">{excerpt}</p>
      
      <div className="mt-8 pt-6 border-t border-border">
        <Button 
          className="bg-accent hover:bg-accent/90"
          onClick={() => onRead?.(slug)}
          data-testid={`blog-read-${slug}`}
        >
          Read Full Article
        </Button>
      </div>
    </article>
  );
}
