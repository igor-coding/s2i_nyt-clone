export default function AsideSkeleton() {
  return (
    <div className="border-l border-neutral-200 dark:border-neutral-700 my-8 pl-4 divide-y divide-black dark:divide-white">
      <div className="pb-4">
        <div className="space-y-2 animate-pulse after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4">
          <div className="h-52 bg-neutral-300 dark:bg-neutral-500" />
          <div className="h-16 bg-neutral-300 dark:bg-neutral-500" />
          <div className="h-8 bg-neutral-300 dark:bg-neutral-500" />
        </div>
        <div className="space-y-2 animate-pulse">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-28 bg-neutral-300 dark:bg-neutral-500" />
              <div className="h-4 bg-neutral-300 dark:bg-neutral-500" />
            </div>
            <div className="space-y-2">
              <div className="h-28 bg-neutral-300 dark:bg-neutral-500" />
              <div className="h-4 bg-neutral-300 dark:bg-neutral-500" />
            </div>
            <div className="space-y-2">
              <div className="h-28 bg-neutral-300 dark:bg-neutral-500" />
              <div className="h-4 bg-neutral-300 dark:bg-neutral-500" />
            </div>
            <div className="space-y-2">
              <div className="h-28 bg-neutral-300 dark:bg-neutral-500" />
              <div className="h-4 bg-neutral-300 dark:bg-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
