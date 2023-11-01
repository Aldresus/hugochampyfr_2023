"use client";

import { Variants, motion } from "framer-motion";
import Title from "@/components/ui/title";
import ContactButtons from "@/components/ui/contactButtons";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContentProps {
  children: React.ReactNode;
  title: string;
  contentClassName?: string;
}

export default function ContentLayout(props: ContentProps) {
  const { children, title, contentClassName } = props;
  const parents: Variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { staggerChildren: 0.8 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: 0, y: -200, transition: { ease: "easeInOut" } },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const mainVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex min-h-screen flex-col gap-9 items-center justify-between p-3 lg:p-24"
      variants={parents}
      initial="hidden"
      animate="enter"
    >
      {/*<div className="h-[10vh] "></div>*/}
      <motion.div
        variants={titleVariants}
        transition={{
          duration: 1,
        }}
        className="fixed flex justify-center left-0 right-0 z-50 top-0 p-9 lg:pt-24 pb-9 bg-white"
      >
        <div className="flex flex-col justify-center gap-2 h-[10vh]">
          <div>
            <Link href={"/"}>
              <Button variant="link" size="text">
                <Title
                  size="h3"
                  className="text-accent-foreground leading-none"
                >
                  Hugo/
                </Title>
              </Button>
            </Link>
            <Title size="h1">{title}</Title>
          </div>
          <ContactButtons />
        </div>
      </motion.div>

      <motion.div
        variants={mainVariants}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        className={cn("flex h-full gap-3 w-full", contentClassName)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
