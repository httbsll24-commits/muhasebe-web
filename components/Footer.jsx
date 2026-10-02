'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">BAŞOL MUHASEBE</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Şirket kuruluşu, vergi danışmanlığı, e-dönüşüm ve finansal raporlama hizmetlerinde güvenilir çözüm ortağınız.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-amber-400 transition">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-amber-400 transition">Hakkımızda</Link></li>
            <li><Link href="/hizmetlerimiz" className="hover:text-amber-400 transition">Hizmetlerimiz</Link></li>
            <li><Link href="/musteri-girisi" className="hover:text-amber-400 transition">Müşteri Paneli</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">İletişim</h4>
          <p className="text-xs text-slate-400">E-Posta: info@basolmuhasebe.com</p>
          <p className="text-xs text-slate-400 mt-1">Telefon: +90 (212) 000 00 00</p>
        </div>
      </div>
      <div className="bg-slate-950 py-4 text-center text-xs text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} Başol Mali Müşavirlik. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}