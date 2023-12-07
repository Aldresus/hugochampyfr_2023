import { Skill } from "@/data/skills";

const softSkills: Skill[] = [
	{
		name: "Autonomy",
		type: "soft skills",
		icon: "devicon-autonomy",
	},
	{
		name: "Teamwork",
		type: "soft skills",
		icon: "devicon-teamwork",
	},
	{
		name: "Flexibility",
		type: "soft skills",
		icon: "devicon-flexibility",
	},
	{
		name: "Adaptability",
		type: "soft skills",
		icon: "devicon-adaptability",
	},
	{
		name: "Problem solving",
		type: "soft skills",
		icon: "devicon-problem",
	},
	{
		name: "Communication",
		type: "soft skills",
		icon: "devicon-communication",
	},
	{
		name: "Curiosity",
		type: "soft skills",
		icon: "devicon-curiosity",
	},
];

export default softSkills.sort((a, b) =>
	a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
);
