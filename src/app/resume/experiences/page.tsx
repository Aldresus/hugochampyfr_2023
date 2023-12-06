import ExperienceCard from "@/components/experienceCard/experienceCard";
import ContentLayout from "@/components/layouts/contentLayout";
import experiences from "@/data/experiences";
import React from "react";

export default function ExperiencesPages() {
	return (
		<ContentLayout
			title="Experiences"
			contentClassName="flex-col items-center justify-center gap-10"
		>
			{experiences.map((experience) => (
				<div
					key={`${experience.name}${experience.place}`}
					className="w-full flex items-center justify-center pt-36 lg:h-[calc(100vh-8rem)] lg:snap-always lg:snap-center"
				>
					<ExperienceCard
						{...experience}
						className="w-full lg:w-5/12 lg:aspect-square"
					/>
				</div>
			))}
		</ContentLayout>
	);
}
