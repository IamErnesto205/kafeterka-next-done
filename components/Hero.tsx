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

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Mariánské náměstí, Uherský Brod</div>
          <h1 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontStyle: "normal" }}>
            Čerstvé{" "}
            <AnimatedWord words={["dorty", "kafe", "dobroty", "úsměvy"]} />
            {" "}každý den v Uherském Brodě
          </h1>
          <p className="hero-sub">
            Kafeterka vás vítá na Mariánském náměstí. Domácí dorty a výběrová káva s poctivým základem.
          </p>
          <div className="hero-cta">
            <a href="#dorty" className="btn btn-white">Objednat</a>
            <a href="#rezervace" className="btn btn-ghost-white">Rezervovat</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
