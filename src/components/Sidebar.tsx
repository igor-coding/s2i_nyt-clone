// TODO: Map 2 sections

import Icons from "@/components/ui/icons";

export default function SideBar() {
  return (
    <section className="absolute top-0 left-0 h-screen w-60 p-4 z-1 drop-shadow-xl font-bold text-base bg-white dark:bg-black border-r border-neutral-200 dark:border-neutral-700">
      <ul>
        <div className="pb-4 border-b border-neutral-200 dark:border-neutral-700">
          <li className="rounded hover:bg-slate-200 dark:hover:bg-slate-700">
            <a href="/" className="flex items-center justify-between pl-2">
              Home Page
              {Icons.chevronRight}
            </a>
          </li>
          <li>
            <a href="">World</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Politics</a>
          </li>
          <li>
            <a href="">U.S.</a>
          </li>
          <li>
            <a href="">Sports</a>
          </li>
          <li>
            <a href="">Health</a>
          </li>
          <li>
            <a href="">N.Y.</a>
          </li>
          <li>
            <a href="">Opinion</a>
          </li>
          <li>
            <a href="">Tech</a>
          </li>
          <li>
            <a href="">Science</a>
          </li>
        </div>
        <div className="py-4 border-b border-neutral-200 dark:border-neutral-700">
          <li>
            <a href="">Arts</a>
          </li>
          <li>
            <a href="">Book Review</a>
          </li>
          <li>
            <a href="">Style</a>
          </li>
          <li>
            <a href="">Food</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Magazine</a>
          </li>
          <li>
            <a href="">T Magazine</a>
          </li>
          <li>
            <a href="">Real Estate</a>
          </li>
          <li>
            <a href="">Obituaries</a>
          </li>
          <li>
            <a href="">Video</a>
          </li>
          <li>
            <a href="">Graphics</a>
          </li>
          <li>
            <a href="">The Upshot</a>
          </li>
        </div>
        <li className="pt-4">
          <a href="">More</a>
        </li>
      </ul>
    </section>
  );
}
