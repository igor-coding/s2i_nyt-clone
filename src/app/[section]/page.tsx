"use client";

import { noto_serif } from "@/components/ui/fonts";
import { cn } from "@/utils/cn";

import { usePathname } from "next/navigation";
import Custom404 from "@/app/404";

import Image from "next/image";
import imgPlaceholder from "../../../public/img-placeholder.jpg";
import MoreNewsSkeleton from "@/components/ui/MoreNewsSkeleton";
import IsError from "@/utils/isError";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getTopStories } from "@/api/getArticle";

export interface ArticleProps {
  url: string;
  title: string;
  abstract: string;
  byline: string;
  multimedia: {
    url: string;
    copyright?: string;
  }[];
}

const queryClient = new QueryClient();

export default function Section() {
  return (
    <QueryClientProvider client={queryClient}>
      <Sections />
    </QueryClientProvider>
  );
}

const Sections = () => {
  const sections = [
    "us",
    "world",
    "politics",
    "opinion",
    "technology",
    "arts",
    "food",
  ];

  const section = usePathname().split("/")[1] as string;

  if (!sections.includes(section)) {
    return <Custom404 />;
  }

  const { isLoading, isError, data } = getTopStories(section);

  if (isLoading) {
    return (
      <div className="px-8">
        <MoreNewsSkeleton />
        <MoreNewsSkeleton />
        <MoreNewsSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <>
        <p
          className={cn(
            "pt-4 lg:pt-8 pl-6 lg:pl-0 font-semibold text-2xl capitalize",
            noto_serif.className,
          )}
        >
          {section?.includes("us") ? "U.S." : section} Section
        </p>
        <IsError className="py-6" />
      </>
    );
  }

  return (
    <div className="grid px-4 lg:px-0 divide-y divide-neutral-200 dark:divide-neutral-700">
      <h1
        className={cn(
          "border-b border-black dark:border-white py-4 md:py-6 text-3xl md:text-5xl font-bold capitalize",
          noto_serif.className,
        )}
      >
        {section?.includes("us") ? "U.S." : section} News
      </h1>
      {data.map((article: ArticleProps) => (
        <a
          key={article.url}
          href={article.url}
          className="py-4 md:py-8 md:grid grid-cols-12 lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
        >
          <div className="col-span-6">
            <article>
              <div className="space-y-3">
                <h3
                  className={cn(
                    "font-semibold text-2xl md:text-3xl",
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
          <div className="pt-4 md:pt-0 md:pl-8 col-span-6 justify-self-end text-right">
            {article.multimedia?.[0]?.url ? (
              <figure>
                <img src={article.multimedia?.[0]?.url} alt={article.title} />
                <figcaption className="pt-1 text-xxs text-neutral-800 dark:text-neutral-300">
                  {article.multimedia?.[0]?.copyright}
                </figcaption>
              </figure>
            ) : (
              <Image src={imgPlaceholder} alt={article.title} />
            )}
          </div>
        </a>
      ))}
    </div>
  );
};
