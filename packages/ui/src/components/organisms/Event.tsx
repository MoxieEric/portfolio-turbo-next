'use client'

import {
	Box,
	Card,
	CardBody,
	Circle,
	Code,
	Flex,
	HStack,
	Heading,
	Icon,
	Stack,
	Text,
} from '@chakra-ui/react'
import type { EmploymentType } from '@repo/types'
import type { ReactNode } from 'react'
import React from 'react'
import { HiCalendar } from 'react-icons/hi2'

export interface TimelineEvent {
	title: string
	companyName: string
	location: string
	isRemote?: boolean
	dateRange: string
	logo?: ReactNode
	type: EmploymentType
}

interface EventProps {
	event: TimelineEvent
	children?: ReactNode
	line?: boolean
	title?: string /* deprecated */
}

const Event: React.FC<EventProps> = ({ children, event, line = true }) => {
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
			<Card
				bg='transparent'
				overflow='hidden'
				shadow='none'
				size='sm'
				w='full'
			>
				<Stack
					alignItems='center'
					direction={{ base: 'column', md: 'row' }}
					gap={2}
					w='full'
				>
					<CardBody
						display='flex'
						flexDir='column'
						gap={2}
						padding={3}
						w='full'
					>
						<Heading size='md' w='full'>
							{event.title}
						</Heading>
						<HStack gap={2}>
							<Heading size='sm'>{event.companyName}</Heading>
							<Text size='sm'>
								{event.location}{' '}
								{event.isRemote ? (
									<Code px={1}> Remote</Code>
								) : null}
							</Text>
						</HStack>
						<HStack alignItems='center' spacing={0.5}>
							<Icon as={HiCalendar} />
							<Text size='sm'>{event.dateRange}</Text>
						</HStack>
						{children}
					</CardBody>
				</Stack>
			</Card>
		</Flex>
	)
}

export { Event }
