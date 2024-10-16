'use client'

import { HStack, Heading, Icon, VStack } from '@chakra-ui/react'
import React from 'react'
import type { SkillConfig } from '../../config/skillsConfig'
import { skills } from '../../config/skillsConfig'

const SoftSkills: React.FC = () => {
	const softSkills: SkillConfig[] = [
		skills.FullStack,
		skills.UXDesign,
		skills.DevOps,
		skills.Leadership,
		skills.ProductManagement,
	]
	return (
		<VStack>
			{softSkills.map((item) => (
				<HStack key={item.label} w='full'>
					<Icon as={item.icon} />
					<Heading size='xs'>{item.label}</Heading>
				</HStack>
			))}
		</VStack>
	)
}

export default SoftSkills
