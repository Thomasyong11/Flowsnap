import flowsnapLogo from "@assets/FlowSnap (6)-Photoroom_1754706730255.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { container: "h-8", text: "text-lg" },
    md: { container: "h-10", text: "text-xl" },
    lg: { container: "h-16", text: "text-3xl" },
  };

  const sizeClasses = sizes[size];

  if (!showText) {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src={flowsnapLogo} 
          alt="FlowSnap Solutions" 
          className={`${sizeClasses.container} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={flowsnapLogo} 
        alt="FlowSnap Solutions" 
        className={`${sizeClasses.container} w-auto object-contain h-32`}
      />
    </div>
  );
}
