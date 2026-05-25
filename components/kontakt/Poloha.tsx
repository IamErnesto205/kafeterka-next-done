export default function Poloha() {
  return (
    <section className="poloha section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Najdete nás</span>
          <h2>Poloha</h2>
          <p>Kafeterka sídlí na Mariánském náměstí v srdci Uherského Brodu.</p>
        </div>

        <div className="reveal" style={{ borderRadius: "16px", overflow: "hidden", marginTop: "40px" }}>
          <iframe
            src="https://maps.google.com/maps?q=Kafeterka+Mariánské+náměstí+308+Uherský+Brod&output=embed&z=16&hl=cs"
            width="100%"
            height="480"
            style={{ border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Poloha Kafeterky na mapě"
          />
        </div>
      </div>
    </section>
  );
}
