import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

interface TitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof titleVariants> {}

const titleVariants = cva(
	"text-4xl flex content-center flex-wrap text-foreground",
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
			weight: {
				default: "font-bold",
				thin: "font-thin",
				normal: "font-normal",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold",
			},
		},
		defaultVariants: {
			size: "h1",
			weight: "default",
		},
	},
);

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
	({ children, size = "h1", weight = "default", className, ...props }, ref) => {

		return (
			<div
				ref={ref}
				className={cn(titleVariants({ size, weight }), className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Title.displayName = "Title";

export default Title;
