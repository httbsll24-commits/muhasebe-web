'use client';
import { useEffect, useState } from 'react';

export default function CurrencyBar() {
  const [rates, setRates] = useState({ USD: '...', EUR: '...' });

  useEffect(() => {
    // Canlı kur verisi çeken API çağrısı
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          const tryRate = data.rates.TRY || 34.20;
          const eurRate = data.rates.EUR ? (tryRate / data.rates.EUR) : 37.50;
          setRates({
            USD: tryRate.toFixed(2),
            EUR: eurRate.toFixed(2)
          });
        }
      })
      .catch(() => {
        // Hata durumunda varsayılan gösterim
        setRates({ USD: '34.25', EUR: '37.80' });
      });
  }, []);

  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6 font-medium">
          <span className="text-amber-400 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Piyasalar (Canlı):
          </span>
          <div className="flex gap-4">
            <span>USD/TRY: <strong className="text-white">{rates.USD} ₺</strong></span>
            <span>EUR/TRY: <strong className="text-white">{rates.EUR} ₺</strong></span>
          </div>
        </div>
        <div className="hidden sm:block text-slate-400 text-[11px]">
          Mali Müşavirlik & Finans Danışmanlığı
        </div>
      </div>
    </div>
  );
}