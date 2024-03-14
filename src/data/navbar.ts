type Navbar = {
  id: number;
  path: string;
  text: string;
};

export const navbar: Navbar[] = [
  {
    id: 0,
    path: "/us",
    text: "u.s.",
  },
  {
    id: 1,
    path: "/world",
    text: "world",
  },
  {
    id: 2,
    path: "/business",
    text: "business",
  },
  {
    id: 3,
    path: "/arts",
    text: "arts",
  },
  {
    id: 4,
    path: "/lifestyle",
    text: "lifestyle",
  },
  {
    id: 5,
    path: "/opinion",
    text: "opinion",
  },
  {
    id: 6,
    path: "/podcasts",
    text: "audio",
  },
  {
    id: 7,
    path: "/crosswords",
    text: "games",
  },
  {
    id: 8,
    path: "https://cooking.nytimes.com/",
    text: "cooking",
  },
  {
    id: 9,
    path: "https://www.nytimes.com/wirecutter/",
    text: "wirecutter",
  },
  {
    id: 10,
    path: "https://theathletic.com/",
    text: "the athletic",
  },
];

export default navbar;
