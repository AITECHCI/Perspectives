import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "../icons";
import { MainNav } from "./main-nav";
import Sidebar from "@/components/sidebare/sidebar";

export default function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full supports-backdrop-blur:bg-background/95 bg-[#FFF7F4] backdrop-blur-lg"
      )}
    >
      <style jsx>{`
        @media (max-width: 767px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>
      <div className="container px-4 flex h-16 items-center justify-between">
        {/* Logo and Sidebar */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo_black_rogner className="w-14 md:size-26" />
          </Link>
          <Sidebar />
        </div>
        {/* Navigation principale */}
        <div className="hide-on-mobile">
          <MainNav />
        </div>
        {/* Bouton de réservation */}
        <div className="flex items-center gap-2 md:bg-[#F4E0D7]">
          <Link
            className={cn(
              buttonVariants(),
              "max-w-32 md:max-w-48 gap-2 overflow-hidden whitespace-pre",
              "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#F4E0D7]"
            )}
            href="/our_spaces/private_offices"
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <Icons.calendar className="size-4" />
              <span className="ml-1 text-sm sm:text-md">Réservez</span>
            </div>
          </Link>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
}