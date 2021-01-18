## Scripts

### `test`

The standard test suite script to run. This includes `jest-dom` which allows node and browser emulation such as the `window` object.
_Note: you can use `--` to append any command to a npm script. e.g. `npm t -- --watch` will run `jest --watch`. This is not needed for yarn, you can simply run `yarn test --watch`_

### `test-node`

This sets the environment to node for jest so that `jest-dom` is not loaded, which takes extra time to setup each test run.
