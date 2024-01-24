import { navbar } from "@/data/navbar";
import { navbar2 } from "@/data/navbar";
import Icons from "@/components/ui/icons";

export default function Navbar() {
  return (
    <nav className="p-4 border-double border-b-4 border-black dark:border-white">
      <ul className="flex justify-center space-x-4">
        {navbar?.map((nav) => (
          <li
            key={nav.id}
            className="flex items-center hover:underline underline-offset-4 decoration-2"
          >
            <a href={nav.href}>{nav.text}</a>
            <button type="button" className="pl-1">
              {Icons.chevronDown}
            </button>
          </li>
        ))}
        <span className="text-neutral-200 dark:text-neutral-700">&#9168;</span>
        {navbar2?.map((nav) => (
          <li
            key={nav.id}
            className="flex items-center hover:underline underline-offset-4 decoration-2"
          >
            <a href={nav.href}>{nav.text}</a>
            <button type="button" className="pl-1">
              {Icons.chevronDown}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
