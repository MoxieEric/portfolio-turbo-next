import { VStack } from '@chakra-ui/react'
import React from 'react'

interface PaperProps {
	children: React.ReactNode
}

const Paper: React.FC<PaperProps> = ({ children }) => {
	return (
		<VStack alignItems='start' gap={4} w='full'>
			{children}
		</VStack>
	)
}

export { Paper }
