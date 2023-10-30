import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface TitleProps {
  children: ReactNode;
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
}

const titleVariants = cva(
  "text-4xl flex content-center flex-wrap font-bold text-gray-800",
  {
    variants: {
      size: {
        h1: "text-6xl",
        h2: "text-3xl",
        h3: "text-2xl",
        h4: "text-xl",
        h5: "text-lg",
      },
    },
    defaultVariants: {
      size: "h1",
    },
  },
);

export default function Title(props: TitleProps) {
  const { children, size } = props;
  const Title = size ? size : "h1";

  return (
    <Title className={cn(titleVariants({ size: size }))}>{children}</Title>
  );
}
