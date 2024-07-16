import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Aleo } from 'next/font/google'
import UiProvider from '../components/providers/UiProvider'
import './globals.css'

const font = Aleo({ subsets: ['latin'], variable: '--font-aleo' })

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
		<html className={`${font.className} ${font.variable}`} lang='en'>
			<body>
				<UiProvider>{children}</UiProvider>
				<Analytics />
			</body>
		</html>
	)
}

export default RootLayout
