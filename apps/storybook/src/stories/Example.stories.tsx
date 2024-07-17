import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example Story',
	component: Card,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: { type: 'select' },
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		// title: 'Basic Example',
		size: 'lg',
		children: (
			<>
				<CardHeader>Hello</CardHeader>
				<CardBody>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laboriosam dolores aut magni explicabo unde dicta illo,
						vero soluta nemo natus incidunt, minus, et dolorem.
						Distinctio doloremque fuga quisquam eius corporis.
					</Text>
					<Text>...</Text>
				</CardBody>
			</>
		),
	},
}
