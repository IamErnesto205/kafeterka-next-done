export default function KontaktDotazy() {
  return (
    <section className="kontakt-dotazy section-sm">
      <div className="container">
        <div className="reveal">
          <div aria-hidden="true" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
            <img src="/images/icons/croisanz.svg" alt="" style={{ height: "120px", width: "auto" }} />
          </div>
          <h2>Máte další dotazy?</h2>
          <p>Nejrychleji nás zastihne přes Instagram nebo telefon.</p>
          <a href="/kontakt" className="btn btn-outline">Kontakt</a>
        </div>
      </div>
    </section>
  );
}
