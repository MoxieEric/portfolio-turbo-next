'use client'

import { VStack } from '@chakra-ui/react'
import { Blob, Paper } from '@repo/ui/components'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<>
			<Blob animate={false} />
			<VStack
				alignItems='start'
				as='main'
				gap={{ base: 4, md: 8 }}
				justifyContent='start'
				p={4}
				w='full'
			>
				<Paper>{children}</Paper>
			</VStack>
		</>
	)
}

export default Layout
