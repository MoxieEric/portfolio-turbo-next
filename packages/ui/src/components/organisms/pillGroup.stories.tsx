import type { Meta, StoryObj } from '@storybook/react'
import { IconOption } from '../../types'
import { getIcon } from '../../utils'
import { Pill } from '../molecules'
import { PillGroup } from './PillGroup'

const meta: Meta<typeof PillGroup> = {
	title: 'Organisms/PillGroup',
	component: PillGroup,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		zIndex: {
			control: 'range',
			min: 3,
			max: 20,
		},
	},
	decorators: (Story, { args, initialArgs }) => {
		return (
			<PillGroup>
				{Array.from(
					Array(args.zIndex || initialArgs.zIndex).keys()
				).map((index) => (
					<Pill icon={getIcon(IconOption.FaPeopleArrows)} key={index}>
						{`Pill ${index}`}
					</Pill>
				))}
			</PillGroup>
		)
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		zIndex: 10,
		children: [],
	},
}
export const WithCollapse: Story = {
	args: {
		zIndex: 20,
		children: [],
	},
}
