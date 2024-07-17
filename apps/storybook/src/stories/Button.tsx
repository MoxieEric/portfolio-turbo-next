'use client'

import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { EmploymentType } from '@repo/types'
import { Timeline } from '@repo/ui/components'
import React from 'react'
import './button.css'

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large'
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
}) => {
	return (
		<Card
			bg={backgroundColor}
			size={size}
			variant={primary ? 'elevated' : 'solid'}
		>
			<CardHeader>
				<Heading>{label}</Heading>
			</CardHeader>
			<CardBody>
				<Text>Howdy there...</Text>
				<Timeline
					items={[
						{
							title: 'asd',
							isRemote: true,
							companyName: 'asd',
							location: 'asddd, bg',
							type: EmploymentType.FullTime,
							logo: '#',
							dateRange: '1 - 2',
						},
					]}
				/>
			</CardBody>
		</Card>
	)
}
