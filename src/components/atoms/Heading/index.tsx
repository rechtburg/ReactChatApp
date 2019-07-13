import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  level: HeadingLevel;
  color?: string;
  selectable?: boolean;
}

const Heading: React.FC<Props> = ({ level = HeadingLevel.h1 }) => {
  const Component = Root.withComponent(getTagName(level));

  return <Component />;
};

export enum HeadingLevel {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  none = "none",
}

const Root = styled.span<{
  color?: string;
  selectable?: boolean;
}>`
  margin: 0;
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  user-select: ${({ selectable }) => (selectable ? "auto" : "none")};
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`;

function getTagName(headingLevel: HeadingLevel): keyof JSX.IntrinsicElements {
  switch (headingLevel) {
    case HeadingLevel.h1:
    case HeadingLevel.h2:
    case HeadingLevel.h3:
    case HeadingLevel.h4:
    case HeadingLevel.h5:
    case HeadingLevel.h6:
      return headingLevel as keyof JSX.IntrinsicElements;
    default:
      return "span";
  }
}

export default Heading;
