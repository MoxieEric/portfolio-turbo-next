import type { ComponentStyleConfig } from '@chakra-ui/react'
import { theme } from '@chakra-ui/react'

const buttonConfig: ComponentStyleConfig = {
	baseStyle: {
		_active: {
			pointerEvents: 'none',
		},
	},
	sizes: {},
	variants: {
		round: {
			...theme.components.Button.variants?.solid({
				colorMode: 'light',
				colorScheme: 'gray',
				theme,
			}),
			rounded: 'full',
		},
	},
	defaultProps: {},
}

export default buttonConfig
