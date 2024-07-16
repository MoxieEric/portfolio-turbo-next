'use client'

import { ScreenSection, Timeline } from '@repo/ui/components'
import React from 'react'
import { experienceConfig } from '../../config/experienceConfig'

const Experience: React.FC = () => {
	return (
		<ScreenSection id='history' title='History'>
			<Timeline items={experienceConfig} />
		</ScreenSection>
	)
}

export default Experience
