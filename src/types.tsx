import type { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface UseToggleProps {
  isOpen: boolean;
  handleToggle: () => void;
}

export interface ArticleProps {
  url: string;
  title: string;
  abstract: string;
  byline: string;
  multimedia: {
    url: string;
    copyright?: string;
  }[];
}

export interface TopStoriesProps {
  startLongArticle1: number;
  endLongArticle1: number;
  startLongArticle2: number;
  endLongArticle2: number;
  startShortArticle: number;
  endShortArticle: number;
  startMultimedia: number;
  endMultimedia: number;
}

export interface BooksProps {
  amazon_product_url: string;
  rank: number;
  title: string;
  description: string;
  author: string;
  book_image: string;
}

export interface UserLocationProps {
  latitude: number | null;
  longitude: number | null;
}
