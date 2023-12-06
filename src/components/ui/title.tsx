import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	size?: "h1" | "h2" | "h3" | "h4" | "h5" | "main";
}

const titleVariants = cva(
	"text-4xl flex content-center flex-wrap font-bold text-foreground",
	{
		variants: {
			size: {
				main: "text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[11rem] 2xl:text-[15rem] 2xl:leading-[13rem] xl:leading-[9rem] lg:leading-[9rem] md:leading-[7rem] sm:leading-[6rem] leading-[4rem]",
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
	({ children, size = "h1", className, ...props }, ref) => {
		const Title = size !== "main" ? size : "h1";

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
