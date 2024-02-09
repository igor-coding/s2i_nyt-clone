import { useState } from "react";
import { useAutoFocus } from "@/hooks/useAutoFocus";

import { Button } from "@/components/ui/buttons";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const searchInput = useAutoFocus();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleResetClick = () => {
    setSearchValue("");
    searchInput.current?.focus();
  };

  return (
    <div className="flex">
      <form
        method="get"
        action="/search"
        className="inline-flex items-center space-x-1"
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
    </div>
  );
}
