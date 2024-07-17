import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import componentConfig from './components/componentConfig'

const theme: ThemeConfig = extendTheme({
	fonts: {
		heading: 'Aleo, sans-serif',
		body: 'Lato, sans-serif',
	},
	components: componentConfig,
	colors: {
		mono: {
			'50': '#000',
			'100': '#000',
			'200': '#000',
			'300': '#000',
			'400': '#000',
			'500': '#000',
			'600': '#FFF',
			'700': '#FFF',
			'800': '#FFF',
			'900': '#FFF',
		},
	},
})

export { theme }
