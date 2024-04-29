import { useEffect } from "react";

import { useToggle } from "@/hooks/useToggle";
import { Button } from "@/components/ui/buttons";
import Icons from "@/components/ui/icons";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navbar from "@/components/header/Navbar";

export default function Sidenav() {
  const { isOpen, handleToggle } = useToggle();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <>
      {!isOpen ? (
        <Button type="button" onClick={handleToggle}>
          {Icons.menu}
        </Button>
      ) : (
        <div className="z-10 fixed top-0 left-0 h-full w-full px-4 bg-white dark:bg-black flex flex-col items-center justify-evenly gap-8">
          <ThemeSwitcher />
          <Navbar closeSidenav={handleToggle} />
          <button
            type="button"
            onClick={handleToggle}
            className="uppercase text-base"
          >
            close
          </button>
        </div>
      )}
    </>
  );
}
