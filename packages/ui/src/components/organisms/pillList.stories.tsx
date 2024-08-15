import type { Meta, StoryObj } from '@storybook/react'
import { IconOption } from '../../types'
import { getIcon } from '../../utils'
import { Pill } from '../molecules'
import { PillList } from './PillList'

const meta: Meta<typeof PillList> = {
	title: 'Organisms/PillList',
	component: PillList,
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
			<PillList>
				{Array.from(
					Array(args.zIndex || initialArgs.zIndex).keys()
				).map((index) => (
					<Pill icon={getIcon(IconOption.FaPeopleArrows)} key={index}>
						{`Pill ${index}`}
					</Pill>
				))}
			</PillList>
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
