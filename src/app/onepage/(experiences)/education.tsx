import Title from "@/components/ui/title";
import educations from "@/data/educations";

export default function OnePageExperiencesEducation() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex snap-center bg-accent">
			<div className="w-2/3">
				<Title size="main" className="text-secondary-foreground">
					I learn
				</Title>
				<Title
					size="h1"
					weight="medium"
					className="pl-3 text-secondary-foreground"
				>
					from the bests
				</Title>
			</div>
			<div className="w-1/3 flex flex-col justify-center items-start gap-12">
				{educations.map((education) => (
					<div className="flex flex-col" key={education.place}>
						<Title
							size="h3"
							weight="medium"
							className="text-muted-foreground mb-[-0.3rem]"
						>
							{education.date}
						</Title>

						<Title size="h1" weight="medium" className=" ">
							{education.name}
						</Title>
						<Title
							size="h3"
							weight="thin"
							className="text-secondary-foreground mb-[-0.3rem] font-normal"
						>
							{education.place}
						</Title>
					</div>
				))}
			</div>
		</div>
	);
}
