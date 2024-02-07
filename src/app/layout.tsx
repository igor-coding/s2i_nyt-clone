import "@/styles/globals.css";

import { albert_sans } from "@/components/ui/fonts";

export const metadata = {
  title: "s2i: NYT Clone",
  description: "s2i: New York Times clone",
  // TODO: Add favicon
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { cn } from "@/utils/cn";

import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-x-hidden max-w-[1350px] mx-auto px-5 bg-white text-black dark:bg-black dark:text-white",
          albert_sans.className,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
