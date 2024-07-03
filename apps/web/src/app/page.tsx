'use client'
import { FC } from 'react'
import Experience from '../components/sections/Experience'
import Intro from '../components/sections/Intro'
import Skills from '../components/sections/Skills'
import Stats from '../components/sections/Stats'

const Page: FC = () => {
	return (
		<>
			<Intro />
			<Skills />
			<Experience />
			<Stats />
		</>
	)
}

export default Page
