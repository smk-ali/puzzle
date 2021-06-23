import { Appearance, useColorScheme } from "react-native";
import tinycolor from "tinycolor2";

const primaryColor = "#171520";
// const splashColor = "#84818D";
const splashColor = "#000000";

const palette = new Array(10).fill(primaryColor).map((color, index) =>
  tinycolor(color)
    .brighten(index * 10)
    .toString()
);
// const lightColors = palette;
// const darkColors = palette.slice().reverse();

const lightColors = [
  "#171520", // 0:
  "#FFFFFF", // 1: // active cell border color
  "#4a4853", // 2:
  "#00B073", // 3: tile success background
  "#7d7b86", // 4:
  "#5A5A5A", // 5:
  "#b0aeb9", // 6:
  "#979797", // 7: tile border
  "#e3e1ec", // 8:
  "#1b1b1b", // 9: background color
];

export const colors = {
  primary: lightColors,
  splash: splashColor,
};

export const useColors = function () {
  const colorScheme = useColorScheme();
  return {
    primary: lightColors,
    splash: splashColor,
  };
};

console.log(colors);
