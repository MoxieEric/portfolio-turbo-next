import { Button, HStack, Heading, VStack } from '@chakra-ui/react'
import { Card } from '@repo/ui/components'
import Image from 'next/image'

export default function Page(): JSX.Element {
	return (
		<VStack>
			<HStack w='full' alignItems='center' justifyContent='space-between'>
				<HStack>
					<Heading size='md'>Eric Nowels</Heading> <span>/</span>
					<Heading size='sm' fontFamily='mono'>
						Portfolio
					</Heading>
				</HStack>
				<HStack>
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

			<VStack py={{ base: 8, md: 12 }} minH={96} justifyContent='center'>
				<HStack p={{ base: 4, md: 8 }} rounded='lg' bg='gray.50'>
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
						Check my LinkedIn profile for more info while I wrap up
						this project.
					</Card>
				</HStack>
			</VStack>
		</VStack>
	)
}
