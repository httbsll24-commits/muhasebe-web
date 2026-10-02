import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 text-slate-900 font-bold p-2 rounded-lg text-xl">
            M
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">YÜKSEL</h1>
            <p className="text-xs text-amber-400 tracking-wider">MALİ MÜŞAVİRLİK</p>
          </div>
        </div>

        {/* Menü */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-amber-400 transition">Ana Sayfa</Link>
          <Link href="#hakkimizda" className="hover:text-amber-400 transition">Hakkımızda</Link>
          <Link href="#hizmetler" className="hover:text-amber-400 transition">Hizmetlerimiz</Link>
          <Link href="#duyurular" className="hover:text-amber-400 transition">Duyurular</Link>
          <Link href="#blog" className="hover:text-amber-400 transition">Blog</Link>
          <Link href="#iletisim" className="hover:text-amber-400 transition">İletişim</Link>
        </nav>

        {/* Müşteri Girişi Butonu */}
        <div>
          <Link 
            href="/musteri-girisi" 
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 rounded-md font-semibold text-sm transition shadow"
          >
            Müşteri Girişi
          </Link>
        </div>

      </div>
    </header>
  );
}