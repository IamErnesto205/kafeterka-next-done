import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroAkce from "@/components/akce/HeroAkce";
import AkceTypy from "@/components/akce/AkceTypy";
import JakToProbihá from "@/components/akce/JakToProbihá";
import CtaAkce from "@/components/akce/CtaAkce";

export const metadata: Metadata = {
  title: "Akce v Kafeterce – Oslavy, sweet bary, firemní večírky",
  description:
    "Plánujete oslavu, sweet bar, firemní večírek nebo rozlučku se svobodou? Kafeterka v Uherském Brodě připraví občerstvení a dorty na míru pro každou příležitost.",
};

export default function AkcePage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <HeroAkce />
        <AkceTypy />
        <JakToProbihá />
        <CtaAkce />
      </main>
      <Footer />
    </>
  );
}
