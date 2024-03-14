import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { GetStockProps } from "@/types";

export const getStock = ({ queryKey, stocksTicker, date }: GetStockProps) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.polygon.io/v1/open-close/${stocksTicker}/${date}?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_KEY}`,
      );
      return data;
    },
  });
};
