'use client'

import { VStack } from '@chakra-ui/react'
import { ListEntry } from '@repo/ui/components'
import React from 'react'
import eductionConfig from '../../config/educationConfig'

const Education: React.FC = () => {
	return (
		<VStack alignItems='start' gap={4} pt={2}>
			{eductionConfig.map((entry) => (
				<ListEntry {...entry} key={entry.title} />
			))}
		</VStack>
	)
}

export default Education
