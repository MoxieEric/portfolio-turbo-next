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
		event: {
			title: {
				control: 'text',
			},
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

export const WithoutLine: Story = {
	args: {
		event: exampleEvent,
		line: false,
	},
}
