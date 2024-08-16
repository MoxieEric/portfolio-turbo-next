import { composeStories } from '@storybook/react'
import { fireEvent, render, screen } from '@testing-library/react'
import * as stories from './button.stories'

const { Default } = composeStories(stories)

describe('Atom / Button', () => {
	it('Should Render', () => {
		render(<Default data-testid='test__button'>Button</Default>)
		const buttonElement: HTMLButtonElement =
			screen.getByTestId('test__button')
		expect(buttonElement).toBeDefined()
	})

	it('Click event', () => {
		const handleClick = jest.fn()
		render(
			<Default data-testid='test__button' onClick={handleClick}>
				Button
			</Default>
		)
		const buttonElement: HTMLButtonElement =
			screen.getByTestId('test__button')
		fireEvent.click(buttonElement)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
