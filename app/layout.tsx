import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Başol Mali Müşavirlik | SMMM & Finansal Danışmanlık",
  description: "Profesyonel Mali Müşavirlik, Muhasebe, Vergi Danışmanlığı ve E-Dönüşüm Hizmetleri.",
  keywords: ["Mali Müşavir", "SMMM", "Muhasebe Bürosu", "Vergi Danışmanlığı", "E-Fatura"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Haritalar & Yerel SEO İçin Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Başol Mali Müşavirlik",
    "image": "https://muhasebe-web-theta.vercel.app/logo.png",
    "description": "Profesyonel SMMM, Muhasebe ve Vergi Danışmanlığı Hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "url": "https://muhasebe-web-theta.vercel.app",
    "telephone": "+905000000000",
    "priceRange": "$$"
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50 min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}