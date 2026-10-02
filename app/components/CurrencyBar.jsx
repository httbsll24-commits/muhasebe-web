'use client';
import { useEffect, useState } from 'react';

export default function CurrencyBar() {
  const [kurlar, setKurlar] = useState(null);

  useEffect(() => {
    async function fetchKurlar() {
      try {
        const res = await fetch('/api/doviz');
        const json = await res.json();
        if (json.data) setKurlar(json.data);
      } catch (err) {
        console.error('Döviz çekilemedi:', err);
      }
    }
    fetchKurlar();
  }, []);

  if (!kurlar) return null;

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 flex justify-between items-center border-b border-slate-800">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-amber-400">Piyasa Kurları:</span>
        <span className="flex items-center gap-1">
          <strong className="text-slate-300">USD/TRY:</strong> ₺{kurlar.USD}
        </span>
        <span className="flex items-center gap-1">
          <strong className="text-slate-300">EUR/TRY:</strong> ₺{kurlar.EUR}
        </span>
      </div>
      <div className="text-slate-400 hidden sm:block text-[10px]">
        Son Güncelleme: {kurlar.guncelleme}
      </div>
    </div>
  );
}