import { Suspense } from "react";
import SearchResultsClient from "./SearchResultsClient";
import Container from "@/components/Container";
import { Loader2 } from "lucide-react";

// 1. Optional: Add Metadata for the search page
export const metadata = {
  title: "Search Results | Exotic Animales",
  description: "Search across our exotic pet database, legality guides, and vet directories.",
};

// 2. The Loading State
const SearchLoader = () => (
  <div className="flex flex-col items-center justify-center py-32">
    <Loader2 className="w-12 h-12 animate-spin text-shop_dark_green mb-4" />
    <p className="text-gray-500 font-medium animate-pulse">Scanning the database...</p>
  </div>
);

// 3. THE PAGE COMPONENT (Must be default export)
export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Container className="py-12">
        {/* useSearchParams() requires a Suspense boundary 
            to prevent build errors on Vercel/Next.js 
        */}
        <Suspense fallback={<SearchLoader />}>
          <SearchResultsClient />
        </Suspense>
      </Container>
    </main>
  );
}