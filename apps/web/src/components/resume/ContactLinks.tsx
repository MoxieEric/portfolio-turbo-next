'use client'

import { Button, HStack, Icon, IconButton } from '@chakra-ui/react'
import type { UiLink } from '@repo/types'
import React from 'react'
import { FaAt, FaDesktop, FaMobile } from 'react-icons/fa6'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const ContactLinks: React.FC = () => {
	const links: Record<string, UiLink> = {
		website: {
			label: 'ericnowels.me',
			url: 'https://ericnowels.me',
			icon: FaDesktop,
		},
		email: {
			label: 'ericnowels@gmail.com',
			url: 'mailto:ericnowels@gmail.com',
			icon: FaAt,
		},
		phone: {
			label: '+1 718.496.0419',
			url: 'tel:+1 718.496.0419',
			icon: FaMobile,
		},
		linkedIn: {
			label: '@ericnowels',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiLinkedin,
		},
		github: {
			label: '@MoxieEric',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiGithub,
		},
	}
	const textLinks: UiLink[] = [links.website, links.email, links.phone]
	const iconLinks: UiLink[] = [links.linkedIn, links.github]

	return (
		<HStack
			alignItems='center'
			gap={4}
			justifyContent='space-between'
			pl={6}
			w='full'
		>
			<HStack alignItems='start' gap={4}>
				{textLinks.map((link) => (
					<Button
						_dark={{
							color: 'gray.50',
						}}
						aria-label={link.label}
						as='a'
						href={link.url}
						key={link.url}
						leftIcon={<Icon as={link.icon} boxSize={4} />}
						size='sm'
						target='_blank'
						variant='link'
					>
						{link.label}
					</Button>
				))}
			</HStack>
			<HStack alignItems='center' gap={4} justifyContent='flex-end'>
				{iconLinks.map((link) => (
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
	)
}

export default ContactLinks
