'use client'

import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export interface NavBarLink {
	label: string
	path: string
	active?: boolean
	disabled?: boolean
}

const NavLink: React.FC<NavBarLink> = ({ label, path, disabled, active }) => {
	const pathname = usePathname()

	return (
		<Link aria-disabled={disabled} href={path} key={path}>
			<Button
				_hover={{
					bg: 'blackAlpha.100',
				}}
				color='teal.600 !important'
				isActive={path === pathname || active}
				isDisabled={disabled}
				size={{ base: 'sm', md: 'md' }}
				variant={{ base: 'link', md: 'ghost' }}
			>
				{label}
			</Button>
		</Link>
	)
}

export { NavLink }
