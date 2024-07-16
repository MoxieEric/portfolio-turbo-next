'use client'

import { Button, Flex, Icon, VStack } from '@chakra-ui/react'
import type { UiLink } from '@repo/types'
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
			label: '@ericnowels',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiLinkedin,
		},
		{
			label: '@MoxieEric',
			url: 'https://www.linkedin.com/in/ericnowels/',
			icon: SiGithub,
		},
	]
	return (
		// <SimpleCard pt={6} sizeKey='sm' title='Contacts' w='full'>
		<Flex h='full' alignItems='center' justifyContent='center' p={4}>
			<VStack alignItems='end' gap={4}>
				{links.map((link) => (
					<Button
						_dark={{
							color: 'gray.50',
						}}
						aria-label={link.label}
						as='a'
						// color='black'
						href={link.url}
						key={link.url}
						rightIcon={<Icon as={link.icon} boxSize={4} />}
						size='sm'
						target='_blank'
						variant='link'
					>
						{link.label}
					</Button>
				))}
			</VStack>
		</Flex>
		// </SimpleCard>
	)
}

export default Contacts
