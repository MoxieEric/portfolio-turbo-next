import type { Meta, StoryObj } from '@storybook/react'
import { IconOption } from '../../types'
import { getIcon } from '../../utils'
import { Pill } from './Pill'

const meta: Meta<typeof Pill> = {
	title: 'Molecules/Pill',
	component: Pill,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'select',
			options: ['None', ...Object.values(IconOption)],
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		children: 'Chill',
	},
	decorators: (Story, { args }) => {
		const icon = args.icon ? getIcon(args.icon as IconOption) : undefined
		return <Pill icon={icon}>{args.children}</Pill>
	},
}
export const WithIcon: Story = {
	args: {
		children: 'Chill',
		icon: getIcon(IconOption.HiLightBulb),
	},
	decorators: (Story, { args, initialArgs }) => {
		const icon = args.icon ? getIcon(args.icon as IconOption) : undefined
		return <Pill icon={icon || initialArgs.icon}>{args.children}</Pill>
	},
}
