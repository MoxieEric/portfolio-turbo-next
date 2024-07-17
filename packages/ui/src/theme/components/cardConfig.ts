import { cardAnatomy } from '@chakra-ui/anatomy'
import type {
	ComponentMultiStyleConfig,
	PartsStyleObject,
} from '@chakra-ui/react'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { printStyles } from '../../utils'

const configHelpers = createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle: PartsStyleObject = configHelpers.definePartsStyle({
	container: {
		boxShadow: 'none',
		bg: 'transparent',
		border: 'none',
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
const variants: Record<string, PartsStyleObject> = {
	feature: {
		_dark: {
			bg: 'gray.700',
		},
		bg: 'gray.50',
		overflow: 'hidden',
		rounded: 'lg',
		sx: {
			...printStyles({
				boxShadow: 'none',
			}),
		},
	},
}

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
	configHelpers.defineMultiStyleConfig({ baseStyle, sizes, variants })

export default cardConfig
