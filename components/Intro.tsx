export default function Intro() {
  return (
    <section className="intro reveal" aria-label="O kavárně">
      <div className="container">
        <div className="intro-inner">
          <div className="intro-left">
            <span className="label">Naše místo</span>
            <h2>Tiché místo s chutí domova na Mariánském náměstí</h2>
            <div className="intro-icon">
              <svg className="line-art" width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M10 22 H46 L42 52 H14 Z" stroke="#3F5F48" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M46 27 H54 C57.3 27 60 29.7 60 33 C60 36.3 57.3 39 54 39 H46" stroke="#3F5F48" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 16 C22 16 24 11 22 8 M32 14 C32 14 34 9 32 6" stroke="#3F5F48" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6 56 H50" stroke="#3F5F48" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="intro-right">
            <p>
              Kafeterka vás vítá na Mariánském náměstí v Uherském Brodě s čerstvými dorty a zákusky připravenými každý den.
              Pečeme s láskou, servírujeme s úsměvem a vytváříme místo, kam se hosté rádi vrací — pro kávu, pro dort, nebo jen tak na chvíli.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
