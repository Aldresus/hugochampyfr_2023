import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
}

const titleVariants = cva(
  "text-4xl flex content-center flex-wrap font-bold text-foreground",
  {
    variants: {
      size: {
        h1: "text-4xl 2xl:text-6xl",
        h2: "text-2xl 2xl:text-3xl",
        h3: "text-xl 2xl:text-2xl",
        h4: "text-lg 2xl:text-xl",
        h5: "text-md 2xl:text-lg",
      },
    },
    defaultVariants: {
      size: "h1",
    },
  },
);

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, size, className, ...props }, ref) => {
    const Title = size ? size : "h1";

    return (
      <Title
        ref={ref}
        className={cn(titleVariants({ size: size }), className)}
        {...props}
      >
        {children}
      </Title>
    );
  },
);

Title.displayName = "Title";

export default Title;
