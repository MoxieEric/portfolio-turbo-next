import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react'

const Page: React.FC = () => {
	return (
		<VStack justifyContent='center' minH={96} py={{ base: 8, md: 12 }}>
			<Text>Portfolio...</Text>
			<Card>
				<CardHeader fontFamily='heading'>Eric Nowels</CardHeader>
				<CardBody>
					<Text>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nostrum accusamus, saepe voluptatum ut alias quae
						enim mollitia laudantium delectus omnis ducimus
						blanditiis officiis! Quas molestiae sequi iure sunt
						minus adipisci?
					</Text>
				</CardBody>
			</Card>
			<Box>
				<Heading variant='serif'>This is a heading</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Nostrum accusamus, saepe voluptatum ut alias quae enim
					mollitia laudantium delectus omnis ducimus blanditiis
					officiis! Quas molestiae sequi iure sunt minus adipisci?
				</Text>

				<Heading variant='serif' size='lg'>
					This is a heading
				</Heading>
				<Heading variant='serif' size='md'>
					This is a heading
				</Heading>
				<Heading variant='serif' size='md'>
					This is a heading
				</Heading>
			</Box>
		</VStack>
	)
}
export default Page
