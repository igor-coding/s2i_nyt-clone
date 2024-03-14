import type { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ResponseType = {
  status: string;
  section: string;
  results: ResultType[];
};

export type ResultType = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  multimedia: MultimediaType[];
};

export type MultimediaType = {
  url: string;
  width: number;
  caption: string;
  copyright: string;
};

export type GetStockProps = {
  queryKey: string;
  stocksTicker: string;
  date: string;
};

export type ArticleProps = {
  url: string;
  title: string;
  abstract: string;
  byline: string;
  multimedia: { url: string }[];
};

export type TopStoriesProps = {
  startLongArticle: number;
  endLongArticle: number;
  startShortArticle: number;
  endShortArticle: number;
  startMultimedia: number;
  endMultimedia: number;
};

export type SectionProps = {
  params: {
    section: string;
  };
};

export type UseFetchArticleProps = {
  queryKey: string;
  api: string;
  section: string;
};

export type UseToggleProps = {
  isOpen: boolean;
  handleToggle: () => void;
};
