"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SiteBanner() {
  return (
    <div className="group relative top-0 bg-perspectives_marron py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="#"
          
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            BIENVENUE CHRZ <span className="font-lora">PERSPECTIVES COTE D’IVOIRE</span> CHAQUE DÉFI EST UNE CHANCE DE BRILLER.
          </span>{" "}
          <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
