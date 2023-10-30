"use client";
import Title from "@/components/ui/title";
import ContactButtons from "@/components/ui/contactButtons";
import { ButtonTextBackground } from "@/components/ui/buttonTextBackground";
import Link from "next/link";
import { motion, MotionProps, Variants } from "framer-motion";

const parents: Variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const skillsVariant: Variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const experienceVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const projectsVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      variants={parents}
      initial="hidden"
      animate="enter"
      className="overflow-hidden"
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-3 lg:p-24">
        <motion.div variants={titleVariants} className="flex flex-1">
          <div className="flex flex-col justify-center gap-2">
            <Title size="h1">Hugo</Title>
            <ContactButtons />
          </div>
        </motion.div>

        <div className="flex flex-1 gap-3 lg:gap-9 w-full flex-col lg:flex-row">
          <Link href={"/skills"} className="flex flex-1">
            <motion.div className="h-full w-full flex" variants={skillsVariant}>
              <ButtonTextBackground
                className="shadow overflow-hidden"
                size="fill"
                rounded="3xl"
              >
                Skills
              </ButtonTextBackground>
            </motion.div>
          </Link>

          <Link href={"/experiences"} className="flex flex-1">
            <motion.div
              className="h-full w-full flex"
              variants={experienceVariants}
            >
              <ButtonTextBackground
                className="shadow overflow-hidden"
                size="fill"
                rounded="3xl"
              >
                Experiences
              </ButtonTextBackground>
            </motion.div>
          </Link>

          <Link href={"/projects"} className="flex flex-1">
            <motion.div
              className="h-full w-full flex"
              variants={projectsVariants}
            >
              <ButtonTextBackground
                className="shadow overflow-hidden"
                size="fill"
                rounded="3xl"
              >
                Projects
              </ButtonTextBackground>
            </motion.div>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
