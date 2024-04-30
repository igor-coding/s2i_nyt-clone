import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";

import { getTopStories } from "@/api/getArticle";

import Image from "next/image";
import imgPlaceholder from "../../../public/img-placeholder.jpg";
import MoreNewsSkeleton from "@/components/ui/MoreNewsSkeleton";
import IsError from "@/utils/isError";

import type { ArticleProps } from "@/types";

export default function MoreNews() {
  const { isLoading, isError, data } = getTopStories("home");

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
    return (
      <>
        <p
          className={cn(
            "font-semibold text-2xl md:text-lg",
            noto_serif.className,
          )}
        >
          More News Section
        </p>
        <IsError className="px-0" />
      </>
    );
  }

  return (
    <div className="divide-y divide-black dark:divide-white">
      {data.slice(9, 15).map((article: ArticleProps) => (
        <a
          key={article.url}
          href={article.url}
          className="py-4 lg:py-8 grid grid-cols-1 md:grid-cols-12 lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
        >
          <article className="md:col-span-4">
            <div className="space-y-2">
              <p
                className={cn(
                  "font-semibold text-2xl md:text-lg",
                  noto_serif.className,
                )}
              >
                {article.title}
              </p>
              <p className="text-base md:text-sm text-neutral-600 dark:text-neutral-300">
                {article.abstract}
              </p>
              <p className="text-xs md:text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                {article.byline}
              </p>
            </div>
          </article>
          <div className="pt-4 md:pt-0 md:pl-4 md:col-span-8 md:justify-self-end text-right">
            <figure className="w-full">
              {article.multimedia[0]?.url ? (
                <img
                  src={article.multimedia[0]?.url}
                  alt={article.title}
                  className="w-full"
                />
              ) : (
                <Image
                  src={imgPlaceholder}
                  alt={article.title}
                  className="w-full"
                />
              )}
              <figcaption className="pt-1 text-xxs text-neutral-800 dark:text-neutral-300">
                {article.multimedia[0]?.copyright}
              </figcaption>
            </figure>
          </div>
        </a>
      ))}
    </div>
  );
}
