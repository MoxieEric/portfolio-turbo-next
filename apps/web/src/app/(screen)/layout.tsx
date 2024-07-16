'use client'

import { VStack } from '@chakra-ui/react'
import { Blob, NavBar, Screen } from '@repo/ui/components'
import navigationConfig from '../../config/navigationConfig'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<>
			<Blob />
			<VStack
				alignItems='center'
				as='main'
				gap={4}
				justifyContent='center'
				pb={12}
				px={{ base: 4, md: 8 }}
				w='full'
			>
				<NavBar links={navigationConfig} />
				<Screen>{children}</Screen>
			</VStack>
		</>
	)
}

export default Layout
