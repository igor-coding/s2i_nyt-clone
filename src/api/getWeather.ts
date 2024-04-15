import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getWeather = (latitude: number, longitude: number) => {
  return useQuery({
    refetchInterval: 1440000,
    queryKey: ["weather"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`,
      );
      return data;
    },
  });
};
