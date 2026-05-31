export default function Suroviny() {
  return (
    <section className="suroviny section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Každý den nově</span>
          <h2>Poctivé suroviny v každém kousku</h2>
        </div>

        <div className="suroviny-grid">
          <div className="suroviny-col">

            <div className="card-photo reveal">
              <div className="card-photo-img">
                <img
                  src="/images/kafeterka/leila9.jpg"
                  alt="Kafeterka – tým s dortem"
                />
              </div>
              <div className="card-photo-body">
                <p className="eyebrow">Dorty bez zbytečných příměsí</p>
                <h3>Používáme jen to, co patří do dobrého dortu.</h3>
                <a href="#dorty" className="link-arrow">Čerstvost cítíte <span aria-hidden="true">→</span></a>
              </div>
            </div>

            <div className="card-text reveal">
              <p className="eyebrow">Denní rutina</p>
              <h3>Pečeme ráno, servírujeme celý den.</h3>
              <p>Každé ráno voní Kafeterka čerstvě upečeným těstem.</p>
              <a href="#dorty" className="link-arrow">Objednat <span aria-hidden="true">→</span></a>
            </div>

          </div>

          <div className="suroviny-col">

            <div className="card-small reveal" style={{ background: "var(--cream)" }}>
              <p className="eyebrow">Rodinný recept</p>
              <h3>Jako by vám je připravila babička.</h3>
              <p>Tradiční postupy, domácí ingredience, poctivý výsledek bez zkratek.</p>
              <a href="#dorty" className="link-arrow">Naše dorty <span aria-hidden="true">→</span></a>
            </div>

            <div className="card-small reveal reveal-d2" style={{ background: "var(--green-light)" }}>
              <p className="eyebrow">Každý den jiný výběr</p>
              <h3>Dorty, které překvapí.</h3>
              <p>Každý den připravujeme různé druhy dortů a zákusků — vždy čerstvé.</p>
              <a href="#nabidka" className="link-arrow">Naše nabídka <span aria-hidden="true">→</span></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
