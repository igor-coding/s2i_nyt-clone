import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getArticle = () => {
  const topStoriesQuery = useQuery({
    queryKey: ["topstories"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.results;
    },
  });

  const mostPopularQuery = useQuery({
    queryKey: ["mostpopular"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.results;
    },
  });

  const booksQuery = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.NEXT_PUBLIC_NYT_KEY}`,
      );
      return data.results;
      // {booksData?.lists?.[0]?.books?.[0]?.author}
    },
  });

  return {
    topStories: topStoriesQuery,
    mostPopular: mostPopularQuery,
    books: booksQuery,
  };
};
