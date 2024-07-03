'use client'

import { ChakraProvider, VStack, cookieStorageManager } from '@chakra-ui/react'
import { NavBar, Screen } from '@repo/ui/components'
import React from 'react'
import navigationConfig from '../../config/navigationConfig'

interface UiProviderProps {
	children: React.ReactNode
}

const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
	return (
		<ChakraProvider colorModeManager={cookieStorageManager}>
			<VStack
				as='main'
				px={{ base: 4, md: 8 }}
				py={4}
				alignItems='center'
				gap={{ base: 4, md: 8 }}
				justifyContent='center'
				w='full'
			>
				<NavBar links={navigationConfig} />
				<Screen>{children}</Screen>
			</VStack>
		</ChakraProvider>
	)
}

export default UiProvider
