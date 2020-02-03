## Scripts
### `test`
The standard test suite script to run. This includes `jest-dom` which allows node and browser emulation such as the `window` object.

### `test-node`
This sets the environment to node for jest so that `jest-dom` is not loaded, which takes extra time to setup each test run.