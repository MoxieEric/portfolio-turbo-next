import {
	Box,
	ChakraProvider,
	getCSSVar,
	getToken,
	useTheme,
} from '@chakra-ui/react'
import { theme } from '@repo/ui/theme'

import type { Preview } from '@storybook/react'
import React from 'react'

const preview: Preview = {
	decorators: [
		(Story) => (
			<ChakraProvider theme={theme}>
				<Box p={4}>
					<Story />
				</Box>
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
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'dark',
					value: 'var(--chakra-colors-gray-800)',
				},
				{
					name: 'medium',
					value: 'var(--chakra-colors-gray-100)',
				},
				{
					name: 'light',
					value: 'var(--chakra-colors-gray-50)',
				},
				{
					name: 'white',
					value: 'white',
				},
			],
		},
	},
}

export default preview
