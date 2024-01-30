import { Button } from "@/components/ui/buttons";

export default function Searchbar() {
  return (
    <div className="flex">
      <form method="get" action="/search" className="flex space-x-1">
        <div className="flex text-base border rounded border-neutral-500 focus-within:border-1 focus-within:border-black focus-within:shadow dark:focus-within:border-white px-2">
          <input
            type="search"
            placeholder="SEARCH"
            className="placeholder:text-neutral-400"
          />
          <input
            type="reset"
            value="CLEAR"
            className="pl-2 text-xxs text-neutral-400 cursor-pointer"
          />
        </div>
        <Button
          type="submit"
          className="text-xxs bg-accent hover:bg-accentHover font-bold text-white"
        >
          GO
        </Button>
      </form>
    </div>
  );
}
