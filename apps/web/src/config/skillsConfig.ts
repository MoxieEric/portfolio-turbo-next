import type { As } from '@chakra-ui/react'
import {
	FaArrowPointer,
	FaChartBar,
	FaChartGantt,
	FaCode,
	FaHandPointer,
	FaPeopleArrows,
	FaRoute,
	FaWheelchair,
} from 'react-icons/fa6'
import { HiDeviceMobile, HiRefresh } from 'react-icons/hi'
import {
	HiBeaker,
	HiCodeBracket,
	HiGlobeAlt,
	HiLightBulb,
	HiMap,
	HiPresentationChartLine,
	HiShieldCheck,
	HiUser,
} from 'react-icons/hi2'
import {
	SiAdobephotoshop,
	SiAdobexd,
	SiAmazondynamodb,
	SiApollographql,
	SiAwsamplify,
	SiChakraui,
	SiClerk,
	SiClickup,
	SiCss3,
	SiDatadog,
	SiDocusaurus,
	SiExpo,
	SiExpress,
	SiFigma,
	SiGithubactions,
	SiGraphql,
	SiHal,
	SiHasura,
	SiHtml5,
	SiHyper,
	SiJavascript,
	SiJest,
	SiJira,
	SiKeepachangelog,
	SiMysql,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiNuxtdotjs,
	SiOctopusdeploy,
	SiPhp,
	SiPostgresql,
	SiProducthunt,
	SiPython,
	SiReact,
	SiReactos,
	SiRedis,
	SiRedux,
	SiSinglestore,
	SiSketch,
	SiStorybook,
	SiTailwindcss,
	SiTurborepo,
	SiTypescript,
	SiVercel,
	SiVuedotjs,
	SiZsh,
} from 'react-icons/si'

enum EngineeringSkillSection {
	FrontEnd = 'Front-End',
	BackEnd = 'Back-End',
	DevOps = 'DevOps',
}

interface SkillConfig {
	label: string
	icon?: As
}

enum Skills {
	Accesibility = 'Accesibility',
	Agile = 'Agile',
	Apollo = 'Apollo',
	AWSAmplify = 'AWSAmplify',
	AWSDynamoDB = 'AWSDynamoDB',
	Axure = 'Axure',
	BackEndEngineering = 'BackEndEngineering',
	Bash = 'Bash',
	ChakraUI = 'ChakraUI',
	Changesets = 'Changesets',
	CICD = 'CICD',
	Clerk = 'Clerk',
	ClickUp = 'ClickUp',
	CSS = 'CSS',
	DataAnalysis = 'DataAnalysis',
	Datadog = 'Datadog',
	DesignSystems = 'DesignSystems',
	DevOps = 'DevOps',
	Documentation = 'Documentation',
	DX = 'DX',
	Expo = 'Expo',
	Express = 'Express',
	Figma = 'Figma',
	FrontEndEngineering = 'FrontEndEngineering',
	FullStack = 'FullStack',
	GitHubActions = 'GitHubActions',
	GluestackUI = 'GluestackUI',
	GraphQL = 'GraphQL',
	Hasura = 'Hasura',
	HTML = 'Html',
	Husky = 'Husky',
	Hypertune = 'Hypertune',
	InformationArchitecture = 'InformationArchitecture',
	IntegrationTesting = 'IntegrationTesting',
	Javascript = 'Javascript',
	Jest = 'Jest',
	Jira = 'Jira',
	Leadership = 'Leadership',
	Mentoring = 'Mentoring',
	MySql = 'MySql',
	Netlify = 'Netlify',
	Next = 'Next',
	Node = 'Node',
	Nuxt = 'Nuxt',
	Photoshop = 'Photoshop',
	PHP = 'PHP',
	PostGres = 'PostGres',
	Process = 'Process',
	ProductBoard = 'ProductBoard',
	ProductDesign = 'ProductDesign',
	ProductManagement = 'ProductManagement',
	Prototyping = 'Prototyping',
	Python = 'Python',
	React = 'React',
	ReactNative = 'ReactNative',
	Redis = 'Redis',
	Redux = 'Redux',
	Roadmapping = 'Roadmapping',
	Sketch = 'Sketch',
	Storybook = 'Storybook',
	Strategy = 'Strategy',
	TailwindCSS = 'TailwindCSS',
	TurboRepo = 'TurboRepo',
	TypeScript = 'TypeScript',
	UsabilityTesting = 'UsabilityTesting',
	UserResearch = 'UserResearch',
	UXDesign = 'UXDesign',
	Vercel = 'Vercel',
	Vue = 'Vue',
	XD = 'XD',
	Zustand = 'Zustand',
}

const skills: Record<Skills, SkillConfig> = {
	[Skills.ProductManagement]: {
		label: 'Product Management',
		icon: HiLightBulb,
	},
	[Skills.Strategy]: {
		label: 'Strategy',
		icon: HiMap,
	},
	[Skills.Agile]: {
		label: 'Agile + Scrum',
		icon: HiRefresh,
	},
	[Skills.Roadmapping]: {
		label: 'Roadmapping',
		icon: FaChartGantt,
	},
	[Skills.Leadership]: {
		label: 'Leadership',
		icon: FaRoute,
	},
	[Skills.Mentoring]: {
		label: 'Mentoring',
		icon: FaPeopleArrows,
	},
	[Skills.DX]: {
		label: 'Developer Experience Advocate',
		icon: HiCodeBracket,
	},
	[Skills.Jira]: {
		label: 'Jira',
		icon: SiJira,
	},
	[Skills.Storybook]: {
		label: 'Storybook',
		icon: SiStorybook,
	},
	[Skills.ClickUp]: {
		label: 'ClickUp',
		icon: SiClickup,
	},
	[Skills.ProductBoard]: {
		label: 'ProductBoard',
		icon: SiProducthunt,
	},
	[Skills.DataAnalysis]: {
		label: 'Data Analysis',
		icon: HiPresentationChartLine,
	},
	[Skills.UserResearch]: {
		label: 'User Research',
		icon: HiUser,
	},
	[Skills.Process]: {
		label: 'Process & SOP',
		icon: HiShieldCheck,
	},
	[Skills.CICD]: {
		label: 'CI/CD',
		icon: SiOctopusdeploy,
	},
	[Skills.GitHubActions]: {
		label: 'GitHub Actions',
		icon: SiGithubactions,
	},
	[Skills.TurboRepo]: {
		label: 'Turborepo',
		icon: SiTurborepo,
	},
	[Skills.Bash]: {
		label: 'Bash + Zsh',
		icon: SiZsh,
	},
	[Skills.Documentation]: {
		label: 'Documentation',
		icon: SiDocusaurus,
	},
	[Skills.IntegrationTesting]: {
		label: 'Integration Testing',
		icon: HiBeaker,
	},
	[Skills.Hypertune]: {
		label: 'Hypertune',
		icon: SiHyper,
	},
	[Skills.Husky]: {
		label: 'Husky',
		icon: SiHal,
	},
	[Skills.Changesets]: {
		label: 'Changesets',
		icon: SiKeepachangelog,
	},
	[Skills.Datadog]: {
		label: 'Datadog',
		icon: SiDatadog,
	},
	[Skills.TypeScript]: {
		label: 'TypeScript',
		icon: SiTypescript,
	},
	[Skills.Javascript]: {
		label: 'Javascript',
		icon: SiJavascript,
	},
	[Skills.HTML]: {
		label: 'HTML',
		icon: SiHtml5,
	},
	[Skills.CSS]: {
		label: 'CSS',
		icon: SiCss3,
	},
	[Skills.React]: {
		label: 'React',
		icon: SiReact,
	},
	[Skills.ReactNative]: {
		label: 'React Native',
		icon: SiReactos,
	},
	[Skills.Next]: {
		label: 'Next.js',
		icon: SiNextdotjs,
	},
	[Skills.GraphQL]: {
		label: 'GraphQL',
		icon: SiGraphql,
	},
	[Skills.Vue]: {
		label: 'Vue',
		icon: SiVuedotjs,
	},
	[Skills.TailwindCSS]: {
		label: 'TailwindCSS',
		icon: SiTailwindcss,
	},
	[Skills.Redux]: {
		label: 'Redux + RTKQ',
		icon: SiRedux,
	},
	[Skills.Zustand]: {
		label: 'Zustand',
		icon: SiSinglestore,
	},
	[Skills.ChakraUI]: {
		label: 'Chakra UI',
		icon: SiChakraui,
	},
	[Skills.GluestackUI]: {
		label: 'GlueStack UI',
		icon: SiChakraui,
	},
	[Skills.Jest]: {
		label: 'Jest',
		icon: SiJest,
	},
	[Skills.FullStack]: {
		label: 'Full-Stack Engineering',
		icon: FaCode,
	},
	[Skills.FrontEndEngineering]: {
		label: 'Front-End Engineering',
		icon: FaCode,
	},
	[Skills.BackEndEngineering]: {
		label: 'Back-End Engineering',
		icon: FaCode,
	},
	[Skills.DevOps]: {
		label: 'DevOps',
		icon: SiGithubactions,
	},
	[Skills.UXDesign]: {
		label: 'UX Design',
		icon: FaArrowPointer,
	},
	[Skills.ProductDesign]: {
		label: 'Product Design',
		icon: FaArrowPointer,
	},
	[Skills.Nuxt]: {
		label: 'Nuxt.js',
		icon: SiNuxtdotjs,
	},
	[Skills.Expo]: {
		label: 'Expo',
		icon: SiExpo,
	},
	[Skills.Express]: {
		label: 'Express',
		icon: SiExpress,
	},
	[Skills.Clerk]: {
		label: 'Clerk Auth',
		icon: SiClerk,
	},
	[Skills.Node]: {
		label: 'Node',
		icon: SiNodedotjs,
	},
	[Skills.XD]: {
		label: 'XD',
		icon: SiAdobexd,
	},
	[Skills.Python]: {
		label: 'Python',
		icon: SiPython,
	},
	[Skills.PHP]: {
		label: 'PHP',
		icon: SiPhp,
	},
	[Skills.Vercel]: {
		label: 'Vercel',
		icon: SiVercel,
	},
	[Skills.Netlify]: {
		label: 'Netlify',
		icon: SiNetlify,
	},
	[Skills.AWSAmplify]: {
		label: 'AWS Amplify',
		icon: SiAwsamplify,
	},
	[Skills.Redis]: {
		label: 'Redis',
		icon: SiRedis,
	},
	[Skills.PostGres]: {
		label: 'Postgres',
		icon: SiPostgresql,
	},
	[Skills.MySql]: {
		label: 'MySql',
		icon: SiMysql,
	},
	[Skills.AWSDynamoDB]: {
		label: 'AWS DynamoDB',
		icon: SiAmazondynamodb,
	},
	[Skills.Hasura]: {
		label: 'Hasura',
		icon: SiHasura,
	},
	[Skills.Apollo]: {
		label: 'Apollo',
		icon: SiApollographql,
	},
	[Skills.Figma]: {
		label: 'Figma',
		icon: SiFigma,
	},
	[Skills.Sketch]: {
		label: 'Sketch',
		icon: SiSketch,
	},
	[Skills.DesignSystems]: {
		label: 'Design Systems',
		icon: SiStorybook,
	},
	[Skills.Prototyping]: {
		label: 'Prototyping',
		icon: HiDeviceMobile,
	},
	[Skills.UsabilityTesting]: {
		label: 'Usability Testing',
		icon: FaHandPointer,
	},
	[Skills.InformationArchitecture]: {
		label: 'Information Architecture',
		icon: HiGlobeAlt,
	},
	[Skills.Accesibility]: {
		label: 'Accesibility Compliance',
		icon: FaWheelchair,
	},
	[Skills.Axure]: {
		label: 'Axure',
		icon: FaChartBar,
	},

	[Skills.Photoshop]: {
		label: 'Photoshop',
		icon: SiAdobephotoshop,
	},
}

const engineerSkillsConfig: Record<EngineeringSkillSection, SkillConfig[]> = {
	[EngineeringSkillSection.FrontEnd]: [
		skills.TypeScript,
		skills.Javascript,
		skills.Html,
		skills.CSS,
		skills.React,
		skills.ReactNative,
		skills.GraphQL,
		skills.Next,
		skills.Vue,
		skills.Nuxt,
		skills.Clerk,
		skills.Redux,
		skills.Zustand,
		skills.ChakraUI,
		skills.GluestackUI,
		skills.TailwindCSS,
		skills.Jest,
	],
	[EngineeringSkillSection.BackEnd]: [
		skills.Node,
		skills.Express,
		skills.Python,
		skills.PHP,
		skills.Vercel,
		skills.Netlify,
		skills.AWSAmplify,
		skills.Redis,
		skills.PostGres,
		skills.MySql,
		skills.AWSDynamoDB,
		skills.Hasura,
		skills.Apollo,
	],
	[EngineeringSkillSection.DevOps]: [
		skills.CICD,
		skills.GitHubActions,
		skills.TurboRepo,
		skills.Bash,
		skills.Documentation,
		skills.IntegrationTesting,
		skills.Hypertune,
		skills.Husky,
		skills.Changesets,
		skills.Datadog,
	],
}

const uxSkillsConfig: SkillConfig[] = [
	skills.Figma,
	skills.Sketch,
	skills.DesignSystems,
	skills.Prototyping,
	skills.UsabilityTesting,
	skills.InformationArchitecture,
	skills.Accesibility,
	skills.Axure,
	skills.XD,
	skills.Photoshop,
]
const mgmtSkillsConfig: SkillConfig[] = [
	skills.ProductManagement,
	skills.Strategy,
	skills.Agile,
	skills.Roadmapping,
	skills.Leadership,
	skills.Mentoring,
	skills.DX,
	skills.Jira,
	skills.ClickUp,
	skills.ProductBoard,
	skills.DataAnalysis,
	skills.UserResearch,
	skills.Process,
]

export {
	EngineeringSkillSection,
	engineerSkillsConfig,
	mgmtSkillsConfig,
	skills,
	uxSkillsConfig,
}
export type { SkillConfig }
