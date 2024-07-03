import type { CardProps } from '@chakra-ui/react'
import { Card, CardBody, Heading, Stack } from '@chakra-ui/react'

interface SimpleCardProps extends CardProps {
	title: string
}

const SimpleCard: React.FC<SimpleCardProps> = ({
	title,
	children,
	...props
}) => {
	return (
		<Card
			bg='transparent'
			overflow='hidden'
			shadow='none'
			w='full'
			{...props}
		>
			<Stack
				alignItems='center'
				direction={{ base: 'column', md: 'row' }}
				gap={2}
				w='full'
			>
				<CardBody display='flex' flexDir='column' gap={2} w='full'>
					<Heading size='md' w='full'>
						{title}
					</Heading>
					{children}
				</CardBody>
			</Stack>
		</Card>
	)
}

export { SimpleCard }
