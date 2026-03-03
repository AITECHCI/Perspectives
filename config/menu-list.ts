import { LucideIcon } from "lucide-react";
import { Icons } from "@/components/icons";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

// Fonction pour créer un menu
function createMenu(href: string, label: string, icon: LucideIcon, submenus: Submenu[], pathname: string): Menu {
  return {
    href,
    label,
    active: pathname.includes(href),
    icon,
    submenus
  };
}

// Fonction principale pour obtenir la liste des menus
export function getMenuList(pathname: string): Group[] {
  const menus = [
    {
      groupLabel: "",
      href: "/",
      label: "Accueil",
      icon: Icons.home,
      submenus: []
    },
    {
      groupLabel: "Services",
      href: "/services",
      label: "Nos Services",
      icon: Icons.library,
      submenus: [
        { href: "", label: "", active: pathname === "" },
        { href: "/our_spaces", label: "Finance", active: pathname === "/our_spaces" },
        { href: "/our_spaces/private_offices", label: "Immobilier", active: pathname === "/our_spaces/private_offices" },
        { href: "/private_offices", label: "Transit-Transport", active: pathname === "/private_offices" },
        { href: "/our_commerce", label: "Commerce général", active: pathname === "/our_commerce" },
      ]
    },
    {
      groupLabel: "Ressources",
      href: "/resources",
      label: "Ressources",
      icon: Icons.library,
      submenus: [
        { href: "/ressources", label: "Documents à Télécharger", active: pathname === "/ressources" },
      ]
    },
    {
      groupLabel: "Actualités",
      href: "",
      label: "Actualités",
      icon: Icons.calendar,
      submenus: []
    },
    {
      groupLabel: "",
      href: "/about",
      label: "À Propos",
      icon: Icons.about,
      submenus: []
    },
    {
      groupLabel: "",
      href: "/contact_us",
      label: "Contact",
      icon: Icons.phone,
      submenus: []
    },
  ];

  return menus.map(({ groupLabel, href, label, icon, submenus }) => ({
    groupLabel,
    menus: [createMenu(href, label, icon, submenus, pathname)]
  }));
}