"use client";

import { ExperienceCard } from "@/components/page/ExperienceCard";
import workExperiences from "@/models/work-experiences"
import { useState } from "react"
import Image from 'next/image'
import profilePic from '@/public/eustema-logo.png'

const WorkPage = () => {
	const [experiences] = useState(workExperiences)

	return (<>
		<h2>Work page</h2>

		<div className="work-experience-card-container">
			{
				experiences.map((experience, indexExperience) => {
					const mainKey = `work-experience-${indexExperience}`

					return (
						<ExperienceCard 
							key={mainKey} 
							experience={experience}
						/>
					)
				})
			}
		</div>
	</>)
}

export default WorkPage