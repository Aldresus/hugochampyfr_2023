import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface ExperienceCardSideProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: "left" | "right" | "top" | "bottom";
  outcome?: string;
}
export default function OutcomesSideCard(props: ExperienceCardSideProps) {
  const { outcome } = props;
  return (
    <Card variant="secondary" {...props}>
      <CardHeader>
        <CardTitle size="h4">Outcomes:</CardTitle>
      </CardHeader>
      <CardContent>{outcome}</CardContent>
    </Card>
  );
}
