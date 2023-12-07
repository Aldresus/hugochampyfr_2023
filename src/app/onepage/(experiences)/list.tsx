import Title from "@/components/ui/title";
import companiesExperiences from "@/data/companies";

export default function OnePageExperiencesList() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex bg-accent snap-center">
			<div className="w-2/3">
				<Title size="main" className="text-secondary-foreground">
					Those
				</Title>
				<Title
					size="h1"
					weight="medium"
					className="pl-14 text-secondary-foreground"
				>
					companies did
				</Title>
			</div>
			<div className="w-1/3 flex flex-col justify-center items-start gap-12">
				{companiesExperiences.map((experience) => (
					<div className="flex flex-col" key={experience.place}>
						<Title
							size="h2"
							weight="medium"
							className="text-muted-foreground mb-[-0.3rem]"
						>
							{experience.date}
						</Title>
						<Title
							size="h1"
							weight="medium"
							className="text-secondary-foreground"
						>
							{experience.place}
						</Title>
					</div>
				))}
			</div>
		</div>
	);
}
