import React, { useState, useCallback, useEffect } from "react";
import { countItems, itemsValue } from "../constants/settings"
import { GameValueType, ItemTypes } from "../types/types";


export function getRandomItemsValues(type: ItemTypes, count: number) : GameValueType {
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

export const useRandomValues = (value: ItemTypes, count: number) => {
  const [values, setValues] = useState<GameValueType>([]);

  const getValues = useCallback(() => {
    console.log(value, count)
    return getRandomItemsValues(
      value,
      count
    );
  }, [value, count]);

  useEffect(() => {
    console.log('1')
    setValues(() => {
      const v = getValues();
      console.log(v)
      return v
    } )
    console.log(values)
  }, [getValues]);

  return {values}
}
