import { Heading, Text, VStack } from '@chakra-ui/react'
import { type ReactNode } from 'react'

const Card = ({
	title,
	children,
	href,
}: {
	title: string
	children: ReactNode
	href?: string
}): JSX.Element => {
	return (
		<VStack
			alignItems='center'
			gap={2}
			justifyContent='flex-start'
			position='relative'
			rounded='lg'
		>
			<Heading size={{ base: 'md', md: 'lg' }} w='full'>
				{title}
			</Heading>
			<Text fontSize='sm' maxW='30ch'>
				{children}
			</Text>

			{href ? (
				<a
					className='ui-absolute ui-w-full ui-top-0 ui-bottom-0 ui-left-0 ui-right-0'
					href={href}
					rel='noopener noreferrer'
					target='_blank'
				>
					<span className='ui-sr-only'>{title}</span>
				</a>
			) : (
				''
			)}
		</VStack>
	)
}

export default Card
