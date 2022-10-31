import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { GameValueType } from "../../types/types";

interface CounProps {
  path: string;
  value: GameValueType[number];
}

const Container = styled.div`
  position: relative;

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: ${({ theme }) => theme.fonts.calibry};
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 68px;
    letter-spacing: 2px;

    color: ${({ theme }) => theme.colors.fontLight};
    -webkit-text-stroke: 2px black;
  }
`;

export const Coin: FC<CounProps> = ({ path, value }) => {
  return (
    <Container>
      <Image src={path} alt={"Элемент для перемещения"} />
      <span>{value}</span>
    </Container>
  );
};
