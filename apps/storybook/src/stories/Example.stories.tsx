import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
// import { Button } from './Button';
import { Text } from '@chakra-ui/react'
import { SimpleCard } from '@repo/ui/components'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example Story',
	component: SimpleCard,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'left',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof SimpleCard>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		title: 'Basic Example',
		children: (
			<>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Laboriosam dolores aut magni explicabo unde dicta illo, vero
					soluta nemo natus incidunt, minus, et dolorem. Distinctio
					doloremque fuga quisquam eius corporis.
				</Text>
				<Text>...</Text>
			</>
		),
	},
}
