'use client'

import { VStack } from '@chakra-ui/react'
import type { PortfolioItem } from '@repo/types'
import { LayoutDirection } from '@repo/types'
import { PortfolioCard, ScreenSection } from '@repo/ui/components'
import React from 'react'
import portfolioContent from '../../config/portfolioContent'

const Portfolio: React.FC = () => {
	const items: PortfolioItem[] = Object.values(portfolioContent)
	return (
		<ScreenSection
			id='portfolio'
			layout={LayoutDirection.Column}
			title='Portfolio'
		>
			<VStack gap={4} position='relative' w='full'>
				{items.map((item) => {
					return <PortfolioCard content={item} key={item.id} />
				})}
			</VStack>
		</ScreenSection>
	)
}

export default Portfolio
