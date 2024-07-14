import { NextPage } from "next"
import { KnowledgeCard } from "./KnowledgeCard"

type KnowledgeSectionCardProps = {
	knowledgeSection: KnowledgeSection
}

export const KnowledgeSectionCard: NextPage<KnowledgeSectionCardProps> = ({
	knowledgeSection
}) => {
	return (<>
		<div className="knowledge-section">
			<h3>{knowledgeSection.name}</h3>

			<div className="knowledge-card">
				{
					knowledgeSection.knowledges.map((knowledge, indexKnowledge) => (
						<KnowledgeCard
							key={`knowledge-card-${indexKnowledge}`}
							knowledge={knowledge}
						/>
					))
				}

			</div>
		</div>
	</>)
}