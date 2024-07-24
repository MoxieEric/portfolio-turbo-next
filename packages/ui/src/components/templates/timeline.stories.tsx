import type { Meta, StoryObj } from '@storybook/react'
import { exampleEvents } from '../../content/event'
import { Timeline } from './Timeline'

const meta: Meta<typeof Timeline> = {
	title: 'Templates/Timeline',
	component: Timeline,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		items: exampleEvents,
	},
}
