import { NextPage } from "next"

type ProjectExperienceCardProps = {
	projects: WorkProject[]
}

export const ProjectsExperienceCard: NextPage<ProjectExperienceCardProps> = ({
	projects
}) => {
	return (<>
		{
			projects.map((project, indexProject) => (
				<ProjectCard
					key={`project-${indexProject}`}
					project={project}
				/>
			))
		}
	</>)
}


type ProjectCardProps = {
	project: WorkProject
}

export const ProjectCard: NextPage<ProjectCardProps> = ({
	project
}) => {
	return (<>
		<div className="project-card">
			<h4>{project.name}</h4>

			<ProjectDescriptionCard description={project.description} />

			<ProjectResponsibilitiesCard responsibilities={project.responsibilities} />

			<ProjectStackCard stacks={project.stack} />
		</div>
	</>)
}

type ProjectDescriptionCardProps = {
	description?: string
}

const ProjectDescriptionCard: NextPage<ProjectDescriptionCardProps> = ({
	description
}) => {
	if (!description) return (<></>)

	return (<>
		<div>
			<h5>Description:</h5>
			<p>{description}</p>
		</div>
	</>)
}

type ProjectResponsibilitiesCardProps = {
	responsibilities?: WorkResponsibility[]
}

const ProjectResponsibilitiesCard: NextPage<ProjectResponsibilitiesCardProps> = ({
	responsibilities
}) => {
	if (!responsibilities) return (<></>)
	return (<>
		<div>
			<h5>Responsibilities:</h5>
			<ul>
				{
					responsibilities.map((responsibility, indexResponsibility) => {
						const responsibilityKey = `responsibility-${indexResponsibility}`
						return (
							<li key={responsibilityKey}>{responsibility.name}</li>
						)
					})
				}
			</ul>
		</div>
	</>)
}


type ProjectStackCardProps = {
	stacks?: WorkStack[]
}

const ProjectStackCard: NextPage<ProjectStackCardProps> = ({
	stacks
}) => {
	if (!stacks) return (<></>)

	return (<>
		<div>
			<h5>Stack:</h5>
			<ul>
				{
					stacks.map((stack, indexStack) => {
						const stackKey = `stack-${indexStack}`

						return (
							<li key={stackKey}>{stack.name}</li>
						)
					})
				}
			</ul>
		</div>
	</>)
}