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
