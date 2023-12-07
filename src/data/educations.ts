import { Experience } from "@/data/experiences";

const educations: Experience[] = [
	{
		name: "Engineer cycle CESI",
		date: "September 2022 - Now",
		desc: "3 year cycle to obtain a Master's engineering degree in computer science. Specialized in IT.",
		technologies: [
			"C#",
			"ASP.NET",
			"Software architecture",
			"System administration",
			"Advanced algorithmic",
			"Big data architecture",
			"Power BI",
			"MongoDB",
		],
		place: "CESI Strasbourg",
	},
	{
		name: "Integrated preparatory cycle CESI",
		date: "2020 - 2022",
		outcome: "Learned basics of computer science and project management.",
		technologies: [
			"project management",
			"Python",
			"OOP",
			"C",
			"C++",
			"SQL",
			"HTML",
			"CSS",
			"Javascript",
			"PHP",
			"UML",
			"networking",
		],
		desc: "Two-year preparatory cycle before starting the engineering cycle. Specialized in IT. First experience with the scientific method, first school projects, first internship.",
		place: "CESI Strasbourg",
	},
];

//sort experiences beginning with the most recent
educations.sort((a, b) => {
	const dateA = new Date(a.date);
	const dateB = new Date(b.date);
	return dateB.getTime() - dateA.getTime();
});

export default educations;
