import type { ComponentStyleConfig } from '@chakra-ui/react'
import cardConfig from './cardConfig'
import headingConfig from './headingConfig'

const componentConfig: Record<string, ComponentStyleConfig> = {
	Card: cardConfig,
	Heading: headingConfig,
}

export default componentConfig
