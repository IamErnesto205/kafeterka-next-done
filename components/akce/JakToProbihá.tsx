const kroky = [
  {
    num: "01",
    title: "Ozvete se nám",
    text: "Napište nám, jakou akci plánujete, kdy by měla proběhnout, pro kolik lidí a jakou máte představu.",
  },
  {
    num: "02",
    title: "Domluvíme detaily",
    text: "Společně projdeme možnosti — typ občerstvení, množství, styl, termín a případné speciální požadavky.",
  },
  {
    num: "03",
    title: "Připravíme nabídku",
    text: "Navrhneme řešení na míru, aby vše odpovídalo vaší akci i rozpočtu.",
  },
  {
    num: "04",
    title: "Postaráme se o dobroty",
    text: "Vy si užijete akci a my se postaráme o to, aby na stole bylo něco krásného a dobrého.",
  },
];

export default function JakToProbihá() {
  return (
    <section
      className="faq section"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('/images/kafeterka/terasa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-header reveal" style={{ color: "#fff" }}>
          <span className="label" style={{ color: "rgba(255,255,255,0.7)" }}>Postup</span>
          <h2 style={{ color: "#fff" }}>Jak to probíhá</h2>
          <p style={{ color: "rgba(255,255,255,0.8)" }}>Čtyři jednoduché kroky k vaší akci</p>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginTop: "2.5rem",
          }}
        >
          {kroky.map((krok) => (
            <div key={krok.num} style={{ color: "#fff" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.18)",
                  marginBottom: "0.75rem",
                }}
              >
                {krok.num}
              </div>
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>{krok.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>{krok.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
