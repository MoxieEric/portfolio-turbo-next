'use client'

import { VStack } from '@chakra-ui/react'
import { LayoutDirection } from '@repo/types'
import { PortfolioCard, ScreenSection } from '@repo/ui/components'
import React from 'react'
import portfolioContent from '../../config/portfolioContent'

const Portfolio: React.FC = () => {
	return (
		<ScreenSection
			id='portfolio'
			layout={LayoutDirection.Column}
			title='Portfolio'
		>
			<VStack gap={4} position='relative' w='full'>
				{portfolioContent.map((item) => {
					return <PortfolioCard content={item} key={item.id} />
				})}
			</VStack>
		</ScreenSection>
	)
}

export default Portfolio
