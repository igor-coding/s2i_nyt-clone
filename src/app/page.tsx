"use client";

import useFetchData from "@/hooks/useFetchData";

import Article from "@/components/main/Article";
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

  return (
    <div className="py-4 grid grid-cols-4">
      <main className="col-span-3 border-r border-r-neutral-200 dark:border-r-neutral-700 pr-4">
        <Article />
        {/* {isPending && <div>Loading...</div>} */}
        {/* {error && <div>Error</div>} */}
        {/* {data && <div>{data[1].title}</div>} */}
        {/* {data && <div>{data[1].section}</div>} */}
      </main>
      <Aside />
    </div>
  );
}
