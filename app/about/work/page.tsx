"use client";

import workExperiences from "@/models/work-experiences"
import { useState } from "react"

const WorkPage = () => {
	const [experiences] = useState(workExperiences)

	return (<>
		<h2>Work page</h2>

		<div>
			{
				experiences.map((experience, indexExperience) => {
					const mainKey = `work-experience-${indexExperience}`

					return (
						<div key={mainKey}>
							<h3>{experience.societyName} ({experience.start} - {experience.end ?? 'current time'})</h3>

							<div>
								<h4>Roles:</h4>
								<ul>
									{
										experience.roles.map((role, indexRole) => (
											<li key={`${mainKey}-role-${indexRole}`}>{role}</li>
										))
									}
								</ul>
							</div>

							<div>
								{
									experience.projects.map((project, indexProject) => {
										const projectKey = `${mainKey}-project-${indexProject}`

										return (
											<div key={`${projectKey}`}>
												<h4>{project.name}</h4>

												{
													project.description &&
													<div>
														<h5>Description:</h5>
														<p>{project.description}</p>
													</div>
												}

												{
													project.responsibilities &&
													<div>
														<h5>Responsibilities:</h5>
														<ul>
															{
																project.responsibilities.map((responsibility, indexResponsibility) => {
																	const responsibilityKey = `${projectKey}-responsibility-${indexResponsibility}`
																	return (
																		<li key={responsibilityKey}>{responsibility}</li>
																	)
																})
															}
														</ul>
													</div>
												}

												{
													project.stack &&
													<div>
														<h5>Stack:</h5>
														<ul>
															{
																project.stack.map((stack, indexStack) => {
																	const stackKey = `${projectKey}-stack-${indexStack}`

																	return (
																		<li key={stackKey}>{stack}</li>
																	)
																})
															}
														</ul>
													</div>

												}
											</div>
										)
									})
								}
							</div>
						</div>
					)
				})
			}
		</div>
	</>)
}

export default WorkPage