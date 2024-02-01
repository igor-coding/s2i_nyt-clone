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
        "outline-none py-[7px] px-[9px] rounded text-white duration-300 hover:duration-300",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// export function ToggleSidebar() {
//   return (
//     <Toggle icon={Icons.menu} component={<Sidebar />} shortcutKey="escape" />
//   );
// }
//
// export function ToggleSearchbar() {
//   return (
//     <Toggle icon={Icons.search} component={<Searchbar />} shortcutKey="/" />
//   );
// }

export function BtnSidebar() {
  const { isOpen, handleToggle } = useToggle();

  useKeyboardShortcut(["%"], () => handleToggle());

  return (
    <>
      <Button
        type="button"
        onClick={handleToggle}
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.menu}
      </Button>
      {isOpen && <Sidebar />}
    </>
  );
}

export function BtnSearchbar() {
  const { isOpen, handleToggle } = useToggle();

  useKeyboardShortcut(["/"], () => handleToggle());

  return (
    <>
      <Button
        type="button"
        onClick={handleToggle}
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.search}
      </Button>
      {isOpen && <Searchbar />}
    </>
  );
}

export function BtnHelp() {
  const { isOpen, handleToggle } = useToggle();

  useKeyboardShortcut(["?"], () => handleToggle());

  return (
    <>
      <Button
        type="button"
        onClick={handleToggle}
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
      >
        {Icons.help}
      </Button>
      {isOpen && <Help />}
    </>
  );
}
