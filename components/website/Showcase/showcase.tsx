import Image from "next/image";
// import { Saudagar } from "@/components/fonts"; // Assuming Saudagar font is defined in your project

export default function Showcase() {
  return (
    <section id="showcase" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* <h2
        className={`text-novis_yellow mb-6 text-center font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight ${Saudagar.className}`}
      >
        À Propos de Perspectives
      </h2> */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image Section */}
       
        {/* Text Section */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-4 sm:space-y-6 text-neutral-700 dark:text-neutral-300">
  <p className="text-base sm:text-lg  font-medium text-justify tracking-wide sm:tracking-wider leading-loose">
    <span className="text-4xl sm:text-4xl leading-relaxed text-[#8E421C] font-bold">Perspectives</span> est une entreprise à vision transversale
    structurée autour de quatre pôles d’activité
    complémentaires : la finance, l’immobilier haut de gamme, le transport et le commerce général. Ce
    positionnement multidisciplinaire nous permet d’appréhender les projets dans leur globalité, en
    apportant des réponses cohérentes, stratégiques et alignées sur les attentes d’une clientèle exigeante
    Notre force réside dans la capacité à faire dialoguer ces pôles entre eux, à croiser les expertises et à
    mobiliser des ressources ciblées selon les besoins spécifiques de chaque projet. Nous ne proposons pas
    simplement des prestations : nous construisons une approche intégrée, fondée sur la qualité, la rigueur
    et la recherche constante de performance Chaque domaine d’activité est porté par une vision claire, des
    standards élevés et une attention particulière à la cohérence d’ensemble. Que ce soit dans
    l’accompagnement financier, la réalisation de projets immobiliers, la maîtrise des flux logistiques ou la
    distribution de biens essentiels, notre engagement reste le même : offrir des solutions fiables,
    pertinentes et durables, à la hauteur des enjeux d’aujourd’hui.

  </p>
</div>
      </div>
    </section>
  );
}