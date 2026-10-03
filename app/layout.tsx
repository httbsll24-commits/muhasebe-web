import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Başol Mali Müşavirlik | SMMM & Finansal Danışmanlık",
  description: "Profesyonel Mali Müşavirlik, Muhasebe, Vergi Danışmanlığı ve E-Dönüşüm Hizmetleri",
  keywords: ["Mali Müşavir", "SMMM", "Muhasebe Bürosu", "Vergi Danışmanlığı", "E-Fatura"],
  verification: {
    google: "google37117671b7d32e8f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
