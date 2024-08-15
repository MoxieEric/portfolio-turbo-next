'use client'

import type { ChakraProps } from '@chakra-ui/react'
import { HStack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { NavLink, type NavBarLink } from '../molecules/NavLink'

interface NavBarProps {
	links: NavBarLink[]
	label: string
}

const NavBar: React.FC<NavBarProps> = ({ links, label }) => {
	const pathname = usePathname()
	const [title, setTitle] = useState<string>()
	const printStyles: ChakraProps['sx'] = {
		'@media print': {
			display: 'none',
		},
	}
	useEffect(() => {
		setTitle(links.find((link) => link.path === pathname)?.label)
	}, [pathname, links])

	return (
		<HStack
			alignItems='center'
			justifyContent='center'
			py={4}
			sx={printStyles}
			w='full'
			zIndex={9}
		>
			<HStack
				alignItems='center'
				justifyContent='space-between'
				maxWidth={{ base: '3xl' }}
				w='full'
			>
				<HStack>
					<Link href='/'>
						<Heading size='md'>{label}</Heading>
					</Link>
					{title ? (
						<>
							<span>/</span>
							<Heading fontFamily='mono' size='sm'>
								{title}
							</Heading>
						</>
					) : (
						''
					)}
				</HStack>
				<HStack gap={2}>
					{links
						.filter((link) => !link.disabled)
						.map((link: NavBarLink) => (
							<NavLink key={link.label} {...link} />
						))}
				</HStack>
			</HStack>
		</HStack>
	)
}

export { NavBar }
