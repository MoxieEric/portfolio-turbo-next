import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@repo/ui/theme'

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
