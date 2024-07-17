import { Flex } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Blob } from './Blob'

const meta: Meta<typeof Blob> = {
	title: 'Molecules/Blob',
	component: Blob,
	parameters: {
		layout: 'center',
		height: '100vh',
		width: '100vw',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {},
	decorators: (Story) => (
		<Flex minH={96} w='full'>
			<Story />
		</Flex>
	),
}
