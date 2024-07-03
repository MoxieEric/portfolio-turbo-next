import type { CardProps } from '@chakra-ui/react'
import { Box, Card, CardBody, Heading, Stack } from '@chakra-ui/react'
import { type ReactNode } from 'react'

interface FeatureCardProps extends CardProps {
	title: string
	size?: 'sm' | 'md' | 'lg'
	image?: ReactNode
}

const sizeValues = {
	sm: {
		padding: {
			base: 2,
		},
		heading: {
			base: 'sm',
		},
	},
	md: {
		padding: {
			base: 3,
			md: 4,
		},
		heading: {
			base: 'md',
			md: 'lg',
		},
	},
	lg: {
		padding: {
			base: 2,
			md: 6,
		},
		heading: {
			base: 'xl',
			md: '2xl',
		},
	},
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	children,
	image,
	size = 'md',
	...props
}) => {
	return (
		<Card
			bg='gray.50'
			overflow='hidden'
			p={sizeValues[size].padding}
			{...props}
		>
			<Stack
				alignItems='center'
				direction={{ base: 'column', md: 'row' }}
				gap={2}
			>
				{image ? <Box>{image}</Box> : null}
				<CardBody
					display='flex'
					flexDir='column'
					gap={sizeValues[size].padding}
					height='full'
				>
					<Heading size={sizeValues[size].heading}>{title}</Heading>
					{children}
				</CardBody>
			</Stack>
		</Card>
	)
}

export { FeatureCard }
