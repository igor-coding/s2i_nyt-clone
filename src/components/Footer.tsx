import Image from "next/image";
import poweredbyNytLight from "../../public/poweredby-nyt_light.png";
import poweredbyNytDark from "../../public/poweredby-nyt_dark.png";

// FIX: `poweredby` is not changing color when dark mode is manual toggled
export default function Footer() {
  return (
    <footer className="mb-2 pt-4 border-double border-t-4 border-t-black dark:border-t-white flex justify-between text-end">
      <a href="https://developer.nytimes.com">
        <picture>
          <source
            srcSet={poweredbyNytDark.src}
            media="(prefers-color-scheme: dark)"
          />
          <Image
            src={poweredbyNytLight}
            alt="Data provided by The New York Times"
            priority
          />
        </picture>
      </a>
      <a href="https://igorfiorio.com">
        <p className="leading-4">
          2024 <br />
          <strong
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-px 
              before:bottom-0 before:left-0 before:bg-black dark:before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            by Igor Fiorio
          </strong>
        </p>
      </a>
    </footer>
  );
}
