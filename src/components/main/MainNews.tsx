import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";

import { getTopStories } from "@/api/getArticle";
import type { TopStoriesProps } from "@/types";
import type { ArticleProps } from "@/types";

import Image from "next/image";
import articleImgPlaceholderMd from "../../../public/article-img-placeholder_md.png";
import articleImgPlaceholderLg from "../../../public/article-img-placeholder_lg.png";
import MainNewsSkeleton from "@/components/ui/MainNewsSkeleton";

export default function MainNews({
  startLongArticle1,
  endLongArticle1,
  startLongArticle2,
  endLongArticle2,
  startShortArticle,
  endShortArticle,
  startMultimedia,
  endMultimedia,
}: TopStoriesProps) {
  const { isLoading, isError, data } = getTopStories("home");

  if (isLoading) {
    return (
      <>
        <MainNewsSkeleton />
        <MainNewsSkeleton />
        <MainNewsSkeleton />
      </>
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <section className="py-4 lg:py-8 md:grid md:grid-cols-12">
      <div className="md:col-span-4 lg:col-span-4">
        {data
          .slice(startMultimedia, endMultimedia)
          .map((article: ArticleProps) => (
            <div key={article.url} className="md:hidden pb-4">
              <a href={article.url}>
                {article.multimedia && article.multimedia.length > 0 ? (
                  <figure className="w-full">
                    {article.multimedia[1]?.url ? (
                      <img
                        src={article.multimedia[1]?.url}
                        alt="Article cover"
                        className="w-full"
                      />
                    ) : (
                      <Image
                        src={articleImgPlaceholderLg}
                        alt="Article image placeholder"
                        className="w-full"
                      />
                    )}
                  </figure>
                ) : (
                  <Image
                    src={articleImgPlaceholderMd}
                    alt="Article image placeholder"
                    className="w-full"
                  />
                )}
              </a>
            </div>
          ))}
        <article>
          {data
            .slice(startLongArticle1, endLongArticle1)
            .map((article: ArticleProps) => (
              <a
                key={article.url}
                href={article.url}
                className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4 lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
              >
                <div className="space-y-2 md:space-y-1">
                  <p
                    className={cn(
                      "font-semibold text-xl md:text-lg",
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
              </a>
            ))}
        </article>
        <article>
          {data
            .slice(startLongArticle2, endLongArticle2)
            .map((article: ArticleProps) => (
              <a
                key={article.url}
                href={article.url}
                className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4 lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
              >
                <div className="space-y-2 md:space-y-1">
                  <p
                    className={cn(
                      "font-semibold text-xl md:text-lg",
                      noto_serif.className,
                    )}
                  >
                    {article.title}
                  </p>
                  <p className="md:hidden lg:block text-base md:text-sm text-neutral-600 dark:text-neutral-300">
                    {article.abstract}
                  </p>
                  <p className="text-xs md:text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                    {article.byline}
                  </p>
                </div>
              </a>
            ))}
        </article>
        <article>
          {data
            .slice(startShortArticle, endShortArticle)
            .map((article: ArticleProps) => (
              <a
                key={article.url}
                href={article.url}
                className="lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
              >
                <div className="space-y-2 md:space-y-1">
                  <p
                    className={cn(
                      "font-semibold text-lg md:text-base",
                      noto_serif.className,
                    )}
                  >
                    {article.title}
                  </p>
                  <p className="text-xs md:text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                    {article.byline}
                  </p>
                </div>
              </a>
            ))}
        </article>
      </div>
      {data
        .slice(startMultimedia, endMultimedia)
        .map((article: ArticleProps) => (
          <div
            key={article.url}
            className="hidden md:block pl-4 md:col-span-8 lg:col-span-8 justify-self-end text-right"
          >
            <a href={article.url}>
              {article.multimedia && article.multimedia.length > 0 ? (
                <figure className="w-full">
                  {article.multimedia[1]?.url ? (
                    <img src={article.multimedia[1]?.url} alt="Article cover" />
                  ) : (
                    <Image
                      src={articleImgPlaceholderLg}
                      alt="Article image placeholder"
                    />
                  )}
                  <figcaption className="pt-2 text-xxs text-neutral-800 dark:text-neutral-300">
                    {article.multimedia[1]?.copyright}
                  </figcaption>
                </figure>
              ) : (
                <Image
                  src={articleImgPlaceholderMd}
                  alt="Article image placeholder"
                />
              )}
            </a>
          </div>
        ))}
    </section>
  );
}
