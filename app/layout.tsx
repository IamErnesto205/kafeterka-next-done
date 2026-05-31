import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
