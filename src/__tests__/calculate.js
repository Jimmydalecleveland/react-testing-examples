import calculate from '../calculate'

test('calculate runs', () => {
  expect(calculate(1, 2)).toBe(3)
})