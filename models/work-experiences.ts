const bushidoExperience: WorkExperience = {
	societyName: 'Bushido Karate ASD',
	start: 2018,
	roles: ['Karate Instructor', 'Counseler'],
	projects: [
		{
			name: 'Karate Instructor',
			responsibilities: [
				"Teaching individuals from childhood, preadolescence, adolescence, and adulthood",
				"Emergency response (BLSD Course)",
			]
		},
		{
			name: 'Counseler',
			responsibilities: [
				"Organizing sporting events",
				"Managing clients",
			]
		}
	]
}

const eustemaExperience: WorkExperience = {
	societyName: 'Eustema',
	start: 2021,
	end: 2022,
	roles: ['Fullstack Developer'],
	projects: [
		{
			name: 'SIL',
			description: 'Job management system for the Sardinia region',
			stack: [
				".NET 5",
				".NET Framework 4.8",
				"SQL Server",
				"Dapper",
				"Razor",
				"Bootstrap",
			]
		},
		{
			name: 'Corte dei Conti',
			description: 'Microsoft Word and Outlook plugins',
			stack: [
				".NET WindowsForm",
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
	roles: ["Fullstack Developer"],
	projects: [
		{
			name: "MDSourcing",
			description: "Sito E-Commerce di vendita piante e alberi",
			stack: [
				"Angular",
				".NET 5",
				"Entity Framework",
				"Bootstrap",
			]
		},
		{
			name: "Salary Calculette",
			description: "Gestionale contratti per l'EUI (European University Institute)",
			stack: [
				"React ts",
				".NET 7",
				"Entity Framework",
				"PostreSQL",
				"Docker",
				"Tailwind CSS",
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