import { Button } from "./button";

interface PricingTileProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  gradient: string;
  onAction?: () => void;
  actionText?: string;
}

export function PricingTile({ 
  title, 
  description, 
  price, 
  icon, 
  gradient,
  onAction,
  actionText = "Learn More"
}: PricingTileProps) {
  return (
    <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 group">
      <div className={`w-16 h-16 ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-bounce`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="text-3xl font-bold text-accent mb-4">{price}</div>
      <Button 
        className="w-full" 
        onClick={onAction}
        data-testid={`pricing-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {actionText}
      </Button>
    </div>
  );
}
