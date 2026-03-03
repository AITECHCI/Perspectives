interface NavItem {
    title: string;
    href: string;
    items?: NavItem[];
    label?: string;
    event?: string;
    external?: boolean;
    paid?: boolean;
    disabled?: boolean;
}

interface MainNav {
    title: string;
    href: string;
    external?: boolean;
    event?: string;
}

interface SidebarNavItem extends NavItem {
    title: string;
    items: NavItem[];
}

interface SidebarNavSection {
    title: string;
    href?: string;
    items: SidebarNavItem[];
}

interface SidebarNav {
    sidebarNav: SidebarNavSection[];
}

interface NavigationData {
    mainNav: MainNav[];
    sidebarNav: SidebarNavSection[];
}

interface I_SpaceCard {
    id: string,
    title: string;
    imagePath: string;
}
interface List_SpaceCard {
    title: string;
    id: string,
    items: I_SpaceCard[];
}

export interface FormulaEmailData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  roomType:string;
  dates: string;
  guests:number;
  totalPrice:number;
}

export interface SalleEmailData {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    tarif: string;
    dates: string;
    nombreParticipants?: number;
    nomEvenement?: string;
}