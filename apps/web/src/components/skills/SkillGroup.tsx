'use client'

import {
	Button,
	Collapse,
	HStack,
	Icon,
	Stack,
	VStack,
	useDisclosure,
} from '@chakra-ui/react'
import { Pill } from '@repo/ui/components'
import React from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import type { SkillConfig } from '../../config/skillsConfig'

interface SkillGroupProps {
	skillGroup: SkillConfig[]
}

const SkillGroup: React.FC<SkillGroupProps> = ({ skillGroup }) => {
	const { isOpen, onToggle } = useDisclosure()
	return (
		<VStack gap={2}>
			<Collapse animateOpacity in={isOpen} startingHeight={90}>
				<Stack flexDirection='row' flexWrap='wrap' gap={2} pt={2}>
					{skillGroup.map((skill) => (
						<Pill
							bg='gray.200'
							icon={skill?.icon}
							key={skill.label}
							shadow='sm'
						>
							{skill.label}
						</Pill>
					))}
				</Stack>
			</Collapse>
			<HStack alignItems='center' justifyContent='flex-start' w='full'>
				<Button
					color='teal.500'
					onClick={onToggle}
					px={1}
					rightIcon={
						<Icon as={isOpen ? GoChevronUp : GoChevronDown} />
					}
					size='sm'
					variant='link'
				>
					View {isOpen ? 'less' : 'more'}
				</Button>
			</HStack>
		</VStack>
	)
}

export default SkillGroup
