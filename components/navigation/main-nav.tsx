
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuList } from "@/config/menu-list";
import GridPattern from "@/components/magicui/grid-pattern";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <div className="flex justify-center items-center flex-1 ">
      <NavigationMenu className="flex items-center space-x-6 text-sm font-medium ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={menuList[0].menus[0].href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-book-antiqua text-[#8E421C] hover:bg-transparent hover:text-black to-transparent transition-colors",
                  menuList[0].menus[0].active && "font-bold"
                )}
              >
                {menuList[0].menus[0].label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "font-book-antiqua text-[#8E421C] hover:bg-transparent hover:text-novis_orange transition-colors",
                menuList[1].menus[0].active && "font-bold"
              )}
            >
              {menuList[1].menus[0].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-1 text-center gap-3 p-6 md:w-[350px] text-[#8E421C] lg:w-[350px]">
                {menuList[1].menus[0].submenus.slice(1).map((item) => (
                  <ListItem
                    key={item.label}
                    href={item.href}
                    title={item.label}
                    className={cn(
                      "font-book-antiqua",
                      item.active && "font-bold text-[#8E421C]"
                    )}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "font-book-antiqua text-[#8E421C] hover:bg-transparent hover:text-novis_orange transition-colors"
              )}
            >
              {menuList[2].menus[0].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[100px] text-center gap-3 p-4 md:w-[80px] text-[#8E421C] lg:w-[300px]">
                {menuList[2].menus[0].submenus.map((item, index: number) => (
                  <ListItem
                    key={index}
                    href={item.href}
                    title={item.label}
                    className={cn(
                      "font-book-antiqua",
                      item.active && "text-[#8E421C]"
                    )}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={menuList[4].menus[0].href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-book-antiqua text-[#8E421C] hover:bg-transparent hover:text-novis_orange transition-colors"
                )}
              >
                {menuList[4].menus[0].label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={menuList[5].menus[0].href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-book-antiqua text-[#8E421C] hover:bg-transparent hover:text-novis_orange transition-colors"
                )}
              >
                {menuList[5].menus[0].label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block font-book-antiqua text-lg no-underline transition-colors hover:bg-transparent hover:text-novis_orange focus:text-novis_orange",
            className
          )}
          {...props}
        >
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
          <div className="text-lg font-medium leading-loose">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
