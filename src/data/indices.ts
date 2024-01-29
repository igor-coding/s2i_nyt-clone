import Icons from "@/components/ui/icons";

type Index = {
  id: number;
  index: string;
  chg: string;
  icon: React.ReactNode;
};

const indices: Index[] = [
  {
    id: 1,
    index: "Nasdaq",
    chg: "+0.44%",
    icon: Icons.moveUp,
  },
  {
    id: 2,
    index: "S&P 500",
    chg: "-0.12%",
    icon: Icons.moveDown,
  },
  {
    id: 3,
    index: "Dow",
    chg: "+0.21%",
    icon: Icons.moveUp,
  },
];

export default indices;
