import { useEffect } from "react";

type Key = "$" | "%" | "$" | "/" | "?";

export const useKeyboardShortcut = (keys: Key[], callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        keys.every(
          (key) =>
            (key === "$" && event.key === "$") ||
            (key === "%" && event.key === "%") ||
            (key === "/" && event.key === "/") ||
            (key === "?" && event.key === "?"),
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
