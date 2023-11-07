import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = GeistSans;

export const metadata: Metadata = {
  title: "Hugo Champy",
  description: "Hugo Champy's personal website",
  keywords:
    "Hugo Champy, Hugo, Champy, HugoChampy, Hugo Champy's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full snap-y snap-mandatory">
      <body className={cn(geist.className, "h-full")}>{children}</body>
    </html>
  );
}
