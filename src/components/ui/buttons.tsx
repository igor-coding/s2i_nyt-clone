"use client";

// REF: Make cleaner code or reorganize in different files?
// TODO: Add toggle dark mode button

import { ReactNode } from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { useToggle } from "@/hooks/useToggle";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import SideNav from "@/components/header/SideNav";
import Searchbar from "@/components/header/Searchbar";
import Help from "@/components/header/Help";
import Icons from "@/components/ui/icons";

type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  type,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const hasText =
    typeof children === "string"
      ? "bg-accent hover:bg-accentHover uppercase font-bold text-xxs"
      : "hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white";

  return (
    <button
      type={type}
      className={`rounded py-2 px-2.5 duration-300 ${hasText} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnHeader() {
  const menuToggle = useToggle();
  const searchToggle = useToggle();
  const helpToggle = useToggle();

  useKeyboardShortcut(["ctrl", "m"], () => menuToggle.handleToggle());
  useKeyboardShortcut(["ctrl", "s"], () => searchToggle.handleToggle());
  useKeyboardShortcut(["ctrl", "h"], () => helpToggle.handleToggle());

  return (
    <div className="flex flex-1">
      <Button type="button" onClick={menuToggle.handleToggle}>
        {Icons.menu}
      </Button>
      {menuToggle.isOpen && <SideNav />}

      <Button type="button" onClick={searchToggle.handleToggle}>
        {Icons.search}
      </Button>
      {searchToggle.isOpen && <Searchbar />}

      <Button type="button" onClick={helpToggle.handleToggle}>
        {Icons.help}
      </Button>
      {helpToggle.isOpen && <Help />}
    </div>
  );
}

export function BtnActions() {
  return (
    <div className="flex flex-1 justify-end space-x-4 items-center text-white">
      <Button type="button">subscribe for €0.50/week</Button>
      <Button type="button">log in</Button>
    </div>
  );
}
