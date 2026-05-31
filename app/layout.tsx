import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kafeterka – Čerstvé dorty každý den v Uherském Brodě",
  description:
    "Kafeterka na Mariánském náměstí v Uherském Brodě. Domácí dorty pečené každý den, výběrová káva a útulná atmosféra s terasou a zahradou.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LYFRV8QYHW" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LYFRV8QYHW');
        `}</Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
