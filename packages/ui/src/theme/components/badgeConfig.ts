import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'

const badgeConfig: ComponentSingleStyleConfig = defineStyleConfig({
	baseStyle: {
		px: 2,
	},
	variants: {
		pill: {
			rounded: 'full',
			boxShadow: 'none',
			shadow: 'sm',
			textTransform: 'none',
		},
		solid: {},
		subtle: {
			color: 'blackAlpha.500',
		},
	},
	defaultProps: {
		variant: 'pill',
	},
})

export default badgeConfig
