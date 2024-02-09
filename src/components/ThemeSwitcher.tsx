"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import Image from "next/image";
import Icons from "@/components/ui/icons";

import { Button } from "@/components/ui/buttons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useKeyboardShortcut(["ctrl", "d"], toggleTheme);

  if (!mounted)
    return (
      <span className="py-2 px-2.5">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={20}
          height={20}
          alt="Loading Light/Dark Toggle"
          title="Loading Light/Dark Toggle"
          priority={false}
        />
      </span>
    );

  if (resolvedTheme === "dark") {
    return (
      <Button type="button" onClick={toggleTheme}>
        {Icons.sun}
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button type="button" onClick={toggleTheme}>
        {Icons.moon}
      </Button>
    );
  }
}
