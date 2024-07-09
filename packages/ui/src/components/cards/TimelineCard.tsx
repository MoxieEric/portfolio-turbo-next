'use client'

import { Box, Circle, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React from 'react'
import { SimpleCard } from './SimpleCard'

interface TimelineCardProps {
	children: ReactNode
	title: string
	line?: boolean
}

const TimelineCard: React.FC<TimelineCardProps> = ({
	children,
	title,
	line = true,
}) => {
	return (
		<Flex
			alignItems='start'
			gap={2}
			h='full'
			overflow='visible'
			position='relative'
			w='full'
		>
			<Flex flexDirection='column' h='full' pt={5}>
				{line ? (
					<Box
						borderLeftColor='gray.200'
						borderLeftStyle='dotted'
						borderLeftWidth='2px'
						h='calc(100% + 1rem)'
						ml='3px'
						position='absolute'
						w={0}
					/>
				) : null}
				<Circle bg='gray.300' position='relative' size={2} zIndex={1} />
			</Flex>
			<SimpleCard size='sm' title={title} w='full'>
				{children}
			</SimpleCard>
		</Flex>
	)
}

export { TimelineCard }
