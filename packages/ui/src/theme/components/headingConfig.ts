import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'

const headingConfig: ComponentSingleStyleConfig = defineStyleConfig({
	baseStyle: {
		color: 'black',
		_dark: {
			color: 'gray.50',
		},
	},
	variants: {
		serif: {
			fontFamily: 'serif',
			fontWeight: {
				base: 'regular',
			},
		},
	},
	defaultProps: {},
})

export default headingConfig
