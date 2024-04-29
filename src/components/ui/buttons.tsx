"use client";

import type { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  type,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const hasText =
    typeof children === "string"
      ? "bg-accent hover:bg-accentHover uppercase font-bold text-xxs text-white"
      : "hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white";

  return (
    <button
      type={type}
      className={`rounded px-2.5 py-2 duration-300 ${hasText} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnActions() {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4 text-white">
      <Button type="button">subscribe for €0.50/week</Button>
      <Button type="button">log in</Button>
    </div>
  );
}
