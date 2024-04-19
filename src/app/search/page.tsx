"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getSearch } from "@/api/getArticle";
import IsError from "@/utils/isError";

const queryClient = new QueryClient();
export default function Search() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetSearch />
    </QueryClientProvider>
  );
}

const GetSearch = ({ searchParams }: { searchParams?: { query?: string } }) => {
  const query = searchParams?.query || "";
  const { isLoading, error, data } = getSearch(query);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return error.message;
  }

  return (
    <div>
      {data.map((article) => (
        <div key={article.web_url} className={article.headline.main}>
          <h1>{article.web_url}</h1>
        </div>
      ))}
    </div>
  );
};
