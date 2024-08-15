import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Aleo, Inter } from 'next/font/google'
import HeapAnalytics from '../components/providers/HeapAnalytics'
import UiProvider from '../components/providers/UiProvider'
import './globals.css'

const font = Inter({ subsets: ['latin'], variable: '--font-inter' })
const aleo = Aleo({ subsets: ['latin'], variable: '--font-aleo' })

export const metadata: Metadata = {
	title: 'Eric Nowels',
	description: 'Creative Full-Stack Engineer',
}

const RootLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<html
			className={`${font.className} ${font.variable} ${aleo.className}`}
			lang='en'
		>
			<body>
				<UiProvider>{children}</UiProvider>
				<Analytics />
				<HeapAnalytics />
			</body>
		</html>
	)
}

export default RootLayout
