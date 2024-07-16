'use client'

import type { CardProps } from '@chakra-ui/react'
import { Card, CardBody, Heading, Stack } from '@chakra-ui/react'
import { printStyles } from '../../utils'

interface FeatureCardProps extends CardProps {
	title?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	children,
	size,
	...props
}) => {
	return (
		<Card
			_dark={{
				bg: 'gray.700',
			}}
			bg='gray.50'
			overflow='hidden'
			rounded='lg'
			sx={printStyles({
				boxShadow: 'none',
			})}
			{...props}
		>
			<Stack
				alignItems='start'
				direction={{ base: 'column', md: 'row' }}
				gap={2}
			>
				<CardBody
					display='flex'
					flexDir='column'
					gap={{
						base: 2,
						md: 4,
					}}
					height='full'
					shadow='none'
				>
					{title ? (
						<Heading size={size === 'lg' ? '2xl' : size}>
							{title}
						</Heading>
					) : null}

					{children}
				</CardBody>
			</Stack>
		</Card>
	)
}

export { FeatureCard }
