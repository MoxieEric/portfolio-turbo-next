'use client'

import {
	Box,
	Flex,
	HStack,
	Heading,
	Image,
	Mark,
	VStack,
	useHighlight,
} from '@chakra-ui/react'
import { FeatureCard } from '@repo/ui/components'
import React from 'react'
import type { KeyWords } from '../../config/resumeHeaderConfig'
import { resumeHeaderConfig } from '../../config/resumeHeaderConfig'
import ContactLinks from './ContactLinks'

const ResumeHeader: React.FC = () => {
	const chunks = useHighlight({
		text: resumeHeaderConfig.body,
		query: resumeHeaderConfig.keywords,
	})
	return (
		<Flex flexDirection='row' gap={4} w='full'>
			<FeatureCard
				bg='transparent'
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
				p={4}
				rounded='xl'
				size='xl'
				w='full'
			>
				<HStack alignItems='center' gap={8}>
					<Box
						h='full'
						overflow='hidden'
						rounded='full'
						shadow='sm'
						w={40}
					>
						<Image
							alt='Headshot of Eric Nowels'
							aspectRatio='1/1'
							height='full'
							objectFit='cover'
							objectPosition='center 20%'
							src='/headshot--md.png'
							w='full'
						/>
					</Box>
					<VStack alignItems='start'>
						<Heading size='xl'>{resumeHeaderConfig.title}</Heading>
						<Heading
							color='gray.600'
							lineHeight='tall'
							maxW='prose'
							size='md'
						>
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
					</VStack>
				</HStack>
				<Box ml={36}>
					<ContactLinks />
				</Box>
			</FeatureCard>
		</Flex>
	)
}

export default ResumeHeader
