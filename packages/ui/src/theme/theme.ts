import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Aleo, Inter } from 'next/font/google'
import componentConfig from './components/componentConfig'

const aleo = Aleo({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const theme: ThemeConfig = extendTheme({
	fonts: {
		serif: `${aleo.style.fontFamily}, serif`,
		sans: `${inter.style.fontFamily}, sans-serif`,
		heading: `${inter.style.fontFamily}, sans-serif`,
		body: `${inter.style.fontFamily}, sans-serif`,
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
