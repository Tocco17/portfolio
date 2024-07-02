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
	]
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
		{
			name: 'SIL',
			description: 'Job management system for the Sardinia region',
			stack: [
				{
					name: ".NET 5",
				},
				{
					name: ".NET Framework 4.8",
				},
				{
					name: "SQL Server",
				},
				{
					name: "Dapper",
				},
				{
					name: "Razor",
				},
				{
					name: "Bootstrap",
				},
			]
		},
		{
			name: 'Corte dei Conti',
			description: 'Microsoft Word and Outlook plugins',
			stack: [
				{
					name: ".NET WindowsForm",
				},
			]
		},
		{
			name: "SIAE",
			description: "Data sanitization"
		}
	]
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
		{
			name: "MDSourcing",
			description: "E-Commerce web application for the selling of plants and trees.",
			stack: [
				{
					name: "Angular",
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
			]
		},
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
			]
		}
	]
}

const workExperiences: WorkExperience[] = [
	bushidoExperience,
	eustemaExperience,
	remiraExperience,
]

export default workExperiences