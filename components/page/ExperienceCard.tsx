import { NextPage } from "next"
import { RoleExperienceCard } from "./RoleExperienceCard"
import { ProjectsExperienceCard } from "./ProjectExperienceCard"

type ExperienceCardProps = {
	experience: WorkExperience
}

export const ExperienceCard: NextPage<ExperienceCardProps> = ({
	experience
}) => {
	return (<>
		<div>
			<h3>{experience.societyName} ({experience.start} - {experience.end ?? 'current time'})</h3>

			<RoleExperienceCard roles={experience.roles}/>

			<ProjectsExperienceCard projects={experience.projects}/>
		</div>
	</>)
}