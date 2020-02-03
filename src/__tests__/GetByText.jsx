// This line can be, and is in this project, included in `jest.config.js` rather than each file
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import GetByText from '../GetByText'

test('finds the submit button and checks text', () => {
  const { getByText } = render(<GetByText />)
  const submitButton = getByText(/submit/i)
  /* If we use the default Jest `.toBe` method like so: 
     `expect(submitButton.textContent).toBe('Submit Now!')`

    The error we could recieve would read:
    > `expect(received).toBe(expected) // Object.is equality`
      Expected: "Submit No!"
      Received: "Submit Now!"

    After importing extend-expect we can use this format:
    `expect(submitButton).toHaveTextContent('Submit No!')`
    for a better error message, like this:
    >  expect(element).toHaveTextContent()
      Expected element to have text content:
        Submit No!
      Received:
        Submit Now!
  */
  expect(submitButton).toHaveTextContent('Submit Now!')
})

test('finds the submit button with loading prop and checks text', () => {
  const { getByText } = render(<GetByText loading />)
  const submitButton = getByText(/loading/i)
  expect(submitButton).toHaveTextContent('Loading...')
})