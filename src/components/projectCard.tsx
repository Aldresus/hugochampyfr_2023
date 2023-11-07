"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { Variants, motion, useInView } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ExperienceCardProps extends Project {
  className?: string;
}

export default function ProjectCard(props: ExperienceCardProps) {
  const { name, description, picturePath, className } = props;

  const [moreInfo, setMoreInfo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    setTimeout(() => {
      setMoreInfo(isInView);
    }, 100);
  }, [isInView]);

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
      <Card ref={ref} className={cn("flex flex-col z-10", className)}>
        <CardContent className="flex-1 text-foreground/80 pt-6">
          <div className="flex h-96 lg:h-full w-full items-center space-x-2 text-foreground/50 relative ">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="unselectable object-contain"
                src={picturePath}
                alt={`${name} screenshot`}
                fill
              />
            </div>
          </div>
        </CardContent>

        <motion.div
          variants={mobileVariants}
          animate={moreInfo ? "open" : "closed"}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        >
          <CardContent className="flex-1 lg:hidden">
            <Card variant="secondary" rounded="right" className="h-full">
              <CardHeader>
                <CardTitle size="h3">{name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 text-foreground/80">
                {description}
              </CardContent>
            </Card>
          </CardContent>
        </motion.div>
      </Card>

      <motion.div
        variants={outcomesVariants}
        animate={moreInfo ? "open" : "closed"}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        className={clsx("w-1/4 h-2/3 -ml-1 z-0 hidden lg:block")}
      >
        <Card variant="secondary" rounded="right" className="h-full">
          <CardHeader>
            <CardTitle size="h3">{name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 text-foreground/80">
            {description}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
