const currentDate = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(currentDate);

export default function CurrentDate() {
  return (
    <div className="flex-1 text-left">
      <span className="block font-bold">{formattedDate}</span>
      <a
        href="https://www.nytimes.com/section/todayspaper"
        className="hidden lg:inline hover:text-neutral-500 dark:hover:text-neutral-300 duration-300 hover:duration-300"
      >
        Today's Paper
      </a>
    </div>
  );
}
