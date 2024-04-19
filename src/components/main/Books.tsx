import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";

import { getBooks } from "@/api/getArticle";
import type { BooksProps } from "@/types";

import BooksSkeleton from "@/components/ui/BooksSkeleton";
import IsError from "@/utils/isError";

export default function Books() {
  const { isLoading, isError, data } = getBooks();

  if (isLoading) {
    return (
      <>
        <p
          className={cn(
            "pt-8 pb-4 text-3xl font-bold capitalize",
            noto_serif.className,
          )}
        >
          the new york times best sellers
        </p>
        <BooksSkeleton />
        <BooksSkeleton />
        <BooksSkeleton />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p className={cn("font-semibold text-2xl", noto_serif.className)}>
          The New York Times Best Sellers
        </p>
        <IsError className="px-0" />
      </>
    );
  }

  const books = data.lists[0].books;

  return (
    <div className="pt-8 divide-y divide-neutral-200 dark:divide-neutral-700">
      <h1
        className={cn(
          "pb-4 text-3xl font-bold capitalize",
          noto_serif.className,
        )}
      >
        the new york times best sellers
      </h1>
      {books.slice(0, 10).map((book: BooksProps) => (
        <section key={book.amazon_product_url} className="py-8">
          <a
            href={book.amazon_product_url}
            className="grid gap-4 md:gap-0 md:grid-cols-12 lg:hover:text-neutral-500 lg:hover:dark:text-neutral-300 duration-150"
          >
            <div className="pr-8 col-span-2">
              <p
                className={cn(
                  "text-2xl text-neutral-500 dark:text-neutral-300",
                  noto_serif.className,
                )}
              >
                {book.rank}
              </p>
            </div>
            <div className="col-span-6">
              <div>
                <div className="space-y-2">
                  <p
                    className={cn(
                      "font-semibold text-2xl",
                      noto_serif.className,
                    )}
                  >
                    {book.title}
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">
                    {book.description}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 truncate">
                    {book.author}
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block pl-8 col-span-4 place-self-end">
              <img src={book.book_image} alt="Book cover" className="h-40" />
            </div>
          </a>
        </section>
      ))}
    </div>
  );
}
