"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface Product {
  id: string;
  title: string;
  description: {
    intro: string;
    features: string[];
    callToAction: string;
  };
  src: string;
}

// Données des produits
const allProducts: Product[] = [
  {
    "id": "1",
    "title": "Climatiseur MDV – Confort Essentiel",
    "description": {
        "intro": "Restez au frais avec le climatiseur MDV, conçu pour un refroidissement efficace et un confort fiable dans toutes vos pièces.",
        "features": [
            "Refroidissement rapide et puissant",
            "Classe énergétique élevée pour des économies d'énergie",
            "Fonctionnement silencieux pour un confort optimal",
            "Filtres intégrés pour un air plus sain",
            "Installation facile et design moderne",
            "Télécommande intuitive pour une utilisation simplifiée"
        ],
        "callToAction": "Commandez maintenant et profitez d'une livraison rapide à Abidjan !"
    },
    "src": "/images/appareil_electromenager/MDV climatiseur.jpg"
},
  {
  "id": "2",
  "title": "Climatiseur Split Skyluxe S026Q7Wfar32",
  "description": {
    "intro": "Le climatiseur Skyluxe S026Q7Wfar32 offre une solution compacte et efficace pour climatiser et chauffer des espaces jusqu’à 25 m², avec une technologie Inverter économe en énergie et un design moderne.",
    "features": [
      "Technologie Inverter DC avec efficacité énergétique A++/A+",
      "Capacité de refroidissement de 9000 BTU, idéale pour les petites à moyennes pièces",
      "Fonction autonettoyante pour un air propre et des performances optimales",
      "Mode I Feel pour un contrôle précis de la température via la télécommande",
    ],
    "callToAction": "Commandez dès aujourd'hui pour un confort climatique optimal !"
  },
  "src": "/images/appareil_electromenager/Skyluxe.jpg"
},
  {
  "id": "3",
  "title": "Télévision LED 43'' – Aspes Smart TV",
  "description": {
    "intro": "Découvrez l’élégance et la performance avec la télévision LED 43 pouces Aspes, conçue pour transformer votre expérience de divertissement à domicile.",
    "features": [
      "Résolution Full HD pour des images nettes et éclatantes",
      "Système Smart TV avec accès à vos applications préférées",
      "Double port HDMI et USB pour une connectivité étendue",
      "Technologie audio avancée pour un son immersif",
      "Design fin et moderne, idéal pour tous les intérieurs"
    ],
    "callToAction": "Ne manquez pas cette offre exclusive – commandez votre TV Aspes dès aujourd’hui !"
  },
  "src": "/images/appareil_electromenager/tele aspes.jpg"
},

{
  "id": "4",
  "title": "Télévision Samsung UHD TV 55'' – Smart 4K",
  "description": {
    "intro": "Vivez une expérience visuelle exceptionnelle avec la Samsung UHD TV 55 pouces, alliant qualité d'image 4K et fonctionnalités intelligentes.",
    "features": [
      "Résolution 4K UHD pour des images nettes et détaillées",
      "Technologie UHD Dimming pour un contraste amélioré",
      "Smart TV avec accès rapide aux applications de streaming",
      "Design épuré et cadre fin pour une intégration parfaite",
      "Télécommande multifonction avec contrôle vocal"
    ],
    "callToAction": "Découvrez la puissance de l’UHD Samsung – commandez maintenant !"
  },
  "src": "/images/appareil_electromenager/télévision samsung1.jpg"
},
 {
  "id": "5",
  "title": "Gazinière Svan 4 Feux – Cuisson Polyvalente",
  "description": {
    "intro": "La gazinière Svan allie performance, sécurité et élégance pour une cuisine pratique au quotidien.",
    "features": [
      "4 foyers à gaz pour une cuisson rapide et efficace",
      "Allumage automatique pour plus de praticité",
      "Four à gaz spacieux avec thermostat réglable",
      "Grilles robustes et surface facile à nettoyer",
      "Design moderne adapté à toutes les cuisines"
    ],
    "callToAction": "Préparez vos plats préférés avec Svan – commandez dès maintenant !"
  },
  "src": "/images/appareil_electromenager/svan cuisiniere a gaz.webp"
},
{
  "id": "6",
  "title": "Réfrigérateur Combiné Svan SC185600ENF – 320L No Frost",
  "description": {
    "intro": "Le réfrigérateur Svan SC185600ENF vous offre une grande capacité de stockage, un système No Frost et un design moderne pour une conservation optimale de vos aliments.",
    "features": [
      "Capacité totale de 320 litres (réfrigérateur + congélateur)",
      "Technologie No Frost : fini le dégivrage manuel",
      "Contrôle électronique de la température",
      "Éclairage LED intérieur pour une meilleure visibilité",
      "Classe énergétique économique et fonctionnement silencieux"
    ],
    "callToAction": "Adoptez le confort moderne avec le SC185600ENF – commandez-le dès maintenant !"
  },
  "src": "/images/appareil_electromenager/svan frigo.webp"
},
{
  "id": "7",
  "title": "Machine à Laver LG – Performance et Fiabilité",
  "description": {
    "intro": "La machine à laver LG vous offre un lavage puissant, économe et silencieux, pour un linge toujours impeccable au quotidien.",
    "features": [
      "Grande capacité de lavage adaptée aux besoins familiaux",
      "Technologie de lavage optimisée pour un soin du linge en douceur",
      "Moteur silencieux et économe en énergie",
      "Plusieurs programmes automatiques pour tous types de textiles",
      "Design moderne avec panneau de contrôle intuitif"
    ],
    "callToAction": "Simplifiez votre quotidien avec la qualité LG – commandez maintenant !"
  },
  "src": "/images/appareil_electromenager/LG machine a laver.jpg"
},
{
  "id": "8",
  "title": "Micro-ondes LG – Puissance et Précision au Quotidien",
  "description": {
    "intro": "Le micro-ondes LG allie performance, design et technologie pour réchauffer, cuire ou décongeler vos plats rapidement et avec précision.",
    "features": [
      "Capacité idéale pour un usage quotidien",
      "Technologie de chauffage uniforme pour une cuisson homogène",
      "Fonction décongélation intelligente et rapide",
      "Panneau de commandes intuitif avec affichage digital",
      "Design moderne et compact adapté à toutes les cuisines"
    ],
    "callToAction": "Améliorez votre quotidien en cuisine avec LG – commandez dès maintenant !"
  },
  "src": "/images/appareil_electromenager/lg-micro-onde.jpg"
},
 {
  "id": "9",
  "title": "Climatiseur MDV – Confort Thermique Toute l’Année",
  "description": {
    "intro": "Le climatiseur MDV vous assure une fraîcheur immédiate en été et un confort optimal en toute saison grâce à sa technologie de pointe.",
    "features": [
      "Refroidissement et chauffage rapides",
      "Technologie Inverter pour des économies d’énergie",
      "Fonction déshumidification et purification de l’air",
      "Mode silencieux pour un confort discret",
      "Télécommande intuitive et affichage digital"
    ],
    "callToAction": "Adoptez le confort intelligent avec le climatiseur MDV – commandez maintenant !"
  },
  "src": "/images/appareil_electromenager/climatiseur MDV.jpg"
}
,
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  const openLightbox = (image: Product, index: number, products: Product[]): void => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setCurrentProducts(products);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentProducts([]);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + currentProducts.length) % currentProducts.length;
    setSelectedImage(currentProducts[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % currentProducts.length;
    setSelectedImage(currentProducts[newIndex]);
    setCurrentIndex(newIndex);
  };

  const getProductLink = () => "/products/details"; // Lien générique pour la boutique

  return (
    <div className="flex flex-col mb-12  min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Produits</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez notre sélection de gazinières, télévisions, chauffe-eau et micro-ondes de qualité.
          </p>
        </div>

        <Tabs defaultValue="gasCookers" className="mt-8">
          <TabsList className="grid grid-cols-1 w-full">
            <TabsTrigger value="gasCookers" className="text-md">Tout nos produits</TabsTrigger>
          </TabsList>
          <TabsContent value="gasCookers" className="mt-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allProducts.map((product, index) => (
                <div
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(product, index, allProducts)}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(product, index, allProducts)}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  aria-label={`Ouvrir les détails de ${product.title}`}
                >
                  <div className="relative aspect-square min-h-[200px]">
                    <Image
                      src={product.src || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{product.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
            aria-label="Fermer le lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh] flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-1/2 h-[40vh] md:h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 bg-black/70 p-6 text-white overflow-y-auto">
              <h3 className="font-bold text-xl mb-2">{selectedImage.title}</h3>
              <div className="text-sm space-y-4">
                <p>{selectedImage.description.intro}</p>
                <div>
                  <h4 className="font-semibold">Caractéristiques</h4>
                  <ul className="list-disc pl-5">
                    {selectedImage.description.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <p>{selectedImage.description.callToAction}</p>
              
              <div className="mt-10 ">
                  <Link href={"/contact_us"}>
                 <Button
                   type="button"
                   className="inline-flex w-full p-4 justify-center rounded-md bg-[#F4E0D7] px-8 py-2 text-sm font-semibold text-black shadow-xs hover:bg-[#7A3817] hover:text-white sm:ml-3 sm:w-auto"
                  >
                    <span>Contactez-nous</span>
                  </Button>
                </Link>
              </div>


              </div>
             
            </div>
          </div>
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}