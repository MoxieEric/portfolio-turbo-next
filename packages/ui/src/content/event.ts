import { EmploymentType } from '@repo/types'
import type { TimelineEvent } from '../components/organisms'

export const exampleEvent: TimelineEvent = {
	title: 'A Thing That Happened',
	companyName: 'Acme Co.',
	location: 'Springfield, Il',
	isRemote: false,
	dateRange: '0000 - 0000',
	type: EmploymentType.FullTime,
}

export const exampleEvents: TimelineEvent[] = [
	exampleEvent,
	{
		...exampleEvent,
		title: 'Another Thing Went Down',
	},
	{
		...exampleEvent,
		title: 'Something Worth Remembering',
		isRemote: true,
	},
	{
		...exampleEvent,
		title: 'When It All Started',
	},
]
