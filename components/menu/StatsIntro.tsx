export default function StatsIntro() {
  return (
    <section className="stats-intro">
      <div className="container">

        <div className="stats-intro-top reveal">
          <div>
            <h2>Čerstvé dorty a speciální káva každý den</h2>
          </div>
          <div>
            <p>
              V Kafeterce věříme na poctivost a kvalitu. Naše dorty pečeme každý den
              s nejlepšími surovinami. Kávu vybíráme s péčí a připravujeme s láskou,
              aby byl každý šálek zážitkem.
            </p>
          </div>
        </div>

        <div className="stats-bento">

          {/* Row 1 */}
          <div className="stat-cell reveal">
            <div className="stat-label">Dorty denně</div>
            <div className="stat-number">8</div>
            <div className="stat-desc">Čokoládový, ovocný, máslný a další — každý den jiný výběr</div>
          </div>

          <div className="stat-cell image reveal reveal-d1">
            <img
              src="/images/kafeterka/leila3.jpg"
              alt="Kafeterka – dort s ovocem"
            />
          </div>

          <div className="stat-cell image reveal reveal-d2">
            <img
              src="/images/kafeterka/gm18.jpg"
              alt="Kafeterka – latte art"
            />
          </div>

          {/* Row 2 */}
          <div className="stat-cell image reveal">
            <img
              src="/images/kafeterka/leila8.jpg"
              alt="Kafeterka – příprava espressa"
            />
          </div>

          <div className="stat-cell reveal reveal-d1">
            <div className="stat-label">Druhy kávy</div>
            <div className="stat-number">5</div>
            <div className="stat-desc">Espresso, cappuccino, filtrovaná a sezónní speciality</div>
          </div>

          <div className="stat-cell reveal reveal-d2">
            <div className="stat-label">Domácích receptů</div>
            <div className="stat-number">100%</div>
            <div className="stat-desc">Bez umělých přísad a konzervantů — vždy čerstvé</div>
          </div>

        </div>
      </div>
    </section>
  );
}
