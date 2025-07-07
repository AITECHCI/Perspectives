import React from 'react';
import Image from 'next/image';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion'; // Import Framer Motion

const Multiservices = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Section 1: Finance */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            variants={imageVariants}
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/finance/analyse financière.jpg"
              alt="finance image"
              width={800}
              height={600}
              priority
            />
            <BorderBeam className="absolute inset-0" />
          </motion.div>
          <motion.div
            className="mt-6 md:mt-0 flex flex-col justify-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
            Dans la Finance,
            </h2>
            <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
            Le pôle financier de Perspectives accompagne particuliers et entreprises dans la gestion, l&apos;optimisation
            et la sécurisation de leurs ressources. Il intervient sur des missions variées : gestion de patrimoine,
            planification budgétaire, conseils en investissement, analyse financière et création d&apos;entreprise. Chaque
            service repose sur une approche rigoureuse et pragmatique, appuyée par des outils d&apos;aide à la décision,
            une lecture éclairée du contexte économique et une compréhension des objectifs individuels. L’objectif :
            permettre à chaque client d&apos;agir avec clarté et de bâtir une base financière solide, à court comme à long
            terme.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Immobilier */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative gap-8 items-center py-9 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="mt-6 md:mt-0 flex flex-col justify-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
            Dans l&apos;immobilier,
            </h2>
            <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
            Perspectives se spécialise dans l&apos;immobilier haut de gamme, avec une sélection rigoureuse d&apos;appartements à louer,
            pensés pour une clientèle exigeante, en quête de confort et de discrétion. Chaque bien se distingue par la qualité
            des finitions, la justesse de l&apos;aménagement et l&apos;emplacement stratégique En parallèle, l&apos;entreprise développe une
            activité de promotion immobilière selon les mêmes standards élevés, de la conception à la réalisation. Les projets
            visent à créer des résidences uniques, durables et bien intégrées à leur environnement, offrant ainsi des espaces de
            vie d&apos;exception à forte valeur ajoutée.

            </p>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            variants={imageVariants}
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/Apparts/appart b23/salon 1.0.0.png"
              alt="immobilier image"
              width={800}
              height={600}
              priority
            />
            <BorderBeam className="absolute inset-0" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: Transport */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            variants={imageVariants}
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/transport/un homme.jpg"
              alt="transport image"
              width={800}
              height={600}
              priority
            />
            <BorderBeam className="absolute inset-0" />
          </motion.div>
          <motion.div
            className="mt-6 md:mt-0 flex flex-col justify-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
            Dans Le Transit et le transport,
            </h2>
            <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
             
            Perspectives propose un service de transport spécialisé dans l&apos;acheminement de matériaux essentiels à la
            construction (sable, ciment, granite, graviers, etc.), avec des livraisons fiables et ponctuelles grâce à une logistique
            performante. Chaque commande est gérée avec rigueur et traçabilité. L&apos;entreprise offre également un service de
            transit complet, couvrant toutes les démarches d&apos;importation, de la douane à la livraison finale. Elle accompagne
            aussi bien les envois ponctuels que les flux réguliers, avec professionnalisme, réactivité et transparence, pour
            garantir la fluidité des projets.

            </p>
           
          </motion.div>
        </motion.div>
      </section>

      {/* Section 4: Commerce Général */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative flex flex-col gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="flex justify-center w-full"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105 max-w-full">
              <Image
                className="w-full h-full object-cover"
                src="/images/Appareil électroménagers.png"
                alt="commerce image"
                width={600}
                height={500}
                priority
              />
              <BorderBeam className="absolute inset-0" />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
            Dans le Commerce générale
            </h2>
            <div className="space-y-4 sm:space-y-6 w-full max-w-7xl">
              <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
              Perspectives enrichit son offre avec une sélection d&apos;appareils électroménagers pensés pour améliorer le confort
              quotidien : réfrigérateurs, cuisinières, climatiseurs, lave-linges, etc. Chaque produit est choisi pour sa fiabilité, son
              efficacité énergétique et son bon rapport qualité-prix. À travers son service de Commerce Général, l&apos;entreprise
              propose un accès simple à des équipements durables et fonctionnels, issus de marques reconnues. Elle assure
              également une distribution efficace et un service après-vente réactif, dans une logique de continuité et de qualité,
              fidèle à l&apos;ensemble de ses prestations.

              </p>
           
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Multiservices;