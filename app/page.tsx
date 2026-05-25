import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import Suroviny from "@/components/Suroviny";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Features />
        <Suroviny />
        <Gallery />
        <CtaBanner />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
