import React from "react";
import { render } from "@testing-library/react";
import EmotionComponent from "../EmotionComponent";

test("", () => {
  const { container } = render(<EmotionComponent />);
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      color: hotpink;
    }

    .emotion-1 {
      color: 'hotpink';
    }

    .emotion-2 {
      background-color: hotpink;
      color: white;
    }

    <div>
      <div>
        <p
          class="emotion-0"
        />
        <p
          class="emotion-1"
        />
        <button
          class="emotion-2"
        >
          Some Text
        </button>
      </div>
    </div>
  `);
});
