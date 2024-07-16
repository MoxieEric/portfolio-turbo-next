'use client'

import { GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import { FeatureCard, SimpleCard, Timeline } from '@repo/ui/components'
import ContactLinks from '../../../components/resume/ContactLinks'
import Education from '../../../components/resume/Education'
import HardSkills from '../../../components/resume/HardSkills'
import ResumeHeader from '../../../components/resume/ResumeHeader'
import SoftSkills from '../../../components/resume/SoftSkills'
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
				<FeatureCard size='md' title='What I Do' w='full'>
					<SoftSkills />
				</FeatureCard>
				<FeatureCard size='sm' title='Top Skills'>
					<HardSkills />
				</FeatureCard>
				<FeatureCard size='sm' title='Education' w='full'>
					<Education />
				</FeatureCard>
			</GridItem>
			<GridItem as={VStack} colSpan={6} gap={4} w='full'>
				<ContactLinks />
			</GridItem>
		</SimpleGrid>
	)
}
export default Page
