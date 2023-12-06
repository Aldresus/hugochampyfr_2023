import Title from "@/components/ui/title";
import skills from "@/data/skills";

export default function OnePageResume() {
	return (
		<div className="min-h-full p-3 lg:p-12 bg-accent-foreground flex">
			<div className="w-2/3">
				<Title size="main">I know </Title>
				<Title size="h1" weight="medium" className="pl-3">
					how to use those things
				</Title>
			</div>
			<div className="w-1/3 flex flex-col justify-center items-start gap-2">
				{skills.map((skill) => (
					<Title key={skill.name} size="h1" weight="medium">
						{skill.name}
					</Title>
				))}
				<Title size="h1" weight="medium">
					Door handles
				</Title>
			</div>
		</div>
	);
}
