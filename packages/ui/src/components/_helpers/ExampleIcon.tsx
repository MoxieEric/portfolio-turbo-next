'use client'

import type { As } from '@chakra-ui/react'
import { Code, Flex, Icon, VStack } from '@chakra-ui/react'
import React from 'react'

interface ExampleIconProps {
	name: string
	icon?: As
}

export const ExampleIcon: React.FC<ExampleIconProps> = ({ icon, name }) => {
	return (
		<Flex alignItems='center' flexDirection='column' gap={4}>
			<VStack
				aspectRatio='1/1'
				bg='whiteAlpha.200'
				shadow='md'
				w='fit-content'
			>
				<Icon as={icon} boxSize={4} />
			</VStack>
			<Code fontSize='sm'>{name}</Code>
		</Flex>
	)
}
