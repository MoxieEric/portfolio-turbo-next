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
		<Flex flexDirection={{ base: 'column', md: 'row' }} gap={4}>
			<Box h={{ base: '96', md: 'auto' }} w={{ base: 'full', md: 72 }}>
				<Image
					alt='Headshot of Eric Nowels'
					height='full'
					objectFit='cover'
					objectPosition={{ base: '0 -3rem', md: '0' }}
					rounded='xl'
					src='/headshot--sm.png'
					w={{ base: 'full', md: 72 }}
				/>
			</Box>

			<FeatureCard
				display='flex'
				flexDirection='column'
				size='lg'
				title='Hi There! 👋'
				w='full'
			>
				<Text fontSize='xl'>
					I{`'`}m a creative full-stack engineer with a passion for
					building products that make a difference.
				</Text>
				<HStack gap={{ base: 2, md: 4 }} pt={4}>
					<IconButton
						aria-label='GitHub'
						as='a'
						href='https://github.com/MoxieEric'
						icon={<Icon as={SiGithub} boxSize={5} />}
						rounded='full'
						target='_blank'
						variant='ghost'
					/>
					<IconButton
						aria-label='GitHub'
						as='a'
						href='https://www.linkedin.com/in/ericnowels/'
						icon={<Icon as={SiLinkedin} boxSize={5} />}
						rounded='full'
						target='_blank'
						variant='ghost'
					/>
					<Button
						color='gray.900'
						leftIcon={<Icon as={HiDocumentArrowDown} />}
						variant='ghost'
					>
						Download CV
					</Button>
				</HStack>
			</FeatureCard>
		</Flex>
	)
}

export default Intro
