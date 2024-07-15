import { VStack } from '@chakra-ui/react'
import React from 'react'

interface ScreenProps {
	children: React.ReactNode
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
	return (
		<VStack gap={{ base: 8, md: 12 }} maxWidth={{ base: '3xl' }}>
			{children}
		</VStack>
	)
}

export { Screen }
