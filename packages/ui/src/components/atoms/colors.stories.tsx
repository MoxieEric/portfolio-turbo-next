import { Box, HStack, Heading, VStack } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ColorValue, SizeToken } from '../../types'
import { ColorSwatch } from '../_helpers'

enum ColorSilo {
	Gray = 'gray',
	Teal = 'teal',
	Pink = 'pink',
	BlackAlpha = 'blackAlpha',
}
enum FlatColors {
	Black = 'black',
	White = 'white',
	Transparent = 'transparent',
}

const meta: Meta<typeof Box> = {
	title: 'Atoms/Colors',
	component: Box,
	tags: ['autodocs'],
	parameters: {
		background: 'light',
	},
	argTypes: {
		color: {
			options: Object.values(SizeToken),
			control: { type: 'select' },
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const AllColors: Story = {
	args: {},
	decorators: () => (
		<VStack alignItems='start' gap={8}>
			{Object.values(ColorSilo).map((silo) => {
				return (
					<HStack flexWrap='wrap' key={silo}>
						<Heading size='sm' textTransform='capitalize' w='full'>
							{silo}
						</Heading>
						{Object.entries(ColorValue).map(([key, color]) => {
							return (
								<ColorSwatch
									color={`${silo}.${color}`}
									key={key}
								/>
							)
						})}
					</HStack>
				)
			})}
			<HStack flexWrap='wrap'>
				<Heading size='sm' textTransform='capitalize' w='full'>
					Absolutes
				</Heading>
				{Object.values(FlatColors).map((color) => {
					return <ColorSwatch color={color} key={color} />
				})}
			</HStack>
		</VStack>
	),
}
