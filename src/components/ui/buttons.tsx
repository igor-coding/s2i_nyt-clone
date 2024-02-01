"use client";

import { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/utils/cn";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import Sidebar from "@/components/header/Sidebar";
import Searchbar from "@/components/header/Searchbar";
import Icons from "@/components/ui/icons";

type ButtonType = "button" | "submit";

interface Props {
  type: ButtonType;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ type, className, onClick, children }: Props) {
  return (
    <button
      type={type}
      className={cn(
        "py-[7px] px-[9px] rounded text-white duration-300 hover:duration-300",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ToggleSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useKeyboardShortcut(["escape"], () => setIsOpen(true && !isOpen));

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        className="outline-none hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.menu}
      </Button>
      {isOpen && <Sidebar />}
    </>
  );
}

export function ToggleSearchbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useKeyboardShortcut(["/"], () => setIsOpen(true && !isOpen));

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        className="outline-none hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.search}
      </Button>
      {isOpen && <Searchbar />}
    </>
  );
}
