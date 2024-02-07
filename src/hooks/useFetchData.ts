import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface FetchDataProps {
  queryKey: string;
  api: string;
  section: string;
}

export const useFetchData = ({ queryKey, api, section }: FetchDataProps) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/${api}/v2/${section}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`,
      );
      return data.results;
    },
  });
};
