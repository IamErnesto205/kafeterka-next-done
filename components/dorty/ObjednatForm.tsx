"use client";
import { useState, FormEvent, useRef } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

const LOGO_BASE64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNjMzIiBoZWlnaHQ9IjI3OTUiIHZpZXdCb3g9IjAgMCAzNjMzIDI3OTUiPgogIDxwYXRoIGQ9Ik0gMzQzMiAyNTIwIEwgMzM2NCAyNjYwIEwgMzMzMyAyNzMyIEwgMzM3MSAyNzMzIEwgMzM5OSAyNjc5IEwgMzUwNiAyNjc5IEwgMzUzMyAyNzMzIEwgMzU3MSAyNzMzIEwgMzU3MCAyNzI0IEwgMzQ3NyAyNTIzIEwgMzQ3MiAyNTE5IFoKTSAzNDUxIDI1NjAgTCAzNDU1IDI1NjIgTCAzNDkxIDI2NDIgTCAzNDg4IDI2NDUgTCAzNDE0IDI2NDQgWgpNIDI5MzAgMjUxOSBMIDI5MjcgMjU3OSBMIDI5MjggMjczMiBMIDI5NjMgMjczNCBMIDI5NjcgMjczMSBMIDI5NjggMjY1OSBMIDMwMTQgMjYyMiBMIDMwOTYgMjczMyBMIDMxNDEgMjczMyBMIDMxNDAgMjcyNSBMIDMwNDUgMjU5OSBMIDMwNDggMjU5MyBMIDMxMzIgMjUyNSBMIDMxMzMgMjUyMCBMIDMwNzkgMjUyMCBMIDI5NjkgMjYxMyBMIDI5NjcgMjUyMSBaCk0gMjUwOCAyNTE5IEwgMjUwNSAyNTIzIEwgMjUwNiAyNzMxIEwgMjUxMCAyNzM0IEwgMjU0MSAyNzM0IEwgMjU0NSAyNzMwIEwgMjU0NyAyNjQ2IEwgMjYxMCAyNjQ2IEwgMjY3MyAyNzM0IEwgMjcxMiAyNzM0IEwgMjcxMyAyNzI1IEwgMjY1NCAyNjQ1IEwgMjY4NiAyNjMwIEwgMjcwNSAyNjA1IEwgMjcwOCAyNTcwIEwgMjcwNSAyNTU4IEwgMjY5NyAyNTQ1IEwgMjY3OSAyNTI5IEwgMjY1NSAyNTIwIFoKTSAyNTQ1IDI1NTUgTCAyNjQ1IDI1NTQgTCAyNjYzIDI1NjUgTCAyNjY4IDI1NzYgTCAyNjY3IDI1OTAgTCAyNjU3IDI2MDQgTCAyNjM3IDI2MTIgTCAyNTQ3IDI2MTIgWgpNIDE2ODUgMjUyMCBMIDE2ODQgMjU1MSBMIDE2ODggMjU1NCBMIDE3NjYgMjU1NSBMIDE3NjYgMjczMCBMIDE3NjkgMjczNCBMIDE4MDQgMjczMyBMIDE4MDYgMjU1NSBMIDE4ODMgMjU1NCBMIDE4ODYgMjU1MSBMIDE4ODUgMjUyMCBaCk0gNTYwIDI1MjAgTCA0NjQgMjcyNiBMIDQ2NSAyNzMzIEwgNTA0IDI3MzIgTCA1MjcgMjY4MiBMIDUzMSAyNjc5IEwgNjM0IDI2NzkgTCA2NjIgMjczMyBMIDcwMCAyNzMzIEwgNzAxIDI3MjUgTCA2MDQgMjUyMiBMIDYwMCAyNTE5IFoKTSA1ODEgMjU2MiBMIDYxOSAyNjQxIEwgNjE3IDI2NDUgTCA1NDQgMjY0MyBaCk0gNjIgMjUxOSBMIDYxIDI3MzIgTCA5NSAyNzM0IEwgOTkgMjczMSBMIDEwMCAyNjYwIEwgMTQ1IDI2MjMgTCAyMjcgMjczNCBMIDI2OSAyNzM0IEwgMjY5IDI3MjQgTCAxNzQgMjU5OSBMIDI2NCAyNTI1IEwgMjY1IDI1MjEgTCAyMTEgMjUyMCBMIDEwMSAyNjEzIEwgMTAwIDI1MjMgTCA5NiAyNTE5IFoKTSAyMDk4IDI1MTkgTCAyMDk2IDI3MzIgTCAyMjg0IDI3MzMgTCAyMjg3IDI3MzAgTCAyMjg3IDI3MDEgTCAyMjgyIDI2OTcgTCAyMTQwIDI2OTggTCAyMTM1IDI2OTQgTCAyMTM1IDI2NDQgTCAyMTM4IDI2MzkgTCAyMjQzIDI2MzkgTCAyMjQ3IDI2MzUgTCAyMjQ3IDI2MTEgTCAyMjQzIDI2MDUgTCAyMTM3IDI2MDQgTCAyMTM2IDI1NTYgTCAyMjgwIDI1NTQgTCAyMjg0IDI1NTEgTCAyMjg0IDI1MjIgTCAyMjgwIDI1MTkgWgpNIDEzMDMgMjUxOSBMIDEzMDAgMjUyMyBMIDEzMDEgMjczMiBMIDE0ODYgMjczMyBMIDE0ODkgMjcwNCBMIDE0ODMgMjY5NyBMIDEzMzkgMjY5NSBMIDEzMzkgMjY0MyBMIDEzNDIgMjYzOSBMIDE0NDEgMjYzOSBMIDE0NDUgMjYzNiBMIDE0NDUgMjYwOCBMIDE0NDAgMjYwNCBMIDEzNDEgMjYwNCBMIDEzMzkgMjU1NiBMIDE0ODAgMjU1NCBMIDE0ODUgMjU0OSBMIDE0ODQgMjUyMSBMIDE0MDUgMjUxOCBaCk0gMTA4OCAyNTE5IEwgOTUzIDI1MTggTCA5MTYgMjUxOSBMIDkxMyAyNTIyIEwgOTE0IDI3MzMgTCA5NDkgMjczMyBMIDk1MiAyNzMwIEwgOTUyIDI2NDIgTCA5NTUgMjYzOSBMIDEwNDggMjYzOSBMIDEwNTMgMjYzNiBMIDEwNTMgMjYwOCBMIDEwNTAgMjYwNSBMIDk1NSAyNjA1IEwgOTUyIDI2MDIgTCA5NTIgMjU1NyBMIDk1NSAyNTU0IEwgMTA4NyAyNTU0IEwgMTA5MSAyNTQ5IEwgMTA5MSAyNTIzIFoKTSAyODgxIDQwNyBMIDI4NzggNDA0IEwgMjg1MiA0MDQgTCAyODQ4IDQwOCBMIDI4NDYgMjI2NyBMIDc2OSAyMjY3IEwgNzY2IDIyNjQgTCA3NjYgMjIwNCBMIDc2MiAyMjAwIEwgNzM4IDIyMDAgTCA3MzMgMjIwNiBMIDczMyAyMjk4IEwgNzM2IDIzMDEgTCAyODc5IDIzMDAgTCAyODgyIDIyNTYgWgpNIDczMyAzNjkgTCA3MzkgMzczIEwgNzYzIDM3MiBMIDc2NiAzNjcgTCA3NjggMTM3IEwgMTM4OCAxMzcgTCAxMzkyIDEzMyBMIDEzOTIgMTA1IEwgMTM4OCAxMDEgTCA3MzcgMTAxIEwgNzMzIDEwNSBMIDczMiAxNDYgWgpNIDU4OSA0MDkgTCA1ODcgMjEzNiBMIDU5MCAyMTQxIEwgODc1IDIxMzkgTCA4NzUgMTQ3MCBMIDEyMzIgMTE2NCBMIDEyMzggMTE2OCBMIDE2MDMgMTY1MSBMIDE5MzcgMjEwMyBMIDE5NTQgMjEyMCBMIDE5ODYgMjE0MSBMIDI0MTIgMjE0MCBMIDI0MTMgMzUwIEwgMzA1NCAzNDggTCAzMDU1IDYxIEwgMTQzMSA2MiBMIDE0MzAgMzQ1IEwgMTQzMyAzNDggTCAyMDYzIDM0OCBMIDIxMjMgMzUxIEwgMjEyMSAxOTE4IEwgMTg3NyAxNTc4IEwgMTQ0NCA5ODcgTCAyMDkzIDQxNiBMIDIwOTQgNDA4IEwgMTc0NiA0MDggTCA4NzggMTE1OSBMIDg3NSAxMTU4IEwgODc1IDQxMSBMIDg3MSA0MDcgWiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==";

const logoMaskStyle: React.CSSProperties = {
  WebkitMaskImage: `url('${LOGO_BASE64}')`,
  WebkitMaskSize: "contain",
  WebkitMaskPosition: "center",
  WebkitMaskRepeat: "no-repeat",
  maskImage: `url('${LOGO_BASE64}')`,
  maskSize: "contain",
  maskPosition: "center",
  maskRepeat: "no-repeat",
};

export default function ObjednatForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = formRef.current!;
    const data = {
      jmeno: (form.elements.namedItem("jmeno") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      zprava: (form.elements.namedItem("zprava") as HTMLTextAreaElement).value,
    };
    const res = await fetch("/api/objednat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      setSent(true);
    } else {
      setError("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.");
    }
  };

  return (
    <section
      className="form-section"
      id="objednat"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background flickering grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        color="#3F5F48"
        maxOpacity={0.12}
        flickerChance={0.1}
        squareSize={4}
        gridGap={5}
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at center, white, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at center, white, transparent)",
        }}
      />

      {/* Logo-shaped flickering overlay */}
      <div
        className="absolute inset-0 z-0"
        style={logoMaskStyle}
      >
        <FlickeringGrid
          color="#3F5F48"
          maxOpacity={0.35}
          flickerChance={0.15}
          squareSize={3}
          gridGap={5}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header reveal">
          <span className="label">Objednat</span>
          <h2>Váš dort</h2>
          <p>Řekněte nám, co si představujete</p>
        </div>

        <div className="form-inner reveal">
          {sent ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ margin: "0 auto 20px", display: "block" }} aria-hidden="true">
                <circle cx="26" cy="26" r="24" stroke="#3F5F48" strokeWidth="1.8" />
                <path d="M14 26 L22 34 L38 18" stroke="#3F5F48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--kf-text)", marginBottom: 10 }}>Odesláno!</h3>
              <p>Ozveme se Vám co nejdříve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} ref={formRef} noValidate>
              <div className="form-field">
                <label className="form-label" htmlFor="jmeno">Jméno</label>
                <input
                  id="jmeno"
                  name="jmeno"
                  type="text"
                  className="form-input"
                  placeholder="Vaše jméno"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="vas@email.cz"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="zprava">Zpráva</label>
                <textarea
                  id="zprava"
                  name="zprava"
                  className="form-textarea"
                  placeholder="Popište svůj dort — příchu, velikost, příležitost..."
                  required
                />
              </div>

              <div className="form-checkbox-wrap">
                <input type="checkbox" id="souhlas" name="souhlas" required />
                <label htmlFor="souhlas">
                  Souhlasím s&nbsp;<a href="/podminky" target="_blank" rel="noopener noreferrer" style={{ color: "var(--green)", textDecoration: "underline" }}>podmínkami</a> zpracování osobních údajů.
                </label>
              </div>

              {error && <p style={{ color: "red", marginBottom: 12 }}>{error}</p>}
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }} disabled={loading}>
                {loading ? "Odesílám…" : "Odeslat"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
