import React from 'react'
import { render, wait } from '@testing-library/react'
import mockAxios from 'axios'

jest.mock('axios')
mockAxios.get.mockResolvedValue({ data: { name: 'Jimmy Jedi' } })

import SwapiGetter from '../SwapiGetter'

describe('SwapiGetter', () => {
  // this is for future tests using our mocks
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render with fetched data', async () => {
    const { getByText } = render(<SwapiGetter></SwapiGetter>)

    // shows loading while waiting for fetch
    getByText(/loading/i)

    await wait(() => expect(getByText('Jimmy Jedi')))
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
