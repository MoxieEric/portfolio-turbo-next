'use client'

import { Code, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { FeatureCard, ScreenSection } from '@repo/ui/components'
import React from 'react'
import { HiCalendar } from 'react-icons/hi2'
import { experienceConfig } from '../../config/experienceConfig'

const Experience: React.FC = () => {
	return (
		<ScreenSection id='history' title='History'>
			<VStack gap={4} w='full'>
				{experienceConfig.map((job) => (
					<FeatureCard key={job.dateRange} size='sm' w='full'>
						<Heading size='md'>{job.title}</Heading>
						<HStack gap={2}>
							<Heading size='sm'>{job.companyName}</Heading>
							<Text size='sm'>
								{job.location}{' '}
								{job.isRemote ? (
									<Code px={1}> Remote</Code>
								) : null}
							</Text>
						</HStack>
						<HStack alignItems='center' spacing={0.5}>
							<Icon as={HiCalendar} />
							<Text size='sm'>{job.dateRange}</Text>
						</HStack>
					</FeatureCard>
				))}
			</VStack>
		</ScreenSection>
	)
}

export default Experience
