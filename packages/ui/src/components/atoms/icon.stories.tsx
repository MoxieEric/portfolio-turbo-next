import { Icon, SimpleGrid, theme } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import * as Hi from 'react-icons/hi2'
import { IconOption } from '../../types'
import { getIcon } from '../../utils'
import { ExampleIcon } from '../_helpers'

const meta: Meta<typeof Icon> = {
	title: 'Atoms/Icon',
	component: Icon,
	tags: ['autodocs'],
	parameters: {
		background: 'light',
	},
	argTypes: {
		boxSize: {
			options: Object.keys(theme.sizes),
			control: { type: 'select' },
		},
		as: {
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
		as: Hi.HiSparkles,
		boxSize: 5,
	},
	decorators: (Story, { args, initialArgs }) => {
		const icon = args.as ? getIcon(args.as as IconOption) : undefined
		return <Icon as={icon || initialArgs.as} boxSize={args.boxSize} />
	},
}
export const AllIcons: Story = {
	args: {},
	tags: ['no-tests'],
	decorators: () => (
		<SimpleGrid columns={{ base: 2, md: 4, xl: 6 }} gap={8} rowGap={8}>
			{Object.values(IconOption).map((iconSlug) => {
				const icon = getIcon(iconSlug)
				return (
					<ExampleIcon icon={icon} key={iconSlug} name={iconSlug} />
				)
			})}
		</SimpleGrid>
	),
}
