"use client";
import { SocialTooltip, SocialItem } from "@/components/ui/social-media";
import Logo from "@/components/Logo";

const socialLinks: SocialItem[] = [
  {
    href: "https://www.instagram.com/kafeterka/",
    ariaLabel: "Instagram",
    tooltip: "Instagram",
    color: "#E1306C",
    svgUrl: "/images/icons/instagram.svg",
  },
  {
    href: "https://www.facebook.com/KAFETERKAUB/",
    ariaLabel: "Facebook",
    tooltip: "Facebook",
    color: "#1877F2",
    svgUrl: "/images/icons/facebook.svg",
  },
];

export default function SocialSection() {
  return (
    <section style={{ background: "#fff", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "64px",
          }}
        >
          {/* Phone with levitate animation */}
          <div style={{ flex: "0 0 auto", width: "min(340px, 45%)" }}>
            <img
              src="/images/kafeterka/instagram-phone.png"
              alt="Kafeterka na Instagramu"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                animation: "levitate 3.5s ease-in-out infinite",
              }}
            />
          </div>

          {/* Text + icons */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.15,
                color: "var(--kf-text)",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "clamp(1.44rem, 2.8vw, 2.4rem)" }}>Sledujte nás i na</span>
              <br />
              <strong style={{ fontWeight: 600, fontFamily: "var(--font-body)" }}>
                <a href="https://www.instagram.com/kafeterka/" target="_blank" rel="noopener noreferrer" style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textDecoration: "none",
                }}>instagramu</a>
                {" a "}
                <a href="https://www.facebook.com/KAFETERKAUB/" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2", textDecoration: "none" }}>facebooku</a>
              </strong>
            </h2>
            <p style={{ color: "var(--kf-muted)", marginBottom: "36px", fontSize: "1.05rem" }}>
              pro každodenní aktuální nabídku i akce.
            </p>
            <SocialTooltip items={socialLinks} />
          </div>

          {/* Logo vpravo */}
          <div style={{ flex: "0 0 auto" }}>
            <Logo height={180} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
