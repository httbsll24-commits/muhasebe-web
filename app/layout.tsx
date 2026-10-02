import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMMM & Mali Müşavirlik | Finansal Danışmanlık ve E-Dönüşüm Hizmetleri",
  description: "Mali müşavirlik, vergi danışmanlığı, şirket kuruluşu, e-fatura ve e-defter süreçlerinde profesyonel ve güvenilir çözümler.",
  keywords: ["Mali Müşavir", "SMMM", "Muhasebe Bürosu", "Vergi Danışmanlığı", "E-Fatura", "E-Defter", "Şirket Kuruluşu"],
  authors: [{ name: "Mali Müşavirlik Bürosu" }],
  openGraph: {
    title: "SMMM & Mali Müşavirlik Bürosu",
    description: "Mali süreçlerinizde profesyonel, şeffaf ve mevzuata uygun çözümler.",
    url: "https://muhasebe-web.vercel.app",
    siteName: "Mali Müşavirlik & Finansal Danışmanlık",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}