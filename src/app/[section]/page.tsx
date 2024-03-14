import { noto_serif_display } from "@/components/ui/fonts";
import { cn } from "@/utils/cn";

import type { SectionProps } from "@/types";

export default function Section({ params }: SectionProps) {
  return (
    <div className="py-4">
      <h1
        className={cn(
          "pb-4 border-b border-b-black dark:border-b-white font-bold text-5xl",
          noto_serif_display.className,
        )}
      >
        {params.section} News
      </h1>
    </div>
  );
}
