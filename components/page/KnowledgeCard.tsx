import { NextPage } from "next"

type KnowledgeCardProps = {
	knowledge: Knowledge
}

export const KnowledgeCard: NextPage<KnowledgeCardProps> = ({
	knowledge
}) => {
	return (<>
	<li>{knowledge.name}</li>
	</>)
}