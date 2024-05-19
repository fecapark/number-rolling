import FontFaceObserver from "fontfaceobserver";
import { useEffect, useState } from "react";

export function useFontFaceObserver(fontfaces: string[]) {
  const [loaded, setLoaded] = useState(fontfaces.length === 0);

  useEffect(() => {
    if (!fontfaces) return;

    let success = 0;
    let fails = 0;

    const check = () => {
      if (success + fails < fontfaces.length) return;
      if (success > 0) {
        setLoaded(true);
      }
    };

    fontfaces.forEach((fontface) => {
      const observer = new FontFaceObserver(fontface);
      observer.load().then(
        () => {
          success++;
          check();
        },
        () => {
          fails++;
          check();
        }
      );
    });
  }, [fontfaces]);
  return loaded;
}
