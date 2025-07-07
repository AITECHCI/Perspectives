import { Icons } from "@/components/icons";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SubSection() {
  return (
    <>
      <section className="relative">
        <div className="py-8 px-4 sm:px-6 md:px-16 mx-auto max-w-screen-xl container lg:py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Texte */}
            <div className="max-w-screen-lg text-gray-700 text-sm sm:text-base md:text-lg md:w-1/2 mb-6 md:mb-0">
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl tracking-tight font-bold font-saudagar text-perspectives_marron">
                QUI SOMMES-NOUS
              </h2>
              <p className="mb-4 lg:flex-row  text-justify font-light">
                Perspectives est une entreprise à vision globale, structurée autour de quatre pôles
                complémentaires : la finance, l’immobilier haut de gamme, le transport et le commerce
                général. Nous nous adressons à une clientèle exigeante, attachée à la qualité, à la rigueur et
                à la performance.
              </p>
              <p className="mb-4 text-justify font-light">
                Dans le domaine financier, nous accompagnons particuliers et entreprises dans la gestion,
                l’optimisation et la valorisation de leur patrimoine, en leur proposant des solutions sur
                mesure, pensées pour produire des résultats concrets, sécurisés et durables.
              </p>
              <p className="mb-4 text-justify font-light">
                Notre pôle immobilier se concentre sur la location et la construction d’appartements de
                haut standing. Chaque bien est sélectionné ou conçu avec une attention particulière portée
                aux détails, à l’emplacement et aux finitions.
              </p>
              <p className="mb-4 text-justify font-light">
                Dans le secteur du transport, nous mettons en place une logistique efficace et fiable,
                adaptée aux exigences de rapidité et de sécurité du marché actuel. Nous assurons le
                déplacement des marchandises et équipements dans des conditions optimales, grâce à une
                organisation rigoureuse. Enfin, notre activité de commerce général repose sur la
                distribution d’appareils électroménagers de qualité, durables, performants et adaptés à un
                style de vie élevé.
              </p>
              <p className="mb-4 text-justify font-light">
                Ce qui nous distingue, au-delà de notre offre multisectorielle, ce sont les valeurs que nous
                portons. Le respect, d’abord : de nos engagements, de nos partenaires, de nos clients et du
                temps de chacun.
              </p>
              <p className="mb-4 text-justify font-light">
                Et enfin, la volonté constante de répondre pleinement au niveau d’exigence de notre
                clientèle nous pousse à viser l’excellence dans tout ce que nous faisons. PersPectives, c’est
                une manière différente de voir l’entreprise : plus stratégique, plus sélective, plus engagée.
                Allons loin ensemble.
              </p>
            </div>

            {/* Image section */}
            <div className="md:w-1/2 flex justify-center mt-0 sm:mt-0 md:-mt-96">
              <Image
                src="/images/valeur/4.jpg"
                alt="Qui sommes-nous"
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-lg"
                width={400}
                height={300}
                priority // Optional: Improves loading for above-the-fold images
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}