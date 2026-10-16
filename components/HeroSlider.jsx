'use client';

import Link from 'next/link';

export default function HeroSlider() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 pt-6 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Rozet */}
        <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
          <span>👑</span>
          <span>Serbest Muhasebeci Mali Müşavirlik & Finansal Yönetim</span>
        </div>

        {/* Hero Başlık */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Geleceğe Güvenle Bakan Şirketler İçin{' '}
            <span className="italic text-amber-600 font-serif block sm:inline">
              Prestijli Mali Müşavirlik
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Vergi optimizasyonu, şirket kuruluşu, dijital e-dönüşüm ve stratejik finansal danışmanlıkta güvenilir kurumsal çözüm ortağınız.
          </p>
        </div>

        {/* Kurucu Kartı - Hatice Başol */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-md flex items-center gap-4 sm:gap-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0 border-2 border-amber-500">
            {/* Profil görseli */}
            <div className="w-full h-full bg-slate-800 text-amber-400 font-bold flex flex-col items-center justify-center text-center p-2 text-xs">
              <span>SMMM</span>
              <span className="text-[10px] text-slate-300">Hatice Başol</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
              <span>Verified</span> • Kurucu SMMM
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Hatice Başol</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Bağımsız Denetçi & Kıdemli Vergi Stratejisti
            </p>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/iletisim"
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-center shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Ücretsiz Ön Görüşme Al</span>
            <span>→</span>
          </Link>
          <Link
            href="/hizmetlerimiz"
            className="flex-1 bg-[#0b1329] hover:bg-slate-900 text-amber-400 border border-amber-500/30 font-semibold py-3.5 px-6 rounded-xl text-center shadow-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>💼 Hizmetlerimizi İnceleyin</span>
          </Link>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
          <div>
            <div className="text-lg sm:text-2xl font-black text-slate-900">15+</div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Yıl Deneyim</div>
          </div>
          <div className="border-x border-slate-100">
            <div className="text-lg sm:text-2xl font-black text-slate-900">250+</div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Aktif Mükellef</div>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-black text-amber-600">%99.8</div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Mevzuat Uyumu</div>
          </div>
        </div>

        {/* Yaklaşan Mali Takvim Widget'ı */}
        <div className="bg-[#0b1329] text-white rounded-2xl p-5 shadow-xl space-y-4 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase">
              <span>📅</span>
              <span>Yaklaşan Mali Takvim</span>
            </div>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">Ekim 2026</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-amber-400">KDV-1 Beyannamesi</div>
                <div className="text-slate-400 text-[11px]">Eylül Dönemi Vergilendirme</div>
              </div>
              <div className="text-right font-mono font-bold text-slate-200">26 Ekim</div>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-amber-400">SGK Prim & Muhtasar</div>
                <div className="text-slate-400 text-[11px]">Bildirge ve Ödeme Süresi</div>
              </div>
              <div className="text-right font-mono font-bold text-slate-200">26 Ekim</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}