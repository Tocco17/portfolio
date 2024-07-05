import { NextPage } from "next"
import { RoleExperienceCard } from "./RoleExperienceCard"
import { ProjectsExperienceCard } from "./ProjectExperienceCard"
import Image from 'next/image'

type ExperienceCardProps = {
	experience: WorkExperience
}

export const ExperienceCard: NextPage<ExperienceCardProps> = ({
	experience
}) => {

	return (<>
	<div>
		<Image
			src={`/${experience.logoPath}`}
			alt={experience.societyName}
			width={300}
			height={300}
		/>
	</div>
	</>)
	
	return (<>
		<div>
			<h3>{experience.societyName} ({experience.start} - {experience.end ?? 'current time'})</h3>

			<RoleExperienceCard roles={experience.roles}/>

			<ProjectsExperienceCard projects={experience.projects}/>
		</div>
	</>)
}