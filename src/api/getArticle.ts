import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getTopStories = (section: string | undefined) => {
  return useQuery({
    queryKey: ["topstories"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.results;
    },
  });
};

export const getNewsWire = () => {
  return useQuery({
    queryKey: ["newswire"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.results;
    },
  });
};

export const getBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.results;
    },
  });
};

export const getSearch = (searchQuery: string) => {
  return useQuery({
    queryKey: ["search", searchQuery],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&fq=source:("The New York Times")&page=0&sort=newest&api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.response.docs;
    },
  });
};
