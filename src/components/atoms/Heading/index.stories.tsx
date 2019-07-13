import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Heading, { HeadingLevel } from "./index";

storiesOf("Atoms/Heading", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const headingLevel = select(
      "headingLevel",
      {
        h1: HeadingLevel.h1,
        h2: HeadingLevel.h2,
        h3: HeadingLevel.h3,
        h4: HeadingLevel.h4,
        h5: HeadingLevel.h5,
        h6: HeadingLevel.h6,
      },
      HeadingLevel.h1
    );

    return (
      <Heading level={headingLevel} selectable={boolean("selectable", false)} color="#000">
        {text("HeadingText", "Head")}
      </Heading>
    );
  });
