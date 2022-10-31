import { SerializedStyles } from "@emotion/react";
import { ChangeEvent } from "react";
import { GameValueType } from "../../types/types";


export interface InputRangeProps {
  width: number;
  count: number;
  step: number;
  value: number;

   labels: GameValueType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}