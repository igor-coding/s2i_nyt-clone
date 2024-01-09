import {
  Menu,
  Search,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  MoveUp,
  MoveDown,
  ArrowLeftCircle,
  ArrowRightCircle,
  PlayCircle,
  Dot,
} from "lucide-react";

const Icon = {
  menu: <Menu className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  chevronUp: <ChevronUp className="h-4 w-4 text-neutral-400" />,
  chevronDown: <ChevronDown className="h-4 w-4 text-neutral-400" />,
  chevronRight: <ChevronRight className="h-4 w-4 text-neutral-400" />,
  moveUp: <MoveUp className="h-2.5 w-2.5 text-green-800 dark:text-green-600" />,
  moveDown: <MoveDown className="h-2.5 w-2.5 text-red-800 dark:text-red-600" />,
  arrowLeftCircle: (
    <ArrowLeftCircle className="h-5 w-5 hover:fill-neutral-100 dark:hover:fill-neutral-900" />
  ),
  arrowRightCircle: (
    <ArrowRightCircle className="h-5 w-5 hover:fill-neutral-100 dark:hover:fill-neutral-900" />
  ),
  play: (
    <PlayCircle className="h-5 w-5 hover:fill-neutral-100 dark:hover:fill-neutral-900" />
  ),
  dot: <Dot className="h-5 w-5" />,
};

export default Icon;
