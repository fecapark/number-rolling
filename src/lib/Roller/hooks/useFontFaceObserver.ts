import FontFaceObserver from "fontfaceobserver";
import { useEffect, useState } from "react";

export function useFontFaceObserver(fontface?: string) {
  const [loaded, setLoaded] = useState(fontface === undefined ? true : false);
  useEffect(() => {
    if (!fontface) return;
    const font = new FontFaceObserver(fontface);
    font.load().then(() => {
      setLoaded(true);
    });
  }, [fontface]);
  return loaded;
}
