import type { ReactNode } from 'react'

export interface PortfolioItem {
	__typename?: 'PortfolioItem'
	title: string
	company?: string
	role?: string
	stack?: string[]
	projectLink?: string
	id: string
	description: ReactNode
	featureImage: string
	gallery?: ReactNode[]
}
