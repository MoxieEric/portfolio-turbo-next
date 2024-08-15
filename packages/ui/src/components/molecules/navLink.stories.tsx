import { HStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from './NavLink'

const meta: Meta<typeof NavLink> = {
	title: 'Molecules/NavLink',
	component: NavLink,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>
const exampleLink = {
	label: 'Link Label',
	path: '#',
}

/* Stories */
export const Default: Story = {
	args: {
		...exampleLink,
	},
}
export const States: Story = {
	args: {
		...exampleLink,
	},
	decorators: () => {
		return (
			<HStack gap={4}>
				<NavLink {...exampleLink} active label='Active Link' />
				<NavLink {...exampleLink} disabled label='Disabled Link' />
			</HStack>
		)
	},
}
