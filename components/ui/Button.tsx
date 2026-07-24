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
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all";

  const variants = {
    primary: "bg-espresso text-white hover:bg-primary",
    secondary: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "bg-transparent border border-line text-text-dark hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-text-dark hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
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