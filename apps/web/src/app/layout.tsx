import '@repo/ui/styles.css'
import type { Metadata } from 'next'
import { Aleo } from 'next/font/google'
import UiProvider from '../components/providers/UiProvider'
import './globals.css'

const font = Aleo({ subsets: ['latin'], variable: '--font-aleo' })

export const metadata: Metadata = {
	title: 'Eric Nowels',
	description: 'UX Engineer | Product Innovator | Leader | Runner',
}

const RootLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<html lang='en' className={`${font.className} ${font.variable}`}>
			<body>
				<UiProvider>{children}</UiProvider>
			</body>
		</html>
	)
}

export default RootLayout
