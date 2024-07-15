import { VStack } from '@chakra-ui/react'
import React from 'react'

interface PaperProps {
	children: React.ReactNode
}

const Paper: React.FC<PaperProps> = ({ children }) => {
	return <VStack gap={8}>{children}</VStack>
}

export { Paper }
