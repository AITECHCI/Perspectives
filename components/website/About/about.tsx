import { Icons } from "@/components/icons";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Services from "./services"

export default function About() {
  return (
    <section className="container min-h-96 py-14 relative">
      <div className="grid xl:grid-cols-2 gap-8 text-sm px-8">
        <div className="grid grid-rows-2 gap-8 items-start w-full xl:w-3/4">
          <div className="flex gap-2 items-center">
            <Icons.logo className="size-24" />
            <p className="md:text-xl"> <span className="font-saudagar">PERSPECTIVES</span> se charge de positionner votre entreprise au niveau de l&apos;Excellence grâce à vos bureaux.</p>
          </div>
          <div>Dites au revoir aux espaces de travail traditionnels et vos tracas du quotidien pour votre immobilier d&apos;entreprise  !</div>
        </div>
        <div className="grid grid-rows-2 gap-8">
          <p><span className="font-saudagar">PERSPECTIVES</span> c&apos;est la location de bureaux flexibles (partagés comme privés, modulables et personnalisables selon vos souhaits). Une solution clé en main pour les porteurs de projets en Côte-d&apos;Ivoire avant ou après leur immatriculation au CEPICI. Perspectivesvous offre pendant votre passage une connexion internet Premium, une propreté de vos locaux irréprochable ainsi qu&apos;une équipe dédiée à vos petits soins.
          </p>
          <p>Un tarif sans surprise, possibilité d&apos;obtenir des prestations à la carte. Optez maintenant et aujourd&apos;hui pour la sérénité en installant votre entreprise chez nous à Abidjan. AKWABA
          </p>
        </div>
      </div>
     
      <Services />
    </section>
  );
}
