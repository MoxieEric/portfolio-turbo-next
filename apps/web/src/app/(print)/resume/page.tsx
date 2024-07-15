'use client'

import { GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import Contacts from '../../../components/sections/Contacts'
import Experience from '../../../components/sections/Experience'
import ResumeHeader from '../../../components/sections/ResumeHeader'
import Skills from '../../../components/sections/Skills'
import Stats from '../../../components/sections/Stats'

const Page: React.FC = () => {
	return (
		<SimpleGrid columns={3} gap={4}>
			<GridItem as={VStack} colSpan={2} gap={4}>
				<ResumeHeader />
				<Experience />
			</GridItem>
			<GridItem as={VStack} gap={4}>
				<Contacts />
				<Stats />
				<Skills />
			</GridItem>
		</SimpleGrid>
	)
}
export default Page
