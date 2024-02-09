import {
  Menu,
  Search,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  MoveUp,
  MoveDown,
  PlayCircle,
  Dot,
} from "lucide-react";

const Icons = {
  menu: <Menu className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  help: <HelpCircle className="h-5 w-5" />,
  chevronUp: <ChevronUp className="h-4 w-4 text-neutral-400" />,
  chevronDown: <ChevronDown className="h-4 w-4 text-neutral-400" />,
  moveUp: <MoveUp className="h-2.5 w-2.5" />,
  moveDown: <MoveDown className="h-2.5 w-2.5" />,
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
};

export default Icons;
