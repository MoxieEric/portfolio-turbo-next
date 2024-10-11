import type { UiLink } from '@repo/types'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaAt, FaDesktop, FaMobile } from 'react-icons/fa6'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const contactLinksConfig: Record<string, UiLink> = {
	website: {
		label: 'ericnowels.me',
		url: 'https://ericnowels.me',
		icon: FaDesktop,
	},
	email: {
		label: 'ericnowels@gmail.com',
		url: 'mailto:ericnowels@gmail.com',
		icon: FaAt,
	},
	phone: {
		label: '718.496.0419',
		url: 'tel:+1 718.496.0419',
		icon: FaMobile,
	},
	location: {
		label: 'Boulder, CO',
		url: null,
		icon: FaMapMarkerAlt,
	},
	linkedIn: {
		label: '@ericnowels',
		url: 'https://www.linkedin.com/in/ericnowels/',
		icon: SiLinkedin,
	},
	github: {
		label: '@MoxieEric',
		url: 'https://github.com/MoxieEric',
		icon: SiGithub,
	},
}

export default contactLinksConfig
