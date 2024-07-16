'use client'

import {
	Box,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Mark,
	VStack,
	useHighlight,
} from '@chakra-ui/react'
import { FeatureCard } from '@repo/ui/components'
import React from 'react'
import { PiMountains } from 'react-icons/pi'
import type { KeyWords } from '../../config/resumeHeaderConfig'
import { resumeHeaderConfig } from '../../config/resumeHeaderConfig'
import Contacts from './Contacts'

const ResumeHeader: React.FC = () => {
	const chunks = useHighlight({
		text: resumeHeaderConfig.body,
		query: resumeHeaderConfig.keywords,
	})
	return (
		<Flex flexDirection='row' gap={4} w='full'>
			<Box h='full' overflow='hidden' rounded='xl' shadow='sm' w={48}>
				<Image
					alt='Headshot of Eric Nowels'
					height='full'
					objectFit='cover'
					src='/headshot--sm.png'
					w='full'
				/>
			</Box>

			<FeatureCard
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
				rounded='xl'
				size='lg'
				sizeKey='sm'
				w='full'
			>
				<Heading size='lg'>{resumeHeaderConfig.title}</Heading>
				<VStack alignItems='start' gap={6}>
					<Heading color='gray.600' lineHeight='tall' size='sm'>
						{chunks.map((chunk) => {
							if (!chunk.match) return chunk.text
							return (
								<Mark
									key={chunk.text}
									{...resumeHeaderConfig.highlightStyles[
										chunk.text as KeyWords
									]}
								>
									{chunk.text}
								</Mark>
							)
						})}
					</Heading>

					<HStack>
						<Icon as={PiMountains} />
						<Heading fontWeight='semibold' size='xs'>
							{resumeHeaderConfig.location}
						</Heading>
					</HStack>
				</VStack>
			</FeatureCard>
			<Contacts />
		</Flex>
	)
}

export default ResumeHeader
