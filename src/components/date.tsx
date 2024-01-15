function getCurrentDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

export default function GetCurrentDate() {
  return (
    <div>
      <span className="block font-bold">{getCurrentDate()}</span>
      <a href="https://www.nytimes.com/section/todayspaper">Today's Paper</a>
    </div>
  );
}
