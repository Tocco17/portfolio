type WorkExperience = {
	societyName: string
	start: number
	end?: number
	roles: WorkRole[]
	projects: WorkProject[]
}

type WorkRole = string

type WorkProject = {
	name: string
	description?: string
	responsibilities?: WorkResponsibility[]
	stack?: WorkStack[]
}

type WorkResponsibility = string

type WorkStack = string