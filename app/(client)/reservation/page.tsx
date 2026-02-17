import { Suspense } from "react";
import PetReservation from "@/components/PetReservation";
import Container from "@/components/Container";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";

// Meta Data for SEO
export const metadata: Metadata = {
  title: "Secure Reservation | Petfinity Exotic Ranch",
  description: "Book a professional boarding stay for your exotic pet or reserve your new companion today.",
};

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12">
      <Container>
        {/* Suspense is REQUIRED for components using useSearchParams */}
        <Suspense 
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
              <p className="text-gray-500 animate-pulse font-medium">Loading Reservation Securely...</p>
            </div>
          }
        >
          <PetReservation />
        </Suspense>
      </Container>
    </main>
  );
}