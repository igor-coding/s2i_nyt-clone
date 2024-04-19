import "@/app/globals.css";

import { Providers } from "@/app/providers";
import { albert_sans } from "@/components/ui/fonts";

export const metadata = {
  title: "s2i: NYT Clone",
  description: "s2i: New York Times clone",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-screen lg:max-w-[1350px] lg:mx-auto lg:px-8 bg-white text-black dark:bg-black dark:text-white",
          albert_sans.className,
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
