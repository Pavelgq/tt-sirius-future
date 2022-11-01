import styled from "@emotion/styled";
import { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from "react";

interface DropElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const DropElement = styled.div<DropElementProps>`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`;

export const DropItem = forwardRef<HTMLDivElement, DropElementProps>(
  ({ children }, ref) => {
    return <DropElement ref={ref}>{children}</DropElement>;
  }
);

DropItem.displayName = "DropItem";
