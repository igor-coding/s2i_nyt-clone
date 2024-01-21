"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

// OPT: Destructure the function in API and client component
function GetJokes() {
  const { data, error, isPending } = useQuery({
    queryKey: ["jokes"],
    queryFn: async () => {
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      return res.data.joke;
    },
  });

  if (isPending) return "Loading...";
  if (error) return "Stocks: Unavailable";

  return <span>{data}</span>;
}

export default function Jokes() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetJokes />
    </QueryClientProvider>
  );
}
