import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  icon?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-2xl transition-all";

  const variants = {
    primary:
      "gradient-primary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-primary-dark text-white shadow-sm hover:bg-text-dark hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-white/15 backdrop-blur-md border border-white/30 text-text-dark hover:bg-white/25",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={18} />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}