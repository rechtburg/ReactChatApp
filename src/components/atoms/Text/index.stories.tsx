import { select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Text, { TextAlignment, TextTag } from "./index";

storiesOf("Atoms/Text", module)
  .addDecorator(withKnobs)
  .addDecorator("default", () => {
    const textTag = select(
      "textTag",
      {
        p: TextTag.p,
        span: TextTag.span,
      },
      TextTag.p
    );

    const _alignment = select(
      "alignment",
      {
        center: TextAlignment.center,
        default: TextAlignment.default,
        end: TextAlignment.end,
        start: TextAlignment.start,
      },
      TextAlignment.default
    );

    return (
      <Text tag={textTag} alignment={_alignment}>
        {text("text", "Hello World!!")}
      </Text>
    );
  });
