import type { ChakraProps } from '@chakra-ui/react'

enum KeyWords {
	FullStack = 'full-stack',
	Difference = 'make a difference',
}

const resumeHeaderConfig: {
	title: string
	body: string
	location: string
	keywords: string[]
	highlightStyles: Record<KeyWords, ChakraProps>
} = {
	title: 'Eric Nowels',
	body: 'Creative full-stack engineer with a passion for building products, teams, and experiences, that make a difference',
	location: 'Based in Boulder, Colorado',
	keywords: Object.values(KeyWords),
	highlightStyles: {
		[KeyWords.FullStack]: {
			color: 'black',
			fontStyle: 'italic',
			fontWeight: 'bold',
			textDecoration: 'underline',
		},
		[KeyWords.Difference]: {
			bg: 'black',
			color: 'white',
			fontFamily: 'NewYork',

			fontWeight: 'bold',
			px: '2',
			py: '1',
			_dark: {
				bg: 'gray.100',
				color: 'black',
			},
		},
	},
}

export { KeyWords, resumeHeaderConfig }
