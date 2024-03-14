import { useState } from "react";

import { UseToggleProps } from "@/types";

export const useToggle = (): UseToggleProps => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return {
    isOpen,
    handleToggle,
  };
};
