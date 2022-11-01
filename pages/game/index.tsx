import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRandomValues } from "../../hooks/useRandomValues";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { countItems, itemsValue } from "../../constants/settings";
import styled from "@emotion/styled";
import Image from "next/image";
import { DropFields } from "../../components/DropFields/DropFields";
import { Arrow } from "../../components/Arrow/Arrow";
import { DragArea } from "../../components/DragArea/DragArea";
import { WinnerModal } from "../../components/WinnerModal/WinnerModal";
import Head from "next/head";

interface BackgroundContainerProps {
  bg: string;
}
const BackgroundContainer = styled.div<BackgroundContainerProps>`
  height: 100vh;
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;

const DropArea = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Game = () => {
  const { query } = useRouter();
  const { values, setValues, result, setResult, screenView, answer } =
    useRandomValues(
      itemsValue[Number(query.value)],
      countItems[Number(query.items)] + 1,
      query.direction as "desc" | "asc"
    );

  const [win, setWin] = useState(false);

  const onDragEnd = (dropResult: DropResult) => {
    if (!dropResult.destination) {
      return;
    }
    const resultCopy = [...result];
    const dir = query.direction as "desc" | "asc";
    const currentIndex = dropResult.source.index;
    const targetIndex = Number(dropResult.destination.droppableId);
    let isAnswer = answer[targetIndex] === values[currentIndex].value;

    if (isAnswer) {
      const newValues = values.slice();
      newValues.splice(currentIndex, 1);
      setValues(newValues);
      resultCopy[targetIndex] = values[currentIndex];
      setResult(resultCopy);
      if (newValues.length === 0) {
        setWin(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Игра</title>
        <meta name="description" content="Тестовое задание Sirius Future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DragDropContext onDragEnd={onDragEnd}>
        <BackgroundContainer bg={screenView.background}>
          <DragArea values={values} screenView={screenView} />

          <Arrow direction={query.direction as "asc" | "desc"} />
          <DropArea>
            <Image
              src={screenView.panel}
              width={886}
              height={222}
              alt={"Подложка"}
            />

            <DropFields
              count={countItems[Number(query.items)] + 1}
              data={result}
            />
          </DropArea>
        </BackgroundContainer>
      </DragDropContext>
      {win && <WinnerModal />}
    </>
  );
};
export default Game;
