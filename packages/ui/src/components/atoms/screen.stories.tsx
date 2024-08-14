import type { Meta, StoryObj } from '@storybook/react'
import LoremContent from '../_helpers/LoremContent'
import { Screen } from './Screen'

const meta: Meta<typeof Screen> = {
	title: 'Atoms/Screen',
	component: Screen,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: false,
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		children: <LoremContent />,
	},
}
