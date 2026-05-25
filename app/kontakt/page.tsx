import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroKontakt from "@/components/kontakt/HeroKontakt";
import KontaktInfo from "@/components/kontakt/KontaktInfo";
import KontaktForm from "@/components/kontakt/KontaktForm";
import Poloha from "@/components/kontakt/Poloha";
import RezervaceKontakt from "@/components/kontakt/RezervaceKontakt";
import FaqKontakt from "@/components/kontakt/FaqKontakt";
import GalleryKontakt from "@/components/kontakt/GalleryKontakt";

export const metadata: Metadata = {
  title: "Kontakt & Rezervace – Kafeterka Uherský Brod",
  description: "Najdete nás na Mariánském náměstí v Uherském Brodě. Rezervujte si místo nebo nás kontaktujte.",
};

export default function KontaktPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <HeroKontakt />
        <KontaktInfo />
        <KontaktForm />
        <Poloha />
        <RezervaceKontakt />
        <FaqKontakt />
        <GalleryKontakt />
      </main>
      <Footer />
    </>
  );
}
