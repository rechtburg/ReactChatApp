import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  color: ButtonColor;
  className?: string;
  disable?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ color = ButtonColor.primary, disable, onClick, children }) => {
  return (
    <Root onClick={disable ? undefined : onClick} color={color}>
      {children}
    </Root>
  );
};

export enum ButtonColor {
  primary = "PRYMARY",
  secondary = "SECONDARY",
}

const Root = styled.span<{ color: ButtonColor }>`
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ color }) => BACKGROUND_COLORS.get(color)};
`;

const BACKGROUND_COLORS = new Map<ButtonColor, string>([
  [ButtonColor.primary, "#1e90ff"],
  [ButtonColor.secondary, "#f1f2f6"],
]);

export default Button;
