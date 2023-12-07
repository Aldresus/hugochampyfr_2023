import Title from "@/components/ui/title";
import skills from "@/data/skills";

export default function OnePageSkills() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex snap-center bg-accent">
			<div className="w-2/3">
				<Title size="main" className="text-secondary-foreground">
					I know
				</Title>
				<Title
					size="h1"
					weight="medium"
					className="pl-3 text-secondary-foreground"
				>
					how to use those things
				</Title>
			</div>
			<div className="w-1/3 flex flex-col justify-center items-start gap-2">
				{skills.map((skill) => (
					<Title
						key={skill.name}
						size="h1"
						weight="medium"
						className="text-secondary-foreground"
					>
						{skill.name}
					</Title>
				))}
				<Title size="h1" weight="medium" className="text-secondary-foreground">
					Door handles
				</Title>
			</div>
		</div>
	);
}
