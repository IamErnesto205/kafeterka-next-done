import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FotogalerieGrid from "@/components/fotogalerie/FotogalerieGrid";

export const metadata: Metadata = {
  title: "Fotogalerie – Kafeterka Uherský Brod",
  description: "Prohlédněte si fotografie naší kavárny, dortů, zákusků a interiéru Kafeterky v Uherském Brodě.",
};

export default function FotogaleriePage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <section className="section" style={{ paddingBottom: "0" }}>
          <div className="container">
            <div className="section-header reveal">
              <span className="label">Atmosféra</span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Fotogalerie
              </h1>
              <p>Interiér, terasa, dorty a zákusky Kafeterky</p>
            </div>
          </div>
        </section>
        <FotogalerieGrid />
      </main>
      <Footer />
    </>
  );
}
