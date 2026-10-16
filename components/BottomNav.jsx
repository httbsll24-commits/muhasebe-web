'use client';

import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#0b1329] border-t border-slate-800 text-white z-50 px-2 py-2 shadow-2xl">
      <div className="grid grid-cols-4 text-center text-[10px] font-semibold">
        <Link href="/" className="flex flex-col items-center gap-1 text-amber-400 py-1">
          <span className="text-base">🏛️</span>
          <span>Ana Sayfa</span>
        </Link>
        <Link href="/hizmetlerimiz" className="flex flex-col items-center gap-1 text-slate-300 hover:text-amber-400 py-1">
          <span className="text-base">💼</span>
          <span>Hizmetler</span>
        </Link>
        <Link href="/duyurular" className="flex flex-col items-center gap-1 text-slate-300 hover:text-amber-400 py-1">
          <span className="text-base">📅</span>
          <span>Mali Takvim</span>
        </Link>
        <Link href="/iletisim" className="flex flex-col items-center gap-1 text-slate-300 hover:text-amber-400 py-1">
          <span className="text-base">📞</span>
          <span>İletişim / Ara</span>
        </Link>
      </div>
    </div>
  );
}