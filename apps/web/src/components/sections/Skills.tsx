'use client'

import { VStack } from '@chakra-ui/react'
import {
	FeatureCard,
	Pill,
	PillGroup,
	ScreenSection,
	SimpleCard,
} from '@repo/ui/components'
import React from 'react'
import {
	EngineeringSkillSection,
	engineerSkillsConfig,
	mgmtSkillsConfig,
	uxSkillsConfig,
} from '../../config/skillsConfig'

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
									<PillGroup>
										{engineerSkillsConfig[skillSection].map(
											(skill) => (
												<Pill
													icon={skill?.icon}
													key={skill.label}
												>
													{skill.label}
												</Pill>
											)
										)}
									</PillGroup>
								</SimpleCard>
							)
						}
					)}
				</FeatureCard>
				<FeatureCard size='md' title='UX & Product Design' w='full'>
					<PillGroup>
						{uxSkillsConfig.map((skill) => (
							<Pill icon={skill?.icon} key={skill.label}>
								{skill.label}
							</Pill>
						))}
					</PillGroup>
				</FeatureCard>
				<FeatureCard size='md' title='Management' w='full'>
					<PillGroup>
						{mgmtSkillsConfig.map((skill) => (
							<Pill icon={skill?.icon} key={skill.label}>
								{skill.label}
							</Pill>
						))}
					</PillGroup>
				</FeatureCard>
			</VStack>
		</ScreenSection>
	)
}

export default Skills
