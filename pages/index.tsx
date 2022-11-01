import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { InputRange } from "../components/InputRange/InputRange";

import bg from "../public/images/background1.png";
import { css as simpleCss } from "@emotion/css";
import { Button } from "../components/Button/Button";
import { countItems, itemsValue } from "../constants/settings";
import { centerContainer, rowContainer } from "../styles/mixins";
import Link from "next/link";

const Background = styled.div`
  ${centerContainer};
  height: 100vh;
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Main = styled.main`
  width: 699px;
  height: 660px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 40px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(0deg, rgba(16, 31, 50, 1) 0%, rgba(127, 117, 240, 1) 100%)
      border-box;
  border-radius: 40px;
  border: 20px solid transparent;
`;

const GroupTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.hilvetica};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.colors.fontDark};
`;

const ButtonContainer = styled.div`
  margin-bottom: 95px;
  ${rowContainer};
  & button {
    margin-right: 36px;
  }
  & :last-child {
    margin-right: 0;
  }
`;

export default function Home() {
  const [count, setCount] = useState(0);
  const [valueIndex, setValueIndex] = useState(0);
  const [direction, setDirection] = useState<"asc" | "desc">("desc");
  return (
    <Background>
      <Head>
        <title>Конфигурация игры</title>
        <meta name="description" content="Тестовое задание Sirius Future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <GroupTitle>Кол-во предметов</GroupTitle>
        <InputRange
          className={simpleCss`
            margin-bottom: 54px;
          `}
          width={366}
          count={4}
          step={1}
          value={count}
          labels={countItems}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCount(Number(e.target.value))
          }
        />
        <GroupTitle>Значения</GroupTitle>
        <InputRange
          className={simpleCss`
            margin-bottom: 75px;
          `}
          width={531}
          count={6}
          step={1}
          value={valueIndex}
          labels={itemsValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValueIndex(Number(e.target.value))
          }
        />
        <ButtonContainer>
          <Button
            isActive={direction === "asc"}
            onClick={() => setDirection("asc")}
          >
            По возрастанию
          </Button>
          <Button
            isActive={direction === "desc"}
            onClick={() => setDirection("desc")}
          >
            По убыванию
          </Button>
        </ButtonContainer>
        <Link
          className={simpleCss`
            text-decoration: none;
          `}
          href={`/game?items=${count}&value=${valueIndex}&direction=${direction}`}
          passHref
        >
          <Button preset="start">Начать</Button>
        </Link>
      </Main>
    </Background>
  );
}
