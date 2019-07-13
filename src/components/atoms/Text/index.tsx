import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  color?: string;
  alignment?: TextAlignment;
  maxLines?: number;
  tag: TextTag;
  children?: string;
}

const Text: React.FC<Props> = ({ color, tag, alignment, maxLines = 0 }) => {
  const Component = Root.withComponent(getTag(tag));

  const _alignment = merge(alignment, TextAlignment.default);
  const _color = merge(color, "#000");

  return <Component color={_color} alignment={_alignment} maxLines={maxLines} />;
};

export enum TextTag {
  span = "span",
  p = "p",
}

export enum TextAlignment {
  default = "inherit",
  start = "start",
  center = "center",
  end = "end",
}

const Root = styled.span<{
  color: string;
  alignment: string;
  maxLines: number;
}>`
  ${({ maxLines }) =>
    maxLines === 0
      ? ""
      : `
    display: box;
    display: -webkit-box;
    display: -moz-box;
    box-orient: vertical;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    line-clamp: ${maxLines};
    -webkit-line-clamp: ${maxLines};
    overflow-y: hidden;
  `}
`;

function merge<T>(valueFromProps: T | undefined, defaultValue: T): T {
  if (valueFromProps !== undefined) {
    return valueFromProps;
  }

  return defaultValue;
}

function getTag(tag: TextTag): keyof JSX.IntrinsicElements {
  switch (tag) {
    case TextTag.span:
    case TextTag.p:
      return tag as keyof JSX.IntrinsicElements;
    default:
      return "span";
  }
}
export default Text;
