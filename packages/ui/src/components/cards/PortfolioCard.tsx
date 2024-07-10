'use client'

import {
	Box,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react'
import type { PortfolioItem } from '@repo/types/dist'
import type { ReactNode } from 'react'
import React from 'react'
import { Pill } from '../molecules'

interface PortfolioCardProps {
	children?: ReactNode
	content: PortfolioItem
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ children, content }) => {
	return (
		<Flex
			_dark={{
				bg: 'gray.700',
			}}
			bg='gray.50'
			flexDirection={{ base: 'column', md: 'row' }}
			gap={{ base: 6, md: 4 }}
			p={{ base: 4, md: 6 }}
			rounded='xl'
			w='full'
		>
			<Box
				minW={48}
				overflow='hidden'
				rounded='xl'
				shadow='md'
				w={{ base: 'full', md: 48 }}
			>
				<Image
					alt='BLX'
					aspectRatio='1/1'
					bg='gray.100'
					loading='lazy'
					maxW={{ base: 'full' }}
					objectFit='cover'
					overflow='hidden'
					rounded='lg'
					shadow='md'
					src={content.featureImage}
					w='full'
				/>
			</Box>
			<Flex
				flexDirection='column'
				gap={{ base: 6, md: 2 }}
				justifyContent='space-between'
				px={4}
			>
				<VStack alignItems='start' gap={2} justifyContent='center'>
					<Heading size='lg'>{content.title}</Heading>
					<Text fontSize='lg'>{content.description}</Text>
				</VStack>

				<HStack>
					{content.stack?.map((skill) => (
						<Pill key={skill} size='sm'>
							{skill}
						</Pill>
					))}
				</HStack>
				{children}
			</Flex>
		</Flex>
	)
}

export { PortfolioCard }
