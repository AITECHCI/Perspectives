import Link from "next/link";
import Image from "next/image";
// import { Saudagar } from "@/components/fonts"; // Assuming Saudagar font is defined

// Interface pour les documents
interface Document {
  id: number;
  title: string;
  description: string;
  previewImage: string;
  pdfPath: string;
}

// Données fictives pour les documents
const documents: Document[] = [
  {
    id: 1,
    title: "Brochure",
    description: " Téléchargez nos brochures détaillées pour découvrir nos services exclusifs en finance, immobilier, transport et commerce.",
    previewImage: "/images/Projet RAWDA.png",
    pdfPath: "/images/RAWDA - Présentation Numérique.pdf",
  },

];

export default function DocumentsPage() {
  return (
<section className="container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
  {/* En-tête */}
  <div className="text-center mb-8 sm:mb-10 lg:mb-12">
    <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
      Téléchargez nos brochures détaillées pour découvrir nos services exclusifs en finance, immobilier, transport et commerce.
    </p>
  </div>

  {/* Grille de cartes */}
  <div className="grid grid-cols-1  gap-4 sm:gap-6 w-full h-full max-w-xl mx-auto">
    {documents.map((doc) => (
      <div
        key={doc.id}
        className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-105"
      >
        <Image
          src={doc.previewImage}
          alt={`Aperçu de ${doc.title}`}
          width={400}
          height={300}
          className="w-full h-40 sm:h-48 object-cover"
        />
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
            {doc.title}
          </h3>
          <p className="mt-2 text-lg  text-neutral-600 dark:text-neutral-400 text-center">
            {doc.description}
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href={doc.pdfPath}
              download
              target="_blank"
              className="inline-block bg-[#8E421C] hover:bg-[#7A3817] text-[#F4E0D7] font-medium py-2 px-4 rounded-lg text-sm sm:text-base transition-colors"
            >
              Télécharger le PDF
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Call-to-action */}
  <div className="text-center mt-8 mb-6 sm:mt-10 lg:mt-12">
    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
      Besoin d’informations supplémentaires ?{" "}
      <Link
        href="/contact_us"
        className="text-novis_yellow underline hover:underline font-medium"
      >
        Contactez-nous
      </Link>
    </p>
  </div>
</section>
  );
}