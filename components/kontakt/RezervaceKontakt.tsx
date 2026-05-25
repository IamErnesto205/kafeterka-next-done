export default function RezervaceKontakt() {
  return (
    <section className="rezervace-k section" id="rezervace">
      <div className="container">
        <div className="rezervace-k-header reveal">
          <h2>Rezervujte si místo u nás</h2>
          <p>Rezervace probíhají telefonicky — zavolejte nám a my vám místo rádi zajistíme.</p>
        </div>

        <div className="rezervace-k-form-wrap reveal">
          <a href="tel:+420572333456" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "16px 40px" }}>
            +420 572 333 456
          </a>
          <p className="rezervace-k-note">Voláme zpět, pokud nezastihnou. Otevřeno Po–So 9–17, Ne 9–16.</p>
        </div>

        <div className="rezervace-k-img reveal">
          <img
            src="/images/kafeterka/gm71.jpg"
            alt="Kafeterka prostor"
          />
        </div>
      </div>
    </section>
  );
}
