import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroDorty from "@/components/dorty/HeroDorty";
import Vyhody from "@/components/dorty/Vyhody";
import NaseDortyGallery from "@/components/dorty/NaseDortyGallery";
import TarifyCake from "@/components/dorty/TarifyCake";
import FaqDorty from "@/components/dorty/FaqDorty";
import KontaktDotazy from "@/components/dorty/KontaktDotazy";
import ObjednatForm from "@/components/dorty/ObjednatForm";
import CtaDorty from "@/components/dorty/CtaDorty";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dorty na objednávku – Kafeterka Uherský Brod",
  description:
    "Objednejte si dort na míru v Kafeterce v Uherském Brodě. Čerstvé dorty pečené z poctivých ingrediencí pro každou příležitost.",
};

export default function DortyNaObjednavku() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <HeroDorty />
        <Vyhody />
        <NaseDortyGallery />
        <TarifyCake />
        <FaqDorty />
        <KontaktDotazy />
        <ObjednatForm />
        <CtaDorty />
      </main>
      <Footer />
    </>
  );
}
