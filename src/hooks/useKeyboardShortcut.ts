import { useEffect } from "react";

type Key = "escape" | "/" | string;

export const useKeyboardShortcut = (keys: Key[], callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        keys.every(
          (key) =>
            (key === "escape" && event.key === "Escape") ||
            (key === "/" && event.key === "/") ||
            (typeof key === "string" && event.key.toLowerCase() === key),
        )
      ) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keys, callback]);
};
