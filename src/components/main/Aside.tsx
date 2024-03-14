import { cn } from "@/utils/cn";
import { noto_serif_display } from "@/components/ui/fonts";

/*
  TODO: Add these sections:
  * Most Popular (remove "Opinion" section)
  * Top Stories: "Opinion" (only "Opinion" section)
  * Archive: "In Case You Missed It" (no "Opinion" section)
*/

// FEAT: If `isLoading` return simple rectangles as placeholders pulsing
export default function Aside() {
  return (
    <aside className="border-l border-neutral-200 dark:border-neutral-700 my-8 pl-4 divide-y divide-black dark:divide-white">
      <section className="pb-4">
        <div className="after:content-[''] after:block after:h-px after:w-full after:bg-neutral-200 dark:after:bg-neutral-700 after:my-4">
          <a
            href="/"
            className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
          >
            <img
              src="https://static01.nyt.com/images/2024/02/24/reader-center/24-CURB-HP-PROMO-COVER/24-CURB-HP-PROMO-COVER-threeByTwoMediumAt2X.png"
              className="w-full"
              alt="alt"
            />
            <div>
              <p
                className={cn(
                  "py-2 font-semibold text-lg",
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
            </div>
          </a>
        </div>
        {/* FEAT: Make a carousel of 4 elements and add 2 buttons for next and previous */}
        <div>
          <div className="grid grid-cols-2">
            <div className="pb-4 col-span-2 flex justify-between items-center">
              <a href="/">
                <h3 className="font-semibold text-sm hover:text-neutral-500 hover:dark:text-neutral-300 duration-150">
                  Most Popular
                </h3>
              </a>
            </div>
            <div className="pr-4 border-r border-r-neutral-200 dark:border-r-neutral-700">
              <a
                href="/"
                className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
              >
                <img
                  src="https://static01.nyt.com/images/2024/02/24/reader-center/24-CURB-HP-PROMO-COVER/24-CURB-HP-PROMO-COVER-threeByTwoMediumAt2X.png"
                  alt="alt"
                />
                <div>
                  <p
                    className={cn(
                      "py-2 font-semibold text-sm",
                      noto_serif_display.className,
                    )}
                  >
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint
                  </p>
                </div>
              </a>
            </div>
            <div className="pl-4">
              <a
                href="/"
                className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
              >
                <img
                  src="https://static01.nyt.com/images/2024/02/24/reader-center/24-CURB-HP-PROMO-COVER/24-CURB-HP-PROMO-COVER-threeByTwoMediumAt2X.png"
                  alt="alt"
                />
                <div>
                  <p
                    className={cn(
                      "py-2 font-semibold text-sm",
                      noto_serif_display.className,
                    )}
                  >
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        {/* TODO: Make an horizontal line */}
        <div className="pb-4">
          <a href="https://www.nytimes.com/section/opinion">
            <h2 className="font-bold text-sm hover:text-neutral-500 hover:dark:text-neutral-300 duration-150">
              Opinion
            </h2>
          </a>
        </div>
        <a
          href="/"
          className="flex justify-between items-center hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
        >
          <div className="leading-5">
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              MAUREEN DOWD
            </p>
            <p className={cn("font-semibold", noto_serif_display.className)}>
              Camilla Takes Charge
            </p>
          </div>
          <div>
            <img
              src="https://static01.nyt.com/images/2018/04/02/opinion/maureen-dowd/maureen-dowd-thumbLarge.png?format=pjpg&quality=75&auto=webp&disable=upscale"
              className="w-12"
              alt="alt"
            />
          </div>
        </a>
      </section>
      <section className="pt-4">
        <div className="pb-4">
          <a href="/">
            <h2 className="font-bold text-sm hover:text-neutral-500 hover:dark:text-neutral-300 duration-150">
              In Case You Missed It
            </h2>
          </a>
        </div>
        <a
          href="/"
          className="hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
        >
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4">
              <p
                className={cn(
                  "pb-1 font-semibold text-sm",
                  noto_serif_display.className,
                )}
              >
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              </p>
              <p className="text-xxs text-neutral-600 dark:text-neutral-300">
                byline by someone
              </p>
            </div>
            <div className="col-span-2">
              <img
                src="https://static01.nyt.com/images/2024/02/20/well/20PRESIDENTIAL-FITNESS-TEST4/20PRESIDENTIAL-FITNESS-TEST4-square320-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                alt="alt"
              />
            </div>
          </div>
        </a>
      </section>
    </aside>
  );
}
