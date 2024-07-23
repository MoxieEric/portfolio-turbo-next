'use client'

import type { TextProps } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

interface ClickToCopyProps extends TextProps {
	contents: string
}

const ClickToCopy: React.FC<ClickToCopyProps> = ({
	contents,
	children,
	...props
}) => {
	const handleClick = async (): Promise<void> => {
		await navigator.clipboard.writeText(contents)
		// @TODO: add UI feedback
	}
	return (
		<Text
			_hover={{ cursor: 'copy' }}
			as='span'
			onClick={handleClick as unknown as VoidFunction}
			{...props}
		>
			{children}
		</Text>
	)
}

export default ClickToCopy
