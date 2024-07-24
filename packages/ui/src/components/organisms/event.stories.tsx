import { EmploymentType } from '@repo/types'
import type { Meta, StoryObj } from '@storybook/react'
import { exampleEvent } from '../../content/event'
import { Event } from './Event'

const meta: Meta<typeof Event> = {
	title: 'Organisms/Event',
	component: Event,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		event: exampleEvent,
	},
}

export const Variation: Story = {
	args: {
		event: {
			title: 'A Thing That Happened',
			companyName: 'Acme Co.',
			location: 'Springfield, Il',
			isRemote: true,
			dateRange: '0000 - 0000',
			type: EmploymentType.FullTime,
		},
		line: false,
	},
}
