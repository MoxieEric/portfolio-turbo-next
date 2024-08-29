import type { As } from '@chakra-ui/react'
import * as Fa from 'react-icons/fa6'
import * as Hi from 'react-icons/hi2'
import * as Si from 'react-icons/si'
import type { IconOption } from '../types'

export const getIcon = (iconSlug: IconOption): As | undefined => {
	const library: string = String(iconSlug).substring(0, 2)
	let icon: As | undefined
	switch (library) {
		case 'Hi':
			// @ts-ignore -- must coerce
			icon = Hi[iconSlug] as As
			break
		case 'Fa':
			// @ts-ignore -- must coerce
			icon = Fa[iconSlug] as As
			break
		case 'Si':
			// @ts-ignore -- must coerce
			icon = Si[iconSlug] as As
			break

		default:
			icon = undefined
			break
	}
	return icon
}
