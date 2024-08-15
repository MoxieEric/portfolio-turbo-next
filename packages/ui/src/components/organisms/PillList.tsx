'use client'

import type { StackProps } from '@chakra-ui/react'
import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const PillList: React.FC<StackProps> = ({ children, ...props }) => {
	return (
		<VStack gap={2} maxW='prose' {...props}>
			<Stack flexDirection='row' flexWrap='wrap' gap={2} pt={2}>
				{children}
			</Stack>
		</VStack>
	)
}

export { PillList }
