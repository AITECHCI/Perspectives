"use client";

import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function DescriptionAllSpaces() {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const transport = [
    {
      title: "Transport maritime",
      description: "Ce type de transport est essentiel pour le commerce international et le transport de grandes quantités de marchandises, en particulier sur de longues distances.",
      image: "/images/transport/transport_maritime.jpg",
    },
    {
      title: "Transport terrestre",
      description: "Le transport terrestre désigne tous les modes de transport qui utilisent des voies terrestres, telles que les routes, les autoroutes, les chemins de fer ou même des pistes non pavées.",
      image: "/images/transport/transport_terrestre.jpg",
    },
    {
      title: "Transport aérien",
      description: "Le transport aérien fait référence à l’utilisation d’avions pour déplacer des passagers et des marchandises d’un endroit à un autre à travers l’air.",
      image: "/images/transport/transport_aérien.jpg",
    },
  ];

  const transit = [
    {
      title: "Le Transport de marchandises",
      description: "L’activité logistique de transport de marchandises de Perspectives consiste à déplacer des biens, produits ou équipements d’un lieu à un autre avec rapidité, sécurité et efficacité.",
      image: "/images/transport/transport_marchandise.jpg",
    },
    {
      title: "Le Transport et le transfert de matières (sable, ciment, granite, gravier)",
      description: "Le transport et transfert de matières (sable, ciment, granite, gravier) par Perspectives est un service logistique dédié au déplacement rapide, sécurisé et efficace de matériaux de construction.",
      image: "/images/transport/transport_matière_première.jpg",
    },
  ];

  return (
    <section className="container min-h-[400px] py-16 relative overflow-hidden" ref={sectionRef}>
      {/* Première section : Image + Texte */}
      <div className="relative flex flex-col md:flex-row gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px |6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden shadow-lg w-full rounded-tr-[40px] rounded-bl-[40px] md:w-1/2"
        >
          <Image
            className="w-full h-full object-cover"
            src="/images/transport/un homme.jpg"
            alt="Camion de transport logistique"
            width={800}
            height={500}
            quality={100}
            priority
          />
          <BorderBeam className="z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-0 flex flex-col justify-center w-full md:w-1/2"
        >
          <p className="mb-6 text-justify text-gray-600 md:text-lg leading-relaxed">
          Perspectives assure le transport de matériaux essentiels
          (sable, ciment, gravier, etc.) avec des équipes
          expérimentées et une logistique rigoureuse, garantissant
          des livraisons fiables, adaptées aux contraintes de délais,
          de volumes et de terrain.
          Le pôle intègre également un service de transit, prenant en charge l’ensemble du processus d’acheminement, de
          l’origine à la destination finale. De la gestion administrative aux formalités douanières, chaque étape est suivie
          avec précision pour accompagner efficacement les opérations, qu’elles soient locales ou transfrontalières.

          </p>
        
        </motion.div>
      </div>

      {/* Section Transit */}
      <section className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-12 text-3xl md:text-4xl font-saudagar tracking-tight text-gray-900"
        >
          Transport
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
          {transit.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              className="relative flex flex-col bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:border-novis_green transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-center mb-4">
                <Image
                  className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2"
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  quality={85}
                />
              </div>
              <div className="flex flex-col text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-novis_green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Transport */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" ref={servicesRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-12 text-3xl md:text-4xl font-saudagar tracking-tight text-gray-900"
        >
          Transit
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          {transport.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:border-novis_green transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-center mb-4">
                <Image
                  className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2"
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  quality={85}
                />
              </div>
              <div className="flex flex-col text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-novis_green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      
    </section>
  );
}