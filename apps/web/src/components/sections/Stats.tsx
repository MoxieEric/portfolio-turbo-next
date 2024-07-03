'use client'

import { StatGroup } from '@chakra-ui/react'
import { ScreenSection, SimpleCard, StatCard } from '@repo/ui/components'
import React from 'react'

const Stats: React.FC = () => {
	return (
		<ScreenSection id='numbers' title='Numbers'>
			<SimpleCard
				alignItems='center'
				display='flex'
				justifyContent='center'
				title=''
				w={{ base: 'full', md: '3xl' }}
			>
				<StatGroup w='full'>
					<StatCard label='Experience' stat='13 Years' />
					<StatCard label='Websites' stat='100+' />
					<StatCard label='Apps' stat='11' />
				</StatGroup>
			</SimpleCard>
		</ScreenSection>
	)
}

export default Stats
