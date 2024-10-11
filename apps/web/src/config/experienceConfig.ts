import { EmploymentType } from '@repo/types'
import type { TimelineEvent } from '@repo/ui/components'

const experienceConfig: TimelineEvent[] = [
	{
		title: 'Director of UX | Senior Engineer',
		companyName: 'BrewLogix',
		location: 'Indianapolis, IA',
		isRemote: true,
		dateRange: 'March 2022 - June 2024',
		type: EmploymentType.FullTime,
		description:
			'Led UI/UX design and development for 4 complex software applications, successfully delivering them to market within 2 years. Managed UX and front-end engineering teams while acting as senior engineer, established best practices, and contributed to product roadmaps. Collaborated closely with product teams and designers to ensure exceptional user experiences.',
	},
	{
		title: 'Senior Software Engineer',
		companyName: 'BrewLogix',
		location: 'Indianapolis, IA',
		isRemote: true,
		dateRange: '2021 - 2022',
		type: EmploymentType.FullTime,
		description:
			'Full-stack engineer building innovative IoT SaaS applications for the craft brewing industry using TypeScript, React, Next.js, and GraphQL on AWS.',
	},
	{
		title: 'Senior Interactive Director',
		companyName: 'Moxie Sozo',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2013 - 2021',
		type: EmploymentType.Contract,
		description:
			'Led cross-functional teams at a creative agency that specializes in building digital platforms for top brands in craft beer, CPG, and technology. Served as staff engineer, contributing to and overseeing UX design, development, and product strategy. Employed a variety of tech stacks depending on the nature of the product, including Angular, Vue, React, Next.js, WordPress and Shopify.',
	},
	{
		title: 'Senior Engineer',
		companyName: 'Moxie Sozo',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2012 - 2013',
		type: EmploymentType.Contract,
		description:
			'Full-stack web developer responsible for leading a variety of web and mobile app design and build projects from concept to completion.',
	},
	{
		title: 'Front-End Engineer',
		companyName: 'BrandBase',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2011 - 2012',
		type: EmploymentType.FullTime,
		description:
			'Design and development for a portfolio of 4 e-commerce websites built on WordPress. Included content creation, SEO, SEM and daily web production responsibilities.',
	},
	{
		title: 'Web Producer | Developer',
		companyName: 'SPIN Magazine',
		location: 'New York, NY',
		isRemote: false,
		dateRange: '2006 - 2011',
		type: EmploymentType.FullTime,
		description:
			"Managed Spin Magazine's website. Duties included publishing, content production, SEO, SEM and web development for Drupal-powered websites. Sole staff photographer, and director of all original video content, including Spin Sessions, SpinHouse Live, BTS and on-site festival coverage.",
	},
	{
		title: 'Photographer',
		companyName: 'Rolling Stone, SPIN, Pitchfork, et al.',
		location: '',
		isRemote: false,
		dateRange: '2005 - 2012',
		type: EmploymentType.FullTime,
		description: '',
	},
	{
		title: 'B.F.A. Photography',
		companyName: 'Pratt Institute ',
		location: 'Brooklyn, NY',
		isRemote: false,
		dateRange: '2003 - 2007',
		type: EmploymentType.FullTime,
	},
]

export { experienceConfig }
