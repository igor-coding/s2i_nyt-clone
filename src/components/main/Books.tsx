import { cn } from "@/utils/cn";
import { noto_serif } from "@/components/ui/fonts";

import { getBooks } from "@/api/getArticle";
import type { BooksProps } from "@/types";

import BooksSkeleton from "@/components/ui/BooksSkeleton";

export default function Books() {
  const { isLoading, isError, data } = getBooks();

  if (isLoading) {
    return (
      <>
        <BooksSkeleton />
        <BooksSkeleton />
        <BooksSkeleton />
      </>
    );
  }

  if (isError) {
    return (
      <div className="space-y-2">
        <p className="text-2xl">Books</p>
        <p className="pb-8 text-lg">
          Something went wrong... Please refresh the page later
        </p>
      </div>
    );
  }

  const booksData = data.lists[0].books;

  return (
    <>
      <h1
        className={cn(
          "pt-6 pb-4 text-3xl font-bold capitalize",
          noto_serif.className,
        )}
      >
        the new york times best sellers
      </h1>
      {booksData.slice(0, 10).map((book: BooksProps) => (
        <section key={book.amazon_product_url}>
          <a
            href={book.amazon_product_url}
            className="py-8 grid grid-cols-12 hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
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
            <div className="pl-8 col-span-4 place-self-end">
              <img src={book.book_image} alt="Book cover" className="h-40" />
            </div>
          </a>
        </section>
      ))}
    </>
  );
}
