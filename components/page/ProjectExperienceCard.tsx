import { NextPage } from "next"

type ProjectExperienceCardProps = {
	projects: WorkProject[]
}

export const ProjectsExperienceCard: NextPage<ProjectExperienceCardProps> = ({
	projects
}) => {
	return (<>
		<div>
			{
				projects.map((project, indexProject) => (
					<ProjectCard
						key={`project-${indexProject}`}
						project={project}
					/>
				))
			}
		</div>
	</>)
}


type ProjectCardProps = {
	project: WorkProject
}

const ProjectCard: NextPage<ProjectCardProps> = ({
	project
}) => {
	return (<>
		<div>
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
							<li key={responsibilityKey}>{responsibility}</li>
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
							<li key={stackKey}>{stack}</li>
						)
					})
				}
			</ul>
		</div>
	</>)
}