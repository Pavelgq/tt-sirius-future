import React, { useState, useCallback, useEffect } from "react";
import { countItems, itemsValue } from "../constants/settings"
import { GameValueType, ItemTypes } from "../types/types";


export function getRandomItemsValues(type: ItemTypes, count: number, ) : GameValueType {
  const result = new Set<string | number>();
  if (type === "A") {
    const chars = 'АБВГДЕËЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    while (result.size < count) {
        const position = Math.floor ( Math.random() * chars.length );
        result.add(chars.substring(position, position + 1));
    }
  } else {
    while (result.size < count) {
        const position = Math.floor ( Math.random() * Number(type) );
        result.add(position);
    }
  }
  return Array.from(result);
}

export const useRandomValues = (value: ItemTypes, count: number, direction: 'asc' | 'desc') => {
  const [values, setValues] = useState<GameValueType>([]);
  const [firstValue, setFirstValue] = useState<string | number>('');

  const getValues = useCallback(() => {
    return getRandomItemsValues(
      value,
      count
    );
  }, [value, count]);

  useEffect(() => {
    const temp = getValues() as (string | number)[]
    setValues(temp);
    setFirstValue(temp.sort((a, b) => {
      if ( typeof a === 'number' && typeof b === 'number') {
        return direction === 'asc' ? (a - b) : (b - a);
      } else {
        return direction === 'asc' ? (a > b ? 1 : -1) : (a < b ? 1 : -1);
      }
      
    })[0])
  }, [direction, getValues]);

  return {values, firstValue}
}
