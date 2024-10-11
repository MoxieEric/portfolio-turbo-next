'use client'

import { VStack } from '@chakra-ui/react'
import React from 'react'
import type { TimelineEvent } from '../organisms'
import { Event } from '../organisms'

interface TimelineProps {
	items: TimelineEvent[]
	descriptions?: boolean
}

const Timeline: React.FC<TimelineProps> = ({ items, descriptions }) => {
	return (
		<VStack gap={4} position='relative' w='full'>
			{items.map((event, index) => (
				<Event
					event={
						descriptions ? event : { ...event, description: null }
					}
					key={event.title}
					line={index + 1 < items.length}
				/>
			))}
		</VStack>
	)
}

export { Timeline }
