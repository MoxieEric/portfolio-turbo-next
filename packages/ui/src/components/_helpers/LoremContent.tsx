'use client'

import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const LoremContent: React.FC = () => {
	return (
		<VStack alignItems='start' gap={4}>
			<Text fontSize='lg'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			</Text>
			<Text>
				Sapiente eligendi unde similique, cupiditate voluptatibus enim
				magni, minima pariatur doloribus ad beatae alias! Velit
				repudiandae sint esse et quos dignissimos iste!
			</Text>
		</VStack>
	)
}

export default LoremContent
