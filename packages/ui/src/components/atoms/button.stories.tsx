import type { ButtonProps } from '@chakra-ui/react'
import {
	Button,
	HStack,
	Heading,
	Icon,
	IconButton,
	VStack,
} from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonSizeToken, IconOption } from '../../types'
import { getIcon } from '../../utils'
import { ColorSilo } from './colors.stories'

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(ButtonSizeToken),
		},
		colorScheme: {
			control: 'select',
			options: Object.values(ColorSilo),
		},
		leftIcon: {
			control: 'select',
			options: ['None', ...Object.values(IconOption)],
		},
		rightIcon: {
			control: 'select',
			options: ['None', ...Object.values(IconOption)],
		},
		isLoading: {
			control: 'boolean',
		},
		loadingText: {
			control: 'text',
		},
		isDisabled: {
			control: 'boolean',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

/* Stories */
export const Default: Story = {
	args: {
		children: 'Button',
	},
	decorators: (Story, { args }) => {
		const props: ButtonProps = {}
		if (args.leftIcon)
			props.leftIcon = (
				<Icon as={getIcon(String(args.leftIcon) as IconOption)} />
			)
		if (args.rightIcon)
			props.rightIcon = (
				<Icon as={getIcon(String(args.rightIcon) as IconOption)} />
			)
		return (
			<Button {...args} {...props}>
				{args.children}
			</Button>
		)
	},
}
export const Sizes: Story = {
	args: {},
	decorators: () => (
		<HStack flexWrap='wrap'>
			{Object.values(ButtonSizeToken).map((size) => (
				<Button key={size} size={size}>
					Button {size}
				</Button>
			))}
		</HStack>
	),
}
export const Variants: Story = {
	args: {},
	decorators: () => (
		<VStack alignItems='start' gap={8}>
			{['solid', 'outline', 'ghost', 'link'].map((variant) => (
				<HStack flexWrap='wrap' gap={4} key={variant}>
					<Heading size='sm' textTransform='capitalize' w='full'>
						{variant}
					</Heading>
					{Object.values(ColorSilo).map((colorScheme) => (
						<Button
							colorScheme={colorScheme}
							key={colorScheme}
							variant={variant}
						>
							Button {colorScheme}
						</Button>
					))}
				</HStack>
			))}
		</VStack>
	),
}
export const WithIcons: Story = {
	args: {},
	decorators: (Story, { args }) => (
		<HStack flexWrap='wrap' gap={4}>
			<Button
				{...args}
				leftIcon={
					<Icon
						as={getIcon(
							String(args.leftIcon || 'HiLightBulb') as IconOption
						)}
					/>
				}
			>
				Left Icon
			</Button>
			<Button
				{...args}
				rightIcon={
					<Icon
						as={getIcon(
							String(args.leftIcon || 'HiLightBulb') as IconOption
						)}
					/>
				}
			>
				Right Icon
			</Button>
			<IconButton
				{...args}
				aria-label='Icon button demo'
				icon={
					<Icon
						as={getIcon(
							String(args.leftIcon || 'HiLightBulb') as IconOption
						)}
					/>
				}
				variant='round'
			/>
		</HStack>
	),
}
