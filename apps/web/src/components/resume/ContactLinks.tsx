'use client'

import { Button, HStack, Icon } from '@chakra-ui/react'
import type { UiLink } from '@repo/types'
import React from 'react'
import contactLinksConfig from '../../config/contactLinksConfig'

const ContactLinks: React.FC = () => {
	const textLinks: UiLink[] = [
		contactLinksConfig.website,
		contactLinksConfig.email,
		contactLinksConfig.phone,
		contactLinksConfig.location,
	]

	return (
		<HStack alignItems='center' gap={4} w='full'>
			<HStack alignItems='center' gap={4} justifyContent='flex-end'>
				{textLinks.map((link) => (
					<Button
						_dark={{
							color: 'gray.50',
						}}
						aria-label={link.label}
						as='a'
						color='gray.600'
						href={link.url}
						key={link.url}
						leftIcon={<Icon as={link.icon} boxSize={4} />}
						pointerEvents={!link.url ? 'none' : 'auto'}
						size='sm'
						target='_blank'
						variant='link'
					>
						{link.label}
					</Button>
				))}
			</HStack>
		</HStack>
	)
}

export default ContactLinks
