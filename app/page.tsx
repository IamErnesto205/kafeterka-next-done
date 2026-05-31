import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TaglineSlider from "@/components/TaglineSlider";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import Suroviny from "@/components/Suroviny";
import Gallery from "@/components/Gallery";
import SocialSection from "@/components/SocialSection";
import Drby from "@/components/Drby";
import CtaBanner from "@/components/CtaBanner";
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
        <TaglineSlider />
        <Intro />
        <Features />
        <Suroviny />
        <Gallery />
        <SocialSection />
        <Drby />
        <CtaBanner />
<Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
