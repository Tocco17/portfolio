const basePath = "/knowledge-icon"
const getIconString = (file: string) => `${basePath}/${file}`

const javascript: Knowledge = { name: "javascript", icon: getIconString("javascript.png"), }
const jQuery: Knowledge = { name: "jQuery", icon: getIconString("jquery.png"), }
const typescript: Knowledge = { name: "typescript", icon: getIconString("typescript.png"), }
const c: Knowledge = { name: "C", icon: getIconString("software-language-c.png"), }
const cSharp: Knowledge = { name: "C#", icon: getIconString("c-sharp.png"), }
const python: Knowledge = { name: "python", icon: getIconString("python.png"), }
const php: Knowledge = { name: "php", icon: getIconString("php.png"), }
const matlab: Knowledge = { name: "matlab", icon: getIconString("matlab.png"), }
const html: Knowledge = { name: "html 5", icon: getIconString("html-5.png"), }
const css: Knowledge = { name: "css3 ", icon: getIconString("css-3.png"), }
const sql: Knowledge = { name: "SQL", icon: getIconString("sql.png"), }

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

const react: Knowledge = { name: "react", icon: getIconString("react.png"), }
const angular: Knowledge = { name: "angular", icon: getIconString("angular.png"), }
const vue: Knowledge = { name: "vue", icon: getIconString("vue.png"), }
const laravel: Knowledge = { name: "laravel", icon: getIconString("laravel.png"), }
const nextJs: Knowledge = { name: "next js", icon: getIconString("next-js.png"), }
const dotNet: Knowledge = { name: ".net", icon: getIconString("dot-net.png"), }
const materialUi: Knowledge = { name: "material ui", icon: getIconString("material-ui.png"), }
const tailwindCss: Knowledge = { name: "tailwind css", icon: getIconString("tailwind-css.png"), }
const bootstrap: Knowledge = { name: "Bootstrap", icon: getIconString("bootstrap.png"), }
const ntityFramework: Knowledge = { name: "Entity Framework", icon: getIconString("entity-framework.png"), }
const dapper: Knowledge = { name: "Dapper", icon: getIconString("dapper.png"), }

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


const docker: Knowledge = { name: "docker", icon: getIconString("docker.png"), }
const azure: Knowledge = { name: "azure", icon: getIconString("azure.png"), }
const aws: Knowledge = { name: "aws", icon: getIconString("aws.png"), }
const xampp: Knowledge = { name: "xampp", icon: getIconString("xampp.png"), }
const figma: Knowledge = { name: "figma", icon: getIconString("figma.png"), }
const git: Knowledge = { name: "git ", icon: getIconString("git.png"), }
const nodeJs: Knowledge = { name: "node js", icon: getIconString("node-js.png"), }
const postgreSQL: Knowledge = { name: "PostgreSQL", icon: getIconString("postgresql.png"), }

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