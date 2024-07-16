import type { As, BadgeProps } from '@chakra-ui/react'
import { Badge, Flex, Icon } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { printStyles } from '../../utils'

interface PillProps extends BadgeProps {
	text?: string
	icon?: As
	children?: ReactNode
}

const Pill: React.FC<PillProps> = ({ text, icon, children, ...props }) => {
	return (
		<Badge
			boxShadow='none'
			px={4}
			py={2}
			rounded='full'
			shadow='sm'
			size='lg'
			sx={printStyles({ boxShadow: 'none' })}
			textTransform='none'
			{...props}
		>
			<Flex alignItems='center' gap={2}>
				{icon ? <Icon as={icon} /> : null}
				{children || text}
			</Flex>
		</Badge>
	)
}

export { Pill }
