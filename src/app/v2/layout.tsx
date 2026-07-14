import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
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
  title: "Taviar V2 — Ayurveda, Reimagined",
  description:
    "Taviar Enterprises — where Ayurveda meets modern health care. Genuine Ayurvedic medicines, GMP certified, AYUSH licensed, distributed pan-India.",
};

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${fraunces.variable} ${outfit.variable} v2-root`}>
      {children}
    </div>
  );
}
