import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";
import type { ArticleProps } from "@/types";

import Image from "next/image";
import imgPlaceholder from "../../../public/img-placeholder.jpg";
import AsideSkeleton from "@/components/ui/AsideSkeleton";

import { getNewsWire } from "@/api/getArticle";

export default function Aside() {
  const { isLoading, isError, data } = getNewsWire();

  if (isLoading) {
    return <AsideSkeleton />;
  }

  if (isError) {
    return (
      <p className="my-8 pl-4 border-l border-neutral-200 dark:border-neutral-700">
        Something went wrong...
        <br />
        Please refresh the page
      </p>
    );
  }

  return (
    <aside className="hidden min-[1070px]:block border-l border-neutral-200 dark:border-neutral-700 my-8 pl-4 divide-y divide-black dark:divide-white">
      <section className="pb-4">
        <div className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4">
          <a
            href={data[0].url}
            className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
          >
            {data[0].multimedia[2]?.url ? (
              <img
                src={data[0].multimedia[2]?.url}
                alt={data[0].title}
                className="w-full"
              />
            ) : (
              <Image
                src={imgPlaceholder}
                alt={data[0].title}
                className="w-full"
              />
            )}
            <div>
              <p
                className={cn(
                  "py-2 font-semibold text-lg",
                  noto_serif.className,
                )}
              >
                {data[0].title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {data[0].abstract}
              </p>
            </div>
          </a>
        </div>
        <div>
          <a href="/">
            <h3 className="pb-4 font-semibold text-sm hover:text-neutral-500 hover:dark:text-neutral-300 duration-150">
              Latest
            </h3>
          </a>
          <div className="grid grid-cols-2 gap-4">
            {data.slice(1, 9).map((article: ArticleProps) => (
              <a
                key={article.url}
                href={article.url}
                className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
              >
                {article.multimedia[2]?.url ? (
                  <img
                    src={article.multimedia[2]?.url}
                    alt={data[0].title}
                    className="w-full"
                  />
                ) : (
                  <Image
                    src={imgPlaceholder}
                    alt={data[0].title}
                    className="w-full"
                  />
                )}
                <div>
                  <p
                    className={cn(
                      "py-2 font-semibold text-sm",
                      noto_serif.className,
                    )}
                  >
                    {article.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}
