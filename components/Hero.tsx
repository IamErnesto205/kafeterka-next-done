import { AnimatedWord } from "@/components/ui/animated-hero";

export default function Hero() {
  return (
    <section className="hero" aria-label="Uvítání">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/leila1.jpg"
          alt="Kafeterka – interiér kavárny v Uherském Brodě"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <a
        href="https://mapy.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hodnocení na Mapy.com – 5,0 Fantastické"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2.5rem",
          zIndex: 10,
          display: "block",
          width: 90,
          opacity: 0.95,
          transition: "opacity 0.2s",
        }}
      >
        <img
          src="/images/kafeterka/mapy-hodnoceni.png"
          alt="Mapy.com hodnocení 5,0 Fantastické"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </a>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Mariánské nám. 308, Uherský Brod</div>
          <h1 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontStyle: "normal" }}>
            Čerstvé{" "}
            <AnimatedWord words={["dorty", "kafe", "dobroty", "úsměvy"]} />
            {" "}každý den v Uherském Brodě
          </h1>
          <p className="hero-sub">
            Kafeterka vás vítá na Mariánském náměstí. Domácí dorty a výběrová káva s poctivým základem.
          </p>
          <div className="hero-cta">
            <a href="/dorty-na-objednavku#objednat" className="btn btn-white">Objednat dort</a>
          </div>
        </div>
      </div>

    </section>
  );
}
