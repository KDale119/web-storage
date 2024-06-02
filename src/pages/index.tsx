import Albums from "@/components/Albums";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Home() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <Albums/>
        </QueryClientProvider>
      </>
  )
}