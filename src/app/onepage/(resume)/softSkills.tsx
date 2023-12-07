import Title from "@/components/ui/title";
import softSkills from "@/data/softSkills";

export default function OnePageSoftSkills() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex snap-center bg-secondary">
			<div className="w-2/3">
				<Title size="main" className="text-secondary-foreground">
					I also{" "}
				</Title>
				<Title
					size="h1"
					weight="medium"
					className="pl-3 text-secondary-foreground"
				>
					rock at those things
				</Title>
			</div>
			<div className="w-1/3 flex flex-col justify-center items-start gap-2">
				{softSkills.map((skill) => (
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
					Making coffee
				</Title>
			</div>
		</div>
	);
}
