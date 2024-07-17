import { Heading, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { SizeToken } from '../../types'

const meta: Meta<typeof Heading> = {
	title: 'Atoms/Heading',
	component: Heading,
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
		children: 'This is a heading',
	},
}
export const Sizes: Story = {
	args: {},
	decorators: () => (
		<VStack alignItems='left' gap={2}>
			{Object.values(SizeToken).map((size) => (
				<Heading key={size} size={size}>
					Heading {size}
				</Heading>
			))}
		</VStack>
	),
}
export const Serif: Story = {
	args: {},
	decorators: () => (
		<VStack alignItems='left' gap={2}>
			{Object.values(SizeToken).map((size) => (
				<Heading key={size} size={size} variant='serif'>
					Heading {size}
				</Heading>
			))}
		</VStack>
	),
}
