"use client";

import { Variants, motion } from "framer-motion";
import Title from "@/components/ui/title";
import ContactButtons from "@/components/ui/contactButtons";

interface ContentProps {
  children: React.ReactNode;
  title: string;
}

export default function ContentLayout(props: ContentProps) {
  const { children, title } = props;
  const parents: Variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { staggerChildren: 0.6 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: 0, y: -200, transition: { ease: "easeInOut" } },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-between p-3 lg:p-24"
      variants={parents}
      initial="hidden"
      animate="enter"
    >
      <motion.div
        variants={titleVariants}
        transition={{
          duration: 1,
        }}
        className="flex h-1/3"
      >
        <div className="flex flex-col justify-center gap-2">
          <Title size="h1">{title}</Title>
          <ContactButtons />
        </div>
      </motion.div>

      {/*  todo add animations to the experience cards*/}
      <div className="flex h-2/3 gap-3 lg:gap-9 w-full flex-col lg:flex-row">
        {children}
      </div>
    </motion.main>
  );
}
