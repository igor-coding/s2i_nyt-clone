const languages = [
  {
    id: 0,
    lang: "en-US",
    href: "/",
    text: "U.S.",
  },
  {
    id: 1,
    lang: "en",
    href: "/international",
    text: "INTERNATIONAL",
  },
  {
    id: 2,
    lang: "en-CA",
    href: "/ca/",
    text: "CANADA",
  },
  {
    id: 3,
    lang: "es-ES",
    href: "https://www.nytimes.com/es/",
    text: "ESPAÑOL",
  },
  {
    id: 4,
    lang: "zh-hans",
    href: "https://cn.nytimes.com/",
    text: "中文",
  },
];

export default function Languages() {
  return (
    <div className="flex justify-center">
      <ul className="flex">
        {languages.map((language) => (
          <li
            key={language.id}
            className="py-[4px] px-[6px] rounded dark:hover:bg-neutral-900"
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
