import Icons from "@/components/ui/icons";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

import { sidebar } from "@/data/sidebar";
import { sidebar2 } from "@/data/sidebar";

export default function Sidebar() {
  return (
    <nav className="absolute top-0 left-0 h-full w-60 z-10 bg-white dark:bg-black border-r border-r-neutral-200 dark:border-r-neutral-700 shadow-xl font-bold text-base">
      <ul className="m-4 pb-4 border-b border-neutral-200 dark:border-b-neutral-700">
        {sidebar?.map((bar) => (
          <li
            key={bar.id}
            className="py-px px-2 rounded hover:bg-sky-100 dark:hover:bg-sky-950 duration-150"
          >
            <a href={bar.href} className="flex justify-between items-center">
              {bar.text}
              {Icons.chevronRight}
            </a>
          </li>
        ))}
      </ul>
      <ul className="m-4 pb-4 border-b border-b-neutral-200 dark:border-b-neutral-700">
        {sidebar2?.map((bar) => (
          <li
            key={bar.id}
            className="py-px px-2 rounded hover:bg-sky-100 dark:hover:bg-sky-950 duration-150"
          >
            <a href={bar.href} className="flex justify-between items-center">
              {bar.text}
              {Icons.chevronRight}
            </a>
          </li>
        ))}
      </ul>
      <div className="m-4 rounded hover:bg-sky-100 dark:hover:bg-sky-950 duration-150">
        <a
          href="https://www.nytimes.com/#"
          className="px-2 flex justify-between items-center"
        >
          More
          {Icons.chevronRight}
        </a>
      </div>
    </nav>
  );
}
