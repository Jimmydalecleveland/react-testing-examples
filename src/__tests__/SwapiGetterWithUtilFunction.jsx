import React from 'react'
import { render, wait } from '@testing-library/react'
import mockSwapiGetter from '../swapiGetter'
import SwapiGetter from '../SwapiGetterWithUtilFunction'

jest.mock('../swapiGetter', () =>
  jest.fn().mockResolvedValue({ data: { name: 'Jimmy Jedi' } })
)
// alternative
// jest.mock('../swapiGetter', () => ({
//   __esModule: true,
//   default: jest.fn().mockResolvedValue({ data: { name: 'Jimmy Jedi' } })
// }))

describe('SwapiGetter', () => {
  test.skip('should render loading while waiting for api call', async () => {
    const { getByText } = render(<SwapiGetter></SwapiGetter>)

    getByText(/loading/i)
  })
  test('should render with fetched data', async () => {
    const { getByText } = render(<SwapiGetter></SwapiGetter>)

    expect(mockSwapiGetter).toHaveBeenCalledTimes(1)
    await wait(() => expect(getByText('Jimmy Jedi')))
  })
})
