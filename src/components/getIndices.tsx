import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

const queryClient = new QueryClient();

export default function GetJoke() {
  return (
    <QueryClientProvider client={queryClient}>
      <Joke />
    </QueryClientProvider>
  );
}

// TODO: Use axios  with headers?
function Joke() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("https://icanhazdadjoke.com/").then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <h1>{data.value}</h1>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
