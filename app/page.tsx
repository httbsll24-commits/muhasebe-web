'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* Üst Bilgi Barı */}
      <div className="bg-[#070d1e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-semibold">USD/TRY: 34.20 ₺</span>
            <span className="text-amber-400 font-semibold">EUR/TRY: 37.50 ₺</span>
            <span className="hidden sm:inline text-emerald-400">BİST 100: 9,150</span>
          </div>
          <div className="text-slate-400 font-medium">
            Başol Mali Müşavirlik & Danışmanlık
          </div>
        </div>
      </div>

      {/* Header / Navigasyon */}
      <header className="bg-[#0b1329] text-white sticky top-0 z-40 shadow-xl border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Doğru Logo & İsim */}
          <Link href="/" className="flex items-center gap-3 decoration-0">
            <div className="bg-amber-500 text-[#0b1329] font-black w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg">
              HB
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                HATİCE BAŞOL
              </div>
              <div className="text-[10px] text-amber-400 font-bold tracking-widest uppercase mt-0.5">
                MALİ MÜŞAVİRLİK
              </div>
            </div>
          </Link>

          {/* Menü Linkleri */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-200">
            <Link href="/" className="text-amber-400">Ana Sayfa</Link>
            <Link href="/hakkimizda" className="hover:text-amber-400 transition">Hakkımızda</Link>
            <Link href="/hizmetlerimiz" className="hover:text-amber-400 transition">Hizmetlerimiz</Link>
            <Link href="/duyurular" className="hover:text-amber-400 transition">Duyurular</Link>
            <Link href="/blog" className="hover:text-amber-400 transition">Blog</Link>
            <Link href="/iletisim" className="hover:text-amber-400 transition">İletişim</Link>
          </nav>

          {/* Müşteri Giriş Butonu */}
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="bg-amber-500 hover:bg-amber-600 text-[#0b1329] font-bold text-xs sm:text-sm px-4 py-2 rounded-xl transition shadow-md"
            >
              Müşteri Portalı
            </Link>
          </div>
        </div>
      </header>

      {/* STITCH PRESTİJLİ HERO ALANI */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        
        {/* Rozet */}
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
          <span>👑</span>
          <span>Serbest Muhasebeci Mali Müşavirlik & Finansal Yönetim</span>
        </div>

        {/* Hero Başlık */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Geleceğe Güvenle Bakan Şirketler İçin{' '}
            <span className="italic text-amber-600 font-serif block sm:inline">
              Prestijli Mali Müşavirlik
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-medium">
            Vergi optimizasyonu, şirket kuruluşu, dijital e-dönüşüm ve stratejik finansal danışmanlıkta güvenilir kurumsal çözüm ortağınız.
          </p>
        </div>

        {/* Kurucu Kartı - Hatice Başol */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-lg flex items-center gap-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#0b1329] border-2 border-amber-500 flex flex-col items-center justify-center text-amber-400 font-bold shrink-0 shadow-md">
            <span className="text-sm">SMMM</span>
            <span className="text-[10px] text-slate-300 font-normal">İSMMMO</span>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-extrabold text-amber-600 uppercase tracking-wider">
              ✦ KURUCU SMMM
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900">Hatice Başol</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Bağımsız Denetçi & Kıdemli Vergi Stratejisti
            </p>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/iletisim"
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-[#0b1329] font-extrabold py-3.5 px-6 rounded-xl text-center shadow-lg transition flex items-center justify-center gap-2"
          >
            <span>Ücretsiz Ön Görüşme Al</span>
            <span>→</span>
          </Link>
          <Link
            href="/hizmetlerimiz"
            className="flex-1 bg-[#0b1329] hover:bg-slate-900 text-amber-400 border border-amber-500/30 font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition flex items-center justify-center gap-2"
          >
            <span>💼 Hizmetlerimizi İnceleyin</span>
          </Link>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-md">
          <div>
            <div className="text-xl sm:text-3xl font-black text-slate-900">15+</div>
            <div className="text-[11px] sm:text-xs font-bold text-slate-500">Yıl Deneyim</div>
          </div>
          <div className="border-x border-slate-200">
            <div className="text-xl sm:text-3xl font-black text-slate-900">250+</div>
            <div className="text-[11px] sm:text-xs font-bold text-slate-500">Aktif Mükellef</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-black text-amber-600">%99.8</div>
            <div className="text-[11px] sm:text-xs font-bold text-slate-500">Mevzuat Uyumu</div>
          </div>
        </div>

        {/* Yaklaşan Mali Takvim Widget'ı */}
        <div className="bg-[#0b1329] text-white rounded-2xl p-6 shadow-2xl space-y-4 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase">
              <span>📅</span>
              <span>Yaklaşan Mali Takvim</span>
            </div>
            <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded font-mono font-bold">Ekim 2026</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-amber-400">KDV-1 Beyannamesi</div>
                <div className="text-slate-400 text-[11px]">Eylül Dönemi Vergilendirme</div>
              </div>
              <div className="text-right font-mono font-bold text-amber-500">26 Ekim</div>
            </div>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-amber-400">SGK Prim & Muhtasar</div>
                <div className="text-slate-400 text-[11px]">Bildirge ve Ödeme Süresi</div>
              </div>
              <div className="text-right font-mono font-bold text-amber-500">26 Ekim</div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#070d1e] text-slate-400 text-xs py-8 border-t border-slate-800 text-center space-y-2 mb-12 sm:mb-0">
        <p className="font-semibold text-slate-300">© 2026 Hatice Başol Mali Müşavirlik & Danışmanlık. Tüm Hakları Saklıdır.</p>
        <p>İstanbul / Türkiye • Bağımsız Denetim ve Mali Danışmanlık Hizmetleri</p>
      </footer>
    </div>
  );
}