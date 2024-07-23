import type { As } from '@chakra-ui/react'
import { HStack, Icon, SimpleGrid } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import * as Fa from 'react-icons/fa6'
import * as Hi from 'react-icons/hi2'
import * as Si from 'react-icons/si'
import { IconOption, SizeToken } from '../../types'
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
				const library: string = iconSlug.substring(0, 2)
				let icon: As
				switch (library) {
					case 'Hi':
						// @ts-expect-error -- must coerce :(
						icon = Hi[iconSlug] as As
						break
					case 'Fa':
						// @ts-expect-error -- must coerce :(
						icon = Fa[iconSlug] as As
						break
					case 'Si':
						// @ts-expect-error -- must coerce :(
						icon = Si[iconSlug] as As
						break

					default:
						icon = Hi.HiFaceFrown
						break
				}
				return (
					<ExampleIcon icon={icon} key={iconSlug} name={iconSlug} />
				)
			})}
		</SimpleGrid>
	),
}
