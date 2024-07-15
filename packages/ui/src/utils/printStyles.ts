import type { ChakraProps } from '@chakra-ui/react'

export const printStyles = (styles: ChakraProps['sx']): ChakraProps['sx'] => {
	return {
		'@media print': {
			...styles,
		},
	}
}
