export default function BooksSkeleton() {
  return (
    <div className="py-8 grid md:grid-cols-12">
      <div className="pb-4 md:pr-8 col-span-2 animate-pulse">
        <div className="h-4 bg-neutral-300 dark:bg-neutral-500" />
      </div>
      <div className="col-span-6">
        <div className="space-y-2 animate-pulse">
          <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
          <div className="bg-neutral-300 dark:bg-neutral-500 h-12" />
          <div className="bg-neutral-300 dark:bg-neutral-500 h-4" />
        </div>
      </div>
      <div className="hidden md:block pl-8 col-span-4 animate-pulse">
        <div className="h-full bg-neutral-300 dark:bg-neutral-500" />
      </div>
    </div>
  );
}
