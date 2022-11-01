import { itemsValue } from "../constants/settings";


export type GameValueType = readonly (string | number)[]

export type ItemTypes = typeof itemsValue[number];

export interface GameItemType { value: string | number; id: number; coinPath: string}
