import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-red text-white hover:bg-red/90",
      secondary: "bg-white text-black hover:bg-metallic",
      outline: "border border-metallic text-white hover:bg-white/10",
      ghost: "text-white hover:bg-white/10",
      danger: "bg-red/20 text-red hover:bg-red/30",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
