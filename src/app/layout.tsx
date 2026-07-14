import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import "./v2.css";

const fraunces = Fraunces({
  variable: "--font-v2-head",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-v2-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taviar — Ayurveda, Reimagined",
  description:
    "Taviar Enterprises — where Ayurveda meets modern health care. Genuine Ayurvedic medicines, GMP certified, AYUSH licensed, distributed pan-India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="v2-root font-v2-body">{children}</body>
    </html>
  );
}
