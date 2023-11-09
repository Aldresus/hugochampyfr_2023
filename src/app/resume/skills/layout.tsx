import { Metadata } from "next";
import { keywords, skillsKeywords } from "@/data/tags";
export const metadata: Metadata = {
  title: "Hugo Champy | Skills | Full Stack Developer",
  description:
    "Hugo Champy's Skills: Software Engineer & Creative Technologist.",
  keywords: [...keywords, ...skillsKeywords],
  twitter: {
    card: "summary_large_image",
    title: "Hugo Champy | Skills | Full Stack Developer",
    description:
      "Hugo Champy's Skills: Software Engineer & Creative Technologist.",
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
