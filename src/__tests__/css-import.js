import cssImport from '../css-import'

test('imports files with css but mocks the css', () => {
  expect(cssImport()).toBe(true)
})
