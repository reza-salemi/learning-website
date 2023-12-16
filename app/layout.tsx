"use client";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={`${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
