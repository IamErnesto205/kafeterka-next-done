export default function NaseMenuPricing() {
  return (
    <section className="menu-pricing section" id="menu-nabidka">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Nabídka</span>
          <h2>Naše menu</h2>
          <p>Každý den pečeme čerstvé dorty a připravíme nejlepší kávu.</p>
        </div>

        <div className="reveal" style={{ marginTop: "48px" }}>
          <img
            src="/images/kafeterka/menu-listek.png"
            alt="Jídelní lístek Kafeterky"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "16px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
