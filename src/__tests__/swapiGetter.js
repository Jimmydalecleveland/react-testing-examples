import swapiGetter from '../swapiGetter'

describe('swapiGetter', () => {
  test('should return the first entry from the api', async () => {
    const result = await swapiGetter()
    expect(result.name).toBe('Luke Skywalker')
  }) 
})