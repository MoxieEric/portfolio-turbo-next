import type { NavBarLink } from '@repo/ui/components'

const navigationConfig: NavBarLink[] = [
	{
		label: 'Skills',
		path: '#skills',
	},
	{
		label: 'Experience',
		path: '#history',
	},
	{
		label: 'Portfolio',
		path: '/portfolio',
		disabled: true,
	},
]

export default navigationConfig
