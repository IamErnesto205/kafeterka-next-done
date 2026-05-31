export default function Vyhody() {
  return (
    <section className="vyhody section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Výhody</span>
          <h2>Proč si vybrat naše dorty</h2>
          <p>Každý dort je připraven s láskou a péčí</p>
        </div>

        <div className="vyhody-grid">

          <div className="vyhody-card reveal">
            <div className="vyhody-card-img">
              <img
                src="/images/kafeterka/dort-pistacio.png"
                alt="Kafeterka – pistáciový dort s kávovými zrny"
              />
            </div>
            <div className="vyhody-card-body">
              <p className="eyebrow">Čerstvost</p>
              <h3>Pečeme každý den podle objednávky</h3>
              <p>Dorty pečeme čerstvě přímo pro vás, nikdy neskladujeme hotové výrobky zbytečně dlouho.</p>
            </div>
          </div>

          <div className="vyhody-card reveal reveal-d1">
            <div className="vyhody-card-img">
              <img
                src="/images/kafeterka/dort-citron.png"
                alt="Kafeterka – citronový dort s borůvkami"
              />
            </div>
            <div className="vyhody-card-body">
              <p className="eyebrow">Kvalita</p>
              <h3>Poctivé a vybrané podle vašich přání</h3>
              <p>Používáme jen nejlepší lokální ingredience bez zbytečných příměsí.</p>
            </div>
          </div>

          <div className="vyhody-card featured reveal reveal-d2">
            <div className="vyhody-card-img lg">
              <img
                src="/images/kafeterka/dort-ruzovy.png"
                alt="Kafeterka – růžový dort se zlatými kuličkami"
              />
            </div>
            <div className="vyhody-card-body">
              <p className="eyebrow">Design</p>
              <h3>S dorty si dáváme záležet aby byly vizuálně krásné.</h3>
              <p>
                Každý dort je unikátní výtvor s osobní konzultací — od příchutě po vizuální zpracování.
                Rádi se přizpůsobíme každé příležitosti a vašim konkrétním požadavkům.
              </p>
              <a href="#objednat" className="link-arrow" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Kontaktovat <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
