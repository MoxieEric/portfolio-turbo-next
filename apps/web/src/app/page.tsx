import Image from 'next/image'
import { Card } from '@repo/ui/card'

export default function Page(): JSX.Element {
	return (
		<main className='flex flex-col items-center justify-start min-h-screen p-24 gap-12'>
			<div className='z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex'>
				<p className='fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30'>
					Eric Nowels -&nbsp;
					<code className='font-mono font-bold'>Portfolio</code>
				</p>
				<div className='fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
					<a
						className='flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0'
						href='https://www.linkedin.com/in/ericnowels/'
						rel='noopener noreferrer'
						target='_blank'
					>
						LinkedIn
					</a>
				</div>
			</div>

			<div className='p-8 rounded bg-gray-900 flex items-center'>
				<Image
					alt=''
					height={120}
					priority
					src='/avatar.jpg'
					width={120}
					className='rounded-full'
				/>
				<Card href='/' title='👋 Hi There!'>
					Check my LinkedIn profile for more info while I wrap up this
					project.
				</Card>
			</div>
		</main>
	)
}
