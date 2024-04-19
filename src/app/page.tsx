"use client";

import MainNews from "@/components/main/MainNews";
import MoreNews from "@/components/main/MoreNews";
import Books from "@/components/main/Books";
import Aside from "@/components/main/Aside";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

const Home = () => {
  return (
    <div className="px-6 lg:px-0 min-[1070px]:grid grid-cols-4 gap-4">
      <main className="md:col-span-4 lg:col-span-3">
        <MainNews />
        <MoreNews />
        <Books />
      </main>
      <Aside />
    </div>
  );
};
