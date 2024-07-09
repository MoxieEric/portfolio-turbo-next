'use client'

import { Stack, VStack } from '@chakra-ui/react'
import {
	FeatureCard,
	Pill,
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
				<FeatureCard size='sm' title='Full-Stack Engineering' w='full'>
					{Object.values(EngineeringSkillSection).map(
						(skillSection) => {
							return (
								<SimpleCard
									key={skillSection}
									title={skillSection}
								>
									<Stack
										flexDirection='row'
										flexWrap='wrap'
										gap={2}
										pt={2}
									>
										{engineerSkillsConfig[skillSection].map(
											(skill) => (
												<Pill
													bg='gray.200'
													color='teal.600'
													icon={skill?.icon}
													key={skill.label}
													shadow='sm'
													text={skill.label}
												/>
											)
										)}
									</Stack>
								</SimpleCard>
							)
						}
					)}
				</FeatureCard>
				<FeatureCard size='sm' title='UX & Product Design' w='full'>
					<Stack flexDirection='row' flexWrap='wrap' gap={2} pt={2}>
						{uxSkillsConfig.map((skill) => (
							<Pill
								bg='gray.200'
								color='purple.600'
								icon={skill?.icon}
								key={skill.label}
								shadow='sm'
								text={skill.label}
							/>
						))}
					</Stack>
				</FeatureCard>
				<FeatureCard size='sm' title='Management' w='full'>
					<Stack flexDirection='row' flexWrap='wrap' gap={2} pt={2}>
						{mgmtSkillsConfig.map((skill) => (
							<Pill
								bg='gray.200'
								color='green.600'
								icon={skill?.icon}
								key={skill.label}
								shadow='sm'
								text={skill.label}
							/>
						))}
					</Stack>
				</FeatureCard>
			</VStack>
		</ScreenSection>
	)
}

export default Skills
