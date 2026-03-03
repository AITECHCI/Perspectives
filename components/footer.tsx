"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuList } from "@/config/menu-list";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <footer className="bg-[#2D2421] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-center -ml-12 lg:items-center text-center lg:text-left w-full lg:w-1/3 gap-4">
            <Icons.logo_white className="w-22 h-20" />
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61562775252547",
                  icon: <Image src={"/images/icon facebook.png"} alt={""} width={25} height={25} className="m-1"/>,
                },
                {
                  href: "https://www.linkedin.com/company/perspectivesinternational",
                  icon: <Image src={"/images/icon linkedin.png"} alt={""} width={25} height={25} className="m-1"/>,
                },
                {
                  href: "https://www.instagram.com/perspectives_ci",
                  icon: <Image src={"/images/icon instagramme.png"} alt={""} width={25} height={25} className="m-1"/>,
                },
                    {
        href: "https://www.tiktok.com/@perspectives_ci", // Remplacez par votre lien TikTok réel
        icon: <Image src={"/images/tiktok icone.png"} alt={""} width={25} height={25} className="m-1"/>, // Assurez-vous que Icons.tiktok existe
      },
                    ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-novis_green text-black ring-1 ring-novis_yellow bg-[#F4E0D7] flex justify-center items-center hover:bg-novis_yellow transition"
                  aria-label={`Visit our ${social.href.split(".")[1]} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Menu and Info Sections */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 mr-10 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Menu Section 1 */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {menuList[1]?.menus[0]?.label || "Menu"}
              </h3>
              <nav className="mt-4 flex flex-col gap-3" aria-label="Footer menu 1">
                {menuList[1]?.menus[0]?.submenus.slice(1).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="text-sm hover:font-semibold transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Menu Section 2 */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {menuList[2]?.menus[0]?.label || "Services"}
              </h3>
              <nav className="mt-4 flex flex-col gap-3" aria-label="Footer menu 2">
                {menuList[2]?.menus[0]?.submenus.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="text-sm hover:font-semibold transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* News Section */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wide">Actualité</h3>
              <nav className="mt-4 flex flex-col gap-3" aria-label="News links">
                {menuList[4]?.menus[0]?.href && (
                  <Link
                    href={menuList[4].menus[0].href}
                    className="text-sm font-bold hover:font-semibold transition-all duration-200"
                  >
                    {menuList[4].menus[0].label}
                  </Link>
                )}
                {menuList[5]?.menus[0]?.href && (
                  <Link
                    href={menuList[5].menus[0].href}
                    className="text-sm hover:font-semibold transition-all duration-200"
                  >
                    {menuList[5].menus[0].label}
                  </Link>
                )}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="text-sm" >
              <h3 className="text-lg font-semibold uppercase tracking-wide">Informations</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <p>
                  <span className="font-medium">Contact:</span> +225 07 13 70 50 35
                </p>
                <p className="flex flex-row space-x-1">
                <span className="font-medium ">Email: </span>{""}
                  <a
                    href="mailto:infos@perspectivesci.com"
                    className="hover:underline "
                  >
                    <span className="font-medium">infos@perspectivesci.com</span>
                  </a>
                </p>
                <p>
                  <span className="font-medium">Adresse:</span> Marcory Boulevard FHB ex VGE Immeuble Diamond Ivoire,
                  Abidjan, Côte d&apos;Ivoire 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}