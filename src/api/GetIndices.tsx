import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// OPT: Destructure the function in API and client component
// TODO: Add error handling

export default function GetIndices() {
  const url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo";

  const { data, error, isPending } = useQuery({
    queryKey: ["indices"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    },
  });

  if (isPending) return "Loading...";
  if (error)
    console.log(`ERROR_NAME: ${error.name} - ERROR_MSG: ${error.message}`);

  return <span>{data}</span>;
}
