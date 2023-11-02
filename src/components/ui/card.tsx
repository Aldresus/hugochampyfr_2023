import * as React from "react";

import { cn } from "@/lib/utils";
import Title from "@/components/ui/title";
import { cva } from "class-variance-authority";

const cardVariants = cva("border shadow", {
  variants: {
    rounded: {
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      none: "rounded-none",
      left: "rounded-l-xl",
      right: "rounded-r-xl",
      top: "rounded-t-xl",
      bottom: "rounded-b-xl",
    },
    variant: {
      default: "bg-card text-card-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
    },
  },
  defaultVariants: {
    rounded: "xl",
    variant: "default",
  },
});

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "full"
    | "none"
    | "left"
    | "right"
    | "top"
    | "bottom";
  variant?: "default" | "primary" | "secondary";
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ className, rounded, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      cardVariants({ rounded: rounded, className, variant }),
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      // ref={ref}
      // className={cn(
      //   "text-lg font-semibold leading-none tracking-tight",
      //   className,
      // )}

      {...props}
    >
      {props.children}
    </Title>
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
