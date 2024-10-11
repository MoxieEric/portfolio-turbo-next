import type { PortfolioItem } from '@repo/types'

export enum Projects {
	BDB = 'BreweryDB',
	BLXUI = 'BrewLogixUi',
	BM = 'BrewMenu',
	BP = 'BluePointBrewing',
	Diestel = 'DiestelFarms',
	GraphyDocs = 'GraphyDocs',
	MMB = 'MarketMyBrewery',
	Noodles = 'NoodlesCo',
	PBCS = 'ProductBoardClickSink',
	PP = 'PerformancePlatform',
	SFBC = 'SantaFeBrewing',
	SNBC = 'SierraNevada',
	TenBarrel = '10BarrelBrewing',
	VB = 'VBAleTrail',
}

const portfolioContent: Record<Projects, PortfolioItem> = {
	[Projects.BDB]: {
		title: 'BreweryDB',
		description:
			'Mobile and web app that helps users find and curate craft brewery experiences from over 10k breweries and 200K products to explore. Your next brewery adventure awaits! ',
		id: 'bdb-app',
		company: 'BrewLogix',
		featureImage: '/portfolio/bdb-03--md.png',
		projectLink:
			'https://apps.apple.com/us/app/brewerydb-by-brewlogix/id6449491682',
		role: 'Design, UX, Development',
		stack: ['React Native', 'Next', 'GlueStackUI', 'GraphQL', 'TypeScript'],
	},
	[Projects.PP]: {
		title: 'PerformancePlatform',
		description:
			'IoT powered draft management system that unlocks potential and profitability through AI and ML powered business insights and comprehensive operational tools.',
		id: 'pp-app',
		company: 'BrewLogix',
		featureImage: '/portfolio/pp-01--md.png',
		projectLink: 'https://app.brewlogix.com',
		role: 'Design, UX, Development',
		stack: ['Next', 'Chakra', 'GraphQL', 'TypeScript', 'Stripe'],
	},
	[Projects.MMB]: {
		title: 'MarketMyBrewery',
		description:
			'Free 360 marketing app to help craft producers promote their brand, locations and products to craft-seeking consumers. ',
		id: 'mmb',
		company: 'BrewLogix',
		featureImage: '/portfolio/mmb-01--md.png',
		projectLink: 'https://www.marketmybrewery.com',
		role: 'Design, UX, Development',
		stack: ['Next', 'Tailwind', 'GraphQL', 'TypeScript'],
	},
	[Projects.BM]: {
		title: 'BrewMenu',
		description:
			'IoT powered digital menu system. Designed with the craft beverage industry in mind and seamlessles integrates into all BrewLogix apps to provide turn-key signage onn-premise and off.',
		id: 'blx-bm',
		company: 'BrewLogix',
		featureImage: '/portfolio/brewmenu-01--md.png',
		projectLink: 'https://app.brewlogix.com',
		role: 'Design, UX, Development',
		stack: ['Next', 'Chakra', 'GraphQL', 'TypeScript', 'Stripe'],
	},
	[Projects.BLXUI]: {
		title: 'BrewLogix UI',
		description:
			'Atomic component library with interactive GUI, code samples and testing for use by suite of BrewLogix apps.',
		id: 'blx-ui',
		company: 'BrewLogix',
		featureImage: '/portfolio/blx-ui--md.jpg',
		role: 'Design, UX, Development',
		stack: [
			'React',
			'Storybook',
			'Tailwind',
			'TypeScript',
			'Jest',
			'Figma',
		],
	},
	[Projects.SFBC]: {
		title: 'Santa Fe Brewing Co.',
		description:
			"Animated, irreverent and unapoligetic website for New Mexico's O.G. brewery. Plus some operational goodies in the form of a web app ;)",
		id: 'sfbc',
		company: 'BrewLogix',
		featureImage: '/portfolio/Santa-Fe-Brewing-Square-09-900x900.jpg',
		role: 'Design, UX, Development',
		stack: ['WordPress', 'Vue', 'GraphQL', 'Dropbox', 'Auth0'],
	},
	[Projects.Noodles]: {
		title: 'Noodles & Company',
		description:
			'Ordering app and marketing website for national fast casual restaurant with more than 120 locations nationwide. ',
		id: 'noodles',
		featureImage: '/portfolio/noodles-01--md.jpg',
		stack: ['React Native', 'RNW', 'WordPress', 'GraphQL', 'OLO'],
	},
	[Projects.SNBC]: {
		title: 'Sierra Nevada Brewing Co.',
		description:
			'Immersive website balancing the showcase of 4+ decades of beer history and culture with the brass tacks: finding fresh beer.',
		id: 'snbc',
		company: 'Sierra Nevada Brewing Company',
		featureImage: '/portfolio/Sierra-Nevada-Square-05-900x900.jpg',
		role: 'Design, UX, Development',
		stack: ['WordPress', 'Angular', 'Shopify'],
	},
	[Projects.TenBarrel]: {
		title: '10 Barrel Brewing',
		description:
			"Brewing website that's as wild as the crew behind the beer.",
		id: 'tenbarrel',
		company: '10 Barrel Brewing',
		featureImage: '/portfolio/10-Barrel-Square-05-900x900.jpg',
		role: 'Design, UX, Development',
		stack: ['WordPress', 'Vue', 'GraphQL'],
	},
	[Projects.GraphyDocs]: {
		title: 'GraphyDocs',
		description:
			'Turn-key API documentation site providing a superior DX through intuitive type documentation, data samples and interactive API playground.',
		id: 'blx-docs',
		featureImage: '/portfolio/docs-01--md.png',
		stack: ['Next', 'TypeScript', 'Chakra', 'GraphQL'],
	},
	[Projects.BP]: {
		title: 'BluePoint Brewery',
		description:
			'Brewery website facilitating online beer and merch ordering, event bookings and plenty of easter eggs.',
		id: 'bluepoint',
		featureImage: '/portfolio/blue-point-brewing-01--md.png',
		stack: ['Vue', 'Strappi', 'Foundation', 'GraphQL', 'Shopify'],
	},
	[Projects.PBCS]: {
		title: 'ProductBoard ClickSynk',
		description:
			'Connector plugin for syncing  ProductBoard data to ClickUp project management system and visa versa.',
		id: 'pb-cs',
		featureImage: '/portfolio/clickSync-01--md.jpg',
		stack: ['React', 'TypeScript', 'Express', 'Apollo'],
	},
	[Projects.Diestel]: {
		title: 'Diestel Turkey',
		description:
			'Online shop for Diestel Family Farms, purveyors of all things turkey since 1949.',
		id: 'diestel',
		featureImage: '/portfolio/diestel-01--md.png',
		stack: ['Vue', 'Shopify Plus', 'Material'],
	},
	[Projects.VB]: {
		title: 'Bend Ale Trail',
		description:
			'Web and mobile app for exploring local breweries in Bend, OR and collecting rewards along the way.',
		id: 'vb-at',
		featureImage: '/portfolio/ale-trail-01--md.png',
		stack: ['React Native', 'WordPress', 'GraphQL', 'Expo'],
	},
}

export default portfolioContent
