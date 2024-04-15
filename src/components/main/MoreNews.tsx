import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";

import { getTopStories } from "@/api/getArticle";

import Image from "next/image";
import articleImgPlaceholderLg from "../../../public/article-img-placeholder_lg.png";
import MoreNewsSkeleton from "@/components/ui/MoreNewsSkeleton";

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
    return <p>Error loading data</p>;
  }

  return (
    <>
      {data.slice(9, 15).map((article: ArticleProps) => (
        <a
          key={article.url}
          href={article.url}
          className="py-8 lg:grid grid-cols-12 hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
        >
          <article className="col-span-4">
            <div className="space-y-2">
              <p className={cn("font-semibold text-lg", noto_serif.className)}>
                {article.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {article.abstract}
              </p>
              <p className="text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                {article.byline}
              </p>
            </div>
          </article>
          <div className="pl-4 col-span-8 justify-self-end text-right">
            <figure className="w-full">
              {article.multimedia[0]?.url ? (
                <img src={article.multimedia[0]?.url} alt={article.title} />
              ) : (
                <Image src={articleImgPlaceholderLg} alt={article.title} />
              )}
              <figcaption className="pt-2 text-xxs text-neutral-800 dark:text-neutral-300">
                {article.multimedia[0]?.copyright}
              </figcaption>
            </figure>
          </div>
        </a>
      ))}
    </>
  );
}
