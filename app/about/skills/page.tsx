"use client";

import { KnowledgeSectionCard } from "@/components/page/KnowledgeSectionCard";
import { knowledgeSections } from "@/models/knowledge";
import { useState } from "react";

const SkillsPage = () => {
	const [sections] = useState(knowledgeSections)
	
	return (<>
		<h2>Skills page</h2>

		{
			sections.map((section, indexSection) => (
				<KnowledgeSectionCard 
					key={`knowledge-section-card-${indexSection}`} 
					knowledgeSection={section}
				/>
			))
		}
	</>)
}

export default SkillsPage