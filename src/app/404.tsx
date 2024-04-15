import Link from "next/link";

export default function Custom404() {
  return (
    <div className="py-32 px-10 h-auto w-full flex flex-col justify-center items-center text-center space-y-2">
      <h1 className="text-3xl font-bold">404 | Page Not Found</h1>
      <p className="text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="pt-6">
        Check the URL or Return to{" "}
        <Link
          href="/"
          className="underline underline-offset-4 hover:text-neutral-500 hover:dark:text-neutral-300 duration-150"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
