"use client";

import { noto_serif } from "@/components/ui/fonts";
import { cn } from "@/utils/cn";
import type { ArticleProps } from "@/types";

import { usePathname } from "next/navigation";
import Custom404 from "@/app/404";

import Image from "next/image";
import articleImgPlaceholderLg from "../../../public/article-img-placeholder_lg.png";
import MoreNewsSkeleton from "@/components/ui/MoreNewsSkeleton";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getTopStories } from "@/api/getArticle";

const queryClient = new QueryClient();

export default function Section() {
  return (
    <QueryClientProvider client={queryClient}>
      <Sections />
    </QueryClientProvider>
  );
}

const Sections = () => {
  const sections = ["us", "world", "politics", "opinion", "technology", "arts"];
  const section = sections.includes(usePathname().split("/")[1] as string)
    ? usePathname().split("/")[1]
    : "home";

  const { isLoading, isError, data } = getTopStories(section);

  if (!sections.includes(usePathname().split("/")[1] as string)) {
    return <Custom404 />;
  }

  if (isLoading) {
    return (
      <>
        <MoreNewsSkeleton />
        <MoreNewsSkeleton />
        <MoreNewsSkeleton />
      </>
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="py-4">
      <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
        {data.map((article: ArticleProps) => (
          <a
            key={article.url}
            href={article.url}
            className="py-8 grid grid-cols-12 hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
          >
            <div className="col-span-6">
              <article>
                <div className="space-y-3">
                  <h3
                    className={cn(
                      "font-semibold text-3xl",
                      noto_serif.className,
                    )}
                  >
                    {article.title}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">
                    {article.abstract}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {article.byline}
                  </p>
                </div>
              </article>
            </div>
            <div className="pl-8 col-span-6 justify-self-end text-right">
              {article.multimedia?.[0]?.url ? (
                <img src={article.multimedia?.[0]?.url} alt="Article cover" />
              ) : (
                <Image
                  src={articleImgPlaceholderLg}
                  alt="Article image placeholder"
                />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
