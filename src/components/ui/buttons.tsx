// REF: Make cleaner code
// TODO: Add toggle dark mode button

import { ReactNode } from "react";

import { useToggle } from "@/hooks/useToggle";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import { cn } from "@/utils/cn";

import Sidebar from "@/components/header/Sidebar";
import Searchbar from "@/components/header/Searchbar";
import Help from "@/components/header/Help";
import Icons from "@/components/ui/icons";

type ButtonType = "button" | "submit";
interface ButtonProps {
  type: ButtonType;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ type, className, onClick, children }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "outline-none py-2 px-2.5 rounded text-white duration-300 hover:duration-300",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function HeaderButtons() {
  const menuToggle = useToggle();
  const searchToggle = useToggle();
  const helpToggle = useToggle();

  useKeyboardShortcut(["ctrl", "m"], () => menuToggle.handleToggle());
  useKeyboardShortcut(["ctrl", "s"], () => searchToggle.handleToggle());
  useKeyboardShortcut(["ctrl", "h"], () => helpToggle.handleToggle());

  return (
    <>
      <Button
        type="button"
        onClick={menuToggle.handleToggle}
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.menu}
      </Button>
      {menuToggle.isOpen && <Sidebar />}

      <Button
        type="button"
        onClick={searchToggle.handleToggle}
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.search}
      </Button>
      {searchToggle.isOpen && <Searchbar />}

      <Button
        type="button"
        onClick={helpToggle.handleToggle}
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.help}
      </Button>
      {helpToggle.isOpen && <Help />}
    </>
  );
}
