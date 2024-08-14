import { VStack } from '@chakra-ui/react'
import React from 'react'

interface PaperProps {
	children: React.ReactNode
}

const Paper: React.FC<PaperProps> = ({ children }) => {
	return (
		<VStack
			alignItems='center'
			gap={4}
			justifyContent='start'
			maxWidth='4xl'
			minH='842px'
			w='full'
		>
			{children}
		</VStack>
	)
}

export { Paper }
