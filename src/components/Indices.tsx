import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GetIndices from "../api/GetIndices";

const queryClient = new QueryClient();

export default function Indices() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetIndices />
    </QueryClientProvider>
  );
}
