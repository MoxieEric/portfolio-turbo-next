'use client'

import { Button, HStack, Icon, IconButton } from '@chakra-ui/react'
import type { UiLink } from '@repo/types'
import React from 'react'
import contactLinksConfig from '../../config/contactLinksConfig'

const FooterLinks: React.FC = () => {
	const textLinks: UiLink[] = [
		contactLinksConfig.website,
		contactLinksConfig.email,
		contactLinksConfig.phone,
	]
	const iconLinks: UiLink[] = [
		contactLinksConfig.linkedIn,
		contactLinksConfig.github,
	]

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

export default FooterLinks
