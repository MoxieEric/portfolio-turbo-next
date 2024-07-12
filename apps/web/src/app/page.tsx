'use client'
import type { FC } from 'react'
import Experience from '../components/sections/Experience'
import Intro from '../components/sections/Intro'
import Portfolio from '../components/sections/Portfolio'
import Skills from '../components/sections/Skills'
import Stats from '../components/sections/Stats'

const Page: FC = () => {
	return (
		<>
			<Intro />
			<Skills />
			<Experience />
			<Portfolio />
			<Stats />
		</>
	)
}

export default Page
