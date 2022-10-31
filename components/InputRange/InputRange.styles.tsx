import styled from "@emotion/styled";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { baseTheme } from "../../styles/theme";

const rangeThumb = `
  width: ${baseTheme.sizes.rangeThumb}px;
  height: ${baseTheme.sizes.rangeThumb}px;
  margin: -1px 0;
  border-radius: 50%;
  background-color: ${baseTheme.colors.secondary};
  cursor: pointer;
  border: 0 !important;
`;

const rangeTrack = `
  width: 100%;
  height: 21px;
  cursor: pointer;
  background-color: ${baseTheme.colors.primary};
  border-radius: 10px;
`;

interface RangeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
}

interface ListProps {
  width: number;
  count: number;
}

export const Range = styled.div<RangeProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ width }) => width}px;
  height: 51px;
`;

export const Input = styled.input`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 21px;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // needed again for Chrome & Safari
    ${rangeThumb}
  }
  &::-moz-range-thumb {
    ${rangeThumb};
  }

  &::-ms-thumb {
    ${rangeThumb};
  }

  &::-webkit-slider-runnable-track {
    ${rangeTrack};
  }

  &::-moz-range-track {
    ${rangeTrack};
  }

  &::-ms-track {
    ${rangeTrack};
  }

  &:focus {
    background: none;
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`;

export const RangeLabels = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RangeItems = styled.li<ListProps>`
  position: absolute;
  width: ${(props) => props.width / props.count}px;
  top: 0;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.fontDark};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.calibry};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;
