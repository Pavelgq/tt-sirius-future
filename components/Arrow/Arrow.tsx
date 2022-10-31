import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

import arrow from "../../public/images/arrow.svg";

interface ArrowProps {
  direction: "asc" | "desc";
}

const Container = styled.div<ArrowProps>`
  position: absolute;
  width: 358px;
  bottom: 260px;
  ${({ direction }) =>
    direction === "asc"
      ? "left: calc(50% - 445px)"
      : "right: calc(50% - 445px)"};
  & img {
    transform: scale(
      ${({ direction }) => (direction === "asc" ? "1, 1" : "-1, 1")}
    );
  }

  & span {
    position: absolute;
    top: 50%;
    ${({ direction }) => (direction === "asc" ? "left: 0" : "right: 0")};

    transform: translateY(-50%);

    font-family: ${({ theme }) => theme.fonts.calibry};
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: ${({ theme }) => theme.colors.fontLight};
    -webkit-text-stroke: 1px black;
  }
`;

export const Arrow: FC<ArrowProps> = ({ direction }) => {
  return (
    <Container direction={direction}>
      <Image src={arrow} alt={"Стрелка"} />
      <span>{direction === "asc" ? "По возрастанию" : "По убыванию"}</span>
    </Container>
  );
};
