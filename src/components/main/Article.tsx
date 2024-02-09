import { cn } from "@/utils/cn";
import { noto_serif_display } from "@/components/ui/fonts";

// interface ArticleProps {
//   title: string;
//   abstract: string;
//   byline: string;
//   url: string;
//   multimedia: string;
//   copyright: string;
//   imgUrl: string;
// }

// export default function Article({
//   title,
//   abstract,
//   byline,
//   url,
//   multimedia,
//   copyright,
//   imgUrl,
// }: ArticleProps) {
export default function Article() {
  return (
    <section className="mb-4 pb-4 grid grid-cols-6 border-b border-b-black dark:border-b-white">
      <div className="col-span-2">
        <div className="grid gap-4 pb-4 border-b border-b-neutral-200 dark:border-b-neutral-700">
          <a
            href="/"
            className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
          >
            <div className="grid gap-1">
              <p
                className={cn(
                  "font-semibold text-lg",
                  noto_serif_display.className,
                )}
              >
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem rem commodi labore sed voluptates totam dicta
                iure
              </p>
              <p className="text-xxs text-neutral-600 dark:text-neutral-300">
                byline by someone
              </p>
            </div>
          </a>
        </div>
        <div className="py-4 grid gap-4 border-b border-b-neutral-200 dark:border-b-neutral-700">
          <a
            href="/"
            className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
          >
            <div className="grid gap-1">
              <p
                className={cn(
                  "font-semibold text-base",
                  noto_serif_display.className,
                )}
              >
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem rem commodi labore sed voluptates totam dicta
                iure
              </p>
              <p className="text-xxs text-neutral-600 dark:text-neutral-300">
                byline by someone
              </p>
            </div>
          </a>
        </div>
        <div className="grid gap-4 pt-4">
          <a
            href="/"
            className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
          >
            <div className="grid gap-1">
              <p
                className={cn(
                  "font-semibold text-base",
                  noto_serif_display.className,
                )}
              >
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint
              </p>
              <p className="text-xxs text-neutral-600 dark:text-neutral-300">
                byline by someone
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="col-span-4 justify-self-end text-right">
        <figure className="w-full">
          <img
            src="https://static01.nyt.com/images/2024/01/31/multimedia/31boeing-cptz/31boeing-cptz-threeByTwoSmallAt2X.jpg"
            alt="image"
          />
          <figcaption className="pt-2 text-xxs text-neutral-800 dark:text-neutral-300">
            copyright
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
