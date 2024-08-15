import type { ComponentStyleConfig } from '@chakra-ui/react'
import badgeConfig from './badgeConfig'
import buttonConfig from './buttonConfig'
import cardConfig from './cardConfig'
import headingConfig from './headingConfig'

const componentConfig: Record<string, ComponentStyleConfig> = {
	Badge: badgeConfig,
	Button: buttonConfig,
	Card: cardConfig,
	Heading: headingConfig,
}

export default componentConfig
