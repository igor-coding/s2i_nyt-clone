export default function TopStoriesSkeleton() {
  return (
    <div className="py-8 grid grid-cols-12">
      <div className="col-span-4">
        <div className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4">
          <div className="space-y-2 animate-pulse">
            <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
            <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
            <div className="bg-neutral-300 dark:bg-neutral-500 h-4" />
          </div>
        </div>
        <div className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4">
          <div className="space-y-2 animate-pulse">
            <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
            <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
            <div className="bg-neutral-300 dark:bg-neutral-500 h-4" />
          </div>
        </div>
        <div className="space-y-2 animate-pulse">
          <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
          <div className="bg-neutral-300 dark:bg-neutral-500 h-4" />
        </div>
      </div>
      <div className="pl-8 col-span-8 animate-pulse">
        <div className="h-full bg-neutral-300 dark:bg-neutral-500" />
      </div>
    </div>
  );
}
