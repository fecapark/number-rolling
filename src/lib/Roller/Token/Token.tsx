import styles from "./Token.module.css";

interface TokenProps {
  rollWay: "up" | "down";
  isSpecial?: boolean;
  children: React.ReactNode;
}

export default function Token({
  rollWay,
  isSpecial = false,
  children,
}: TokenProps) {
  return (
    <div
      className={`token ${styles.token} ${
        isSpecial ? "special" : styles["non-special"] + " " + styles[rollWay]
      }`}
    >
      {children}
    </div>
  );
}
