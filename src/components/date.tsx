function getDate() {
  const days = [
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

  const today = new Date();
  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();
  return `${day}, ${month} ${date}, ${year}`;
}

export default function CurrentDate() {
  return (
    <div>
      <span className="block font-bold">{getDate()}</span>
      <a href="https://www.nytimes.com/section/todayspaper">Today's Paper</a>
    </div>
  );
}
