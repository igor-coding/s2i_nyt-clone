// TODO: Map 2 sections:
// from id:0 to id:5 and from id:6 to id:10

import { navbar } from "@/data/navbar.json";
import Icons from "@/components/ui/icons";

const navbarSubmenu = [
  {
    id: 0,
    href: "https://www.nytimes.com/section/us",
    text: "U.S.",
  },
];

export const Navbar = () => {
  return (
    <nav className="p-4 border-double border-b-4 border-black dark:border-white">
      <ul className="flex justify-center space-x-4">
        {navbar.map((nav) => (
          <li
            key={nav.id}
            className="flex items-center hover:underline underline-offset-4 decoration-2"
          >
            <a href={nav.href}>{nav.text}</a>
            <button type="button" className="pl-1">
              {Icons.chevronDown}
            </button>
            <div className="relative">
              <div className="h-10 w-10 bg-red-500">
                <h3 />
                <div>
                  <ul>
                    <li>
                      <a href="/" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NavbarSubmenu = () => {
  return (
    <div className="flex justify-between z-50 border-b-2 border-b-dark dark:border-b-white py-5">
      <div>
        <h3 className="mb-5">SECTIONS</h3>
        <div>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="">U.S.</a>
            </li>
            <li>
              <a href="">Politics</a>
            </li>
            <li>
              <a href="">New York</a>
            </li>
            <li>
              <a href="">California</a>
            </li>
            <li>
              <a href="">Education</a>
            </li>
            <li>
              <a href="">Health</a>
            </li>
            <li>
              <a href="">Obituaries</a>
            </li>
            <li>
              <a href="">Science</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="mb-9"></h3>
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="">Climate</a>
          </li>
          <li>
            <a href="">Sports</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Tech</a>
          </li>
          <li>
            <a href="">The Upshot</a>
          </li>
          <li>
            <a href="">The Magazine</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5">U.S. POLITICS</h3>
        <div>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="">2024 Elections</a>
            </li>
            <li>
              <a href="">Supreme Court</a>
            </li>
            <li>
              <a href="">Congress</a>
            </li>
            <li>
              <a href="">Biden Administration</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="mb-5">TOP STORIES</h3>
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="">Trump Investigations</a>
          </li>
          <li>
            <a href="">The Eric Adams Administration</a>
          </li>
          <li>
            <a href="">Abortion in the U.S.</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5">NEWSLETTERS</h3>
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="" className="flex">
              <img
                src="https://www.nytimes.com/vi-assets/static-assets/icon-the-morning-dd86bff0a93166101faa63110f3830b9.webp"
                alt="img"
                className="h-8 w-8 mt-0.5 mr-3"
              />
              <div>
                <div className="block font-bold">The Morning</div>
                <p>Make sense of the day's news and ideas.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">The Upshot</a>
          </li>
        </ul>
        <a href="https://www.nytimes.com/newsletters">
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 hover:underline">
            See all newsletters
          </p>
        </a>
      </div>
      <div>
        <h3 className="mb-5">PODCASTS</h3>
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="">The Daily</a>
          </li>
          <li>
            <a href="">The Run-Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
