"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/buttons";
import Icons from "@/components/ui/icons";

export default function BtnMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button
        type="button"
        className="hover:bg-neutral-100 dark:hover:bg-neutral-900"
        onClick={handleClick}
      >
        {Icons.menu}
      </Button>
      {isOpen && <Sidebar />}
    </>
  );
}
