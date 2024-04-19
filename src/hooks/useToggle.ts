"use client";

import { useState } from "react";

interface UseToggleProps {
  isOpen: boolean;
  handleToggle: () => void;
}

export const useToggle = (): UseToggleProps => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    handleToggle,
  };
};
