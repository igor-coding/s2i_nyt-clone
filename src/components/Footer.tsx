import Image from "next/image";
import poweredbyNytLight from "../../public/poweredby-nyt_light.png";
import poweredbyNytDark from "../../public/poweredby-nyt_dark.png";

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
          <strong>by Igor Fiorio</strong>
        </p>
      </a>
    </footer>
  );
}
