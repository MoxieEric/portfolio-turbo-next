'use client'

import type { ThemeConfig } from '@chakra-ui/react'
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import { theme } from '@repo/ui/theme'
import React from 'react'

interface UiProviderProps {
	children: React.ReactNode
}

const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
	return (
		<ChakraProvider
			colorModeManager={localStorageManager}
			theme={theme as ThemeConfig}
		>
			{children}
		</ChakraProvider>
	)
}

export default UiProvider
