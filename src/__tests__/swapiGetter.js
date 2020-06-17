import swapiGetter from '../swapiGetter'
import mockAxios from 'axios'

jest.mock('axios')
mockAxios.get.mockResolvedValue({ data: { name: 'Jimmy Jedi' } })

describe('swapiGetter', () => {
  test('should return the first entry from the api', async () => {
    const result = await swapiGetter(1)
    expect(result).toBe('Jimmy Jedi')
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
