import * as React from "react"
import ServicesCarousel from "./services-carousel"
import localFont from "next/font/local";

export default function Services() {
    return (
        <section id="showcase" className="container mb-36 px-2 md:px-8 py-14">
            <h2 className="text-[#8E421C]  text-4xl font-bold mb-3 text-center md:text-4xl tracking-tight">
                Nos Services
            </h2>
                <h3 className="mx-auto mb-8  text-center text-lg  font-medium tracking-wider  text-foreground/80">
                Nous proposons des services variés en Finance, Immobilier, Commerce général et Transport</h3>

            <ServicesCarousel />
        </section>

    )
}
