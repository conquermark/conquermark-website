import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clickmoat.com"),
  title: "ClickMoat — Make every paid click accountable",
  description: "ClickMoat helps Google Ads teams see, understand, and act on suspicious traffic before it quietly drains campaign performance.",
  icons: { icon: "/clickmoat/logo.svg" },
  openGraph: {
    title: "ClickMoat — Make every paid click accountable",
    description: "Live click-fraud visibility and practical protection for Google Ads teams.",
    images: ["/clickmoat/dashboard.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
