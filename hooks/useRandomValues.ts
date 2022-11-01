import React, { useState, useCallback, useEffect } from "react";
import { screenParams, ScreenParamsI } from "../constants/game";
import { GameItemType, ItemTypes } from "../types/types";
import { randomFrom } from "../utils/random";



export function getRandomItemsValues(type: ItemTypes, count: number = 2, direction: 'asc' | 'desc') : {array: GameItemType[], result: GameItemType[], screenValues: ScreenParamsI, answer: (string | number)[] } {
  const screenValues = screenParams[Math.floor(Math.random() * 4)]
  const result = new Set<string | number>();
  const f = (a: string | number, b: string | number) => {
    return direction === 'asc' ?  a < b ?  a : b :  a > b ? a : b
  }
  let firstValue;
  if (type === "A") {
    const chars = 'АБВГДЕËЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    firstValue = direction === 'asc' ? "Я" : "А";
    while (result.size < count) {
        const position = Math.floor ( Math.random() * chars.length );
        firstValue = f(firstValue, chars[position]).toString();
        result.add(chars.substring(position, position + 1));
    }
  } else {
    firstValue = direction === 'asc' ? Infinity : -Infinity;
    while (result.size < count) {
        const position = Math.floor ( Math.random() * Number(type) );
       
        firstValue = Number(f(firstValue, position));
        result.add(position);
    }
  }
  const answer = Array.from(result);
  result.delete(firstValue);
  console.log(count)
  let temp: GameItemType[] = [];
  if (count) {
    for (var i = 0; i < count; i++)
        temp.push({id: i+count, value: '', coinPath: ''});
    console.log(temp)
    temp[direction === 'asc' ? 0 : temp.length - 1].value = firstValue;
    temp[direction === 'asc' ? 0 : temp.length - 1].coinPath = randomFrom(screenValues.coins);
   }
  return {
    array: Array.from(result).map((el, index) => {
      const coinPath = randomFrom(screenValues.coins)
      return {
        value: el, id: index, coinPath: coinPath
      }
    }), 
    result: temp,
    screenValues,
    answer
  };
}

export const useRandomValues = (value: ItemTypes, count: number, direction: 'asc' | 'desc') => {
  const [values, setValues] = useState<GameItemType[]>([]);
  const [result, setResult] = useState<GameItemType[]>([]);
  const [screenView, setScreenView] = useState<ScreenParamsI>(screenParams[0]);
  const [answer, setAnswer] = useState<(string | number)[]>([]);

  const getValues = useCallback(() => {
    return getRandomItemsValues(
      value,
      count,
      direction
    );
  }, [value, count, direction]);

  useEffect(() => {
    const temp = getValues()
    setValues(temp.array);
    setResult(temp.result)
    setScreenView(temp.screenValues)
    setAnswer(temp.answer.sort( (a, b) => {
      if (typeof b === "number" && typeof a === "number") {
        return a - b;
      } else {
        return a > b ? 1 : -1;
      }
    }
    ))
  }, [getValues]);

  return {values, setValues, result, setResult, screenView, answer }
}
