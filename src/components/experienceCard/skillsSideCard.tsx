import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { capitalize } from "@/lib/utils";

interface ExperienceCardSideProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: "left" | "right" | "top" | "bottom";
  technologies?: string[];
}
export default function SkillsSideCard(props: ExperienceCardSideProps) {
  const { technologies } = props;
  return (
    <Card variant="secondary" {...props}>
      <CardHeader>
        <CardTitle size="h4">Acquired skills:</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 ">
        <ul className="list-disc list-inside space-y-2 text-sm">
          {technologies?.map((technology) => (
            <li key={technology}>{capitalize(technology)}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
