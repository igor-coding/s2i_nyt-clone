"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbar } from "@/data/navbar";

export default function Navbar() {
  const pathname = usePathname().split("/")[1];

  return (
    <nav className="p-4">
      <ul className="flex justify-center itmes-center space-x-4">
        {navbar.map((item) => (
          <li key={item.id} className="flex items-center">
            <Link
              href={item.path}
              className={`py-1.5 px-2 rounded capitalize duration-300 hover:duration-300"
              ${
                pathname === item.text.replace(/\./g, "")
                  ? "bg-neutral-200 dark:bg-neutral-800"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }
              `}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
