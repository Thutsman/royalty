"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/cn";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[--rcp-primary] text-white hover:bg-[--rcp-primary-light] focus-visible:ring-[--rcp-primary]",
        accent:
          "bg-[--rcp-accent] text-white hover:brightness-95 focus-visible:ring-[--rcp-accent]",
        outline:
          "border border-[color:rgba(2,6,23,0.12)] text-[color:var(--foreground)] hover:bg-[color:rgba(2,6,23,0.04)] focus-visible:ring-[--rcp-primary]",
        ghost:
          "text-[color:var(--foreground)] hover:bg-[color:rgba(2,6,23,0.04)] focus-visible:ring-[--rcp-primary]",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;

