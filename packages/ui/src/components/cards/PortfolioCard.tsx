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
	layout?: 'default' | 'compact'
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
	children,
	content,
	layout = 'default',
}) => {
	return (
		<Flex
			_dark={{
				bg: 'gray.700',
			}}
			bg='gray.50'
			flexDirection={{
				base: 'column',
				md: 'row',
			}}
			gap={{ base: 6, md: 4 }}
			p={{ base: 4, md: 6 }}
			rounded='xl'
			w='full'
		>
			<Box
				minW={layout === 'compact' ? 20 : 48}
				overflow='hidden'
				rounded='xl'
				w={{ base: 'full', md: 48 }}
			>
				<Image
					alt={content.title}
					aspectRatio='1/1'
					loading='lazy'
					maxW={{ base: 'full' }}
					objectFit='cover'
					overflow='hidden'
					rounded='lg'
					shadow='none'
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
					<Heading size={layout === 'compact' ? 'sm' : 'lg'}>
						{content.title}
					</Heading>
					{layout === 'default' ? (
						<Text fontSize='lg'>{content.description}</Text>
					) : null}
				</VStack>

				<HStack flexWrap='wrap' w='full'>
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
