import { Experience } from "@/data/experiences";

const companiesExperiences: Experience[] = [
	{
		name: "Full stack developer internship",
		date: "January 2023 - April 2023",
		// desc: "Development of an HRIS (Human Ressources Information System) web application using Angular and Java which includes user management, HR follow-up, and project management.",
		desc: "Worked on an HRIS (Human Ressources Information System) web application using microservices architecture. The application encompasses various key features, including user management, form creation and administration, as well as project management capabilities.",
		outcome:
			"First experience with many technologies : microservices architecture, Java and Spring, Angular. First experience with agile project management.",
		technologies: [
			"microservices architecture",
			"Java",
			"Spring",
			"Angular",
			"Hibernate",
			"JPA",
			"Gradle",
			"PostgreSQL",
			"project management",
		],
		place: "ITS-Future",
	},
	{
		name: "Full stack developer internship",
		date: "April 2022 - July 2022",
		desc: "Worked on various webservices such as a customer portal for customer to retrieve their data, a financial tool and CRM system for the salespersons.",
		outcome:
			"First professional experience, first experience with javascript and React.",
		technologies: ["Node", "Express", "React", "PostgreSQL", "Redux"],
		place: "Eurogerm",
	},
	{
		name: "Internship",
		date: "October 2023 - February 2024",
		desc: "tbw",
		outcome: "tbw",
		technologies: ["Typescript", "TestMaker", "tbw"],
		place: "Knowledge Expert",
	},
];

//sort experiences beginning with the most recent
companiesExperiences.sort((a, b) => {
	const dateA = new Date(a.date);
	const dateB = new Date(b.date);
	return dateB.getTime() - dateA.getTime();
});

export default companiesExperiences;
