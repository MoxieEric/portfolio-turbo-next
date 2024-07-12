'use client'

import { Flex, Heading } from '@chakra-ui/react'
import { LayoutDirection } from '@repo/types'
import React, { type ReactNode } from 'react'

interface ScreenSectionProps {
	children: ReactNode
	id?: string
	layout?: LayoutDirection
	title?: string
}

const ScreenSection: React.FC<ScreenSectionProps> = ({
	children,
	id,
	layout = LayoutDirection.Row,
	title,
}) => {
	return (
		<Flex
			flexDirection={{ base: 'column', md: layout }}
			gap={4}
			id={id}
			justifyContent='space-between'
			maxW='3xl'
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
