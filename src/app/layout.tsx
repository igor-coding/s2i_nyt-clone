"use client";

// import type { Metadata } from "next";
import Head from "next/head";
import { albert_sans } from "@/components/ui/fonts";

import { cn } from "@/utils/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/app/globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "s2i: NYT Clone",
//   description: "s2i: New York Times clone",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>s2i: NYT Clone</title>
        <meta name="description" content="s2i: New York Times clone" />
      </Head>
      <body
        className={cn(
          "overflow-x-hidden max-w-7xl mx-auto h-full bg-white text-black dark:bg-black dark:text-white",
          albert_sans.className,
        )}
      >
        <Header />
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
