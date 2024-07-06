import { NextPage } from "next"
import { RoleExperienceCard } from "./RoleExperienceCard"
import { ProjectsExperienceCard } from "./ProjectExperienceCard"
import Image from 'next/image'
import { useState } from "react"

type ExperienceCardProps = {
	experience: WorkExperience
}

export const ExperienceCard: NextPage<ExperienceCardProps> = ({
	experience
}) => {
	const [show, setShow] = useState<boolean>(false)

	const handleImageClick = () => {
		setShow(prev => !prev)
	}

	return (<>
		<div className={`experience-card ${show ? "open" : ""}`}>
			<Image
				src={`/${experience.logoPath}`}
				alt={experience.societyName}
				width={300}
				height={300}
				onClick={handleImageClick}
			/>
			{
				show &&
				<div className="experience">
					<h3>{experience.societyName} ({experience.start} - {experience.end ?? 'current time'})</h3>

				</div>
			}
		</div>
	</>)

	return (<>
		<div>

			<RoleExperienceCard roles={experience.roles} />

			<ProjectsExperienceCard projects={experience.projects} />
		</div>
	</>)
}