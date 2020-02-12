import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'

import Form from '../Form'

describe('Form', () => {
  test('should render', async () => {
    const mockSubmit = jest.fn()
    const { container, getByText, getByLabelText } = render(
      <Form subby={mockSubmit}></Form>
    )

    expect(container).toMatchSnapshot()
    const submitButton = getByText(/submit/i)
    const nameField = getByLabelText(/full name/i)
    expect(nameField).toBeRequired()
    fireEvent.click(submitButton)
    await wait(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
