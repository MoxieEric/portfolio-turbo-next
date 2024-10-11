'use client'

import {
	Box,
	GridItem,
	HStack,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react'
import { FeatureCard, SimpleCard, Timeline } from '@repo/ui/components'
import Education from '../../../components/resume/Education'
import FooterLinks from '../../../components/resume/FooterLinks'
import HardSkills from '../../../components/resume/HardSkills'
import ResumeHeader from '../../../components/resume/ResumeHeader'
import SoftSkills from '../../../components/resume/SoftSkills'
import { experienceConfig } from '../../../config/experienceConfig'

const Page: React.FC = () => {
	return (
		<SimpleGrid columns={12} gap={8} w='full'>
			<GridItem as={VStack} colSpan={12} gap={4} w='full'>
				<ResumeHeader />
				<FeatureCard size='md' title='What I Do' w='full'>
					<HStack justifyContent='start' gap={8}>
						<Box maxW='prose' pl={2}>
							<Text color='black' fontSize='lg' fontWeight={500}>
								I specialize in crafting intuitive,
								user-centered web and mobile applications. With
								a strong foundation in full-stack engineering,
								UX, and agile methodologies, I excel at
								designing and developing scalable, maintainable
								solutions that exceed expectations.
							</Text>
						</Box>
						<SoftSkills />
					</HStack>
				</FeatureCard>
			</GridItem>
			<GridItem as={VStack} colSpan={7} gap={4} w='full'>
				<SimpleCard title='Experience' w='full'>
					<Timeline
						items={experienceConfig.slice(0, -1)}
						descriptions
					/>
				</SimpleCard>
			</GridItem>
			<GridItem as={VStack} colSpan={5} gap={4} w='full'>
				<FeatureCard size='sm' title='Technical Skills'>
					<HardSkills />
				</FeatureCard>
				<FeatureCard size='sm' title='Education' w='full'>
					<Education />
				</FeatureCard>
			</GridItem>
			<GridItem as={VStack} colSpan={12} gap={4} w='full'>
				<FooterLinks />
			</GridItem>
		</SimpleGrid>
	)
}
export default Page
