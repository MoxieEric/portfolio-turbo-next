'use client'

import { VStack } from '@chakra-ui/react'
import { Pill, PillList } from '@repo/ui/components'
import React from 'react'
import { skills } from '../../config/skillsConfig'

const HardSkills: React.FC = () => {
	const topSKills = [
		skills.Html,
		skills.CSS,
		skills.Javascript,
		skills.TypeScript,
		skills.React,
		skills.ReactNative,
		skills.GraphQL,
		skills.Redux,
		skills.Next,
		skills.Vue,
		skills.Jest,
		skills.Storybook,
		skills.ChakraUI,
		skills.TailwindCSS,
		skills.GluestackUI,
		skills.Python,
		skills.PHP,
		skills.PostGres,
		skills.Redis,
		skills.Hasura,
		skills.CICD,
		skills.Figma,
		skills.XD,
		skills.Axure,
	]
	return (
		<VStack gap={4} w='full'>
			<PillList>
				{topSKills.map((skill) => (
					<Pill icon={skill?.icon} key={skill.label}>
						{skill.label}
					</Pill>
				))}
			</PillList>
		</VStack>
	)
}

export default HardSkills
