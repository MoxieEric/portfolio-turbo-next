import type { ReactNode } from 'react'

enum ExperienceType {
	FullTime = 'Full-Time',
	Contract = 'Contract',
}

interface ExperienceEntry {
	title: string
	companyName: string
	location: string
	isRemote?: boolean
	dateRange: string
	logo?: ReactNode
	type: ExperienceType
}

const experienceConfig: ExperienceEntry[] = [
	{
		title: 'Director of UX | Senior Engineer',
		companyName: 'BrewLogix',
		location: 'Indianapolis, IA',
		isRemote: true,
		dateRange: 'Dec. 2021 - June 2024',
		type: ExperienceType.FullTime,
	},
	{
		title: 'Senior Interactive Director',
		companyName: 'Moxie Sozo',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2013 - 2021',
		type: ExperienceType.Contract,
	},
	{
		title: 'Senior Engineer',
		companyName: 'Moxie Sozo',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2012 - 2013',
		type: ExperienceType.Contract,
	},
	{
		title: 'Front-End Engineer',
		companyName: 'BrandBase',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2011 - 2012',
		type: ExperienceType.FullTime,
	},
	{
		title: 'Web Producer | Developer',
		companyName: 'SPIN Magazine',
		location: 'New York, NY',
		isRemote: false,
		dateRange: '2006 - 2011',
		type: ExperienceType.FullTime,
	},
	{
		title: 'Photographer',
		companyName: 'Rolling Stone, SPIN, Pitchfork, Vogue, et al.',
		location: '',
		isRemote: false,
		dateRange: '2005 - 2012',
		type: ExperienceType.FullTime,
	},
	{
		title: 'B.F.A. Photography',
		companyName: 'Pratt Institute ',
		location: 'Brooklyn, NY',
		isRemote: false,
		dateRange: '2003 - 2007',
		type: ExperienceType.FullTime,
	},
]

export { experienceConfig }
export type { ExperienceEntry }
