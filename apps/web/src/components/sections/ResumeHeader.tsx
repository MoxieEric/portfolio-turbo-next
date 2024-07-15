'use client'

import {
	Box,
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
import { SiFlickr, SiGithub, SiLinkedin, SiYoutube } from 'react-icons/si'

const ResumeHeader: React.FC = () => {
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
		<Flex flexDirection={{ sm: 'column', md: 'row' }} gap={4}>
			<Box h={64} overflow='hidden' rounded='xl' shadow='sm' w={64}>
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
				size='lg'
				title='Eric Nowels'
				w='full'
			>
				<Text fontSize='xl'>
					I{`'`}m a creative full-stack engineer with a passion for
					building products that make a difference.
				</Text>
				<HStack gap={{ base: 2, md: 4 }} pt={4}>
					{links.map((link) => (
						<IconButton
							_dark={{
								color: 'gray.50',
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
			</FeatureCard>
		</Flex>
	)
}

export default ResumeHeader
