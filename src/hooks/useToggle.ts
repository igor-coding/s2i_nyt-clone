import { useState } from "react";

type UseToggleProps = {
  isOpen: boolean;
  handleToggle: () => void;
};

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
