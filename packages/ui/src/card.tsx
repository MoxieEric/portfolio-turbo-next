import { type ReactNode } from 'react'

export function Card({
	title,
	children,
	href,
}: {
	title: string
	children: ReactNode
	href?: string
}): JSX.Element {
	return (
		<div className='ui-group ui-rounded-lg ui-px-5 ui-py-4 ui-transition-colors ui-relative'>
			<h2 className='ui-mb-3 ui-text-2xl ui-font-semibold'>{title}</h2>
			<p className='ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-80 ui-group-hover:opacity-100'>
				{children}
			</p>
			{href ? (
				<a
					className='ui-absolute ui-w-full ui-top-0 ui-bottom-0 ui-left-0 ui-right-0'
					href={href}
					rel='noopener noreferrer'
					target='_blank'
				>
					<span className='ui-sr-only'>{title}</span>
				</a>
			) : (
				''
			)}
		</div>
	)
}
