import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center z-10 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground shadow",
        destructive: "text-destructive-foreground shadow-sm",
        outline:
          "border border-input bg-transparent shadow-sm hover:text-accent-foreground",
        secondary: "text-secondary-foreground shadow-sm ",
        ghost: " hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      rounded: {
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
        none: "rounded-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        fill: "h-full w-full text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "md",
    },
  },
);

const containerVariants = cva("flex flex-1 overflow-hidden", {
  variants: {
    variant: {
      default: "bg-primary shadow hover:bg-primary/90",
      destructive: "bg-destructive shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent",
      secondary: "bg-secondary shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent ",
      link: "underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonTextBackground = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, rounded, children, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className={cn(containerVariants({ variant, className }))}>
        <div className="relative w-0 h-0 ">
          <div className="absolute select-none top-[-23rem] left-[-12rem] text-[40rem] z-0 text-foreground font-bold tracking-[-3rem] drag-none">
            {children}
          </div>
        </div>
        <Comp
          className={cn(buttonVariants({ variant, size, rounded, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      </div>
    );
  },
);
ButtonTextBackground.displayName = "ButtonTextBackground";

export { ButtonTextBackground, buttonVariants };
