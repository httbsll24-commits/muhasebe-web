'use client';
import Link from 'next/link';

export default function HeroSlider() {
  return (
    <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Geleceğe Güvenle Bakan <span className="text-blue-500">Mali Çözümler</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Başol Mali Müşavirlik olarak vergi danışmanlığı, e-dönüşüm ve şirket kuruluşu süreçlerinizde profesyonel destek sunuyoruz.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/hizmetlerimiz"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Hizmetlerimiz
          </Link>
          <Link
            href="/hakkimizda"
            className="border border-slate-600 hover:border-slate-400 text-slate-200 font-semibold px-6 py-3 rounded-lg transition"
          >
            Hakkımızda
          </Link>
        </div>
      </div>
    </section>
  );
}