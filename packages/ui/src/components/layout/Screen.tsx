import { VStack } from '@chakra-ui/react'
import React from 'react'

interface ScreenProps {
	children: React.ReactNode
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
	return (
		<VStack gap={8} maxWidth={{ base: '3xl' }}>
			{children}
		</VStack>
	)
}

export { Screen }
