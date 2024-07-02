import { NextPage } from "next"

type RoleExperienceCardProps = {
	roles: WorkRole[]
}

export const RoleExperienceCard: NextPage<RoleExperienceCardProps> = ({
	roles
}) => {
	return (<>
		<div>
			<h4>Roles:</h4>
			<ul>
				{
					roles.map((role, indexRole) => (
						<li key={`role-${indexRole}`}>{role.name}</li>
					))
				}
			</ul>
		</div>
	</>)
}