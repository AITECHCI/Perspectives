"use client";

import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";

export default function HeaderPage() {
  return (
    <>
     <section className="relative p-4 ml-10 ">
  <div className="container h-[375px] max-w-[1400px] relative rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
    <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between h-[320px] py-6 px-4 sm:py-8 lg:px-8">
           <div className="max-w-screen-sm text-white text-center md:text-left">
             <h2 className=" text-xl sm:text-2xl font-saudagar md:text-3xl lg:text-4xl tracking-tight font-semibold mt-20">
             Maîtriser les flux, garantir les délais, sécuriser chaque étape…
             </h2>
            </div>
    </div>

    <Image
      src="/images/transport/camion_transport.jpg"
      alt="Vue d'un espace de travail moderne"
      fill
      className="absolute inset-0 object-cover w-full h-full rounded-tr-[40px] rounded-bl-[40px]"
      quality={100}
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 rounded-tr-[40px] rounded-bl-[40px]" />
  </div>
</section>


      {/* <section className="relative bg-gray-100">
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 py-4 md:py-6">
          {["Conseil", "Accompagnement", "Création de compte", "Prendre rendez-vous"].map((item, index) => (
            <p
              key={index}
              className="font-medium text-xs md:text-sm text-gray-800 text-center transition-colors duration-300 hover:text-orange-500 cursor-pointer animate-fade-in"
            >
              {item}
            </p>
          ))}
        </div>
      </section> */}

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}