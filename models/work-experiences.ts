const bushidoExperience: WorkExperience = {
	societyName: 'Bushido Karate ASD',
	start: 2018,
	roles: [
		{
			name: 'Karate Instructor',
		},
		{
			name: 'Counseler',
		},
	],
	projects: [
		{
			name: 'Karate Instructor',
			responsibilities: [
				{
					name: "Teaching individuals from childhood, preadolescence, adolescence, and adulthood",
				},
				{
					name: "Emergency response (BLSD Course)",
				},
			],
			fullDescription: `As an instructor, I managed and trained students ranging from 5 years old to adults. 
				My responsibilities included:
				Designing and conducting training sessions; 
				Developing skill progression plans for students; 
				Providing personalized coaching and support; 
			`,
		},
		{
			name: 'Counseler',
			responsibilities: [
				{
					name: "Organizing sporting events",
				},
				{
					name: "Managing clients",
				},
			],
			fullDescription: `As a council member, my duties encompassed various 
				aspects of the organization's operations: 
					Participating in decision-making processes;
					Organizing sporting events;
					Managing memberships;
					In charge for safeguarding policies;
			`,
		}
	],
	logoPath: 'bushido-karate-logo.png',
}

const eustemaExperience: WorkExperience = {
	societyName: 'Eustema',
	start: 2021,
	end: 2022,
	roles: [
		{
			name: 'Fullstack Developer',
		},
	],
	projects: [
		// SIL
		{
			name: 'SIL',
			description: 'Job management system for the Sardinia region',
			stack: [
				{
					name: ".NET 5",
				},
				{
					name: ".NET Framework 3.5",
				},
				{
					name: "ASP.NET Webform",
				},
				{
					name: "Microsoft SQL Server",
				},
				{
					name: "Dapper",
				},
				{
					name: "Razor",
				},
				{
					name: "Bootstrap Italia",
				},
				{
					name: 'Vanilla Javascript',
				},
				{
					name: 'jQuery',
				},
				{
					name: 'CSS',
				},
				{
					name: 'Git',
				},
			],
			fullDescription: `The first project I was assigned to was the SIL. The project involved restructuring and creating new features for a website for the Region of Sardinia. The website aimed to inform and assist the region's population in searching for and applying to new job opportunities.`,
			challengeAndObjectiveDescription: 'The project was initially managed almost entirely by a team of junior members. In this context, lacking a solid foundation on project management, we successfully created a cohesive team, perfectly defining the roles of each individual, based on both skills and personal interests, allowing us to distribute tasks effectively. Together, we overcame various challenges: creating a solid team, managing and organizing the project, and analyzing both old and new technologies.',
		},
		// CORTE DEI CONTI
		{
			name: 'Corte dei Conti',
			description: 'Maintain frontend part of project',
			stack: [
				{
					name: "Angular",
				},
				{
					name: "Git",
				},
			],
			fullDescription: 'My role was to maintain the frontend part of the project. It was written using the javascript framework Angular.',
			challengeAndObjectiveDescription: `It was my first attempt to work with a javascript framework. The attempt was successful thanks to personal studies in my spare time. In fact, aiming to achieve a better knowledge of javascript, I've studied thoroughly Vanilla JS and later Vue. As mentioned this studies helped me to completing the tasks of this project.`,
		},
		// MICROSOFT EXTENSIONS
		{
			name: 'Microsoft Word and Microsoft Outlook extension',
			description: 'Microsoft extension for private citizen',
			stack: [
				{
					name: '.NET Windows Form',
				},
				{
					name: "Git",
				},
			],
			fullDescription: `I was later assigned to a project for a private citizen. My role was to maintain and add new features to the already existing project. The project involved Microsoft extensions, specifically for Microsoft Word and Microsoft Outlook, aimed at facilitating document exchange.`,
			challengeAndObjectiveDescription: `The main challenge was working on the project alone, using a framework that was new to me, but outdated and poorly documented. Despite these challenges, I successfully met the project objectives on time.`,
		},
		// SIAE
		{
			name: "SIAE",
			description: "Data sanitization",
			stack: [
				{
					name: 'ServiceNow',
				},
				{
					name: 'Microsoft SQL Server',
				},
			],
			fullDescription: `The project involved maintaining and cleaning the data within their databases.`,
			challengeAndObjectiveDescription: `The main challenge was learning to perform reverse engineering. I only had access to the database, without visibility into the involved applications, which were proprietary to third-party companies.`,
		}
	],
	logoPath: 'eustema-logo.png',
}

const remiraExperience: WorkExperience = {
	societyName: "Remira Italia",
	start: 2023,
	roles: [
		{
			name: "Fullstack Developer",
		},
	],
	projects: [
		// MDSourcing
		{
			name: "MDSourcing",
			description: "E-Commerce web application for the selling of plants and trees.",
			stack: [
				{
					name: "React ts",
				},
				{
					name: ".NET 5",
				},
				{
					name: "Entity Framework",
				},
				{
					name: "Bootstrap",
				},
				{
					name: "Git",
				},
			],
			fullDescription: `The project involved a web application requested by a private citizen. The application was an e-commerce website for selling plants and trees.`,
			challengeAndObjectiveDescription: `My role was to maintain the application and add new features. This project marked my first experience with React.`,
		},
		// CALCULETTE
		{
			name: "Salary Calculette",
			description: "Contract management system",
			stack: [
				{
					name: "React ts",
				},
				{
					name: ".NET 7",
				},
				{
					name: "Entity Framework",
				},
				{
					name: "PostreSQL",
				},
				{
					name: "Docker",
				},
				{
					name: "Tailwind CSS",
				},
				{
					name: "Git",
				},
				{
					name: "Azure",
				},
			],
			fullDescription: `I joined the European University Institute (EUI) as an external consultant. I was assigned to the Salary Calculette project, a web application designed to calculate employee salaries and facilitate communication between the HR and BFA offices regarding contracts.`,
			challengeAndObjectiveDescription: `This was the first project I was involved in from the beginning. I closely followed the initial analysis and project foundation creation. Additionally, I developed almost the entire project myself. The project received increasingly positive feedback, significantly simplifying major work operations, reducing time and costs.`,
		}
	],
	logoPath: 'remira-logo.jpg',
}

const workExperiences: WorkExperience[] = [
	bushidoExperience,
	eustemaExperience,
	remiraExperience,
]

export default workExperiences