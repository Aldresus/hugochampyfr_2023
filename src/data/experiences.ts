export interface Experience {
  name: string;
  date: string;
  desc: string;
  outcome?: string;
  technologies?: string[];
  place?: string;
}

const experiences: Experience[] = [
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
    name: "Full stack developer internship",
    date: "April 2022 - July 2022",
    desc: "Worked on various webservices such as a customer portal for customer to retrieve their data, a financial tool and CRM system for the salespersons.",
    outcome:
      "First professional experience, first experience with javascript and React.",
    technologies: ["Node", "Express", "React", "PostgreSQL", "Redux"],
    place: "Eurogerm",
  },
  {
    name: "Co-founder of Ax Intercampus student organisation",
    date: "2022 - Now",
    outcome: "Ressource management, project management, team management.",
    desc: "Creation and administration of an organisation bringing together students from CESI centers throughout France.",
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
  {
    name: "Baccalaureate sciences and technologies of industry and sustainable development",
    date: "2017 - 2020",
    desc: "Specialized in information and digital systems. Obtained with honors.",
    place: "High school Augustin Cournot",
  },
];

//sort experiences beginning with the most recent
experiences.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

export default experiences;
