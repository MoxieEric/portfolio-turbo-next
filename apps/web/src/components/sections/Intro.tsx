'use client'

import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react'
import type { UiLink } from '@repo/types'
import { FeatureCard } from '@repo/ui/components'
import React from 'react'
import { HiDocumentDownload } from 'react-icons/hi'
import { SiFlickr, SiGithub, SiLinkedin, SiYoutube } from 'react-icons/si'

const Intro: React.FC = () => {
	const links: UiLink[] = [
		{
			label: 'Github',
			url: 'https://github.com/MoxieEric',
			icon: SiGithub,
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiLinkedin,
		},
		{
			label: 'Youtube',
			url: 'https://www.youtube.com/channel/UCwxLkzObJ3A8n1q4QfMO7QQ',
			icon: SiYoutube,
		},
		{
			label: 'Flickr',
			url: 'https://www.flickr.com/photos/iheartfixedgear/albums/',
			icon: SiFlickr,
		},
	]
	return (
		<Flex flexDirection={{ base: 'column', md: 'row' }} gap={4}>
			<Box
				h={{ base: '96', md: 'auto' }}
				overflow='hidden'
				rounded='xl'
				shadow='sm'
				w={{ base: 'full', md: 72 }}
			>
				<Image
					alt='Headshot of Eric Nowels'
					height='full'
					loading='lazy'
					objectFit='cover'
					objectPosition={{ base: '0 -3rem', md: '0' }}
					src='/headshot--sm.jpg'
					w={{ base: 'full', md: 72 }}
				/>
			</Box>

			<FeatureCard
				display='flex'
				flexDirection='column'
				p={{
					base: 3,
					md: 5,
				}}
				size='lg'
				title='Hi There! 👋'
				w='full'
			>
				<Text fontSize='xl'>
					I{`'`}m Eric, a creative full-stack engineer with a passion
					for building products that make a difference.
				</Text>
				<HStack flexWrap='wrap' gap={{ base: 2, md: 4 }} pt={4}>
					<Button
						_hover={{
							bg: 'blackAlpha.100',
						}}
						as='a'
						href='/EricNowels-Resume-2024.pdf'
						leftIcon={<Icon as={HiDocumentDownload} boxSize={4} />}
						size='sm'
						target='_blank'
						variant='ghost'
					>
						Download CV
					</Button>
					<HStack gap={{ base: 2, md: 4 }}>
						{links.map((link) => (
							<IconButton
								_dark={{
									color: 'gray.50',
								}}
								_hover={{
									bg: 'blackAlpha.100',
								}}
								aria-label={link.label}
								as='a'
								href={link.url}
								icon={<Icon as={link.icon} boxSize={5} />}
								key={link.url}
								rounded='full'
								target='_blank'
								variant='ghost'
							/>
						))}
					</HStack>
				</HStack>
			</FeatureCard>
		</Flex>
	)
}

export default Intro
