import './globals.css'
import '@repo/ui/styles.css'
import type { Metadata } from 'next'
import { Aleo } from 'next/font/google'

const font = Aleo({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Eric Nowels',
	description: 'UX Engineer | Product Innovator | Leader | Runner',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}
