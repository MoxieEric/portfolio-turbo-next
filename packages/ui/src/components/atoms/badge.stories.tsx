import { Badge, HStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonSizeToken } from '../../types'

const meta: Meta<typeof Badge> = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(ButtonSizeToken).map((size) => size),
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
export const Sizes: Story = {
	args: {},
	decorators: () => (
		<HStack flexWrap='wrap'>
			{Object.values(ButtonSizeToken).map((size) => (
				<Badge key={size} size={size}>
					Badge {size}
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
