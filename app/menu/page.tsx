import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroMenu from "@/components/menu/HeroMenu";
import NaseMenuPricing from "@/components/menu/NaseMenuPricing";
import CtaMenu from "@/components/menu/CtaMenu";

export const metadata: Metadata = {
  title: "Menu – Kafeterka Uherský Brod",
  description: "Co máme dnes v Kafeterce — čerstvé dorty a výběrová káva každý den.",
};

export default function MenuPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <HeroMenu />
        <NaseMenuPricing />
        <CtaMenu />
      </main>
      <Footer />
    </>
  );
}
