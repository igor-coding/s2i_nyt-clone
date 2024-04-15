import {
  BoxSelect,
  Sun,
  Moon,
  SunMoon,
  Menu,
  User,
  Search,
  ChevronUp,
  ChevronDown,
  MoveUp,
  MoveDown,
  PlayCircle,
  Dot,
} from "lucide-react";

const Icons = {
  boxSelect: <BoxSelect className="h-5 w-5" />,
  sun: <Sun className="h-5 w-5" />,
  moon: <Moon className="h-5 w-5" />,
  sunMoon: <SunMoon className="h-5 w-5" />,
  menu: <Menu className="h-5 w-5" />,
  user: <User className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  chevronUp: <ChevronUp className="h-4 w-4 text-neutral-400" />,
  chevronDown: <ChevronDown className="h-4 w-4 text-neutral-400" />,
  moveUp: <MoveUp className="h-2.5 w-2.5 dark:text-green-400" />,
  moveDown: <MoveDown className="h-2.5 w-2.5 dark:text-red-400" />,
  play: (
    <PlayCircle className="h-5 w-5 hover:fill-neutral-100 dark:hover:fill-neutral-900" />
  ),
  dot: <Dot className="h-5 w-5" />,

  chevronLeft: (
    <svg
      viewBox="0 0 26 26"
      className="w-6 h-6 rotate-180 stroke-black dark:stroke-white fill-transparent hover:fill-neutral-200 dark:hover:fill-neutral-700 duration-150"
    >
      <circle
        cx="13"
        cy="13"
        r="12.5"
        className="stroke-neutral-200 dark:stroke-neutral-700"
      />
      <title>Previous</title>
      <path
        d="M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),

  chevronRight: (
    <svg
      viewBox="0 0 26 26"
      className="w-6 h-6 stroke-black dark:stroke-white fill-transparent hover:fill-neutral-200 dark:hover:fill-neutral-700 duration-150"
    >
      <circle
        cx="13"
        cy="13"
        r="12.5"
        className="stroke-neutral-200 dark:stroke-neutral-700"
      />
      <title>Next</title>
      <path
        d="M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),

  spinner: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin h-5 w-5 stroke-1 text-black dark:text-white"
    >
      <circle
        className="text-neutral-200 dark:text-neutral-700"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <title>Loading</title>
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ),
};

export default Icons;
