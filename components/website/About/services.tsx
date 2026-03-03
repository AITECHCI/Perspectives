import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image"
import {
  LucideIcon
} from "lucide-react";

import GridPattern from "@/components/magicui/grid-pattern";
import Statistiques from "../Statistiques/statistiques";
import Faqs from "@/components/Faqs/faqs";

const datas: ({
  image?: string;
  icon?: LucideIcon;
  type: string;
  title?: string;
  description?: string;
})[] = [
    {
      image:"/images/finance/investissement.jpg",
      type: "image"
    },
    {
      title: "Avantage 1",
      description: "Réduisez vos charges, minimisez vos coûts financiers et développez votre réseau professionnel.",
      icon: Icons.network,
      type: "text"
    },
    {
      image: "/images/immobilier/clef de maison.jpg",
      type: "image"
    },
    {
      title: "Avantage 2",
      description: "Bénéficiez d'une adresse prestigieuse dans un immeuble neuf, moderne dans le quartier de Cocody. Bureaux très accessibles par différentes voies dont la Y4. Service de sécurité 24h/24 par une société de gardiennage agrée.",
      icon: Icons.landPlot,
      type: "text"
    },
    {
      image: "/images/transport/femme au volant.jpg",
      type: "image"
    },
    {
      title: "Avantage 3",
      description: "Parking Visiteurs et Résidents disponible. Possibilité de se restaurer sur place (cuisine et cuisinier).",
      icon: Icons.parking,
      type: "text"
    },
    {
      image: "/images/commerce_géneral/general.jpg",
      type: "image"
    },
    {
      title: "Avantage 4",
      description: "Ici, installez-vous à votre aise et dites aurevoir à la gestion des tracas d'une location de bureau classique en Côte-d'Ivoire et concentrez-vous sur votre activité.",
      icon: Icons.laptop,
      type: "text"
    },
    {
      image: "/images/commerce_géneral/shopping.jpg",
      type: "image"
    },
  ]



export default function Services() {
  return (
<>
    <div className="grid w-full mb-20 md:grid-cols-3 md:grid-rows-3 gap-0">
      {datas.map((item) => {
        return item.type == "image" ? <div className="flex relative w-full aspect-square items-center justify-center h-[250px] sm:h-[350px] xl:h-[400px]">
          <Image className="object-cover" src={item.image!} alt={item.image!} fill />
        </div> :
          <div className="flex flex-col px-4 bg-perspectives_marron text-white gap-2 relative w-full items-center justify-center py-4 min-h-[250px] xl:h-[400px]">
            {item.icon && <item.icon className="text-Perspectives_yellow size-12 md:size-20 mb-4" />}
            <h3 className="font-bold font-saudagar text-xl md:text-2xl">{item.title}</h3>
            <p className="text-center text-xs md:text-sm xl:w-3/4">{item.description}</p>
           
          </div>
      })}
    </div>
    <Statistiques />
    <Faqs />
</>
  );
}
