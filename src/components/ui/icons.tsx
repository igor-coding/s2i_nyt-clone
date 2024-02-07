import {
  Menu,
  Search,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeftCircle,
  ChevronRightCircle,
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
  chevronRight: <ChevronRight className="h-4 w-4 text-neutral-400" />,
  chevronLeftCircle: (
    <ChevronLeftCircle className="h-6 w-6 hover:fill-neutral-300 dark:hover:fill-neutral-600 duration-150" />
  ),
  chevronRightCircle: <ChevronRightCircle className="h-6 w-6" />,
  moveUp: <MoveUp className="h-2.5 w-2.5" />,
  moveDown: <MoveDown className="h-2.5 w-2.5" />,
  play: (
    <PlayCircle className="h-5 w-5 hover:fill-neutral-100 dark:hover:fill-neutral-900" />
  ),
  dot: <Dot className="h-5 w-5" />,
};

export default Icons;
