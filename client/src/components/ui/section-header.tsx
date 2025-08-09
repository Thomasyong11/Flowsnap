interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold mb-4 gradient-text">{title}</h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
