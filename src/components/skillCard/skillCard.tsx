import { cn } from "@/lib/utils";
import IconC from "@/components/devIcons/icons/c";
import IconPy from "@/components/devIcons/icons/py";
import IconTS from "@/components/devIcons/icons/ts";
import IconHTML from "@/components/devIcons/icons/html";
import IconGit from "@/components/devIcons/icons/git";
import IconJava from "@/components/devIcons/icons/java";
import IconSQL from "@/components/devIcons/icons/sql";
import IconPutty from "@/components/devIcons/icons/putty";
import IconPhotoshop from "@/components/devIcons/icons/photoshop";
import IconVS from "@/components/devIcons/icons/vs";
import IconJetbrains from "@/components/devIcons/icons/jetbrain";
import IconJira from "@/components/devIcons/icons/jira";
import IconFigma from "@/components/devIcons/icons/figma";
import IconGithub from "@/components/devIcons/icons/github";
import IconLinux from "@/components/devIcons/icons/linux";
import IconFrench from "@/components/devIcons/icons/french";
import IconEnglish from "@/components/devIcons/icons/english";
import IconReact from "@/components/devIcons/icons/react";
import IconAngular from "@/components/devIcons/icons/angular";
import IconNextjs from "@/components/devIcons/icons/nextjs";

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: string;
  icon: string;
}

const classes = "h-20 fill-accent-foreground";
const icons = {
  "devicon-c": <IconC className={classes} />,
  "devicon-py": <IconPy className={classes} />,
  "devicon-ts": <IconTS className={classes} />,
  "devicon-html": <IconHTML className={classes} />,
  "devicon-git": <IconGit className={classes} />,
  "devicon-java": <IconJava className={classes} />,
  "devicon-sql": <IconSQL className={classes} />,
  "devicon-putty": <IconPutty className={classes} />,
  "devicon-photoshop": <IconPhotoshop className={classes} />,
  "devicon-vs": <IconVS className={classes} />,
  "devicon-jetbrains": <IconJetbrains className={classes} />,
  "devicon-jira": <IconJira className={classes} />,
  "devicon-figma": <IconFigma className={classes} />,
  "devicon-github": <IconGithub className={classes} />,
  "devicon-linux": <IconLinux className={classes} />,
  "devicon-french": <IconFrench className={classes} />,
  "devicon-english": <IconEnglish className={classes} />,
  "devicon-react": <IconReact className={classes} />,
  "devicon-nextjs": <IconNextjs className={classes} />,
  "devicon-angular": <IconAngular className={classes} />,
};

export default function SkillCard({ skill, ...props }: SkillCardProps) {
  const Comp = icons[props.icon as keyof typeof icons];
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center gap-2",
      )}
      {...props}
    >
      {Comp}
      <h3 className="font-semibold">{skill}</h3>
    </div>
  );
}
