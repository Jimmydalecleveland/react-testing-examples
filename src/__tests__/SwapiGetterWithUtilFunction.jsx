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
  // this is for future tests using our mocks
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render with fetched data', async () => {
    const { getByText } = render(<SwapiGetter></SwapiGetter>)

    // shows loading while waiting for fetch
    getByText(/loading/i)

    expect(mockSwapiGetter).toHaveBeenCalledTimes(1)
    await wait(() => expect(getByText('Jimmy Jedi')))
  })
})
