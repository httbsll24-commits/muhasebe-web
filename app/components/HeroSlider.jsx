import Link from 'next/link';

export default function HeroSlider() {
  return (
    <section className="relative bg-slate-900 text-white py-20 px-4 overflow-hidden border-b-4 border-amber-500">
      {/* Görsel Kaplaması */}
      <div className="absolute inset-0 bg-slate-950/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')" }}
      />

      <div className="relative z-20 max-w-5xl mx-auto text-center space-y-6">
        <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/30">
          Stratejik Finansal Çözümler
        </span>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Geleceğe Güvenle Bakan Şirketler İçin <br className="hidden md:inline" />
          <span className="text-amber-400">Stratejik Mali Danışmanlık</span> & Denetim
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          10 yılı aşkın tecrübemiz ile vergi yönetimi, finansal danışmanlık ve e-dönüşüm süreçlerinizde işletmenizin yanındayız.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            href="#hizmetler" 
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-lg font-bold text-sm transition shadow-lg"
          >
            Hizmetlerimizi İnceleyin →
          </Link>
          <Link 
            href="#iletisim" 
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-6 py-3 rounded-lg font-semibold text-sm transition"
          >
            Bize Ulaşın
          </Link>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-10 border-t border-slate-800">
          <div>
            <div className="text-2xl font-bold text-amber-400">+500</div>
            <div className="text-xs text-gray-400">Kurumsal Müşteri</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">%99.8</div>
            <div className="text-xs text-gray-400">Müşteri Memnuniyeti</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">25+</div>
            <div className="text-xs text-gray-400">Uzman Kadro</div>
          </div>
        </div>
      </div>
    </section>
  );
}