"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Experience } from "@/data/experiences";
import { ButtonTextBackground } from "@/components/ui/buttonTextBackground";
import { useEffect, useRef, useState } from "react";
import SkillsSideCard from "@/components/experienceCard/skillsSideCard";
import OutcomesSideCard from "@/components/experienceCard/outcomesSideCard";
import { clsx } from "clsx";
import { Variants, motion, useInView } from "framer-motion";

interface ExperienceCardProps extends Experience {
  className?: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const { date, name, outcome, place, desc, technologies, className } = props;

  const [moreInfo, setMoreInfo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    setTimeout(() => {
      setMoreInfo(isInView);
    }, 100);
  }, [isInView]);

  const technologiesVariants: Variants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };
  const outcomesVariants: Variants = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const mobileVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
    },
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-full">
      <motion.div
        variants={technologiesVariants}
        animate={moreInfo && technologies ? "open" : "closed"}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        className={clsx("w-1/5 h-2/3 -mr-1 hidden lg:block", {
          "opacity-0": technologies,
        })}
      >
        <SkillsSideCard
          rounded="left"
          technologies={technologies}
          className="h-full"
        />
      </motion.div>
      <Card ref={ref} className={cn("flex flex-col z-10", className)}>
        <CardHeader>
          <CardTitle size="h3">{name}</CardTitle>
          <div className="flex items-center space-x-2">
            <span
              className="lg:text-lg text-gray-500 font-medium"
              hidden={!place}
            >
              {place}
            </span>
            <span className="lg:text-lg text-gray-500" hidden={!place}>
              |
            </span>
            <span className="lg:text-lg text-gray-500 whitespace-nowrap">
              {date}
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">{desc}</CardContent>
        {/*<CardFooter className="flex justify-end h-1/3 lg:hidden">*/}
        {/*  <ButtonTextBackground*/}
        {/*    onClick={() => setMoreInfo(!moreInfo)}*/}
        {/*    size="fill"*/}
        {/*    className="flex-1"*/}
        {/*  >*/}
        {/*    {moreInfo ? "Less info" : "More info"}*/}
        {/*  </ButtonTextBackground>*/}
        {/*</CardFooter>*/}
        <motion.div
          variants={mobileVariants}
          hidden={!outcome}
          animate={moreInfo ? "open" : "closed"}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        >
          <CardContent className="flex-1 lg:hidden" hidden={!outcome}>
            <OutcomesSideCard
              outcome={outcome}
              rounded={!!technologies ? "top" : undefined}
            />
          </CardContent>
        </motion.div>
        <motion.div
          variants={mobileVariants}
          animate={moreInfo ? "open" : "closed"}
          hidden={!technologies}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        >
          <CardContent className="flex-1 lg:hidden" hidden={!technologies}>
            <SkillsSideCard
              technologies={technologies}
              rounded={!!outcome ? "bottom" : undefined}
            />
          </CardContent>
        </motion.div>
      </Card>

      <motion.div
        variants={outcomesVariants}
        animate={moreInfo && outcome ? "open" : "closed"}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        className={clsx("w-1/5 h-2/3 -ml-1 z-0 hidden lg:block", {
          "opacity-0": outcome,
        })}
      >
        <OutcomesSideCard
          rounded="right"
          outcome={outcome}
          className="h-full"
        />
      </motion.div>
    </div>
  );
}
