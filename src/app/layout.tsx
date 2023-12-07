import { keywords } from "@/data/tags";
import { cn } from "@/lib/utils";
import { Inter } from "@next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	style: "normal",
	weight: ["400", "700", "500", "100"],
});

export const metadata: Metadata = {
	title: "Hugo Champy | Student | Full Stack Developer",
	description:
		"Hugo Champy: Student Software Engineer & Creative Technologist.",
	keywords: keywords,
	twitter: {
		card: "summary_large_image",
		title: "Hugo Champy | Student | Full Stack Developer",
		description:
			"Hugo Champy: Student Software Engineer & Creative Technologist.",
		site: "@hugochampy",
		creator: "@aldresus",
	},
	openGraph: {
		title: "Hugo Champy | Full Stack Developer",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full snap-y snap-mandatory">
			<body className={cn(inter.className, "h-full")}>{children}</body>
		</html>
	);
}
