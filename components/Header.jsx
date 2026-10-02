'use client';
import Link from 'next/link';
import CurrencyBar from './CurrencyBar';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Canlı Döviz Kuru Çubuğu */}
      <CurrencyBar />

      {/* Navigasyon Barı */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-slate-800 tracking-tight">
          BAŞOL <span className="text-blue-600">MUHASEBE</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <Link href="/hakkimizda" className="hover:text-blue-600 transition">Hakkımızda</Link>
          <Link href="/hizmetlerimiz" className="hover:text-blue-600 transition">Hizmetlerimiz</Link>
          <Link href="/musteri-girisi" className="hover:text-blue-600 transition">Müşteri Paneli</Link>
        </nav>

        <Link 
          href="/admin/login" 
          className="bg-blue-600 text-white text-xs px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Yönetici Girişi
        </Link>
      </div>
    </header>
  );
}