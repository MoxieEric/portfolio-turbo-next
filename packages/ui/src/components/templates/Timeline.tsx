'use client'

import { VStack } from '@chakra-ui/react'
import React from 'react'
import type { TimelineEvent } from '../organisms'
import { Event } from '../organisms'

interface TimelineProps {
	items: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
	return (
		<VStack gap={4} position='relative' w='full'>
			{items.map((job, index) => (
				<Event
					event={job}
					key={job.dateRange}
					line={index + 1 < items.length}
				/>
			))}
		</VStack>
	)
}

export { Timeline }
