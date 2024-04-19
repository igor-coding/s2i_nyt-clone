import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbar } from "@/data/navbar";

interface NavbarProps {
  closeSidenav?: () => void;
}

export default function Navbar({ closeSidenav }: NavbarProps) {
  const pathname = usePathname().split("/")[1];

  return (
    <nav className="font-bold text-2xl lg:font-normal lg:text-sm lg:py-2 lg:px-4">
      <ul className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4">
        {navbar.map((item) => (
          <li key={item.path} className="flex items-center">
            <Link
              href={item.path}
              onClick={closeSidenav}
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
