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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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
			]
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