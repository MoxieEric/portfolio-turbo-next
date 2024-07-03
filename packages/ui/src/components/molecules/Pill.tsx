import type { As, BadgeProps } from '@chakra-ui/react'
import { Badge, Flex, Icon } from '@chakra-ui/react'

interface PillProps extends BadgeProps {
	text: string
	icon?: As
}

const Pill: React.FC<PillProps> = ({ text, icon, ...props }) => {
	return (
		<Badge
			px={4}
			py={2}
			rounded='full'
			size='lg'
			textTransform='none'
			{...props}
		>
			<Flex alignItems='center' gap={2}>
				{icon ? <Icon as={icon} /> : null}

				{text}
			</Flex>
		</Badge>
	)
}

export { Pill }
