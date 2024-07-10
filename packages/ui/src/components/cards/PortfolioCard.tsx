'use client'

import { HStack, Heading, Image, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React from 'react'
import { Pill } from '../molecules'
import { FeatureCard } from './FeatureCard'

interface PortfolioCardProps {
	children?: ReactNode
	title: string
	// feature: {}
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ children, title }) => {
	return (
		<FeatureCard
			image={
				<Image
					alt='BLX'
					aspectRatio='1/1'
					bg='gray.100'
					loading='lazy'
					maxW={48}
					objectFit='cover'
					overflow='hidden'
					rounded='lg'
					shadow='md'
					src='/portfolio/brewlogix-app.jpg'
				/>
			}
			title={title}
			w='full'
		>
			<Text>Brief description of the project or app</Text>
			<Heading size='sm'>2024</Heading>
			<Text size='sm'>Design/UX | Front-end | DevOps</Text>
			<HStack>
				<Pill size='sm'> Typescript </Pill>
				<Pill size='sm'> Typescript </Pill>
				<Pill size='sm'> Typescript </Pill>
				<Pill size='sm'> Next</Pill>
			</HStack>
			{children}
		</FeatureCard>
	)
}

export { PortfolioCard }
