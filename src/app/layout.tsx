import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/footer";
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
        <main className="h-sceen flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
