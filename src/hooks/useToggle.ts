import { useState } from "react";

type UseToggle = {
  isOpen: boolean;
  handleToggle: () => void;
};

export const useToggle = (): UseToggle => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return {
    isOpen,
    handleToggle,
  };
};
