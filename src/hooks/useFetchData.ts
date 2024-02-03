import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface QueryProps {
  queryKey: string;
  api: string;
  section: string;
}

export default function useFetchData({ queryKey, api, section }: QueryProps) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/${api}/v2/${section}.json?api-key=${process.env.NEXT_PUBLIC_TOP_STORIES_KEY}`,
      );
      return data.results;
    },
  });
}
