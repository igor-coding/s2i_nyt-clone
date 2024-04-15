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
      <Page />
    </QueryClientProvider>
  );
}

export function Page() {
  return (
    <div className="px-6 md:grid grid-cols-4 gap-4">
      <main className="md:col-span-4 lg:col-span-3">
        <div className="after:content-[''] after:block after:h-px after:w-full after:bg-black dark:after:bg-white after:my-4 divide-y divide-black dark:divide-white">
          <MainNews
            startLongArticle1={0}
            endLongArticle1={1}
            startLongArticle2={1}
            endLongArticle2={2}
            startShortArticle={2}
            endShortArticle={3}
            startMultimedia={0}
            endMultimedia={1}
          />
          <MainNews
            startLongArticle1={3}
            endLongArticle1={4}
            startLongArticle2={4}
            endLongArticle2={5}
            startShortArticle={5}
            endShortArticle={6}
            startMultimedia={3}
            endMultimedia={4}
          />
          <MainNews
            startLongArticle1={6}
            endLongArticle1={7}
            startLongArticle2={7}
            endLongArticle2={8}
            startShortArticle={8}
            endShortArticle={9}
            startMultimedia={6}
            endMultimedia={7}
          />
        </div>
        <div className="divide-y divide-black dark:divide-white">
          <MoreNews />
        </div>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
          <Books />
        </div>
      </main>
      <Aside />
    </div>
  );
}
