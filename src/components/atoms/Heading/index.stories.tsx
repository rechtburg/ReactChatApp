import { boolean, radios, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Heading, { HeadingLevel } from "./index";

storiesOf("Atoms/Heading", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Heading
      level={radios("level", {
        h1: HeadingLevel.h1,
        h2: HeadingLevel.h2,
        h3: HeadingLevel.h3,
        h4: HeadingLevel.h4,
        h5: HeadingLevel.h5,
        h6: HeadingLevel.h6,
      })}
      selectable={boolean("selectable", false)}
    >
      {text("HeadingText", "Head")}
    </Heading>
  ));
