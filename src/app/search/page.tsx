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

const GetSearch = () => {
  const { isLoading, error, data } = getSearch("election");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return error.message;
  }

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
};
