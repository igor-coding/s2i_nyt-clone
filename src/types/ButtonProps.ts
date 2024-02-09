import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type UseFetchDataProps = {
  queryKey: string;
  api: string;
  section: string;
};

export type UseToggleProps = {
  isOpen: boolean;
  handleToggle: () => void;
};
