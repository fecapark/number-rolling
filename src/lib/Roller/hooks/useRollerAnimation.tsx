import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { useRef } from "react";
import {
  specialSlideAnimation,
  tokenSlideAnimation,
  valueWidthAnimation,
} from "../animations/Roller.ani";
import { useFontFaceObserver } from "./useFontFaceObserver";

interface RollerAnimationProps {
  value: number;
  rollDuration: number;
  shiftDuration: number;
  staggering: boolean;
  diff: boolean;
  showAfterFontNameLoaded?: string;
  rollWay: "up" | "down";
}

gsap.registerPlugin(useGSAP);

export function useRollerAnimation(
  {
    value,
    rollDuration,
    shiftDuration,
    staggering,
    diff,
    rollWay,
    showAfterFontNameLoaded,
  }: RollerAnimationProps,
  dependencies: unknown[] = []
) {
  const isFontLoaded = useFontFaceObserver(showAfterFontNameLoaded);
  const prevValue = useRef(0);
  const prevTokenAmount = useRef(0);

  const getValueDiffIndexes = () => {
    const diffIndexes = [];
    const prevString = prevValue.current.toString().replace(".", "");
    const curString = value.toString().replace(".", "");

    for (let i = 0; i < Math.min(prevString.length, curString.length); i++) {
      if (prevString[i] !== curString[i]) {
        diffIndexes.push(i);
      }
    }

    if (curString.length > prevString.length) {
      for (let i = prevString.length; i < curString.length; i++) {
        diffIndexes.push(i);
      }
    }

    return diffIndexes;
  };

  useGSAP(
    () => {
      if (!isFontLoaded) return;

      const currentTokenAmount = value.toLocaleString().length;
      const valueLengthChanged = prevTokenAmount.current !== currentTokenAmount;

      tokenSlideAnimation(
        rollDuration,
        staggering,
        rollWay,
        diff ? getValueDiffIndexes() : null
      );
      if (valueLengthChanged) {
        specialSlideAnimation(
          rollDuration,
          currentTokenAmount > prevTokenAmount.current
        );
      }

      prevTokenAmount.current = currentTokenAmount;
      prevValue.current = value;
    },
    {
      dependencies: [
        value,
        rollDuration,
        rollWay,
        staggering,
        isFontLoaded,
        ...dependencies,
      ],
      revertOnUpdate: true,
    }
  );

  useGSAP(
    () => {
      if (!isFontLoaded) return;

      valueWidthAnimation(value, shiftDuration);
    },
    {
      dependencies: [value, shiftDuration, isFontLoaded, ...dependencies],
      revertOnUpdate: false,
    }
  );
}
