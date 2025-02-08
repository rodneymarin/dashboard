import { useEffect, useState } from "react";

export enum ViewportBreakpoint {
  md = 768,
}

//Use the parameter function to evaluate a match with the current Viewport Width
export function useViewportWidthMatch(matchFunction: (value: number) => boolean) {
  const [width, setWidth] = useState<number>(0);

  function setValues() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setValues();
    window.addEventListener("resize", () => setValues());
    return () => {
      window.removeEventListener("resize", setValues);
    };
  }, []);

  const match: boolean = matchFunction(width);

  return match;
}
