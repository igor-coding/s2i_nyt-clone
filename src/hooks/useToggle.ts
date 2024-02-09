import { useState } from "react";

import { UseToggleProps } from "@/types/ButtonProps";

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
