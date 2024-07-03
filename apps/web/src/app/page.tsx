'use client'
import { SimpleGrid, StatGroup, Text } from '@chakra-ui/react'
import { FeatureCard, SimpleCard, StatCard } from '@repo/ui/components'
import Image from 'next/image'
import Intro from '../components/sections/Intro'
import Skills from '../components/sections/Skills'

export default function Page(): JSX.Element {
	return (
		<>
			<Intro />
			<Skills />
			<SimpleCard title='Experience'>
				<FeatureCard title='BrewLogix' size='sm' bg='purple.50'>
					<Text fontSize='lg'>...</Text>
				</FeatureCard>
				<FeatureCard title='Moxie Sozo' size='sm' colorScheme='teal'>
					<Text fontSize='lg'>...</Text>
				</FeatureCard>
			</SimpleCard>
			<SimpleCard title='Portfolio'>
				<Text fontSize='md'>
					Highlights from my favorite projects and clients over the
					years.{' '}
				</Text>
				<FeatureCard
					title='PerformancePlatform'
					image={
						<Image
							alt=''
							height={120}
							priority
							src='/avatar.jpg'
							width={120}
							className='rounded-xl aspect-square'
						/>
					}
				>
					<Text fontSize='lg'>Web app for IoT draft management.</Text>
					<Text fontFamily='mono'>2023</Text>
				</FeatureCard>
			</SimpleCard>

			<SimpleCard title='Numbers'>
				<StatGroup w='full'>
					<StatCard stat='13 Years' label='Experience' />
					<StatCard stat='100+' label='Websites' />
					<StatCard stat='11' label='Apps' />
				</StatGroup>
			</SimpleCard>
		</>
	)
}
