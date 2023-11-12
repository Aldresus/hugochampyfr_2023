import { Metadata } from "next";
import { keywords, experienceKeywords } from "@/data/tags";
export const metadata: Metadata = {
  title: "Hugo Champy | Experiences | Full Stack Developer",
  description:
    "Hugo Champy's Experiences: Student Software Engineer & Creative Technologist.",
  keywords: [...keywords, ...experienceKeywords],
  twitter: {
    card: "summary_large_image",
    title: "Hugo Champy | Experiences | Full Stack Developer",
    description:
      "Hugo Champy's Experiences: Student Software Engineer & Creative Technologist.",
    site: "@hugochampy",
    creator: "@aldresus",
  },
  openGraph: {
    title: "Hugo Champy | Experiences | Full Stack Developer",
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
