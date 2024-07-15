'use client'

import { HStack, Icon, IconButton, Text, VStack } from '@chakra-ui/react'
import type { UiLink } from '@repo/types'
import { FeatureCard, ScreenSection, SimpleCard } from '@repo/ui/components'
import React from 'react'
import { FaAt, FaDesktop, FaMobile } from 'react-icons/fa6'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Contacts: React.FC = () => {
	const links: UiLink[] = [
		{
			label: 'ericnowels.me',
			url: 'https://ericnowels.me',
			icon: FaDesktop,
		},
		{
			label: 'ericnowels@gmail.com',
			url: 'mailto:ericnowels@gmail.com',
			icon: FaAt,
		},
		{
			label: '+1 718.496.0419',
			url: 'tel:+1 718.496.0419',
			icon: FaMobile,
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiLinkedin,
		},
		{
			label: 'GitHub',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiGithub,
		},
	]
	return (
		<FeatureCard sizeKey='sm' title='Contacts' w='full' pt={6}>
			<VStack alignItems='start' gap={{ base: 2, md: 4 }}>
				{links.map((link) => (
					<HStack key={link.url}>
						<IconButton
							_dark={{
								color: 'gray.50',
							}}
							aria-label={link.label}
							as='a'
							href={link.url}
							icon={<Icon as={link.icon} boxSize={5} />}
							rounded='full'
							target='_blank'
							variant='ghost'
						/>
						<Text>{link.label}</Text>
					</HStack>
				))}
			</VStack>
		</FeatureCard>
	)
}

export default Contacts
