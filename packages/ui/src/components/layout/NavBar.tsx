'use client'

import type { ChakraProps } from '@chakra-ui/react'
import { Button, HStack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export interface NavBarLink {
	label: string
	path: string
	disabled?: boolean
}

interface NavBarProps {
	links: NavBarLink[]
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
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
			p={4}
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
						<Heading size='md'>Eric Nowels</Heading>
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
						))}
				</HStack>
			</HStack>
		</HStack>
	)
}

export { NavBar }
