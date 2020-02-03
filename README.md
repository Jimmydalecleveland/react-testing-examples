## Scripts
### `test`
The standard test suite script to run. This includes `jest-dom` which allows node and browser emulation such as the `window` object.
*Note: you can use `--` to append any command to a npm script. e.g. `npm t -- --watch` will run `jest --watch`.*

### `test-node`
This sets the environment to node for jest so that `jest-dom` is not loaded, which takes extra time to setup each test run.