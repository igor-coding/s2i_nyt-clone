type Language = {
  id: number;
  lang: string;
  href: string;
  text: string;
};

const languages: Language[] = [
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

export default languages;
