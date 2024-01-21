"use client";

import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonType = "button" | "submit";

interface Props {
  type: ButtonType;
  className: string;
  children: ReactNode;
  onClick: () => void;
}

export function Button({ type, className, onClick, children }: Props) {
  return (
    <button
      type={type}
      className={cn("py-[6px] px-[9px] rounded text-white", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// FIX: Make the `ToggleButton` function easy
// with state and prop... https://www.youtube.com/watch?v=w7ejDZ8SWv8

export function ToggleSideBar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar?.classList.contains("hidden")) {
    sidebar?.classList.remove("hidden");
    sidebar?.classList.add("block");
  } else {
    sidebar?.classList.remove("block");
    sidebar?.classList.add("hidden");
  }
}

export function ToggleSearchBar() {
  const form = document.querySelector("form");
  if (form?.classList.contains("hidden")) {
    form?.classList.remove("hidden");
    form?.classList.add("flex");
  } else {
    form?.classList.remove("flex");
    form?.classList.add("hidden");
  }
}
