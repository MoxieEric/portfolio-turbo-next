import type { Meta, StoryObj } from '@storybook/react'
import LoremContent from '../_helpers/LoremContent'
import { Paper } from './Paper'

const meta: Meta<typeof Paper> = {
	title: 'Atoms/Paper',
	component: Paper,
	parameters: {
		layout: 'center',
		height: '100vh',
		width: '100vw',
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
