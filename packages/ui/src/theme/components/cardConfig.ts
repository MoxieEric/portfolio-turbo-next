import { cardAnatomy } from '@chakra-ui/anatomy'
import type {
	ComponentMultiStyleConfig,
	PartsStyleObject,
} from '@chakra-ui/react'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const configHelpers = createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle: PartsStyleObject = configHelpers.definePartsStyle({
	container: {
		boxShadow: 'none',
		bg: 'transparent',
		borderColor: 'gray.100',
		_dark: { borderColor: 'gray.500' },
	},
	header: {
		color: 'black',
		fontFamily: 'Aleo',
		fontWeight: 'bold',
		fontSize: '2xl',
		_dark: { color: 'white' },
		_empty: {
			display: 'none',
		},
	},
	body: {
		p: { base: 4, md: 6 },
		color: 'gray.500',
		_dark: { color: 'gray.800' },
	},
})

const sizes = {
	sm: {
		header: {
			fontWeight: 'bold',
			fontSize: '2xl',
			color: 'pink.400',
		},
	},
}

const cardConfig: ComponentMultiStyleConfig =
	configHelpers.defineMultiStyleConfig({ baseStyle, sizes })

export default cardConfig
