'use client';
import Link from 'next/link';

export default function HeroSlider() {
  return (
    <section className="relative bg-[#0b1329] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Arka plan gölge efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Üst Rozet (Badge) */}
        <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          STRATEJİK FİNANSAL ÇÖZÜMLER
        </div>

        {/* Ana Başlık */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
          Geleceğe Güvenle Bakan Şirketler İçin <br />
          <span className="text-amber-400">Stratejik Mali Danışmanlık & Denetim</span>
        </h1>

        {/* Alt Açıklama */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
          10 yılı aşkın tecrübemiz ile vergi yönetimi, finansal danışmanlık ve e-dönüşüm süreçlerinizde işletmenizin yanındayız.
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/hizmetlerimiz"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-lg transition duration-200 shadow-lg text-sm flex items-center gap-2"
          >
            Hizmetlerimizi İnceleyin →
          </Link>
          <Link
            href="#iletisim"
            className="bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold px-7 py-3.5 rounded-lg border border-slate-700 transition duration-200 text-sm"
          >
            Bize Ulaşın
          </Link>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-8 sm:gap-16 pt-8 border-t border-slate-800/80 w-full max-w-3xl">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">+500</div>
            <div className="text-xs text-slate-400">Kurumsal Müşteri</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">%99.8</div>
            <div className="text-xs text-slate-400">Müşteri Memnuniyeti</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">25+</div>
            <div className="text-xs text-slate-400">Uzman Kadro</div>
          </div>
        </div>
      </div>
    </section>
  );
}