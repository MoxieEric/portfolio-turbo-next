'use client'

import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export interface NavBarLink {
	label: string
	path: string
	disabled?: boolean
}

interface NavLinkProps {
	link: NavBarLink
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
	const pathname = usePathname()

	return (
		<Link href={link.path} key={link.path}>
			<Button
				_hover={{
					bg: 'blackAlpha.100',
				}}
				color='teal.600 !important'
				isActive={link.path === pathname}
				size={{ base: 'sm', md: 'md' }}
				variant={{ base: 'link', md: 'ghost' }}
			>
				{link.label}
			</Button>
		</Link>
	)
}

export { NavLink }
