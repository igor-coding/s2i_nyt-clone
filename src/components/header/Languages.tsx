import { languages } from "@/data/languages";

export default function Languages() {
  return (
    <div className="hidden lg:flex flex-1 justify-center">
      <ul className="flex">
        {languages.map((language) => (
          <li key={language.id}>
            <a
              lang={language.lang}
              href={language.href}
              className="py-1.5 px-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300 hover:duration-300 uppercase"
            >
              {language.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
