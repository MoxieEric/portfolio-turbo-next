'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { type ReactNode } from 'react'
import { FeatureCard, SimpleCard } from '../cards'

interface ScreenSectionProps {
	children: ReactNode
	id?: string
	title?: string
}

const ScreenSection: React.FC<ScreenSectionProps> = ({
	children,
	id,
	title,
}) => {
	return (
		<Flex
			flexDirection={{ base: 'column', md: 'row' }}
			gap={4}
			id={id}
			justifyContent='space-between'
			w='full'
		>
			<Heading size='lg' w={{ base: 'full', md: 72 }}>
				{title}
			</Heading>
			{children}
		</Flex>
	)
}

export { ScreenSection }
