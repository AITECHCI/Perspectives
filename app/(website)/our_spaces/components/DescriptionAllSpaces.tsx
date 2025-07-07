import TitleSection from '@/components/title-section';
import React from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export default function DescriptionAllSpaces() {
    return (
        <section className="container min-h-[400px] py-16 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

            <div className="relative gap-8 items-center py-10 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
                <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px]  shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image 
                        className="w-full h-full object-cover" 
                        src="/images/finance/analyse financière.jpg" 
                        alt="finance image" 
                        width={800} 
                        height={600} 
                        priority
                    />
                    <BorderBeam className="absolute inset-0" />
                </div>
                <div className="mt-6 md:mt-0 flex flex-col justify-center">
                    <p className="mb-6 font-light text-justify text-gray-600 md:text-lg dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    Dans la volonté constante de vous servir au mieux, nous vous proposons une large gamme de services
                    financiers. Vous trouverez ainsi, dans notre catalogue d’offres, la gestion de patrimoine, l’analyse
                    financière et la planification budgétaire. Nous y incluons également des services de conseil en
                    investissement, conçus pour vous aider à prendre des décisions éclairées et à limiter au mieux les
                    risques inhérents à cet exercice. Enfin, nos offres d’accompagnement sur mesure vous permettent d’être
                    soutenu à chaque étape, tant dans la création de votre entreprise que dans la gestion efficiente de ses
                    ressources, toujours en conformité avec vos besoins et vos objectifs. Nous mettons notre expertise à
                    votre service, au service de vos ambitions
                    </p>
                 
                </div>
            </div>

     
        </section>
    );
}