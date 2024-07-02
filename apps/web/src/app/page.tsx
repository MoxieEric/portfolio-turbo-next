import { Button, HStack, Heading, VStack } from '@chakra-ui/react'
import { Card } from '@repo/ui/components'
import Image from 'next/image'

export default function Page(): JSX.Element {
	return (
		<VStack py={{ base: 8, md: 12 }} minH={96} justifyContent='center'>
			<HStack p={{ base: 4, md: 8 }} rounded='lg' bg='gray.50' gap={4}>
				<Image
					alt=''
					height={120}
					priority
					src='/avatar.jpg'
					width={120}
					className='rounded-full'
				/>
				<Card
					href='https://www.linkedin.com/in/ericnowels/'
					title='👋 Hi There!'
				>
					Check my LinkedIn profile for more info while I wrap up this
					project.
				</Card>
			</HStack>
		</VStack>
	)
}
