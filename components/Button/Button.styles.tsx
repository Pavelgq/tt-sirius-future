import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { font } from "../../styles/mixins";
import { baseTheme } from "../../styles/theme";
import { ButtonProps } from "./ButtonProps";

interface ButtonStyleProps extends ButtonProps {}

const presetMain = css`
  font-family: ${baseTheme.fonts.calibry};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  color: ${baseTheme.colors.fontDark};

  padding: 2px 24px;

  background-color: ${baseTheme.colors.primary};
`;

const presetStart = css`
  font-family: ${baseTheme.fonts.hilvetica};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  color: ${baseTheme.colors.fontLight};

  padding: 2px 24px;

  background-color: ${baseTheme.colors.lightGreen};
`;
const presetRepeat = css`
  font-family: ${baseTheme.fonts.circeAlt};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;

  color: ${baseTheme.colors.fontLight};

  width: 263px;
  height: 68px;

  background-color: ${baseTheme.colors.lightGreen};
`;

export const ButtonStyled = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;

  border-radius: 20px;
  ${({ preset }) => {
    switch (preset) {
      case "main":
        return presetMain;
      case "start":
        return presetStart;
      case "repeat":
        return presetRepeat;
      default:
        return;
    }
  }}
  border: none;
  cursor: pointer;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.56)};
`;
