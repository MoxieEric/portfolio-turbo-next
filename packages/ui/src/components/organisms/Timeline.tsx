'use client'

import { Code, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import type { EmploymentType } from '@repo/types'
import type { ReactNode } from 'react'
import React from 'react'
import { HiCalendar } from 'react-icons/hi2'
import { TimelineCard } from '../cards'

export interface TimelineItem {
	title: string
	companyName: string
	location: string
	isRemote?: boolean
	dateRange: string
	logo?: ReactNode
	type: EmploymentType
}

interface TimelineProps {
	items: TimelineItem[]
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
	return (
		<VStack gap={4} position='relative' w='full'>
			{items.map((job, index) => (
				<TimelineCard
					key={job.dateRange}
					line={index + 1 < items.length}
					title={job.title}
				>
					<HStack gap={2}>
						<Heading size='sm'>{job.companyName}</Heading>
						<Text size='sm'>
							{job.location}{' '}
							{job.isRemote ? <Code px={1}> Remote</Code> : null}
						</Text>
					</HStack>
					<HStack alignItems='center' spacing={0.5}>
						<Icon as={HiCalendar} />
						<Text size='sm'>{job.dateRange}</Text>
					</HStack>
				</TimelineCard>
			))}
		</VStack>
	)
}

export { Timeline }
