import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from './NavBar'

const exampleLink = {
	label: 'Link Label',
	path: '#',
}

const meta: Meta<typeof NavBar> = {
	title: 'Organisms/NavBar',
	component: NavBar,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		links: { control: 'object' },
		label: {
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		label: 'Brand',
		links: [
			exampleLink,
			exampleLink,
			exampleLink,
			{ ...exampleLink, disabled: true },
		],
	},
}
