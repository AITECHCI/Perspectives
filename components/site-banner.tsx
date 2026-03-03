"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function SiteBanner() {
  return (
    <div className="group relative top-0 bg-perspectives_marron py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="#"
          
          className="inline-flex text-xs leading-normal md:text-sm"
        >
       
         <div className="flex items-center">
          <div className="ml-1 font-[580] flex items-center dark:font-[550]">
            <Image src="/images/Monogramme.gif" alt="" width={150} height={150} />
         
          </div>
        </div>

        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
