// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "third";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean; // For using with Link or other components
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  asChild = false, // Not implemented yet
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[rgb(var(--background))] whitespace-nowrap";

  const variantStyles = {
    primary: "text-white bg-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-foreground))] hover:bg-[rgb(var(--primary-hover-rgb))]",
    third: "text-white bg-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-foreground))] hover:bg-[rgb(var(--primary-hover-rgb))]",
    secondary: "text-white bg-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-foreground))] hover:bg-[rgb(var(--secondary-hover-rgb))]",
    outline: "border border-[rgb(var(--input))] hover:bg-[rgb(var(--accent-rgb))] hover:text-[rgb(var(--accent-foreground))]",
    ghost: "hover:bg-[rgb(var(--accent-rgb))] hover:text-[rgb(var(--accent-foreground))]",
    link: "underline-offset-4 hover:underline text-[rgb(var(--primary-rgb))]",
  };

  const sizeStyles = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-5 text-lg",
  };

  // If asChild is true, we'd return React.cloneElement(children, { className: combinedClasses, ...props });
  // For now, it's a simple button

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
