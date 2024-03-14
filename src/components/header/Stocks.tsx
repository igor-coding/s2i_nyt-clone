"use client";

import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getStock } from "@/api/getStock";

import Icons from "@/components/ui/icons";

const queryClient = new QueryClient();

export default function Stocks() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

const originalDate = new Date();
originalDate.setDate(originalDate.getDate() - 1);
const formattedDate = `${originalDate.getFullYear()}-${String(
  originalDate.getMonth() + 1,
).padStart(2, "0")}-${String(originalDate.getDate()).padStart(2, "0")}`;

export function Example() {
  const { data, isPending, error, refetch } = getStock({
    queryKey: "stocks",
    // FEAT: Map symbols: "AAPL", "AMZN", "GOOG", "MSFT", "NFLX", "TSLA"
    stocksTicker: "NFLX",
    date: formattedDate,
  });

  const fetchInterval = 86400000;
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, fetchInterval);

    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <div className="flex-1 text-right">
      {isPending && <span>Loading yesterday stocks...</span>}
      {error && <span>Stocks are not available</span>}
      <span className="pr-6">{data?.symbol}</span>
      <span>{data?.close}</span>
      {/* FEAT: Add the logic for displaying the icon if the stock is up or down */}
      {/* <span>{Icons.moveUp}</span> */}
    </div>
  );
}
