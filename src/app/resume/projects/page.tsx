import ContentLayout from "@/components/layouts/contentLayout";
import ProjectCard from "@/components/projectCard";
import projects from "@/data/projects";
import React from "react";

export default function ExperiencesPages() {
	return (
		<ContentLayout
			title="Projects"
			contentClassName="flex-col items-center justify-center gap-10"
		>
			{projects.map((project) => (
				<div
					key={`${project.name}${project.name}`}
					className="w-full flex items-center justify-center pt-40 lg:h-[calc(100vh-8rem)] lg:snap-always lg:snap-center"
				>
					<ProjectCard
						{...project}
						className="w-full lg:w-5/12 lg:aspect-square"
					/>
				</div>
			))}
		</ContentLayout>
	);
}
