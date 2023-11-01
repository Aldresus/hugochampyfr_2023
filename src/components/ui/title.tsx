import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface TitleProps {
  children: ReactNode;
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
}

const titleVariants = cva(
  "text-4xl flex content-center flex-wrap font-bold text-gray-800",
  {
    variants: {
      size: {
        h1: "text-4xl lg:text-6xl",
        h2: "text-2xl lg:text-3xl",
        h3: "text-xl lg:text-2xl",
        h4: "text-lg lg:text-xl",
        h5: "text-md lg:text-lg",
      },
    },
    defaultVariants: {
      size: "h1",
    },
  },
);

//todo inspire of shadcn to have the html props
export default function Title(props: TitleProps) {
  const { children, size, className } = props;
  const Title = size ? size : "h1";

  return (
    <Title className={cn(titleVariants({ size: size }), className)}>
      {children}
    </Title>
  );
}
