export default function CtaMenu() {
  return (
    <section className="cta-menu">
      <div className="container">
        <div className="cta-menu-inner reveal">
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
          <h2>Chcete dort na objednávku?</h2>
          <p>Každý dort je připraven s láskou a s poctivými ingrediencemi přesně podle vašich přání.</p>
          <div className="cta-menu-btns">
            <a href="/dorty-na-objednavku#objednat" className="btn btn-white">Objednat</a>
            <a href="/#rezervace" className="btn btn-ghost-white">Rezervovat</a>
          </div>
        </div>
      </div>
    </section>
  );
}
