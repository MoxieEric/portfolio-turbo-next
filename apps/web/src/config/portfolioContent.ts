import type { PortfolioItem } from '@repo/types'

const portfolioContent: PortfolioItem[] = [
	{
		title: 'BreweryDB',
		description:
			'Mobile and web app that helps users find and curate craft brewery experiences from over 10k breweries and 200K products to explore. Your next brewery adventure awaits! ',
		id: 'bdb-app',
		company: 'BrewLogix',
		featureImage: '/portfolio/bdb-app-grid--sm.jpg',
		projectLink:
			'https://apps.apple.com/us/app/brewerydb-by-brewlogix/id6449491682',
		role: 'Design, UX, Development',
		stack: ['React Native', 'Next', 'GlueStackUI', 'GraphQL', 'TypeScript'],
	},
	{
		title: 'PerformancePlatform',
		description:
			'IoT powered draft management system that unlocks potential and profitability through AI and ML powered business insights and comprehensive operational tools.',
		id: 'pp-app',
		company: 'BrewLogix',
		featureImage: '/portfolio/performance-platform-stack-01.png',
		projectLink: 'https://app.brewlogix.com',
		role: 'Design, UX, Development',
		stack: ['Next', 'Chakra', 'GraphQL', 'TypeScript', 'Stripe'],
	},
	{
		title: 'BrewMenu',
		description:
			'IoT powered digital menu system. Designed with the craft beverage industry in mind and seamlessles integrates into all BrewLogix apps to provide turn-key signage onn-premise and off.',
		id: 'blx-bm',
		company: 'BrewLogix',
		featureImage: '/portfolio/brewmenu-stack--sm.png',
		projectLink: 'https://app.brewlogix.com',
		role: 'Design, UX, Development',
		stack: ['Next', 'Chakra', 'GraphQL', 'TypeScript', 'Stripe'],
	},
	{
		title: 'BrewLogix UI',
		description:
			'Atomic component library with interactive GUI, code samples and testing for use by suite of BrewLogix apps.',
		id: 'blx-ui',
		company: 'BrewLogix',
		featureImage: '/portfolio/brewlogix-ui--sm.png',
		role: 'Design, UX, Development',
		stack: ['React', 'Storybook', 'Tailwind', 'TypeScript', 'Jest'],
	},
	{
		title: 'Santa Fe Brewing Co.',
		description: 'Brewing website',
		id: 'blx-ui',
		company: 'BrewLogix',
		featureImage: '/portfolio/Santa-Fe-Brewing-Square-09-900x900.jpg',
		role: 'Design, UX, Development',
		stack: ['WordPress', 'Vue', 'GraphQL'],
	},
	{
		title: 'Noodles & Company',
		description: 'Web and mobile app for finding and ',
		id: 'vb-at',
		featureImage: '/portfolio/noodles-01--md.jpg',
		stack: ['React Native', 'RNW', 'WordPress', 'GraphQL'],
	},
	{
		title: 'Sierra Nevada Brewing Co.',
		description: 'Brewing website',
		id: 'blx-ui',
		company: 'Sierra Nevada Brewing Company',
		featureImage: '/portfolio/Sierra-Nevada-Square-05-900x900.jpg',
		role: 'Design, UX, Development',
		stack: ['WordPress', 'Vue', 'GraphQL'],
	},
	{
		title: '10 Barrel Brewing',
		description: 'Brewing website',
		id: 'blx-ui',
		company: 'Sierra Nevada Brewing Company',
		featureImage: '/portfolio/10-Barrel-Square-05-900x900.jpg',
		role: 'Design, UX, Development',
		stack: ['WordPress', 'Vue', 'GraphQL'],
	},
	{
		title: 'GraphyDocs',
		description:
			'Turn-key API documentation site providing a superior DX through intuitive type documentation, data samples and interactive API playground.',
		id: 'blx-docs',
		featureImage: '/portfolio/graphydocs-01--sm.jpg',
		stack: ['Next', 'TypeScript', 'Chakra', 'GraphQL'],
	},

	{
		title: 'BluePoint Brewery',
		description:
			'Brewery website facilitating online beer and merch ordering, event bookings and plenty of easter eggs.',
		id: 'blx-docs',
		featureImage: '/portfolio/bluepoint-brewing-01.jpg',
		stack: ['Vue', 'Strappi', 'Foundation', 'GraphQL', 'Shopify'],
	},
	{
		title: 'ProductBoard ClickSink',
		description:
			'Connector plugin for syncing  ProductBoard data to ClickUp project management system and visa versa.',
		id: 'blx-docs',
		featureImage: '/trans-dark.jpg',
		stack: ['React', 'TypeScript', 'Express', 'Apollo'],
	},
	{
		title: 'Diestel Turkey',
		description:
			'Online shop for Diestel Family Farms, which specializes in all things turkey',
		id: 'blx-docs',
		featureImage: '/trans-dark.jpg',
		stack: ['Vue', 'Shopify Plus', 'Material'],
	},
	{
		title: 'Bend Ale Trail',
		description:
			'Web and mobile app for exploring local breweries in Bend, OR and collecting rewards along the way.',
		id: 'vb-at',
		featureImage: '/trans-dark.jpg',
		stack: ['React Native', 'WordPress', 'GraphQL'],
	},
	{
		title: 'Birdcall',
		description: 'Web and mobile app for finding and ',
		id: 'bc-at',
		featureImage: '/trans-dark.jpg',
		stack: ['React', 'TypeScript', 'Stripe', 'FramerMotion', 'WebGL'],
	},
	{
		title: 'Arryved',
		description:
			'Marketing, onboarding and consumer feedback site for an innovative POS and contactless ordering system.',
		id: 'arryved',
		featureImage: '/trans-dark.jpg',
		stack: ['WordPress'],
	},
	{
		title: 'Birch Benders',
		description:
			'Marketing, onboarding and consumer feedback site for an innovative POS and contactless ordering system.',
		id: 'birch',
		featureImage: '/trans-dark.jpg',
		stack: ['WordPress'],
	},
]

export default portfolioContent
