interface Navbar {
  id: number;
  path: string;
  text: string;
}

export const navbar: Navbar[] = [
  {
    id: 0,
    path: "/",
    text: "home",
  },
  {
    id: 1,
    path: "/us",
    text: "u.s.",
  },
  {
    id: 2,
    path: "/world",
    text: "world",
  },
  {
    id: 3,
    path: "/politics",
    text: "politics",
  },
  {
    id: 4,
    path: "/opinion",
    text: "opinion",
  },
  {
    id: 5,
    path: "/technology",
    text: "technology",
  },
  {
    id: 6,
    path: "/arts",
    text: "arts",
  },
];
