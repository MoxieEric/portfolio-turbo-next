import type { ChakraProps } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import React from 'react'

interface ScreenProps {
	children: React.ReactNode
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
	const printStyles: ChakraProps['sx'] = {
		'@media print': {
			maxWidth: '100%',
		},
	}
	return (
		<VStack
			gap={{ base: 8, md: 12 }}
			maxWidth={{ base: '3xl' }}
			sx={printStyles}
		>
			{children}
		</VStack>
	)
}

export { Screen }
