'use client';
import Link from 'next/link';
import CurrencyBar from '@/components/CurrencyBar';

export default function Header() {
  return (
    <header className="w-full">
      {/* En Üstteki Döviz Bandı */}
      <CurrencyBar />

      {/* Navigasyon Menüsü */}
      <nav className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-amber-500 text-slate-950 font-black text-xl w-10 h-10 rounded-lg flex items-center justify-center">
              M
            </div>
            <div>
              <span className="font-extrabold text-lg block leading-none">YÜKSEL</span>
              <span className="text-[10px] text-amber-400 tracking-wider">MALİ MÜŞAVİRLİK</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition">Ana Sayfa</Link>
            <Link href="/hakkimizda" className="hover:text-amber-400 transition">Hakkımızda</Link>
            <Link href="/hizmetlerimiz" className="hover:text-amber-400 transition">Hizmetlerimiz</Link>
            <Link href="#duyurular" className="hover:text-amber-400 transition">Duyurular</Link>
            <Link href="#blog" className="hover:text-amber-400 transition">Blog</Link>
            <Link href="#iletisim" className="hover:text-amber-400 transition">İletişim</Link>
          </div>

          <Link href="/musteri-girisi" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
            Müşteri Girişi
          </Link>
        </div>
      </nav>
    </header>
  );
}