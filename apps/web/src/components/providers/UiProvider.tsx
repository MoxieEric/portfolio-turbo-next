'use client'

import { Box, ChakraProvider, cookieStorageManager } from '@chakra-ui/react'
import React from 'react'

interface UiProviderProps {
	children: React.ReactNode
}

const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
	return (
		<ChakraProvider colorModeManager={cookieStorageManager}>
			<Box as='main' px={{ base: 4, md: 8 }} py={4}>
				{children}
			</Box>
		</ChakraProvider>
	)
}

export default UiProvider
