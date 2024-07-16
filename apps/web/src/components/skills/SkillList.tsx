'use client'

import { Stack, VStack } from '@chakra-ui/react'
import { Pill } from '@repo/ui/components'
import React from 'react'
import type { SkillConfig } from '../../config/skillsConfig'

interface SkillGroupProps {
	skills: SkillConfig[]
}

const SkillList: React.FC<SkillGroupProps> = ({ skills }) => {
	return (
		<VStack gap={2}>
			<Stack flexDirection='row' flexWrap='wrap' gap={2} pt={2}>
				{skills.map((skill) => (
					<Pill bg='gray.200' icon={skill?.icon} key={skill.label}>
						{skill.label}
					</Pill>
				))}
			</Stack>
		</VStack>
	)
}

export default SkillList
