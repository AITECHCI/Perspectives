import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";


export default function HeaderPage() {

    return (
        <>
            <section className="relative p-4 ">
                <div className="container px-0 relative max-w-[1400px] h-[410px] rounded-tr-[40px] rounded-bl-[40px] ">
                    <div className="relative z-[2]  flex flex-col md:flex-row md:gap-x-8 justify-between rounded-tr-[40px] rounded-bl-[40px] bg-black/30 h-[410px] py-8 px-4 sm:py-16 lg:px-8">
                        <div className="max-w-screen-sm text-white text-center md:text-left">
                            <h2 className="mb-4 text-xl sm:text-2xl font-saudagar md:text-3xl lg:text-4xl tracking-tight font-semibold mt-20">
                            Notre expertise au service de vos ambitions...</h2>
                        </div>
                    
                    </div>
                    {/* image background */}
                    <Image
                        src="/images/finance/finance_image.jpg"  // Chemin vers l'image
                        alt="Vue d'un espace de travail moderne"  // Texte alternatif pour l'accessibilité
                        layout="fill"  // Pour remplir la section
                        objectFit="cover"  // Pour couvrir toute la section
                        quality={100}  // Qualité de l'image (vous pouvez ajuster)
                        priority  // Si vous voulez que l'image soit chargée en priorité
                        className="absolute inset-0 rounded-tr-[40px] rounded-bl-[40px]"  // Pour assurer que l'image occupe tout l'espace
                    />
            
            </div>
            </section >

           
        </>
    );
}