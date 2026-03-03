// app/(website)/reservation/page.tsx
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import ListSpaceCard from "@/app/(website)/reservation/components/list-space-card";
import HeaderPage from "./components/header-page";


export default function ReservationPage() {
  return (
    <>
    <HeaderPage/>
    <Suspense
      fallback={
        <div className="container min-h-[200px] py-14 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
          <span className="ml-2 text-amber-600">Chargement...</span>
        </div>
      }
    >
      <ListSpaceCard/>
   
    </Suspense>
    </>
  );
}

// Optional: Force static generation if needed (though Next.js should handle this automatically)
export const dynamic = "force-static";