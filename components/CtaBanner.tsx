export default function CtaBanner() {
  return (
    <section className="cta-banner" id="dorty">
      <div className="container">
        <div className="cta-inner reveal" style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/images/icons/dort.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-30px",
              top: "50%",
              transform: "translateY(-50%)",
              height: "110%",
              width: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.2,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
          <h2>Objednejte si dort</h2>
          <p>Vyberte si z našich domácích dortů nebo si nechte připravit vlastní na míru.</p>
          <div className="cta-btns">
            <a href="/dorty-na-objednavku#objednat" className="btn btn-white">Objednat dort</a>
          </div>
        </div>
      </div>
    </section>
  );
}
