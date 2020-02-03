// Anytime this file is changed, jest must be restarted if in --watch mode
module.exports = {
  // testEnvironment: 'jest-environment-node',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/css-mock')
  },
  // used for CSS-in-JS to render css rather than hashed className
  // that invalidates a snapshot each time css is changed
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion']
}