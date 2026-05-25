export default function CtaMenu() {
  return (
    <section className="cta-menu">
      <div className="container">
        <div className="cta-menu-inner reveal">
          <div className="cta-deco cta-deco-l" aria-hidden="true">
            <svg width="200" height="200" viewBox="0 0 240 240" fill="none">
              <path d="M120 220 C120 220 120 160 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C120 88 95 64 70 70 C45 76 45 104 70 112 C95 120 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C120 88 145 64 170 70 C195 76 195 104 170 112 C145 120 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C88 120 64 95 70 70 C76 45 104 45 112 70 C120 95 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C152 120 176 95 170 70 C164 45 136 45 128 70 C120 95 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="120" cy="120" r="14" stroke="white" strokeWidth="2.5"/>
            </svg>
          </div>
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
