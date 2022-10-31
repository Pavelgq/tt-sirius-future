import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { Coin } from "../Coin/Coin";
import { DropItem } from "../DropItem/DropItem";
import { DropFieldsProps } from "./DropFields.props";

import coin from "../../public/images/coins/3/coin3-1.svg";

interface ContainerProps {
  count: number;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  width: calc(135px * ${({ count }) => count});
  height: 131px;
  left: calc(50% - calc(135px * ${({ count }) => count}));
  top: calc(50% - 135px / 2);

  transform: translateX(50%);

  display: flex;
  justify-content: space-between;

  & img {
    width: 131px;
    height: 131px;
  }
`;

export const DropFields: FC<DropFieldsProps> = ({
  count,
  firstValue,
  direction = "desc",
}) => {
  return (
    <Container count={count}>
      {Array.from({ length: count }, (_, index) => (
        <DropItem key={index}>
          {direction === "asc" && index === 0 ? (
            <Coin path={coin} value={firstValue} />
          ) : (
            direction === "desc" &&
            index === count - 1 && <Coin path={coin} value={firstValue} />
          )}
        </DropItem>
      ))}
    </Container>
  );
};
