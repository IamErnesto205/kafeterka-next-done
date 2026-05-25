export default function CtaBanner() {
  return (
    <section className="cta-banner" id="dorty">
      <div className="container">
        <div className="cta-inner reveal">

          <div className="cta-deco cta-deco-l" aria-hidden="true">
            <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
              <path d="M120 220 C120 220 120 160 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C120 88 95 64 70 70 C45 76 45 104 70 112 C95 120 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C120 88 145 64 170 70 C195 76 195 104 170 112 C145 120 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C88 120 64 95 70 70 C76 45 104 45 112 70 C120 95 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M120 120 C152 120 176 95 170 70 C164 45 136 45 128 70 C120 95 120 120 120 120" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="120" cy="120" r="14" stroke="white" strokeWidth="2.5"/>
              <path d="M50 55 C36 40 22 47 28 61 C34 75 52 67 50 55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M50 55 C36 69 28 85 42 90 C56 95 60 77 50 55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M50 55 C64 40 78 47 72 61 C66 75 48 67 50 55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M50 55 C64 69 72 85 58 90 C44 95 40 77 50 55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="cta-deco cta-deco-r" aria-hidden="true">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
              <path d="M90 165 L90 90 M90 90 C90 66 72 48 52 54 C32 60 32 84 52 90 C72 96 90 90 90 90 M90 90 C90 66 108 48 128 54 C148 60 148 84 128 90 C108 96 90 90 90 90 M90 90 C66 90 48 72 54 52 C60 32 84 32 90 52 M90 90 C114 90 132 72 126 52 C120 32 96 32 90 52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="90" cy="90" r="11" stroke="white" strokeWidth="2"/>
            </svg>
          </div>

          <h2>Objednejte si dort</h2>
          <p>Vyberte si z našich domácích dortů nebo si nechte připravit vlastní na míru.</p>
          <div className="cta-btns">
            <a href="#kontakt" className="btn btn-white">Objednat</a>
            <a href="#rezervace" className="btn btn-ghost-white">Rezervovat stůl</a>
          </div>
        </div>
      </div>
    </section>
  );
}
