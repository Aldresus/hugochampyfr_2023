import { keywords, projectKeywords } from "@/data/tags";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Hugo Champy | Projects | Full Stack Developer",
	description:
		"Hugo Champy's Projects: Student Software Engineer & Creative Technologist.",
	keywords: [...keywords, ...projectKeywords],
	twitter: {
		card: "summary_large_image",
		title: "Hugo Champy | Projects | Full Stack Developer",
		description:
			"Hugo Champy's Projects: Student Software Engineer & Creative Technologist.",
		site: "@hugochampy",
		creator: "@aldresus",
	},
	openGraph: {
		title: "Hugo Champy | Projects | Full Stack Developer",
		type: "website",
	},
};
export default function ExperienceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main>{children}</main>;
}
