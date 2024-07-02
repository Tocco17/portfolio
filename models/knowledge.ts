const javascript: Knowledge = { name: "javascript" }
const jQuery: Knowledge = { name: "jQuery" }
const typescript: Knowledge = { name: "typescript" }
const c: Knowledge = { name: "C" }
const cSharp: Knowledge = { name: "C#" }
const python: Knowledge = { name: "python" }
const php: Knowledge = { name: "php" }
const matlab: Knowledge = { name: "matlab" }
const html: Knowledge = { name: "html 5" }
const css: Knowledge = { name: "css3 " }
const sql: Knowledge = { name: "SQL" }

const programmingLanguageKnowledge: KnowledgeSection = {
	name: "Programming Languages",
	knowledges: [
		javascript,
		jQuery,
		typescript,
		c,
		cSharp,
		python,
		php,
		matlab,
		html,
		css,
		sql,
	]
}

const react: Knowledge = { name: "react" }
const angular: Knowledge = { name: "angular" }
const vue: Knowledge = { name: "vue" }
const laravel: Knowledge = { name: "laravel" }
const nextJs: Knowledge = { name: "next js" }
const dotNet: Knowledge = { name: ".net" }
const materialUi: Knowledge = { name: "material ui" }
const tailwindCss: Knowledge = { name: "tailwind css" }
const bootstrap: Knowledge = { name: "Bootstrap" }
const ntityFramework: Knowledge = { name: "Entity Framework" }
const dapper: Knowledge = { name: "Dapper" }

const frameworkKnowledge: KnowledgeSection = {
	name: "Framework and Libraries",
	knowledges: [
		react,
		angular,
		vue,
		laravel,
		nextJs,
		dotNet,
		materialUi,
		tailwindCss,
		bootstrap,
		ntityFramework,
		dapper,
	]
}


const docker: Knowledge = { name: "docker" }
const azure: Knowledge = { name: "azure" }
const aws: Knowledge = { name: "aws" }
const xampp: Knowledge = { name: "xampp" }
const figma: Knowledge = { name: "figma" }
const git: Knowledge = { name: "git " }
const nodeJs: Knowledge = { name: "node js" }
const postgreSQL: Knowledge = { name: "PostgreSQL" }

const softwareKnowledge: KnowledgeSection = {
	name: "Software",
	knowledges: [
		docker,
		azure,
		aws,
		xampp,
		figma,
		git,
		nodeJs,
		postgreSQL,
	]
}

export const knowledgeSections: KnowledgeSection[] = [
	programmingLanguageKnowledge,
	frameworkKnowledge,
	softwareKnowledge,
]