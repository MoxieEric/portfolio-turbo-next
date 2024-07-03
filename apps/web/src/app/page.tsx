'use client'
import Experience from '../components/sections/Experience'
import Intro from '../components/sections/Intro'
import Skills from '../components/sections/Skills'
import Stats from '../components/sections/Stats'

export default function Page(): JSX.Element {
	return (
		<>
			<Intro />
			<Skills />
			<Experience />
			<Stats />
		</>
	)
}
