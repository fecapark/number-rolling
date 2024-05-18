import gsap from "gsap";

function getTokenWidth() {
  const $token = document.querySelector(".token:not(.special)");
  if (!$token) return 0;
  return $token.getBoundingClientRect().width;
}

function getSpecialTokenWidth() {
  const $specialToken = document.querySelector(".token.special");
  if (!$specialToken) return 0;
  return $specialToken.getBoundingClientRect().width;
}

function getTargetWidth(value: number) {
  let width = 0;
  const tokenWidth = getTokenWidth();
  const specialTokenWidth = getSpecialTokenWidth();
  const valueString = value.toLocaleString();

  for (let i = 0; i < valueString.length; i++) {
    if (valueString[i] === "," || valueString[i] === ".") {
      width += specialTokenWidth;
    } else {
      width += tokenWidth;
    }
  }

  return width;
}

export function tokenSlideAnimation(
  duration: number,
  staggering: boolean,
  rollWay: "up" | "down",
  diffIndexes: number[] | null
) {
  const $tokens = Array.from(document.querySelectorAll(".token-roller"));

  $tokens.forEach(($token, i) => {
    const randomDelay = Math.random() * 0.2;

    if (diffIndexes === null) {
      gsap.to($token, {
        y: rollWay === "down" ? "100%" : "-100%",
        duration,
        delay: staggering ? i * 0.05 : randomDelay,
        ease: "expo.out",
      });
    } else if (diffIndexes.includes(i)) {
      gsap.to($token, {
        y: rollWay === "down" ? "100%" : "-100%",
        duration,
        delay: staggering ? i * 0.05 : randomDelay,
        ease: "expo.out",
      });
    } else {
      gsap.to($token, {
        y: rollWay === "down" ? "100%" : "-100%",
        duration: 0,
      });
    }
  });
}

export function specialSlideAnimation(duration: number, increasing: boolean) {
  const $specialTokens = document.querySelectorAll(
    ".token-special-roller > .token"
  );

  $specialTokens.forEach(($token, i) => {
    const randomDelay = Math.random() * 0.05;
    gsap.from($token, {
      x: increasing ? "-50%" : "50%",
      opacity: 0,
    });

    gsap.to($token, {
      x: "0%",
      opacity: 1,
      duration: duration * 0.5,
      delay: i * randomDelay,
      ease: "expo.out",
    });
  });
}

export function valueWidthAnimation(value: number, duration: number) {
  const ref = document.querySelector(".values");
  if (!ref) return;

  gsap.to(ref, {
    width: getTargetWidth(value),
    duration: duration,
    delay: 0.1,
    ease: "expo.out",
  });
}
