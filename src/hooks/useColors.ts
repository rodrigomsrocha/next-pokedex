import { useState } from "react";

export const useColors = (type: string) => {
  const [colors, setColors] = useState({});

  switch (type) {
    case "grass":
      setColors({ bgAndFontColors: "#fafaa0", bgInfo: "#1A6E18" });
    case "fire":
      setColors({ bgAndFontColors: "#FAA340", bgInfo: "#8C0E0A" });
    case "water":
      setColors({ bgAndFontColors: "#78D1EC", bgInfo: "#2858B1" });
    case "bug":
      setColors({ bgAndFontColors: "#4adc54", bgInfo: "#5f0387" });
    default:
      break;
  }
  return colors;
};
