export interface Skill {
  name: string;
  type: string;
  details?: string;
}

let skills: Skill[] = [
  {
    name: "HTML / CSS",
    type: "technologies",
  },
  {
    name: "Python",
    type: "technologies",
  },
  {
    name: "JavaScript",
    type: "technologies",
    details: "(Node.js, React.js, Next.js, Angular)",
  },
  {
    name: "Java",
    type: "technologies",
    details: "(Spring Boot, Hibernate, JPA)",
  },
  {
    name: "SQL",
    type: "technologies",
    details: "(Sqlite, MySQL, PostgreSQL)",
  },
  {
    name: "C/C++/C#",
    type: "technologies",
  },
  {
    name: "Fusion 360",
    type: "softwares",
  },
  {
    name: "Networking basics",
    type: "technologies",
  },
  {
    name: "CAD",
    type: "technologies",
  },
  {
    name: "3D printing",
    type: "technologies",
  },
  {
    name: "Git",
    type: "technologies",
  },
  {
    name: "Visual Studio Community & Code",
    type: "softwares",
  },
  {
    name: "JetBrains IDEs",
    type: "softwares",
  },
  {
    name: "GitHub / GitLab",
    type: "softwares",
  },
  {
    name: "Microsoft Office",
    type: "softwares",
  },
  {
    name: "Adobe CC Suite",
    type: "softwares",
  },
  {
    name: "Jira",
    type: "softwares",
  },
  {
    name: "Windows, Linux, MacOS",
    type: "softwares",
  },
  {
    name: "English",
    type: "languages",
  },
  {
    name: "French",
    type: "languages",
  },
  {
    name: "Autonomy",
    type: "soft skills",
  },
  {
    name: "Project Management",
    type: "soft skills",
  },
  {
    name: "Teamwork",
    type: "soft skills",
  },
  {
    name: "Flexibility",
    type: "soft skills",
  },
  {
    name: "Adaptability",
    type: "soft skills",
  },
  {
    name: "Problem solving",
    type: "soft skills",
  },
  {
    name: "Communication",
    type: "soft skills",
  },
  {
    name: "Curiosity",
    type: "soft skills",
  },
];

export default skills;
