import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Başol Mali Müşavirlik | SMMM ve Muhasebe Hizmetleri',
  description: 'Profesyonel mali müşavirlik, beyanname takip ve muhasebe hizmetleri.',
  verification: {
    google: 'HWmULbSRdGY84qJO9mo9LIZ9JS8i_WP7g2goHHrukrM',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}