'use client'

import { VStack } from '@chakra-ui/react'
import React from 'react'
import { skills } from '../../config/skillsConfig'
import SkillList from '../skills/SkillList'

const HardSkills: React.FC = () => {
	const topSKills = [
		skills.Html,
		skills.CSS,
		skills.Javascript,
		skills.TypeScript,
		skills.React,
		skills.ReactNative,
		skills.GraphQL,
		skills.Next,
		skills.Vue,
		skills.Jest,
		skills.Figma,
		skills.XD,
		skills.Axure,
		skills.Storybook,
		skills.ChakraUI,
		skills.TailwindCSS,
		skills.GluestackUI,
		skills.Python,
		skills.PostGres,
		skills.Hasura,
		skills.CICD,
	]
	return (
		<VStack gap={4} w='full'>
			<SkillList skills={topSKills} />
		</VStack>
	)
}

export default HardSkills
