'use client'

import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Text,
} from '@chakra-ui/react'
import { Blob, Timeline } from '@repo/ui/components'
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
export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'
	return (
		<Card
			size={size}
			bg={backgroundColor}
			variant={primary ? 'elevated' : 'solid'}
		>
			<CardHeader>
				<Heading>Heading</Heading>
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
							type: null,
							logo: '#',
							dateRange: '1 - 2',
						},
					]}
				/>
			</CardBody>
		</Card>
		// <button
		// 	type='button'
		// 	className={[
		// 		'storybook-button',
		// 		`storybook-button--${size}`,
		// 		mode,
		// 	].join(' ')}
		// 	{...props}
		// >
		// 	{label}
		// 	<style jsx>{`
		// 		button {
		// 			background-color: ${backgroundColor};
		// 		}
		// 	`}</style>
		// </button>
	)
}
