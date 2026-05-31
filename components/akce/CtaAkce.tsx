export default function CtaAkce() {
  return (
    <section className="kontakt-dotazy section" id="kontakt-akce">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div aria-hidden="true" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
            <img src="/images/icons/croisanz.svg" alt="" style={{ height: "100px", width: "auto" }} />
          </div>
          <span className="label">Chcete uspořádat akci s Kafeterkou?</span>
          <h2>Jsme otevření vašim nápadům</h2>
          <p style={{ maxWidth: 560, margin: "0 auto 2rem" }}>
            Ať už plánujete oslavu, firemní večírek, rozlučku se svobodou, sweet bar nebo máte vlastní nápad — ozvěte se nám. Rádi se s vámi domluvíme a společně vymyslíme řešení, které bude dávat smysl.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <a href="tel:+420774295710" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>
              774 295 710
            </a>
            <a href="mailto:kafeterka@email.cz" className="btn btn-outline">
              kafeterka@email.cz
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.35rem",
              color: "var(--kf-muted)",
              fontSize: "0.9rem",
            }}
          >
            <span>Otevřeno Po–So 9–17, Ne 9–16</span>
            <span>Mariánské nám. 308, 688 01 Uherský Brod 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
