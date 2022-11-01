import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { columnContainer } from "../../styles/mixins";
import { Button } from "../Button/Button";

import starIcon from "../../public/images/star.svg";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${columnContainer};
  align-items: center;
  padding: 23px;
  width: 661px;
  height: 520px;

  background: radial-gradient(
        384.16% 384.16% at 50% 50%,
        #ffffff 12.29%,
        #aa92d2 21.15%
      )
      padding-box,
    linear-gradient(0deg, #8d67df00 0%, #67df89 100%) border-box;
  border-radius: 40px;
  border: 20px solid transparent;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

const DecorateWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  & img:nth-of-type(1) {
    position: absolute;
    top: -90px;
    left: -100px;
    transform: scale(0.65);
  }
  & img:nth-of-type(2) {
    position: absolute;
    bottom: -50px;
    left: -100px;
  }
  & img:nth-of-type(3) {
    position: absolute;
    top: 100px;
    right: -100px;
  }
  & img:nth-of-type(4) {
    position: absolute;
    bottom: -100px;
    right: -120px;
    transform: scale(0.5);
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.circeAlt};
  font-style: normal;
  font-weight: 400;
  font-size: 128px;
  line-height: 163px;
  display: flex;
  align-items: center;

  margin-bottom: 22px;
  background: linear-gradient(180deg, #fff9d8 8.65%, #ffe44f 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.circe};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #5f40a1;
  margin-bottom: 73px;
`;

export const WinnerModal = () => {
  return (
    <Container>
      <Title>Победа!</Title>
      <Subtitle>Молодец! Ты успешно справился с заданием!</Subtitle>
      <Link
        href="/"
        className={css`
          text-decoration: none;
          z-index: 2;
        `}
      >
        <Button preset="repeat" isActive={true}>
          Заново
        </Button>
      </Link>
      <DecorateWrapper>
        <Image src={starIcon} alt="Звезда" />
        <Image src={starIcon} alt="Звезда" />
        <Image src={starIcon} alt="Звезда" />
        <Image src={starIcon} alt="Звезда" />
      </DecorateWrapper>
    </Container>
  );
};
