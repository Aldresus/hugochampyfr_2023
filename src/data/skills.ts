export interface Skill {
	name: string;
	type: string;
	details?: string;
	icon: string;
}

const skills: Skill[] = [
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
		name: "Git",
		type: "technologies",
		icon: "devicon-git",
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

export function groupSkillsByType(skills: Skill[]) {
	const groupedSkills: { [key: string]: Skill[] } = {};
	for (const skill of skills) {
		if (groupedSkills[skill.type]) {
			groupedSkills[skill.type].push(skill);
		} else {
			groupedSkills[skill.type] = [skill];
		}
	}
	return groupedSkills;
}

export default skills.sort((a, b) =>
	a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
);
