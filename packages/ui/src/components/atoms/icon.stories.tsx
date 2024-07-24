import { HStack, Icon, SimpleGrid } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import * as Hi from 'react-icons/hi2'
import { IconOption, SizeToken } from '../../types'
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
		size: {
			options: Object.values(SizeToken),
			control: { type: 'select' },
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		children: 'This is a heading',
		as: Hi.HiSparkles,
	},
}
export const Sizes: Story = {
	args: {},
	decorators: () => (
		<HStack
			alignItems='baseline'
			flexDirection='row-reverse'
			gap={4}
			justifyContent='start'
		>
			{Object.values(SizeToken).map((size, index) => (
				<Icon
					as={Hi.HiSparkles}
					boxSize={Math.floor((index + 1) * 2)}
					key={size}
					size={size}
				/>
			))}
		</HStack>
	),
}
export const AllIcons: Story = {
	args: {},
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
