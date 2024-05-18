import styles from "./Roller.module.css";
import { useEffect } from "react";
import { useRollerTokens } from "./hooks/useRollerTokens";
import { useRollerAnimation } from "./hooks/useRollerAnimation";

interface RollerProps {
  value: number;
  suffix?: string;
  suffixPosition?: "front" | "back";
  align?: "left" | "center" | "right";
  fontSize?: number;
  rollDuration?: number;
  shiftDuration?: number;
  staggering?: boolean;
  diff?: boolean;
  rollWay?: "up" | "down";
  showAfterFontNameLoaded?: string;
}

export default function Roller({
  value,
  suffix = "",
  suffixPosition = "back",
  align = "center",
  fontSize = 48,
  rollDuration = 0.6,
  shiftDuration = 0.45,
  staggering = false,
  diff = false,
  rollWay = "down",
  showAfterFontNameLoaded,
}: RollerProps) {
  const tokens = useRollerTokens(value, rollWay);

  useRollerAnimation(
    {
      value,
      rollDuration,
      shiftDuration,
      staggering,
      rollWay,
      showAfterFontNameLoaded,
      diff,
    },
    [fontSize]
  );

  useEffect(() => {
    const token = document.querySelector(".token-roller > .token");
    if (!token) return;

    const { height } = token.getBoundingClientRect();
    const values = document.querySelector("div.values") as HTMLDivElement;
    values.style.height = `${height}px`;
  }, [value, fontSize]);

  return (
    <div
      className={`${styles.roller} ${styles[align]}`}
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {suffix != "" && suffixPosition === "front" && (
        <div className={styles.suffix}>{suffix}</div>
      )}
      <div className={`${styles.values} values`}>
        <div className={`${styles["token-container"]} ${styles[rollWay]}`}>
          {tokens}
        </div>
      </div>
      {suffix != "" && suffixPosition === "back" && (
        <div className={styles.suffix}>{suffix}</div>
      )}
    </div>
  );
}
