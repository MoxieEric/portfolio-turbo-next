'use client'

import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import { theme } from '@repo/ui/theme'
import React from 'react'

interface UiProviderProps {
	children: React.ReactNode
}

const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
	return (
		<ChakraProvider theme={theme} colorModeManager={localStorageManager}>
			{children}
		</ChakraProvider>
	)
}

export default UiProvider
