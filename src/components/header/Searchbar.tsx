"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToggle } from "@/hooks/useToggle";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import { Button } from "@/components/ui/buttons";
import Icons from "@/components/ui/icons";

const autoFocus = (isOpen: boolean) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return inputRef;
};

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const { replace } = useRouter();
  const { isOpen, handleToggle } = useToggle();
  const searchInput = autoFocus(isOpen);

  const handleReset = () => {
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
        <div className="flex items-center space-x-1">
          <div className="bg-white dark:bg-black py-1 pl-2 pr-12 text-base border rounded border-neutral-500 focus-within:border-1 focus-within:border-black focus-within:shadow dark:focus-within:border-white">
            <input
              type="search"
              placeholder="search"
              ref={searchInput}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                replace(`/search?query=${searchValue.toLowerCase()}`)
              }
              className="placeholder:uppercase placeholder:text-neutral-400"
            />
            {searchValue && (
              <input
                type="reset"
                value="clear"
                onClick={handleReset}
                className="absolute pl-1 text-xxs text-neutral-400 cursor-pointer uppercase"
              />
            )}
          </div>
          <Button
            type="submit"
            onClick={() =>
              replace(`/search?query=${searchValue.toLowerCase()}`)
            }
            className="hidden lg:block"
          >
            go
          </Button>
        </div>
      )}
    </div>
  );
}
