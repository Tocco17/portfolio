type WorkExperience = {
	societyName: string
	start: number
	end?: number
	roles: WorkRole[]
	projects: WorkProject[]
}

type WorkRole = {
	name: string
}

type WorkProject = {
	name: string
	description?: string
	responsibilities?: WorkResponsibility[]
	stack?: WorkStack[]
}

type WorkResponsibility = {
	name: string
}

type WorkStack = {
	name: string
}