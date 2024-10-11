'use client'

import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export interface ListEntryProps {
	title: string
	companyName: string
	dateRange: string
	description?: string
	imageSource?: string
}

const ListEntry: React.FC<ListEntryProps> = ({
	title,
	companyName,
	dateRange,
	description,
	imageSource,
}) => {
	return (
		<VStack alignItems='start'>
			<HStack alignItems='center' gap={3}>
				<Image
					aspectRatio='1/1'
					objectFit='fill'
					rounded='full'
					shadow='md'
					src={imageSource}
					w={8}
				/>
				<VStack alignItems='start' spacing={0}>
					<Heading size='sm'>
						{title}, {companyName}
					</Heading>
					<Text fontSize='xs'>{dateRange}</Text>
				</VStack>
			</HStack>
			<VStack alignItems='start' pl={10}>
				<Text fontSize='sm' px={1}>
					{description}
				</Text>
			</VStack>
		</VStack>
	)
}

export { ListEntry }
