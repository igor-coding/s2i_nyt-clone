import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import { albert_sans } from "@/components/ui/fonts";

export const metadata = {
  title: "s2i: NYT Clone",
  description: "s2i: New York Times clone",
  // TODO: Add favicon
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { cn } from "@/utils/cn";

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
          "overflow-x-hidden max-w-[1350px] mx-auto px-5 bg-white text-black dark:bg-black dark:text-white",
          albert_sans.className,
        )}
      >
        <Providers>
          {/* TODO: Render `Header` only if in Home Page else render `SectionHeader` */}
          {/* <Header /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
