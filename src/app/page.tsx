"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFetchData from "@/hooks/useFetchData";

import Aside from "@/components/main/Aside";

type ResponseType = {
  status: string;
  section: string;
  results: ResultType[];
};

type ResultType = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  multimedia: MultimediaType[];
};

type MultimediaType = {
  url: string;
  width: number;
  caption: string;
  copyright: string;
};

export default function Main() {
  const { isPending, error, data } = useFetchData({
    queryKey: "topstories",
    api: "topstories",
    section: "travel",
  });

  console.log(data);

  /*
     TODO: Add these sections:
     * Top Stories
     * More News
     * Books
  */

  // FIX: replace `flex` with `grid`

  return (
    <div className="py-4 grid grid-cols-4">
      <main className="col-span-3 border-r border-r-neutral-200 dark:border-r-neutral-700 pr-4">
        {isPending && <div>Loading...</div>}
        {error && <div>Error</div>}
        {data && <div>{data[0].title}</div>}
        {data && <div>{data[0].section}</div>}
      </main>
      <Aside />
    </div>
  );
}
