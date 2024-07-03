import type { As } from '@chakra-ui/react'
import {
	FaChartGantt,
	FaHandPointer,
	FaTimeline,
	FaUserGraduate,
	FaWheelchair,
} from 'react-icons/fa6'
import { HiDeviceMobile, HiRefresh } from 'react-icons/hi'
import {
	HiBeaker,
	HiCheckBadge,
	HiCodeBracket,
	HiGlobeAlt,
	HiLightBulb,
	HiMap,
	HiPresentationChartLine,
	HiShieldCheck,
	HiUser,
} from 'react-icons/hi2'
import {
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
	SiHasura,
	SiHtml5,
	SiHyper,
	SiInfosys,
	SiJavascript,
	SiJest,
	SiJira,
	SiMysql,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiNuxtdotjs,
	SiOctopusdeploy,
	SiPhp,
	SiPnpm,
	SiPostgresql,
	SiProtondrive,
	SiPython,
	SiReact,
	SiReactos,
	SiRedis,
	SiRedux,
	SiScrumalliance,
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

const engineerSkillsConfig: Record<EngineeringSkillSection, SkillConfig[]> = {
	[EngineeringSkillSection.FrontEnd]: [
		{
			label: 'TypeScript',
			icon: SiTypescript,
		},
		{
			label: 'Javascript',
			icon: SiJavascript,
		},
		{
			label: 'HTML',
			icon: SiHtml5,
		},
		{
			label: 'CSS',
			icon: SiCss3,
		},
		{
			label: 'React',
			icon: SiReact,
		},
		{
			label: 'React Native',
			icon: SiReactos,
		},
		{
			label: 'Vue',
			icon: SiVuedotjs,
		},
		{
			label: 'GraphQL',
			icon: SiGraphql,
		},
		{
			label: 'Next.js',
			icon: SiNextdotjs,
		},
		{
			label: 'Nuxt.js',
			icon: SiNuxtdotjs,
		},
		{
			label: 'Expo',
			icon: SiExpo,
		},
		{
			label: 'Clerk Auth',
			icon: SiClerk,
		},
		{
			label: 'Redux + RTKQ',
			icon: SiRedux,
		},
		{
			label: 'Zustand',
			icon: SiSinglestore,
		},
		{
			label: 'Chakra UI',
			icon: SiChakraui,
		},
		{
			label: 'GlueStack UI',
			icon: SiChakraui,
		},
		{
			label: 'TailwindCSS',
			icon: SiTailwindcss,
		},
		{
			label: 'Jest',
			icon: SiJest,
		},
	],
	[EngineeringSkillSection.BackEnd]: [
		{
			label: 'Node',
			icon: SiNodedotjs,
		},
		{
			label: 'Express',
			icon: SiExpress,
		},
		{
			label: 'Python',
			icon: SiPython,
		},
		{
			label: 'PHP',
			icon: SiPhp,
		},
		{
			label: 'Vercel',
			icon: SiVercel,
		},
		{
			label: 'Netlify',
			icon: SiNetlify,
		},
		{
			label: 'AWS Amplify',
			icon: SiAwsamplify,
		},
		{
			label: 'Redis',
			icon: SiRedis,
		},
		{
			label: 'Postgres',
			icon: SiPostgresql,
		},
		{
			label: 'MySql',
			icon: SiMysql,
		},
		{
			label: 'Postgres',
			icon: SiPostgresql,
		},
		{
			label: 'AWS DynamoDB',
			icon: SiAmazondynamodb,
		},
		{
			label: 'Hasura',
			icon: SiHasura,
		},
		{
			label: 'Apollo',
			icon: SiApollographql,
		},
	],
	[EngineeringSkillSection.DevOps]: [
		{
			label: 'CI/CD',
			icon: SiOctopusdeploy,
		},
		{
			label: 'GitHub Actions',
			icon: SiGithubactions,
		},
		{
			label: 'Turborepo',
			icon: SiTurborepo,
		},
		{
			label: 'Bash + Zsh',
			icon: SiZsh,
		},
		{
			label: 'Documentation',
			icon: SiDocusaurus,
		},
		{
			label: 'Integration Testing',
			icon: HiBeaker,
		},
		{
			label: 'Hypertune',
			icon: SiHyper,
		},
		{
			label: 'Datadog',
			icon: SiDatadog,
		},
	],
}

const uxSkillsConfig: SkillConfig[] = [
	{
		label: 'Figma',
		icon: SiFigma,
	},
	{
		label: 'Sketch',
		icon: SiSketch,
	},
	{
		label: 'Design Systems',
		icon: SiStorybook,
	},
	{
		label: 'Prototyping',
		icon: HiDeviceMobile,
	},
	{
		label: 'Usability Testing',
		icon: FaHandPointer,
	},
	{
		label: 'Information Architecture',
		icon: HiGlobeAlt,
	},
	{
		label: 'Accesibility Compliance',
		icon: FaWheelchair,
	},
]
const mgmtSkillsConfig: SkillConfig[] = [
	{
		label: 'Product Management',
		icon: HiLightBulb,
	},
	{
		label: 'Strategy',
		icon: HiMap,
	},
	{
		label: 'Agile + Scrum',
		icon: HiRefresh,
	},
	{
		label: 'ClickUp',
		icon: SiClickup,
	},
	{
		label: 'Jira',
		icon: SiJira,
	},
	{
		label: 'Roadmapping',
		icon: FaChartGantt,
	},
	{
		label: 'Profesional Development',
		icon: FaUserGraduate,
	},
	{
		label: 'Developer Experience Advocate',
		icon: HiCodeBracket,
	},
	{
		label: 'Data Analysis',
		icon: HiPresentationChartLine,
	},
	{
		label: 'User Research',
		icon: HiUser,
	},
	{
		label: 'User Research',
		icon: HiUser,
	},
	{
		label: 'Process & SOP',
		icon: HiShieldCheck,
	},
]

export {
	EngineeringSkillSection,
	engineerSkillsConfig,
	mgmtSkillsConfig,
	uxSkillsConfig,
}
export type { SkillConfig }
