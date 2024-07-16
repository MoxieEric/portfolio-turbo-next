import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

interface StatCardProps {
	stat: string
	label: string
}

const StatCard: React.FC<StatCardProps> = ({ stat, label }) => {
	return (
		<Stat>
			<StatLabel>{label}</StatLabel>
			<StatNumber fontSize={{ base: 'xl', md: '3xl' }}>{stat}</StatNumber>
		</Stat>
	)
}

export { StatCard }
