'use client'

import { VStack } from '@chakra-ui/react'
import { FeatureCard, ScreenSection, SimpleCard } from '@repo/ui/components'
import React from 'react'
import {
	EngineeringSkillSection,
	engineerSkillsConfig,
	mgmtSkillsConfig,
	uxSkillsConfig,
} from '../../config/skillsConfig'
import SkillGroup from '../skills/SkillGroup'

const Skills: React.FC = () => {
	return (
		<ScreenSection id='skills' title='What I Do'>
			<VStack gap={4} w='full'>
				<FeatureCard size='md' title='Full-Stack Engineering' w='full'>
					{Object.values(EngineeringSkillSection).map(
						(skillSection) => {
							return (
								<SimpleCard
									key={skillSection}
									title={skillSection}
								>
									<SkillGroup
										skillGroup={
											engineerSkillsConfig[skillSection]
										}
									/>
								</SimpleCard>
							)
						}
					)}
				</FeatureCard>
				<FeatureCard size='md' title='UX & Product Design' w='full'>
					<SkillGroup skillGroup={uxSkillsConfig} />
				</FeatureCard>
				<FeatureCard size='md' title='Management' w='full'>
					<SkillGroup skillGroup={mgmtSkillsConfig} />
				</FeatureCard>
			</VStack>
		</ScreenSection>
	)
}

export default Skills
