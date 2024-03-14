"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLongPress } from "@uidotdev/usehooks";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import Icons from "@/components/ui/icons";
import { Button } from "@/components/ui/buttons";

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () =>
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");

  const attrs = useLongPress(() => {
    if (resolvedTheme !== "system") {
      setTheme("system");
    }
  });

  useKeyboardShortcut(["ctrl", "d"], toggleTheme);
  useKeyboardShortcut(["ctrl", "a"], () => setTheme("system"));

  if (!mounted) {
    return (
      <span title="Theme switcher" className="py-2 px-2.5 cursor-not-allowed">
        {Icons.boxSelect}
      </span>
    );
  }

  if (theme === "system") {
    return (
      <Button type="button" onClick={toggleTheme}>
        {Icons.sunMoon}
      </Button>
    );
  }

  return (
    <>
      <Button {...attrs} type="button" onClick={toggleTheme}>
        {resolvedTheme === "light" ? Icons.moon : Icons.sun}
      </Button>
    </>
  );
}
