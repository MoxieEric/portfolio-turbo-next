import { EmploymentType } from '@repo/types'
import type { TimelineItem } from '@repo/ui/components'

const experienceConfig: TimelineItem[] = [
	{
		title: 'Director of UX | Senior Engineer',
		companyName: 'BrewLogix',
		location: 'Indianapolis, IA',
		isRemote: true,
		dateRange: 'Dec. 2021 - June 2024',
		type: EmploymentType.FullTime,
	},
	{
		title: 'Senior Interactive Director',
		companyName: 'Moxie Sozo',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2013 - 2021',
		type: EmploymentType.Contract,
	},
	{
		title: 'Senior Engineer',
		companyName: 'Moxie Sozo',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2012 - 2013',
		type: EmploymentType.Contract,
	},
	{
		title: 'Front-End Engineer',
		companyName: 'BrandBase',
		location: 'Boulder, CO',
		isRemote: false,
		dateRange: '2011 - 2012',
		type: EmploymentType.FullTime,
	},
	{
		title: 'Web Producer | Developer',
		companyName: 'SPIN Magazine',
		location: 'New York, NY',
		isRemote: false,
		dateRange: '2006 - 2011',
		type: EmploymentType.FullTime,
	},
	{
		title: 'Photographer',
		companyName: 'Rolling Stone, SPIN, Pitchfork, et al.',
		location: '',
		isRemote: false,
		dateRange: '2005 - 2012',
		type: EmploymentType.FullTime,
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
