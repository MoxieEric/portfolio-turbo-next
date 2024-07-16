'use client'

import { GridItem, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { FeatureCard, SimpleCard, Timeline } from '@repo/ui/components'
import HardSkills from '../../../components/sections/HardSkills'
import ResumeHeader from '../../../components/sections/ResumeHeader'
import SoftSkills from '../../../components/sections/SoftSkills'
import { experienceConfig } from '../../../config/experienceConfig'

const Page: React.FC = () => {
	return (
		<SimpleGrid columns={6} gap={4} w='full'>
			<GridItem as={VStack} colSpan={6} gap={4} w='full'>
				<ResumeHeader />
			</GridItem>
			<GridItem as={VStack} colSpan={3} gap={4} w='full'>
				<SimpleCard title='Experience' w='full'>
					<Timeline items={experienceConfig.slice(0, -1)} />
				</SimpleCard>
			</GridItem>
			<GridItem as={VStack} colSpan={3} gap={4} w='full'>
				<FeatureCard
					pt={1}
					size='md'
					sizeKey='sm'
					title='What I Do'
					w='full'
				>
					<SoftSkills />
				</FeatureCard>
				<FeatureCard size='sm' title='Top Skills'>
					<HardSkills />
				</FeatureCard>
				<FeatureCard size='sm' title='Education' w='full'>
					<VStack alignItems='start'>
						<Heading size='xs'>Google UX Design, Coursera</Heading>
						<Heading size='xs'>
							BFA Photography, Pratt Institute
						</Heading>
					</VStack>
				</FeatureCard>
			</GridItem>
		</SimpleGrid>
	)
}
export default Page
