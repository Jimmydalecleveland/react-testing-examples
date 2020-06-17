import React from 'react'
import { render, wait } from '@testing-library/react'
import mockAxios from 'axios'

jest.mock('axios')
mockAxios.get.mockResolvedValue({ data: { name: 'Jimmy Jedi' } })

import SwapiGetter from '../SwapiGetter'

describe('SwapiGetter', () => {
  test.skip('should render loading while waiting for api call', async () => {
    const { getByText } = render(<SwapiGetter></SwapiGetter>)

    getByText(/loading/i)
  })
  test('should render with fetched data', async () => {
    const { getByText } = render(<SwapiGetter></SwapiGetter>)

    await wait(() => expect(getByText('Jimmy Jedi')))
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
