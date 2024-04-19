import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";

import { getTopStories } from "@/api/getArticle";
import type { ArticleProps } from "@/types";

import Image from "next/image";
import imgPlaceholder from "../../../public/img-placeholder.jpg";
import MainNewsSkeleton from "@/components/ui/MainNewsSkeleton";
import IsError from "@/utils/isError";

export default function MainNews() {
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
    return (
      <>
        <p
          className={cn(
            "font-semibold text-2xl md:text-lg",
            noto_serif.className,
          )}
        >
          Main News Section
        </p>
        <IsError className="px-0" />
      </>
    );
  }

  return (
    <div className="after:content-[''] after:block after:h-px after:w-full after:bg-black dark:after:bg-white after:my-4 divide-y divide-black dark:divide-white">
      {[...Array(3)].map((_, index) => (
        <section
          key={data[index].url}
          className="py-4 lg:py-8 md:grid md:grid-cols-12"
        >
          <div className="md:col-span-4 lg:col-span-4">
            <article>
              {data
                .slice(index * 3, index * 3 + 1)
                .map((article: ArticleProps) => (
                  <a
                    key={article.url}
                    href={article.url}
                    className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4 lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
                  >
                    <div className="space-y-2 md:space-y-1">
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
                    <div key={article.url} className="md:hidden pt-4">
                      {article.multimedia && article.multimedia.length > 0 ? (
                        <figure>
                          {article.multimedia[1]?.url ? (
                            <img
                              src={article.multimedia[1]?.url}
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
                          <figcaption className="pt-1 text-right text-xxs text-neutral-800 dark:text-neutral-300">
                            {article.multimedia[1]?.copyright}
                          </figcaption>
                        </figure>
                      ) : (
                        <Image
                          src={imgPlaceholder}
                          alt={article.title}
                          className="w-full"
                        />
                      )}
                    </div>
                  </a>
                ))}
            </article>
            <article>
              {data
                .slice(index * 3 + 1, index * 3 + 2)
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
                .slice(index * 3 + 2, index * 3 + 3)
                .map((article: ArticleProps) => (
                  <a
                    key={article.url}
                    href={article.url}
                    className="lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
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
                      <p className="text-xs md:text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                        {article.byline}
                      </p>
                    </div>
                  </a>
                ))}
            </article>
          </div>
          {data.slice(index * 3, index * 3 + 1).map((article: ArticleProps) => (
            <div
              key={article.url}
              className="hidden md:block pl-4 md:col-span-8 lg:col-span-8 justify-self-end text-right"
            >
              <a href={article.url}>
                {article.multimedia && article.multimedia.length > 0 ? (
                  <figure>
                    {article.multimedia[1]?.url ? (
                      <img
                        src={article.multimedia[1]?.url}
                        alt="Article cover"
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
                      {article.multimedia[1]?.copyright}
                    </figcaption>
                  </figure>
                ) : (
                  <Image
                    src={imgPlaceholder}
                    alt={article.title}
                    className="w-full"
                  />
                )}
              </a>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
