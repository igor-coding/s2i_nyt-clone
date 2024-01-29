import type { Metadata } from "next";

import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { albert_sans } from "@/components/ui/fonts";

import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "s2i: NYT Clone",
  description: "s2i: New York Times clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-x-hidden h-full bg-white text-black dark:bg-black dark:text-white",
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
