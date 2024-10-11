'use client'

import {
	Box,
	Flex,
	HStack,
	Heading,
	// Icon,
	Image,
	Mark,
	Text,
	useHighlight,
} from '@chakra-ui/react'
import { FeatureCard } from '@repo/ui/components'
import React from 'react'
// import { PiMountains } from 'react-icons/pi'
import type { KeyWords } from '../../config/resumeHeaderConfig'
import { resumeHeaderConfig } from '../../config/resumeHeaderConfig'

const ResumeHeader: React.FC = () => {
	const chunks = useHighlight({
		text: resumeHeaderConfig.body,
		query: resumeHeaderConfig.keywords,
	})
	return (
		<Flex flexDirection='row' gap={4} w='full'>
			<Box h='full' overflow='hidden' rounded='xl' shadow='sm' w={64}>
				<Image
					alt='Headshot of Eric Nowels'
					height='full'
					objectFit='cover'
					src='/headshot--md.png'
					w='full'
				/>
			</Box>

			<FeatureCard
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
				p={4}
				rounded='xl'
				size='xl'
				w='full'
			>
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
				<HStack pt={4}>
					<Box maxW='prose'>
						<Text color='black' fontSize='lg'>
							13+ years of experience crafting robust, scalable
							web and mobile applications. Using expertise in
							TypeScript, React and GraphQL to deliver exceptional
							user experiences through meticulous design and
							development.
						</Text>
					</Box>
				</HStack>
			</FeatureCard>
		</Flex>
	)
}

export default ResumeHeader
