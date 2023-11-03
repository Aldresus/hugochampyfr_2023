import ContentLayout from "@/components/layouts/contentLayout";
import skills, { groupSkillsByType } from "@/data/skills";
import Title from "@/components/ui/title";
import { capitalize } from "@/lib/utils";
import SkillCard from "@/components/skillCard/skillCard";

export default function SkillsPage() {
  const groupedSkills = groupSkillsByType(skills);
  return (
    <ContentLayout
      title="Skills"
      contentClassName="flex flex-col justify-center content-center"
    >
      {Object.keys(groupedSkills).map((group) => (
        <div
          key={`${group}`}
          className="flex flex-col gap-9 w-full pt-40 lg:h-[calc(100vh-8rem)] lg:snap-always lg:snap-center"
        >
          <Title size="h3">{capitalize(group)}</Title>
          <div className="w-full h-full grid gap-9 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {groupedSkills[group].map((skill) => (
              <div key={skill.name}>
                <SkillCard skill={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </ContentLayout>
  );
}
