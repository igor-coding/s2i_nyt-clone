import { cn } from "@/utils/cn";
import { noto_serif_display } from "@/components/ui/fonts";
import type { TopStoriesProps } from "@/types";

import { getArticle } from "@/api/getArticle";

import TopStoriesSkeleton from "@/components/ui/TopStoriesSkeleton";

export default function TopStories({
  startLongArticle,
  endLongArticle,
  startShortArticle,
  endShortArticle,
  startMultimedia,
  endMultimedia,
}: TopStoriesProps) {
  const { topStories } = getArticle();

  if (topStories.isLoading) {
    return (
      <>
        <TopStoriesSkeleton />
        <TopStoriesSkeleton />
        <TopStoriesSkeleton />
      </>
    );
  }

  if (topStories.isError) {
    return <p>Error loading data</p>;
  }

  const topStoriesData = topStories.data;

  return (
    <section className="py-8 grid grid-cols-12">
      <div className="col-span-4">
        <article>
          {topStoriesData
            .slice(startLongArticle, endLongArticle)
            .map((article, id) => (
              <a
                href={article.url}
                className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4 hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
              >
                <div className="space-y-1">
                  <p
                    className={cn(
                      "font-semibold text-lg",
                      noto_serif_display.className,
                    )}
                  >
                    {article.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {article.abstract}
                  </p>
                  <p className="text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                    {article.byline}
                  </p>
                </div>
              </a>
            ))}
        </article>
        <article>
          {topStoriesData
            .slice(startShortArticle, endShortArticle)
            .map((article, id) => (
              <a
                href={article.url}
                className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
              >
                <div className="space-y-1">
                  <p
                    className={cn(
                      "font-semibold text-base",
                      noto_serif_display.className,
                    )}
                  >
                    {article.title}
                  </p>
                  <p className="text-xxs text-neutral-600 dark:text-neutral-300 truncate">
                    {article.byline}
                  </p>
                </div>
              </a>
            ))}
        </article>
      </div>
      {topStoriesData
        .slice(startMultimedia, endMultimedia)
        .map((article, id) => (
          <div className="pl-4 col-span-8 justify-self-end text-right">
            <a href={article.url} className="hover:opacity-90 duration-150">
              <figure className="w-full">
                <img src={article.multimedia[1].url} alt="alt" />
                <figcaption className="pt-2 text-xxs text-neutral-800 dark:text-neutral-300">
                  {article.multimedia[1].copyright}
                </figcaption>
              </figure>
            </a>
          </div>
        ))}
    </section>
  );
}
