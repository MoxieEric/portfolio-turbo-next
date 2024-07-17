import { ChakraProvider, theme } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import React from 'react'

const preview: Preview = {
	decorators: [
		(Story) => (
			<ChakraProvider theme={theme}>
				<Story />
			</ChakraProvider>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
