export default function Poloha() {
  return (
    <section className="poloha section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Najdete nás</span>
          <h2>Poloha</h2>
          <p>Kafeterka sídlí na Mariánském náměstí v srdci Uherského Brodu.</p>
        </div>

        <div className="poloha-cards">
          <div className="poloha-card reveal">
            <div className="poloha-card-img">
              <img
                src="/images/kafeterka/leila5.jpg"
                alt="Uherský Brod"
              />
            </div>
            <div className="poloha-card-body">
              <h3>Uherský Brod</h3>
              <p>Mariánské náměstí, Uherský Brod, Česká republika</p>
              <a
                href="https://maps.google.com/?q=Mariánské+náměstí,+Uherský+Brod"
                target="_blank"
                rel="noopener noreferrer"
                className="poloha-link"
              >
                Otevřít mapy <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="poloha-card reveal reveal-d1">
            <div className="poloha-card-img">
              <img
                src="/images/kafeterka/leila6.jpg"
                alt="Parkování"
              />
            </div>
            <div className="poloha-card-body">
              <h3>Parkování</h3>
              <p>Parkování je dostupné na náměstí a v okolí bez problémů.</p>
              <a
                href="https://maps.google.com/?q=Mariánské+náměstí,+Uherský+Brod"
                target="_blank"
                rel="noopener noreferrer"
                className="poloha-link"
              >
                Navigovat <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
