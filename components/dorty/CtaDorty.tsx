export default function CtaDorty() {
  return (
    <section className="cta-dorty">
      <div className="container">
        <div className="cta-dorty-inner reveal" style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/images/icons/dort.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "0px",
              top: "50%",
              transform: "translateY(-50%)",
              height: "340px",
              width: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.2,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
          <h2>Objednejte si dort na svou oslavu</h2>
          <p>Každý dort je připraven s láskou a s poctivými ingrediencemi.</p>
          <a href="#objednat" className="btn btn-white">Objednat</a>
        </div>
      </div>
    </section>
  );
}
