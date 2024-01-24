const currentDate = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(currentDate);

export default function GetCurrentDate() {
  return (
    <div className="flex-1 text-left">
      <span className="block font-bold">{formattedDate}</span>
      <a href="https://www.nytimes.com/section/todayspaper">Today's Paper</a>
    </div>
  );
}
