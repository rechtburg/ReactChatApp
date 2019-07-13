import { action } from "@storybook/addon-actions";
import { boolean, radios, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Button, { ButtonColor } from "./index";

storiesOf("Atoms/Button", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button
      color={radios("color", {
        primary: ButtonColor.primary,
        secondary: ButtonColor.secondary,
      })}
      disable={boolean("disable", false)}
      onClick={action("on Click")}
    >
      {text("text", "Click Me")}
    </Button>
  ));
