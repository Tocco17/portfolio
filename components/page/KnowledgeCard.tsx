import { NextPage } from "next"

type KnowledgeCardProps = {
	knowledge: Knowledge
}

export const KnowledgeCard: NextPage<KnowledgeCardProps> = ({
	knowledge
}) => {
	return (<>
		<div className="knowledge">
			{/* <p>{knowledge.name}</p> */}
			<img src={knowledge.icon} alt={knowledge.name} title={knowledge.name} />
		</div>
	</>)
}