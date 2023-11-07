import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
