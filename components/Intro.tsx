export default function Intro() {
  return (
    <section className="intro reveal" aria-label="O kavárně" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div className="intro-inner">
          <div className="intro-left">
            <span className="label">Naše místo</span>
            <h2>Tiché místo s chutí domova na Mariánském náměstí</h2>
          </div>
          <div className="intro-right" style={{ position: "relative" }}>
            <p>
              Kafeterka vás vítá na Mariánském náměstí v Uherském Brodě s čerstvými dorty a zákusky připravenými každý den.
              Pečeme s láskou, servírujeme s úsměvem a vytváříme místo, kam se hosté rádi vrací — pro kávu, pro dort, nebo jen tak na chvíli.
            </p>
            <img
              src="/images/kafeterka/kafe.svg"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "-165px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "282px",
                height: "auto",
                opacity: 0.18,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
