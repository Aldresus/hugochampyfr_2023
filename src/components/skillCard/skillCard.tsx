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
import IconOffice from "@/components/devIcons/icons/office";
import IconFlexibility from "@/components/devIcons/icons/flexibility";
import IconAutonomy from "@/components/devIcons/icons/autonomy";
import IconProblem from "@/components/devIcons/icons/problem";
import IconProject from "@/components/devIcons/icons/project";
import IconTeam from "@/components/devIcons/icons/team";
import IconAdaptability from "@/components/devIcons/icons/adaptability";
import IconCommunication from "@/components/devIcons/icons/communication";
import IconCuriosity from "@/components/devIcons/icons/curiosity";
import IconNestjs from "@/components/devIcons/icons/nestjs";
import IconNodejs from "@/components/devIcons/icons/nodejs";

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: string;
  icon: string;
}

const fillClasses = "h-20 fill-accent-foreground";
const strokeClasses = "h-20 stroke-accent-foreground";
const icons = {
  "devicon-c": <IconC className={fillClasses} />,
  "devicon-py": <IconPy className={fillClasses} />,
  "devicon-ts": <IconTS className={fillClasses} />,
  "devicon-html": <IconHTML className={fillClasses} />,
  "devicon-git": <IconGit className={fillClasses} />,
  "devicon-java": <IconJava className={fillClasses} />,
  "devicon-sql": <IconSQL className={fillClasses} />,
  "devicon-putty": <IconPutty className={fillClasses} />,
  "devicon-photoshop": <IconPhotoshop className={fillClasses} />,
  "devicon-vs": <IconVS className={fillClasses} />,
  "devicon-jetbrains": <IconJetbrains className={fillClasses} />,
  "devicon-jira": <IconJira className={fillClasses} />,
  "devicon-figma": <IconFigma className={fillClasses} />,
  "devicon-github": <IconGithub className={fillClasses} />,
  "devicon-linux": <IconLinux className={fillClasses} />,
  "devicon-french": <IconFrench className={fillClasses} />,
  "devicon-english": <IconEnglish className={fillClasses} />,
  "devicon-react": <IconReact className={fillClasses} />,
  "devicon-nextjs": <IconNextjs className={fillClasses} />,
  "devicon-angular": <IconAngular className={fillClasses} />,
  "devicon-office": <IconOffice className={fillClasses} />,
  "devicon-flexibility": <IconFlexibility className={strokeClasses} />,
  "devicon-autonomy": <IconAutonomy className={strokeClasses} />,
  "devicon-problem": <IconProblem className={strokeClasses} />,
  "devicon-project": <IconProject className={strokeClasses} />,
  "devicon-teamwork": <IconTeam className={strokeClasses} />,
  "devicon-adaptability": <IconAdaptability className={strokeClasses} />,
  "devicon-communication": <IconCommunication className={strokeClasses} />,
  "devicon-curiosity": <IconCuriosity className={strokeClasses} />,
  "devicon-nestjs": <IconNestjs className={fillClasses} />,
  "devicon-nodejs": <IconNodejs className={fillClasses} />,
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
