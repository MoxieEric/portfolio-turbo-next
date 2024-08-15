'use client'

import { Box, Code, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ClickToCopy from '../atoms/ClickToCopy'

interface ColorSwatchProps {
	color: string
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => {
	const label: string = color.replace(/[a-z.]/gi, '')
	return (
		<Flex alignItems='center' flexDirection='column' gap={4}>
			<ClickToCopy contents={color}>
				<Box
					aspectRatio='1/1'
					bg={color}
					h={20}
					maxWidth={20}
					rounded='lg'
					shadow='md'
					w='full'
				/>
				<Text isTruncated>
					<Code fontSize='sm'>{label || color}</Code>
				</Text>
			</ClickToCopy>
		</Flex>
	)
}
