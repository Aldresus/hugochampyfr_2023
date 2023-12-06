import { Skill } from "@/data/skills";

const softSkills: Skill[] = [
	{
		name: "HTML / CSS / JS",
		type: "technologies",
		icon: "devicon-html",
	},
	{
		name: "Python",
		type: "technologies",
		icon: "devicon-py",
	},
	{
		name: "Java",
		type: "technologies",
		details: "(Spring Boot, Hibernate, JPA)",
		icon: "devicon-java",
	},
	{
		name: "SQL",
		type: "technologies",
		details: "(Sqlite, MySQL, PostgreSQL)",
		icon: "devicon-sql",
	},
	{
		name: "C / C++ / C#",
		type: "technologies",
		icon: "devicon-c",
	},
	{
		name: "Networking basics",
		type: "technologies",
		icon: "devicon-putty",
	},
	{
		name: "Git",
		type: "technologies",
		icon: "devicon-git",
	},
	{
		name: "Visual Studio Community & Code",
		type: "softwares",
		icon: "devicon-vs",
	},
	{
		name: "JetBrains IDEs",
		type: "softwares",
		icon: "devicon-jetbrains",
	},
	{
		name: "GitHub / GitLab",
		type: "softwares",
		icon: "devicon-github",
	},
	{
		name: "Microsoft Office",
		type: "softwares",
		icon: "devicon-office",
	},
	{
		name: "Adobe CC Suite",
		type: "softwares",
		icon: "devicon-photoshop",
	},
	{
		name: "Jira",
		type: "softwares",
		icon: "devicon-jira",
	},
	{
		name: "Windows, Linux, MacOS",
		type: "softwares",
		icon: "devicon-linux",
	},
	{
		name: "English",
		type: "languages",
		icon: "devicon-english",
	},
	{
		name: "French",
		type: "languages",
		icon: "devicon-french",
	},
	{
		name: "Autonomy",
		type: "soft skills",
		icon: "devicon-autonomy",
	},
	{
		name: "Project Management",
		type: "soft skills",
		icon: "devicon-project",
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
	{
		name: "Figma",
		type: "softwares",
		icon: "devicon-figma",
	},
	{
		name: "Nextjs",
		type: "technologies",
		icon: "devicon-nextjs",
	},
	{
		name: "React",
		type: "technologies",
		icon: "devicon-react",
	},
	{
		name: "Angular",
		type: "technologies",
		icon: "devicon-angular",
	},
	{
		name: "Nodejs",
		type: "technologies",
		icon: "devicon-nodejs",
	},
	{
		name: "Nestjs",
		type: "technologies",
		icon: "devicon-nestjs",
	},
];

export default softSkills.sort((a, b) =>
	a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
);
