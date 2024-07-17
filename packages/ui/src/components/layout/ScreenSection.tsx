'use client'

import { Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { LayoutDirection } from '@repo/types'
// import  from '@repo/types'
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
	const [isPrint] = useMediaQuery('print')
	return (
		<Flex
			flexDirection={{ base: 'column', md: isPrint ? 'column' : layout }}
			gap={4}
			id={id}
			justifyContent={isPrint ? 'flex-start' : 'space-between'}
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
