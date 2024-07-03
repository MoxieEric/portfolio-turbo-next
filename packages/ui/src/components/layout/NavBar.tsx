'use client'

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

	useEffect(() => {
		setTitle(links.find((link) => link.path === pathname)?.label)
	}, [pathname, links])

	return (
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
			<HStack>
				{links
					.filter((link) => !link.disabled)
					.map((link: NavBarLink) => (
						<Link href={link.path} key={link.path}>
							<Button
								isActive={link.path === pathname}
								variant='link'
							>
								{link.label}
							</Button>
						</Link>
					))}

				<Button
					as='a'
					href='https://www.linkedin.com/in/ericnowels/'
					rel='noopener noreferrer'
					target='_blank'
					variant='link'
				>
					LinkedIn
				</Button>
			</HStack>
		</HStack>
	)
}

export { NavBar }
