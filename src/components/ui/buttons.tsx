"use client";

import { ButtonProps } from "@/types/ButtonProps";

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
      className={`rounded py-2 px-2.5 duration-300 ${hasText} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnActions() {
  return (
    <div className="flex flex-1 justify-end space-x-4 items-center text-white">
      <Button type="button">subscribe for €0.50/week</Button>
      <Button type="button">log in</Button>
    </div>
  );
}
