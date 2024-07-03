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
import { FeatureCard } from '@repo/ui/components'
import React from 'react'
import { HiDocumentArrowDown } from 'react-icons/hi2'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Intro: React.FC = () => {
	return (
		<Flex gap={4} flexDirection={{ base: 'column', md: 'row' }}>
			<Box w={{ base: 'full', md: 72 }} h={{ base: '96', md: 'auto' }}>
				<Image
					alt='Headshot of Eric Nowels'
					height='full'
					objectFit='cover'
					src='/headshot--sm.png'
					rounded='xl'
					objectPosition={{ base: '0 -3rem', md: '0' }}
				/>
			</Box>

			<FeatureCard
				title='Hi There! 👋'
				size='lg'
				display='flex'
				flexDirection='column'
				w='full'
			>
				<Text fontSize='xl'>
					I'm a creative full-stack engineer with a passion for
					building products that make a difference.
				</Text>
				<HStack gap={{ base: 2, md: 4 }} pt={4}>
					<IconButton
						aria-label='GitHub'
						icon={<Icon as={SiGithub} boxSize={5} />}
						variant='ghost'
						as='a'
						href='https://github.com/MoxieEric'
						target='_blank'
						rounded='full'
					/>
					<IconButton
						aria-label='GitHub'
						icon={<Icon as={SiLinkedin} boxSize={5} />}
						variant='ghost'
						as='a'
						href='https://www.linkedin.com/in/ericnowels/'
						target='_blank'
						rounded='full'
					/>
					<Button
						variant='ghost'
						leftIcon={<Icon as={HiDocumentArrowDown} />}
						color='gray.900'
					>
						Download CV
					</Button>
				</HStack>
			</FeatureCard>
		</Flex>
	)
}

export default Intro
