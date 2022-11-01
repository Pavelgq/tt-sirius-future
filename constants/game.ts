
import bg1 from "../public/images/bg1.jpg";
import bg2 from "../public/images/bg2.jpg";
import bg3 from "../public/images/bg3.jpg";
import bg4 from "../public/images/bg4.jpg";
import drop1 from "../public/images/drop1.png";
import drop2 from "../public/images/drop2.png";
import drop3 from "../public/images/drop3.png";
import drop4 from "../public/images/drop4.png";

import coin11 from "../public/images/coins/1/coin1.svg";
import coin12 from "../public/images/coins/1/coin2.svg";
import coin13 from "../public/images/coins/1/coin3.svg";
import coin14 from "../public/images/coins/1/coin4.svg";
import coin15 from "../public/images/coins/1/coin5.svg";

import coin21 from "../public/images/coins/2/coin1.svg";
import coin22 from "../public/images/coins/2/coin2.svg";
import coin23 from "../public/images/coins/2/coin3.svg";
import coin24 from "../public/images/coins/2/coin4.svg";
import coin25 from "../public/images/coins/2/coin4.svg";

import coin31 from "../public/images/coins/3/coin1.svg";
import coin32 from "../public/images/coins/3/coin2.svg";

import coin41 from "../public/images/coins/4/coin1.svg";
import coin42 from "../public/images/coins/4/coin2.svg";
import coin43 from "../public/images/coins/4/coin3.svg";
import coin44 from "../public/images/coins/4/coin4.svg";
export interface ScreenParamsI {
  id: number;
  background: string;
  coins: string[];
  panel: string;
}

export const screenParams: ScreenParamsI[] = [
  {
    id: 1,
    background: bg1.src,
    coins: [coin11, coin12, coin13, coin14, coin15],
    panel: drop1.src,
  },
    {
    id: 2,
    background: bg2.src,
    coins: [coin21, coin22, coin23, coin24, coin25],
    panel: drop2.src,
  },
      {
    id: 3,
    background: bg3.src,
    coins: [coin31, coin32],
    panel: drop3.src,
  },
      {
    id: 4,
    background: bg4.src,
    coins: [coin41, coin42, coin43, coin44],
    panel: drop4.src,
  },
]

export const coordinates: {[key: string]: {x: number[], y: number[]}} = {
  2: {
    x: [-150, -150],
    y: [-100, 100]
  },
  3: {
    x: [-80, -180, -80],
    y: [-160, 0, 160]
  },
  4: {
    x: [-80, -180, -80, -180],
    y: [-210, -70, 70, 210]
  },
  5: {
    x: [-80, -180, -80, -180, -80],
    y: [-320, -160, 0,  160, 320]
  },
}