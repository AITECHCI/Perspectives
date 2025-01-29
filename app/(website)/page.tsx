import Hero from "@/components/website/Hero";
import Solutions from "@/components/website/Solutions/solutions";
import ShowcasePartenaires from "@/components/website/Partenaires/showcasepartenaires";
import Showcase from "@/components/website/Showcase/showcase";
import About from "@/components/website/About/about";
import Statistiques from "@/components/website/Statistiques/statistiques";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Showcase />
      <Solutions />
      <ShowcasePartenaires />
      <About />
      <Statistiques />
    </div>
  );
}
