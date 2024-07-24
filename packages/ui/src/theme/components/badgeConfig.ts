import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'

const badgeConfig: ComponentSingleStyleConfig = defineStyleConfig({
	baseStyle: {
		bg: 'gray.200',
		px: 2,
	},
	variants: {
		pill: {
			rounded: 'full',
			boxShadow: 'none',
			shadow: 'sm',
			textTransform: 'none',
		},
		solid: {
			color: 'black',
		},
		subtle: {
			color: 'blackAlpha.500',
		},
	},
	defaultProps: {
		variant: 'pill',
	},
})

export default badgeConfig
