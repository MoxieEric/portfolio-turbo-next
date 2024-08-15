import { LayoutDirection } from '@repo/types'
import type { Meta, StoryObj } from '@storybook/react'
import LoremContent from '../_helpers/LoremContent'
import { ScreenSection } from './ScreenSection'

const meta: Meta<typeof ScreenSection> = {
	title: 'Molecules/ScreenSection',
	component: ScreenSection,
	parameters: {
		layout: 'center',
		height: '100vh',
		width: '100vw',
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		title: 'Section Headline',
		children: <LoremContent />,
	},
}
export const Column: Story = {
	args: {
		title: 'Section Headline',
		children: <LoremContent />,
		layout: LayoutDirection.Column,
	},
}
