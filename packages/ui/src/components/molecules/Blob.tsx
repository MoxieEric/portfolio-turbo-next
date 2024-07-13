'use client'
import type { BoxProps } from '@chakra-ui/react'
import { Box, Square, keyframes } from '@chakra-ui/react'
import React from 'react'

const Blob: React.FC<BoxProps> = ({ ...props }) => {
	const spin = keyframes`  
	from {transform: rotate(0deg);}   
	to {transform: rotate(360deg);}`
	const spinAnimation = `${spin} infinite 15s ease`

	return (
		<Box
			bottom={0}
			filter='auto'
			blur='80px'
			h='full'
			left={0}
			position='fixed'
			right={0}
			top={16}
			w='full'
			zIndex={-1}
		>
			<Box height='100vh' letterSpacing={-64} position='relative'>
				<Square
					animation={spinAnimation}
					bgGradient='linear(to-r, teal.100, yellow.50)'
					bottom={{ base: -72, md: -64 }}
					position='absolute'
					right={{ base: -72, md: -48 }}
					size='2xl'
				/>
				<Square
					animation={spinAnimation}
					bgGradient='linear(to-r, pink.100, transparent)'
					bottom={{ base: -72, md: -64 }}
					left={{ base: -72, md: -48 }}
					position='absolute'
					size='xl'
				/>
			</Box>
		</Box>
	)
}

export { Blob }
