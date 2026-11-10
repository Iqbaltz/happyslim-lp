import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

// General Sans by Indian Type Foundry, via Fontshare (Fontshare Free Font License, see app/fonts/FFL.txt).
const body = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  weight: "200 700",
  style: "normal",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HappySlim.id — Suplemen Herbal untuk Hidup Lebih Sehat",
    template: "%s | HappySlim.id",
  },
  description:
    "HappySlim.id menghadirkan suplemen herbal untuk diet dan kontrol berat badan, serta serum perawatan wajah. Konsultasi diet gratis via WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${body.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
