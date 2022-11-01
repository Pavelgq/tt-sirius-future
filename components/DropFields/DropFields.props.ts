import { DetailedHTMLProps, HTMLAttributes } from "react";
import { GameItemType, GameValueType } from "../../types/types";

export interface DropFieldsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number;
  data: GameItemType[];
}