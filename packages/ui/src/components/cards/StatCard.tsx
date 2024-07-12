import { Stat, StatHelpText, StatNumber } from '@chakra-ui/react'

interface StatCardProps {
	stat: string
	label: string
}

const StatCard: React.FC<StatCardProps> = ({ stat, label }) => {
	return (
		<Stat>
			<StatNumber fontSize={{ base: 'xl', md: '3xl' }}>{stat}</StatNumber>
			<StatHelpText>{label}</StatHelpText>
		</Stat>
	)
}

export { StatCard }
