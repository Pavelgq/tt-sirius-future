import { Droppable, Draggable } from "react-beautiful-dnd";
import { FC } from "react";
import styled from "@emotion/styled";
import { ScreenParamsI } from "../../constants/game";
import { GameItemType } from "../../types/types";
import { Coin } from "../Coin/Coin";

interface DragAreaProps {
  screenView: ScreenParamsI;
  values: GameItemType[];
}
const DragAreaStyles = styled.div`
  & ul {
    position: relative;

    display: flex;
    list-style: none;
  }

  & li {
  }
`;

export const DragArea: FC<DragAreaProps> = ({ values, screenView }) => {
  return (
    <DragAreaStyles>
      <Droppable droppableId={`start`}>
        {(dropProvided) => {
          return (
            <ul ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
              {values.length > 0 &&
                values.map((val, index) => (
                  <Draggable
                    key={val.id}
                    index={index}
                    draggableId={val.id.toString()}
                  >
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Coin path={val.coinPath} value={val.value} />
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
              {dropProvided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </DragAreaStyles>
  );
};
