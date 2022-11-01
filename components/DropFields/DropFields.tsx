import styled from "@emotion/styled";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { FC, forwardRef, useEffect, useState } from "react";
import { Coin } from "../Coin/Coin";
import { DropItem } from "../DropItem/DropItem";
import { DropFieldsProps } from "./DropFields.props";

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

const DropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DropFields = forwardRef<HTMLDivElement, DropFieldsProps>(
  ({ count, data }, ref) => {
    return (
      <Container ref={ref} count={count}>
        <DropContainer>
          {data.length > 0 &&
            data.map((item, index) => (
              <Droppable key={item?.id} droppableId={index.toString()}>
                {(provided) => (
                  <DropItem
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {item.value !== "" && (
                      <Coin path={item.coinPath} value={item.value} />
                    )}
                    {provided.placeholder}
                  </DropItem>
                )}
              </Droppable>
            ))}
        </DropContainer>
      </Container>
    );
  }
);
DropFields.displayName = "DropFields";
