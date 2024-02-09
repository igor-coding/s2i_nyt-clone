"use client";

import { useState, useRef, useEffect } from "react";
import { useToggle } from "@/hooks/useToggle";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import { Button } from "@/components/ui/buttons";
import Icons from "@/components/ui/icons";

export const autoFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const searchInput = autoFocus();
  const { isOpen, handleToggle } = useToggle();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleResetClick = () => {
    setSearchValue("");
    searchInput.current?.focus();
  };

  useKeyboardShortcut(["ctrl", "s"], handleToggle);

  return (
    <div className="flex">
      <Button type="button" onClick={handleToggle}>
        {Icons.search}
      </Button>
      {isOpen && (
        <form
          method="get"
          action="/search"
          className="flex items-center space-x-1"
        >
          <div className="py-1 pl-2 pr-12 text-base border rounded border-neutral-500 focus-within:border-1 focus-within:border-black focus-within:shadow dark:focus-within:border-white">
            <input
              type="search"
              name="q"
              placeholder="search"
              value={searchValue}
              ref={searchInput}
              onChange={handleInputChange}
              className="placeholder:uppercase placeholder:text-neutral-400"
            />
            {searchValue && (
              <input
                type="reset"
                value="clear"
                onClick={handleResetClick}
                className="absolute pl-1 text-xxs text-neutral-400 cursor-pointer uppercase"
              />
            )}
          </div>
          <Button type="submit">go</Button>
        </form>
      )}
    </div>
  );
}
