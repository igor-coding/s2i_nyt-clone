import languges from "@/data/languages";

export default function Languages() {
  return (
    <div className="flex flex-1 justify-center">
      <ul className="flex">
        {languges?.map((language) => (
          <li
            key={language.id}
            className="py-[4px] px-[6px] rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300 hover:duration-300"
          >
            <a lang={language.lang} href={language.href}>
              {language.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}