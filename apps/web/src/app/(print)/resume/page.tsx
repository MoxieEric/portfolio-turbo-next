import { GridItem, SimpleGrid } from '@chakra-ui/react'
import Experience from '../../../components/sections/Experience'
import ResumeHeader from '../../../components/sections/ResumeHeader'
import Skills from '../../../components/sections/Skills'
import Stats from '../../../components/sections/Stats'

const Page: React.FC = () => {
	return (
		<SimpleGrid columns={3}>
			<GridItem colSpan={2}>
				<ResumeHeader />
				<Experience />
			</GridItem>
			<GridItem>
				<Stats />
				<Skills />
			</GridItem>
		</SimpleGrid>
	)
}
export default Page
