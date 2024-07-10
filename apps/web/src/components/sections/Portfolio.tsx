'use client'

import { Text, VStack } from '@chakra-ui/react'
import { PortfolioCard, ScreenSection } from '@repo/ui/components'
import React from 'react'

const Portfolio: React.FC = () => {
	return (
		<ScreenSection id='portfolio' layout='column' title='Portfolio'>
			<VStack gap={4} position='relative' w='full'>
				<Text size='lg' w='full' py={2}>
					A small selection of recent work.
				</Text>
				{Array.from(Array(5).keys()).map((item) => {
					return (
						<PortfolioCard key={item} title='BrewLogix Platform' />
					)
				})}
			</VStack>
		</ScreenSection>
	)
}

export default Portfolio
