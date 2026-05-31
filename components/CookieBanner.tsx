"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);

    const btn = document.getElementById("open-cookie-settings");
    if (btn) btn.addEventListener("click", () => setVisible(true));
    return () => btn?.removeEventListener("click", () => setVisible(true));
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: "var(--cream, #f5f0e8)",
      borderTop: "1px solid rgba(0,0,0,0.08)",
      padding: "18px 24px",
      display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
    }}>
      <p style={{ flex: 1, minWidth: 260, fontSize: "0.88rem", lineHeight: 1.6, color: "var(--kf-text, #1a2e20)", margin: 0 }}>
        🍪 Používáme cookies pro správné fungování webu. Žádné sledovací ani reklamní cookies nepoužíváme.
        Více informací v <a href="/podminky" style={{ color: "var(--green, #2d6a4f)", textDecoration: "underline" }}>ochraně osobních údajů</a>.
      </p>
      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: "9px 20px", borderRadius: "999px", border: "1.5px solid rgba(0,0,0,0.18)",
            background: "transparent", cursor: "pointer", fontSize: "0.85rem",
            color: "var(--kf-text, #1a2e20)", fontFamily: "inherit",
          }}
        >
          Odmítnout
        </button>
        <button
          onClick={accept}
          style={{
            padding: "9px 22px", borderRadius: "999px", border: "none",
            background: "var(--green, #2d6a4f)", color: "#fff", cursor: "pointer",
            fontSize: "0.85rem", fontFamily: "inherit", fontWeight: 600,
          }}
        >
          Přijmout vše
        </button>
      </div>
    </div>
  );
}
