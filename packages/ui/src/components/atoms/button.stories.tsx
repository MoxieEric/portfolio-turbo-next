import { Button, HStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonSizeToken } from '../../types'

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
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
		children: 'Button',
	},
}
export const Sizes: Story = {
	args: {},
	decorators: () => (
		<HStack flexWrap='wrap'>
			{Object.values(ButtonSizeToken).map((size) => (
				<Button key={size} size={size}>
					Button {size}
				</Button>
			))}
		</HStack>
	),
}
export const Variants: Story = {
	args: {},
	decorators: () => (
		<HStack flexWrap='wrap'>
			{['solid', 'outline', 'ghost', 'link'].map((variant) => (
				<Button key={variant} variant={variant}>
					Button {variant}
				</Button>
			))}
		</HStack>
	),
}
