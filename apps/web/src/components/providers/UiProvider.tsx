'use client'

import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import React from 'react'

interface UiProviderProps {
	children: React.ReactNode
}

const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
	return (
		<ChakraProvider colorModeManager={localStorageManager}>
			{children}
		</ChakraProvider>
	)
}

export default UiProvider
