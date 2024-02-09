import Link from "next/link";

import { navbar } from "@/data/navbar";

export default function Navbar() {
  return (
    <nav className="p-4">
      <ul className="flex justify-center itmes-center space-x-4">
        {navbar?.map((nav) => (
          <li key={nav.id} className="flex items-center">
            <Link
              href={`/section/${nav.link}`}
              className="py-1.5 px-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300 hover:duration-300 capitalize"
            >
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
