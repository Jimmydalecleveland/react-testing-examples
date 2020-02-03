import React from "react";
import { render } from "@testing-library/react";
import InlineSnapshotComponent from "../inlineSnapshot";

test("renders with an inline snapshot", () => {
  const { container } = render(<InlineSnapshotComponent />);
  // requires `prettier` npm package to be installed, which jest picks up automatically
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <h1>
          Headline goes here
        </h1>
        <p
          class="large-paragraph"
          data-testid="para1"
          id="para1"
        >
          Inline snapshots also bring over html attributes
        </p>
      </div>
    </div>
  `);
});
