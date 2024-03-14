"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "@/components/header/Header";
import TopStories from "@/components/main/TopStories";
import Aside from "@/components/main/Aside";

const queryClient = new QueryClient();

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export function Home() {
  /*
     TODO: Add these sections:
     * Top Stories (remove "Opinion" section)
     * More News (remove "Opinion" section)
     * Books
  */

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-4">
        <main className="col-span-3 divide-y divide-black dark:divide-white">
          <TopStories
            startLongArticle={0}
            endLongArticle={2}
            startShortArticle={2}
            endShortArticle={3}
            startMultimedia={0}
            endMultimedia={1}
          />
          <TopStories
            startLongArticle={3}
            endLongArticle={5}
            startShortArticle={5}
            endShortArticle={6}
            startMultimedia={3}
            endMultimedia={4}
          />
          <TopStories
            startLongArticle={6}
            endLongArticle={8}
            startShortArticle={8}
            endShortArticle={9}
            startMultimedia={6}
            endMultimedia={7}
          />
        </main>
        <Aside />
      </div>
    </>
  );
}
