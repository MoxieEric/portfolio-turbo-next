'use client'
import type { BoxProps } from '@chakra-ui/react'
import {
	Button,
	Collapse,
	HStack,
	Icon,
	Stack,
	VStack,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

interface PillGroupProps extends BoxProps {
	children: React.ReactNode[]
}

const PillGroup: React.FC<PillGroupProps> = ({ children }) => {
	const { isOpen, onOpen, onToggle } = useDisclosure()
	const [isPrint] = useMediaQuery('print')
	const [pillCount, setPillCount] = useState<number>(0)

	useEffect(() => {
		setPillCount(Object.keys(children).length)
		if (Object.keys(children).length <= 10) onOpen()
	}, [children])
	return (
		<VStack gap={2} maxW='prose'>
			<Collapse
				animateOpacity
				in={isPrint ? true : isOpen}
				startingHeight={pillCount > 10 ? 90 : 'auto'}
			>
				<Stack flexDirection='row' flexWrap='wrap' gap={2} pt={2}>
					{children}
				</Stack>
			</Collapse>
			{isPrint || pillCount <= 10 ? null : (
				<HStack
					alignItems='center'
					justifyContent='flex-start'
					w='full'
				>
					<Button
						color='teal.600'
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
			)}
		</VStack>
	)
}

export { PillGroup }
