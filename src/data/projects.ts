export interface Project {
	name: string;
	description: string;
	picturePath: string;
}

const projects: Project[] = [
	{
		name: "Minecraft ChatGPT plugin",
		description:
			"It is a prototype of a Minecraft plugin that uses OpenAI's ChatGPT API to generate messages in the chat, interacting with players. It can also execute commands and use pre-defined in-game events. The plugin is written in Java and uses the Spigot API.",
		picturePath: "/projects/minecraftChatGPTPlugin.png",
	},
	{
		name: "ALK",
		description:
			"ALK is a Discord bot game that I made to fight against boredom. Its a cooperative game where you have to enter a french word following the alphabet order. The words are verified from a database of 1.4 million french words that I built. The first version was made in Python but I am currently rewriting it in TypeScript.",
		picturePath: "/projects/ALK.png",
	},
	{
		name: "Job application tracker",
		description:
			"It is an early prototype of a job application tracker. It will be a web app that will allow the user to track job applications, find open positions and automatically send follow-up emails. It is written in Typescript with NestJs and NextJs and uses a microservice architecture.",
		picturePath: "/projects/archiStaj.png",
	},
	{
		name: "Prosit Resolver",
		description:
			"For context, a prosit is a problematic situation that you have to resolve during your studies at CESI. We have to collectively specify the problem by finding keywords, problematics, etc... and use those to make a report containing the knowledge used to find the solution. The app aim to automate the process, since the report is usually a bunch of copy-pasted ressources from the internet. It is written in TypeScript and uses the NextJS framework. It uses the ChatGPT API from OpenAI to do the generation of the report.",
		picturePath: "/projects/prositResolver.png",
	},
	{
		name: "KetchupWithFriends",
		description:
			"A cooking recipe website written in TypeScript with NextJS. It aims to provide a better UX than most cooking websites while being more accessible. It is still in development.",
		picturePath: "/projects/ketchup.png",
	},
	{
		name: "Many Discord bots",
		description:
			"Such as birthday reminder, weather, role play dices, etc... All written in Python.",
		picturePath: "/projects/BdayBot.png",
	},
	//todo find a way to have links / tooltips on specific words
	{
		name: "DynamicPrositX",
		description:
			"A online/desktop tool to help structurate the collective prosit (cf. PrositResolver) kickoff, by giving a form, a presentation mode and a way to export the data. It is written in TypeScript with NextJS and bundled with Tauri.",
		picturePath: "/projects/dynamicPrositX.png",
	},
];

//sort projects by name
projects.sort((a, b) => a.name.localeCompare(b.name));

export default projects;
