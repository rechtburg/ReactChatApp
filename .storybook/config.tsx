import { configure } from "@storybook/react";

configure(() => {
  const req = require.context("../src/components", true, /\.stories\.tsx?$/);

  req.keys().forEach(req);
}, module);
