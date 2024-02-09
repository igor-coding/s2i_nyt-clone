type Navbar = {
  id: number;
  link: string;
  text: string;
};

export const navbar: Navbar[] = [
  {
    id: 0,
    link: "us",
    text: "u.s.",
  },
  {
    id: 1,
    link: "world",
    text: "world",
  },
  {
    id: 2,
    link: "business",
    text: "business",
  },
  {
    id: 3,
    link: "arts",
    text: "arts",
  },
  {
    id: 4,
    link: "lifestyle",
    text: "lifestyle",
  },
  {
    id: 5,
    link: "opinion",
    text: "opinion",
  },
  {
    id: 6,
    link: "podcasts",
    text: "audio",
  },
  {
    id: 7,
    link: "crosswords",
    text: "games",
  },
  {
    id: 8,
    link: "https://cooking.nytimes.com/",
    text: "cooking",
  },
  {
    id: 9,
    link: "https://www.nytimes.com/wirecutter/",
    text: "wirecutter",
  },
  {
    id: 10,
    link: "https://theathletic.com/",
    text: "the athletic",
  },
];

export default navbar;
