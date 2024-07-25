import { Badge, HStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ColorSilo } from './colors.stories'

const meta: Meta<typeof Badge> = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		colorScheme: {
			control: 'select',
			options: Object.values(ColorSilo),
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		children: 'Badge',
	},
}
export const ColorScheme: Story = {
	args: {},
	decorators: () => (
		<HStack flexWrap='wrap'>
			{Object.values(ColorSilo).map((color) => (
				<Badge colorScheme={color} key={color} variant='solid'>
					Badge {color}
				</Badge>
			))}
		</HStack>
	),
}
export const Variants: Story = {
	args: {},
	decorators: () => (
		<HStack flexWrap='wrap'>
			{['pill', 'subtle', 'solid', 'outline'].map((variant) => (
				<Badge key={variant} variant={variant}>
					Badge {variant}
				</Badge>
			))}
		</HStack>
	),
}
