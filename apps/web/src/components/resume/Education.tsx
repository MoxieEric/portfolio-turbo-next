'use client'

import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Education: React.FC = () => {
	return (
		<VStack alignItems='start' gap={4}>
			<HStack alignItems='center'>
				<Image
					aspectRatio='1/1'
					objectFit='fill'
					rounded='full'
					src='/education/google.svg'
					w={6}
				/>
				<VStack alignItems='start' spacing={0}>
					<Heading size='xs'>Google UX Design, Coursera</Heading>
					<Text fontSize='xs'>2024 - Present</Text>
				</VStack>
			</HStack>
			<HStack>
				<Image
					aspectRatio='1/1'
					objectFit='fill'
					rounded='full'
					src='/education/pluralsight.png'
					w={6}
				/>
				<VStack alignItems='start' spacing={0}>
					<Heading size='xs'>
						PMI Agile Certified Practitioner, Pluralsight
					</Heading>
					<Text fontSize='xs'>2018</Text>
				</VStack>
			</HStack>
			<HStack>
				<Image
					aspectRatio='1/1'
					bg='black'
					objectFit='fill'
					p={0.5}
					rounded='full'
					src='/education/pratt-logo.svg'
					w={6}
				/>
				<VStack alignItems='start' spacing={0}>
					<Heading size='xs'>
						BFA Photography, Pratt Institute
					</Heading>
					<Text fontSize='xs'>2003 - 2007</Text>
				</VStack>
			</HStack>
		</VStack>
	)
}

export default Education
