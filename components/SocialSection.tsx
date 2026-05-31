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
        <div className="reveal social-layout">
          {/* Phone with levitate animation */}
          <div className="social-phone-wrap">
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
          <div className="social-text">
            <h2 className="social-heading">
              <span className="social-heading-pre">Sledujte nás i na</span>
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
          <div className="social-logo">
            <Logo height={180} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .social-layout {
          display: flex;
          align-items: center;
          gap: 64px;
        }
        .social-phone-wrap {
          flex: 0 0 auto;
          width: min(340px, 45%);
        }
        .social-text { flex: 1; }
        .social-logo { flex: 0 0 auto; }
        .social-heading {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          line-height: 1.15;
          color: var(--kf-text);
          margin-bottom: 20px;
        }
        .social-heading-pre {
          font-size: clamp(1.44rem, 2.8vw, 2.4rem);
        }
        @media (max-width: 768px) {
          .social-layout {
            flex-direction: column;
            gap: 32px;
            align-items: flex-start;
          }
          .social-phone-wrap {
            width: 55%;
            margin: 0 auto;
          }
          .social-logo { display: none; }
          .social-heading {
            font-size: 1.6rem;
          }
          .social-heading-pre {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
}
