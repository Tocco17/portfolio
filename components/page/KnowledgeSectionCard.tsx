import { NextPage } from "next"
import { KnowledgeCard } from "./KnowledgeCard"

type KnowledgeSectionCardProps = {
	knowledgeSection: KnowledgeSection
}

export const KnowledgeSectionCard: NextPage<KnowledgeSectionCardProps> = ({
	knowledgeSection
}) => {
	return (<>
		<div>
			<h3>{knowledgeSection.name}</h3>

			<ul>
				{
					knowledgeSection.knowledges.map((knowledge, indexKnowledge) => (
						<KnowledgeCard 
							key={`knowledge-card-${indexKnowledge}`}
							knowledge={knowledge}
						/>
					))
					}
			</ul>
		</div>
	</>)
}